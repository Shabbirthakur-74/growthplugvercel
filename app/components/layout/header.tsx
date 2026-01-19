'use client'

import { useState } from "react"
import Link from "next/link"
import Image from "next/image";
import Modal from "@/app/components/section/modal"
import ContactForm from "@/app/components/section/contactform"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#aboutus" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex h-16 items-center justify-between">

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo1.png"
                alt="GrowthPlug Logo"
                width={800}
                height={500}
                className="h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-10 text-black font-medium">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-[#E13030] transition">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Right side */}
            <div className="flex items-center gap-3">

              {/* CTA */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  bg-[#E13030]
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  text-white
                  hover:bg-[#c12828]
                  transition
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#E13030]/30
                "
              >
                Request a Quote
              </button>

              {/* Hamburger */}
              <button
                onClick={() => setOpen(!open)}
                className="md:hidden text-2xl text-black focus:outline-none"
                aria-label="Toggle menu"
              >
                ☰
              </button>

            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <ul className="flex flex-col px-6 py-6 space-y-4 text-black">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block text-base font-medium hover:text-[#E13030] transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="mb-6 text-2xl font-semibold text-[#E13030] text-center ">
          Let’s Get Started
        </h2>
        <ContactForm />
      </Modal>
    </>
  )
}
