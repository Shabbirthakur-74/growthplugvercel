'use client'

import { useState } from "react"

const servicesList = [
  "Performance Marketing",
  "WhatsApp Bulk Automation",
  "Website & Landing Page Development",
  "SEO & Organic Growth",
  "Creative & Content",
  "Growth Strategy & Consulting",
]

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    )
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const payload = {
      ...form,
      services: selectedServices.length > 0 ? selectedServices : [],
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (res.ok) {
        setForm({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        })
        setSelectedServices([])
        setShowThankYou(true)
      } else {
        alert("Something went wrong. Please try again.")
      }
    } catch (err) {
      console.error(err)
      alert("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-2 md:space-y-6 text-black">

        {/* Row 1 */}
        <div className="grid md:grid-cols-2 gap-3">
          <input
            type="text"
            name="name"
            placeholder="Name*"
            className="input"
            required
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email address*"
            className="input"
            required
            value={form.email}
            onChange={handleChange}
          />
        </div>

        {/* Row 2 */}
        <div className="grid md:grid-cols-2 gap-3">
          <input
            type="tel"
            name="phone"
            placeholder="Phone number*"
            className="input"
            required
            value={form.phone}
            onChange={handleChange}
          />
          <input
            type="text"
            name="company"
            placeholder="Company name"
            className="input"
            value={form.company}
            onChange={handleChange}
          />
        </div>

        {/* Services */}
        <div>
          <p className="font-semibold mb-1 text-sm md:text-base">
            Select Services<span className="text-[#E13030]">*</span>
          </p>

          <div className="grid sm:grid-cols-2 gap-1.5">
            {servicesList.map((service) => (
              <label
                key={service}
                className="flex items-center gap-2 text-xs md:text-sm cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedServices.includes(service)}
                  onChange={() => toggleService(service)}
                  className="accent-[#E13030]"
                />
                {service}
              </label>
            ))}
          </div>
        </div>

        {/* Message */}
        <textarea
          rows={2}
          name="message"
          placeholder="Briefly describe your needs."
          className="input resize-none"
          value={form.message}
          onChange={handleChange}
        />

        {/* Submit */}
        <div className="text-center pt-1">
          <button
            type="submit"
            className="bg-[#E13030] text-white px-7 py-2 md:px-10 md:py-3 rounded-lg font-semibold text-sm md:text-base hover:bg-[#c12828] transition"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </form>

      {/* THANK YOU POPUP */}
      {showThankYou && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-3">
          <div className="bg-white rounded-2xl p-5 sm:p-8 max-w-md w-full text-center shadow-xl">
            <h2 className="text-lg md:text-2xl font-semibold mb-2 text-[#E13030]">
              Thank you!
            </h2>
            <p className="text-gray-600 mb-4 text-xs md:text-base">
              We have received your message and will get back to you shortly.
            </p>

            <button
              onClick={() => setShowThankYou(false)}
              className="bg-[#E13030] text-white px-6 py-2 md:px-8 md:py-3 rounded-lg font-semibold text-sm md:text-base hover:bg-[#c12828] transition w-full sm:w-auto"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        /* EXTRA COMPACT MOBILE */
        .input {
          background-color: white;
          width: 100%;
          padding: 0.4rem 0.7rem;
          border: 1px solid #e5e7eb;
          border-radius: 0.5rem;
          outline: none;
          font-size: 0.85rem;
        }

        /* DESKTOP NORMAL */
        @media (min-width: 768px) {
          .input {
            padding: 0.75rem 1rem;
            font-size: 1rem;
          }
        }

        .input:focus {
          border-color: #e13030;
          box-shadow: 0 0 0 1px #e13030;
        }
      `}</style>
    </div>
  )
}
