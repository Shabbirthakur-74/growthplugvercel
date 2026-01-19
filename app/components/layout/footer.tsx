'use client';

interface NavLink {
  label: string;
  id: string;
}

interface SocialLink {
  name: string;
  url: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Home", id: "home" },
  { label: "Services", id: "services" },
  { label: "About Us", id: "aboutus" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Contact", id: "contact" },
];

const SERVICES: string[] = [
  "Performance Marketing",
  "Meta Advertising",
  "Google Ads",
  "WhatsApp Automation",
];

const SOCIAL_LINKS: SocialLink[] = [
  { name: "LinkedIn", url: "#" },
  { name: "Twitter", url: "#" },
  { name: "Instagram", url: "#" },
  { name: "Facebook", url: "#" },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div>
            <h3 className="text-xl font-bold text-[#E13030] mb-4">
              GrowthPlug Agency
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Growth Plug Agency is a performance-driven digital marketing agency
              helping businesses scale through Meta Ads, Google Ads, automation,
              and conversion-focused strategy.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-base">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {NAV_LINKS.map((link) => {
                return (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-400 hover:text-[#E13030] transition"
                    >
                      {link.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-base">Services</h4>
            <ul className="space-y-3 text-sm">
              {SERVICES.map((service) => {
                return (
                  <li key={service} className="text-gray-400 hover:text-[#E13030] transition cursor-pointer">
                    {service}
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-base">Connect</h4>
            <ul className="space-y-3 text-sm">
              {SOCIAL_LINKS.map((social) => {
                return (
                  <li key={social.name}>
                    <a
                      href={social.url}
                      className="text-gray-400 hover:text-[#E13030] transition cursor-pointer"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center">
          <p className="text-xs text-gray-500">
            © 2025 GrowthPlug Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}