'use client'

import { ReactNode, useEffect } from "react"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    if (!isOpen) return

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    document.addEventListener("keydown", handleEsc)
    return () => document.removeEventListener("keydown", handleEsc)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      {/* Modal box */}
      <div
        className="
          relative
          w-full
          max-w-3xl
          max-h-[100vh]
          rounded-xl
          bg-[#f7f2ff]
          shadow-xl
          flex
          flex-col
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 text-gray-500 hover:text-black"
          aria-label="Close"
        >
          ✕
        </button>

        {/* form */}
        <div className="max-w-2xl mx-auto p-6">
          {children}
        </div>
      </div>
    </div>
  )
}
