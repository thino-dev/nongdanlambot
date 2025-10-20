#!/bin/bash

# Deploy script for NongDanLamBOT
# Usage: ./deploy.sh

set -e

echo "🚀 Starting deployment..."

# Check if .env exists
if [ ! -f .env ]; then
    echo "❌ Error: .env file not found!"
    echo "Please copy .env.production to .env and configure it:"
    echo "  cp .env.production .env"
    echo "  nano .env"
    exit 1
fi

# Load environment variables
source .env

# Validate required variables
if [ -z "$DOMAIN" ] || [ "$DOMAIN" = "localhost" ]; then
    echo "❌ Error: DOMAIN not set in .env"
    exit 1
fi

if [ -z "$EMAIL" ]; then
    echo "❌ Error: EMAIL not set in .env"
    exit 1
fi

echo "📋 Configuration:"
echo "  Domain: $DOMAIN"
echo "  Email: $EMAIL"
echo ""

# Check if domain DNS is set
echo "🔍 Checking DNS for $DOMAIN..."
if ! host $DOMAIN > /dev/null 2>&1; then
    echo "⚠️  Warning: DNS not configured for $DOMAIN"
    echo "   Please set A record pointing to this server's IP"
    read -p "   Continue anyway? (y/N) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Stop existing containers
echo "🛑 Stopping existing containers..."
docker-compose down

# Build new images
echo "🔨 Building Docker images..."
docker-compose build --no-cache

# Start containers
echo "▶️  Starting containers..."
docker-compose up -d

# Wait for services to be healthy
echo "⏳ Waiting for services to start..."
sleep 10

# Check container status
echo "📊 Container status:"
docker-compose ps

# Check logs for errors
echo ""
echo "📝 Recent logs:"
docker-compose logs --tail=50

echo ""
echo "✅ Deployment complete!"
echo ""
echo "🌐 Your site should be available at:"
echo "   http://$DOMAIN (will redirect to HTTPS)"
echo "   https://$DOMAIN"
echo ""
echo "📋 Useful commands:"
echo "   View logs:     docker-compose logs -f"
echo "   Restart:       docker-compose restart"
echo "   Stop:          docker-compose down"
echo "   Update code:   git pull && ./deploy.sh"
echo ""
echo "🔐 SSL Certificate:"
echo "   Caddy will automatically obtain SSL certificate"
echo "   This may take a few minutes on first run"
echo "   Check progress: docker-compose logs -f caddy"
