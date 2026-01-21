import { Target, BarChart3 } from "lucide-react";
import Image from "next/image";

const STATS = [
  { value: "500+", label: "Clients Served" },
  { value: "10M+", label: "Ads Managed" },
  { value: "95%", label: "Client Retention" },
] as const;

const WORKING_MODEL = [
  "Monthly retainer-based services",
  "Ad spend billed directly to client",
  "No long-term lock-in",
  "Clear KPIs before launch",
] as const;

const RESULTS_PHILOSOPHY = [
  "Lead quality improvement",
  "Cost efficiency over time",
  "Funnel optimisation",
  "Sustainable scaling",
] as const;

const INFO_CARDS = [
  {
    icon: Target,
    title: "Our Working Model",
    items: WORKING_MODEL,
  },
  {
    icon: BarChart3,
    title: "Results Philosophy",
    items: RESULTS_PHILOSOPHY,
  },
] as const;

export default function AboutUs() {
  return (
    <section id="aboutus" className="py-20 bg-[#aff4f4]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image + Stats */}
          <div className="space-y-6">
              <div className="relative w-full max-w-[600px] h-[460px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/whyus.jpg"
                  alt="Teams growth"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 480px"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {STATS.map((item) => (
                  <div
                    key={item.label}
                    className="text-center p-4 bg-gray-50 rounded-lg"
                  >
                    <p className="text-3xl font-bold text-[#E13030]">
                      {item.value}
                    </p>
                    <p className="text-sm text-gray-600">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-black">
              About <span className="text-[#E13030]">GrowthPlug Agency</span>
            </h2>

            <div className="p-5 bg-gray-50 border-l-4 border-[#E13030] rounded-lg">
              <p className="text-lg text-gray-600 leading-relaxed">
                Growth Plug Agency is a performance-focused digital marketing agency
                built to help businesses generate real leads, real sales, and
                measurable ROI — not vanity metrics.
              </p>
              <p className="font-semibold text-black mt-4">
                Our philosophy is simple:
              </p>
              <p className="text-gray-600 mt-2">
                👉 If growth can’t be measured, it can’t  be scaled.
              </p>
              <p className="text-gray-600 mt-1">
                India-first execution with a global growth mindset.
              </p>
            </div>

            {/* Working Model + Results */}
            <div className="grid md:grid-cols-2 gap-6 pt-6">
              {INFO_CARDS.map(({ icon: Icon, title, items }) => (
                <div key={title} className="p-5 border rounded-xl bg-gray-50">
                  <Icon className="w-6 h-6 text-[#E13030] mb-3" />
                  <h4 className="font-semibold text-black mb-2">{title}</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {items.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}