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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const whatsappNumber = "+918793304350" // ← your WhatsApp number (no +)

    const services =
      selectedServices.length > 0
        ? selectedServices.join(", ")
        : "Not specified"

    const text = `
New Quote Request 🚀

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Company: ${form.company || "N/A"}

Services:
${services}

Message:
${form.message || "N/A"}
    `

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`

    window.open(url, "_blank")
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6 text-black">

        {/* Row 1 */}
        <div className="grid md:grid-cols-2 gap-5">
          <input
            type="text"
            name="name"
            placeholder="Name*"
            className="input"
            required
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email address*"
            className="input"
            required
            onChange={handleChange}
          />
        </div>

        {/* Row 2 */}
        <div className="grid md:grid-cols-2 gap-5">
          <input
            type="tel"
            name="phone"
            placeholder="Phone number*"
            className="input"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="company"
            placeholder="Company name"
            className="input"
            onChange={handleChange}
          />
        </div>

        {/* Services */}
        <div>
          <p className="font-semibold mb-3">
            Select Services<span className="text-[#E13030]">*</span>
          </p>

          <div className="grid sm:grid-cols-2 gap-3">
            {servicesList.map((service) => (
              <label
                key={service}
                className="flex items-center gap-3 text-sm cursor-pointer"
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
          rows={4}
          name="message"
          placeholder="Briefly describe your needs, goals, timeline, or budget..."
          className="input resize-none"
          onChange={handleChange}
        />

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-[#E13030] text-white px-10 py-3 rounded-lg font-semibold hover:bg-[#c12828] transition"
          >
            Send
          </button>
        </div>
      </form>

      <style jsx>{`
        .input {
          background-color: white;
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid #e5e7eb;
          border-radius: 0.5rem;
          outline: none;
        }
        .input:focus {
          border-color: #e13030;
          box-shadow: 0 0 0 1px #e13030;
        }
      `}</style>
    </div>
  )
}
