'use client';

import * as React from "react";
import {
  BarChart3,
  MessageCircle,
  LayoutTemplate,
  Search,
  Palette,
  TrendingUp,
  LucideIcon,
} from "lucide-react";

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-xl border bg-white/80 backdrop-blur-sm shadow-sm transition-all duration-300",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-5 space-y-3", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

interface Service {
  title: string;
  description: string;
  points: readonly string[];
  icon: LucideIcon;
}

const SERVICES: readonly Service[] = [
  {
    title: "Performance Marketing",
    description:
      "High-ROI campaigns across Meta & Google Ads with funnel-based strategy and daily optimisation.",
    points: ["Meta Ads", "Google Ads", "ROI & CPA Focus"],
    icon: BarChart3,
  },
  {
    title: "WhatsApp Bulk Automation",
    description:
      "Automated follow-ups and broadcast campaigns to convert leads faster.",
    points: ["Lead Automation", "Broadcasts", "Quick Responses"],
    icon: MessageCircle,
  },
  {
    title: "Website & Landing Pages",
    description:
      "Mobile-first, high-conversion websites built for speed and lead capture.",
    points: ["Landing Pages", "Mobile First", "Fast Loading"],
    icon: LayoutTemplate,
  },
  {
    title: "SEO & Organic Growth",
    description:
      "Long-term traffic growth through technical, on-page, and local SEO.",
    points: ["On-page SEO", "Local SEO", "Traffic Growth"],
    icon: Search,
  },
  {
    title: "Creative & Content",
    description:
      "Performance-driven creatives, reels, and brand-aligned visuals.",
    points: ["Ad Creatives", "Reels & Videos", "Copywriting"],
    icon: Palette,
  },
  {
    title: "Growth Strategy & Consulting",
    description:
      "Funnels, budget planning, audits, and scalable growth roadmaps.",
    points: ["Funnels", "Scaling Plan", "Audits"],
    icon: TrendingUp,
  },
] as const;

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-black">
            What <span className="text-[#E13030]">We Do</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Performance-focused digital solutions built to drive leads, sales,
            and measurable growth.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="group hover:-translate-y-1.5 hover:shadow-lg border-t-4 border-t-[#E13030]"
              >
                <CardContent>
                  <div className="w-14 h-14 rounded-lg bg-[#E13030]/10 flex items-center justify-center text-[#E13030] group-hover:bg-[#E13030] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-black">
                    {service.title}
                  </h3>

                  <p className="text-sm text-gray-600">
                    {service.description}
                  </p>

                  <ul className="text-sm text-gray-500 space-y-1">
                    {service.points.map((point) => (
                      <li key={point}>• {point}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}