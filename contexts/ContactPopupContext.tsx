'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface ContactPopupContextType {
  showPopup: boolean
  openPopup: () => void
  closePopup: () => void
}

const ContactPopupContext = createContext<ContactPopupContextType | undefined>(undefined)

export function ContactPopupProvider({ children }: { children: ReactNode }) {
  const [showPopup, setShowPopup] = useState(false)

  const openPopup = () => setShowPopup(true)
  const closePopup = () => setShowPopup(false)

  return (
    <ContactPopupContext.Provider value={{ showPopup, openPopup, closePopup }}>
      {children}
    </ContactPopupContext.Provider>
  )
}

export function useContactPopup() {
  const context = useContext(ContactPopupContext)
  if (context === undefined) {
    throw new Error('useContactPopup must be used within a ContactPopupProvider')
  }
  return context
}
