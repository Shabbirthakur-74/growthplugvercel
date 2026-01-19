'use client';
import Contactform from "@/app/components/section/contactform";

export default function ContactForm() {
  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-b from-[#f7f2ff] to-white"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">

          {/* Header */}
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold mb-2 text-black">
              Let’s <span className="text-[#E13030]">Work Together</span>
            </h2>
            <p className="text-gray-600">
              Tell us about your project and we’ll get back within 24 hours.
            </p>
          </div>

          {/* Form */}
          <Contactform />

        </div>
      </div>
    </section>
  );
}
