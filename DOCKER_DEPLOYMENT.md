# 🐳 Docker Deployment Guide - NongDanLamBOT

## 📋 Tổng Quan

Hệ thống deployment sử dụng:
- **Docker** - Container runtime
- **Next.js 14** - Application framework
- **Caddy** - Web server với auto SSL (Let's Encrypt)
- **Docker Compose** - Orchestration

---

## 🚀 Quick Start

### 1. Chuẩn bị

```bash
# Clone repository
git clone https://github.com/thino-dev/nongdanlambot.git
cd nongdanlambot

# Cấu hình domain và email
cp .env.production .env
nano .env
```

### 2. Cấu hình `.env`

```env
# Domain của bạn (REQUIRED - trỏ DNS về server trước)
DOMAIN=nongdanlambot.com

# Email cho Let's Encrypt (REQUIRED)
EMAIL=contact@nongdanlambot.com

NODE_ENV=production
```

### 3. Deploy

```bash
# Build và start containers
docker-compose up -d --build

# Xem logs
docker-compose logs -f

# Stop containers
docker-compose down
```

---

## 📁 File Structure

```
nongdanlambot/
├── Dockerfile              # Multi-stage build Next.js
├── docker-compose.yml      # Container orchestration
├── Caddyfile              # Caddy config with auto SSL
├── .env.production        # Environment variables template
├── .dockerignore          # Docker ignore rules
└── DOCKER_DEPLOYMENT.md   # This file
```

---

## 🔧 Dockerfile Breakdown

### Stage 1: Dependencies
- Base: `node:20-alpine`
- Install `node_modules` với `npm ci`

### Stage 2: Builder
- Copy dependencies
- Build Next.js với `npm run build`
- Output: `.next/standalone`

### Stage 3: Runner (Final)
- Lightweight production image
- Non-root user `nextjs:nodejs`
- Only necessary files
- Port 3000 exposed internally

---

## 🌐 Caddy Features

### ✅ Auto SSL/TLS
- Tự động lấy certificate từ Let's Encrypt
- Tự động renew trước khi hết hạn
- Không cần config thủ công

### ✅ HTTP/3 Support
- HTTP/1.1, HTTP/2, HTTP/3
- QUIC protocol
- Port 443/udp

### ✅ Security Headers
- HSTS (HTTP Strict Transport Security)
- X-Frame-Options
- X-Content-Type-Options
- XSS Protection
- Referrer Policy

### ✅ Reverse Proxy
- Proxy requests to Next.js container
- Health checks every 30s
- Proper headers forwarding

### ✅ Compression
- Gzip & Zstd compression
- Automatic content encoding

---

## 🔐 SSL Certificate Process

1. **DNS Setup** (BẮT BUỘC):
   ```
   Domain: nongdanlambot.com
   Type: A Record
   Value: <IP_SERVER_CỦA_BẠN>
   TTL: 300
   ```

2. **Caddy Auto SSL**:
   - Khi start lần đầu, Caddy sẽ:
     - Verify domain ownership qua HTTP challenge
     - Request certificate từ Let's Encrypt
     - Save certificate vào `/data/caddy/`
     - Auto setup HTTPS redirect

3. **Verification**:
   ```bash
   # Check SSL
   curl -I https://nongdanlambot.com
   
   # View Caddy logs
   docker-compose logs caddy
   ```

---

## 🛠️ Common Commands

### Development
```bash
# Build image locally
docker build -t nongdanlambot:latest .

# Run container manually
docker run -p 3000:3000 nongdanlambot:latest
```

### Production
```bash
# Start services
docker-compose up -d

# View logs (all services)
docker-compose logs -f

# View logs (specific service)
docker-compose logs -f nextjs
docker-compose logs -f caddy

# Restart services
docker-compose restart

# Rebuild after code changes
docker-compose up -d --build

# Stop and remove containers
docker-compose down

# Stop and remove volumes
docker-compose down -v
```

### Debugging
```bash
# Enter Next.js container
docker exec -it nongdanlambot-nextjs sh

# Enter Caddy container
docker exec -it nongdanlambot-caddy sh

# Check container status
docker ps

# Check resource usage
docker stats
```

---

## 📊 Port Mapping

| Service | Internal Port | External Port | Protocol |
|---------|--------------|---------------|----------|
| Next.js | 3000 | - (proxied) | HTTP |
| Caddy | 80 | 80 | HTTP |
| Caddy | 443 | 443 | HTTPS |
| Caddy | 443 | 443 | HTTP/3 (UDP) |

---

## 🔄 Update & Deployment

### Update Code
```bash
# Pull latest code
git pull origin main

# Rebuild and restart
docker-compose up -d --build
```

### Zero-Downtime Update (Advanced)
```bash
# Build new image with tag
docker-compose build

# Start new containers
docker-compose up -d --no-deps nextjs

# Old containers will stop gracefully
```

---

## 🗂️ Volume Management

### Caddy Data Volume
- **caddy_data**: SSL certificates, ACME data
- **caddy_config**: Caddy configuration cache

```bash
# Backup SSL certificates
docker run --rm -v nongdanlambot_caddy_data:/data \
  -v $(pwd):/backup alpine \
  tar czf /backup/caddy-backup.tar.gz /data

# Restore
docker run --rm -v nongdanlambot_caddy_data:/data \
  -v $(pwd):/backup alpine \
  tar xzf /backup/caddy-backup.tar.gz -C /
```

---

## 🔥 Firewall Setup (UFW)

```bash
# Allow HTTP & HTTPS
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw allow 443/udp

# Enable firewall
sudo ufw enable

# Check status
sudo ufw status
```

---

## 🚨 Troubleshooting

### SSL Certificate không được issue

**Lỗi**: `acme: error: 400`

**Giải pháp**:
1. Check DNS đã trỏ đúng chưa: `dig nongdanlambot.com`
2. Check port 80/443 đã mở chưa: `netstat -tlnp`
3. Check Caddy logs: `docker-compose logs caddy`
4. Xóa volume và thử lại:
   ```bash
   docker-compose down -v
   docker-compose up -d
   ```

### Next.js container crash

**Giải pháp**:
```bash
# Check logs
docker-compose logs nextjs

# Check build errors
docker-compose build nextjs --no-cache

# Check environment variables
docker-compose config
```

### Connection refused

**Giải pháp**:
```bash
# Check containers running
docker ps

# Check network
docker network inspect nongdanlambot_app-network

# Check Next.js responding
docker exec nongdanlambot-nextjs wget -O- http://localhost:3000
```

---

## 📈 Performance Optimization

### 1. Image Size
- ✅ Multi-stage build: ~150MB final image
- ✅ Alpine base: Minimal OS
- ✅ Only production dependencies

### 2. Build Cache
```bash
# Use BuildKit for faster builds
DOCKER_BUILDKIT=1 docker-compose build
```

### 3. Caddy Caching
- Static assets cached automatically
- Browser caching headers
- Gzip compression

---

## 🔒 Security Best Practices

### ✅ Implemented
- Non-root user trong container
- Security headers (HSTS, XSS, etc.)
- Auto SSL/TLS
- Isolated network
- Minimal base image

### 🔧 Recommended
```bash
# Scan image for vulnerabilities
docker scan nongdanlambot:latest

# Update base images regularly
docker-compose pull
docker-compose up -d --build
```

---

## 📞 Support

Nếu gặp vấn đề:
1. Check logs: `docker-compose logs -f`
2. Check documentation: `/docs`
3. Contact: contact@nongdanlambot.com

---

## 📝 Checklist Deploy Production

- [ ] Domain đã trỏ DNS về server
- [ ] Firewall đã mở port 80, 443
- [ ] File `.env` đã config đúng DOMAIN và EMAIL
- [ ] Docker & Docker Compose đã cài đặt
- [ ] Run `docker-compose up -d --build`
- [ ] Check logs không có error
- [ ] Test HTTPS: https://nongdanlambot.com
- [ ] Verify SSL certificate: https://www.ssllabs.com/ssltest/

---

**Deployed with ❤️ by NongDanLamBOT Team**
