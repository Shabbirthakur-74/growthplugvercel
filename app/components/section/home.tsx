'use client';

// import Image from "next/image";
import { Shield, BarChart3, Globe, TrendingUp, LucideIcon } from "lucide-react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

interface FeaturePill {
  icon: LucideIcon;
  text: string;
}

const FEATURE_PILLS: readonly FeaturePill[] = [
  { icon: Shield, text: "Performance-Driven" },
  { icon: BarChart3, text: "Transparent Reporting" },
  { icon: Globe, text: "India-First" },
  { icon: TrendingUp, text: "ROI Focused" },
] as const;

const STATS = {
  roiIncrease: "+428%",
  adSpend: "₹9,574",
  results: "1,428",
} as const;

function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`rounded-xl border bg-white ${className}`}>
      {children}
    </div>
  );
}

function CardContent({ children, className = "" }: CardContentProps) {
  return <div className={className}>{children}</div>;
}

function scrollToSection(id: string) {
  const section = document.getElementById(id);
  section?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#E13030] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-black rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Text content */}
          <div className="space-y-6 text-black">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Plug Into{" "}
              <span className="text-[#E13030]">Scalable Growth</span>{" "}
              That Delivers{" "}
              <span className="text-[#E13030]">Measurable ROI</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              We help brands, founders, and local businesses acquire customers
              profitably using performance marketing systems across Meta,
              Google, and WhatsApp automation.
            </p>

            {/* Button */}
            <div className="pt-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-[#E13030] hover:bg-[#c12828] text-white px-8 py-4 text-lg rounded-lg font-semibold transition-colors"
                aria-label="Get a free growth audit"
              >
                Get a Free Growth Audit
              </button>
            </div>
          </div>

          {/* Right - Image with floating cards */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[1999/1422]">
              <img
                src="https://funnel.io/hs-fs/hubfs/Funnel.io%20Performance%20Dashboard.png?width=1999&height=1422&name=Funnel.io%20Performance%20Dashboard.png"
                alt="Growth Analytics Dashboard"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Floating cards */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl border-l-4 border-l-[#E13030]">
              <p className="text-sm text-gray-600">ROI Increase</p>
              <p className="text-3xl font-bold text-[#E13030]">
                {STATS.roiIncrease}
              </p>
            </div>

            <div className="absolute -top-6 -right-6 bg-black text-white p-4 rounded-lg shadow-xl">
              <p className="text-sm text-gray-300">Ad Spend</p>
              <p className="text-2xl font-bold">{STATS.adSpend}</p>
              <p className="text-xs text-green-400">Results: {STATS.results}</p>
            </div>
          </div>
        </div>

        {/* Feature Pills */}
        <div className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {FEATURE_PILLS.map(({ icon: Icon, text }) => (
              <Card
                key={text}
                className="border-l-4 border-l-[#E13030] shadow-sm hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6 text-center">
                  <Icon className="w-8 h-8 text-[#E13030] mx-auto mb-3" />
                  <p className="text-sm font-medium text-gray-700">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}