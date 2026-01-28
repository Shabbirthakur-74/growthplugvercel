"use client";

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";

const TESTIMONIALS = [
  "/testimonials/testimonial.png",
  "/testimonials/testimonial2.png",
  "/testimonials/testimonial3.png",
] as const;

const SCROLL_SPEED = 0.5;
const SCROLL_INTERVAL = 16;
const MANUAL_SCROLL_DISTANCE = 460;
const AUTO_RESUME_DELAY = 1500;

export default function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const stopAutoScroll = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startAutoScroll = useCallback(() => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      const slider = sliderRef.current;
      if (!slider) return;

      slider.scrollLeft += SCROLL_SPEED;

      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      }
    }, SCROLL_INTERVAL);
  }, []);

  const manualScroll = useCallback(
    (direction: number) => {
      stopAutoScroll();

      sliderRef.current?.scrollBy({
        left: direction * MANUAL_SCROLL_DISTANCE,
        behavior: "smooth",
      });

      setTimeout(startAutoScroll, AUTO_RESUME_DELAY);
    },
    [startAutoScroll, stopAutoScroll]
  );

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const slides = Array.from(slider.children) as HTMLElement[];
    slides.forEach((slide) => {
      const clone = slide.cloneNode(true) as HTMLElement;
      slider.appendChild(clone);
    });

    startAutoScroll();
    return stopAutoScroll;
  }, [startAutoScroll, stopAutoScroll]);

  return (
    <section id="testimonials" className="relative py-16  md:py-20 bg-[#05054a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            What Our <span className="text-[#E13030]">Clients Say</span>
          </h2>
          <p className="text-white max-w-2xl mx-auto">
            Don’t just take our word for it—hear from businesses that have transformed their growth with GrowthPlug.
          </p>
        </div>

        {/* Slider Wrapper */}
        <div className="relative flex items-center">
          {/* Prev Button */}
          <button
            onClick={() => manualScroll(-1)}
            aria-label="Previous testimonial"
            className="mr-4 bg-[#E13030] shadow-md rounded-full p-3 hover:scale-105 transition"
          >
            ‹
          </button>

          {/* Carousel */}
          <div
            ref={sliderRef}
            onMouseEnter={stopAutoScroll}
            onMouseLeave={startAutoScroll}
            className="flex gap-8 overflow-hidden "
          >
            {TESTIMONIALS.map((src, index) => (
              <div
                key={`testimonial-${index}`}
                className="relative min-w-[300px] sm:min-w-[360px] lg:min-w-[420px] aspect-[3/2] rounded-2xl overflow-hidden shadow-lg bg-white"
              >
                <Image
                  src={src}
                  alt={`Testimonial ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 85vw, 420px"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={() => manualScroll(1)}
            aria-label="Next testimonial"
            className="ml-4 bg-[#E13030] shadow-md rounded-full p-3 hover:scale-105 transition"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}