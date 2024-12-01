"use client"

import { useState, useEffect } from "react"
import { Dialog } from "@headlessui/react"

export default function AgeVerification() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const verified = localStorage.getItem("age-verified")
    if (!verified) {
      setIsOpen(true)
    }
  }, [])

  const handleVerify = () => {
    localStorage.setItem("age-verified", "true")
    setIsOpen(false)
  }

  const handleExit = () => {
    window.location.href = "https://google.com"
  }

  return (
    <Dialog
      open={isOpen}
      onClose={() => {}}
      className="fixed z-50 inset-0 overflow-y-auto"
    >
      <div className="flex items-center justify-center min-h-screen">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-80" />

        <div className="relative bg-white rounded-lg p-8 max-w-md mx-auto">
          <Dialog.Title className="text-xl font-bold mb-4">
            Age Verification Required
          </Dialog.Title>
          <Dialog.Description className="mb-6">
            You must be of legal age to view this content. Please verify your age to continue.
          </Dialog.Description>

          <div className="flex gap-4">
            <button
              onClick={handleVerify}
              className="bg-black text-white px-6 py-2 rounded-md"
            >
              I am 21 or older
            </button>
            <button
              onClick={handleExit}
              className="border border-gray-300 px-6 py-2 rounded-md"
            >
                Exit
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  )
}