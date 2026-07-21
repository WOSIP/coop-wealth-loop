import { Link } from "react-router-dom";
import { Envelope, Phone, MapPin, ArrowUpRight } from "@phosphor-icons/react";
import { BRAND_NAME, CONTACT_EMAIL, CONTACT_PHONE, ADDRESS } from "../lib/constants";

const footerLinks = {
  Platform: [
    { to: "/stakeholders", label: "Stakeholders" },
    { to: "/how-it-works", label: "How It Works" },
    { to: "/developers", label: "Developers" },
    { to: "/about", label: "About Us" },
  ],
  Resources: [
    { to: "/contact", label: "Contact" },
    { to: "/developers", label: "API Docs" },
    { to: "/developers", label: "SDKs & Tools" },
    { to: "/developers", label: "Integration Guide" },
  ],
  Company: [
    { to: "/about", label: "Our Story" },
    { to: "/about", label: "Careers" },
    { to: "/contact", label: "Support" },
    { to: "/contact", label: "Partners" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#1F1E1B] text-[#EDE6DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gold-gradient flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="font-semibold text-lg text-white">{BRAND_NAME}</span>
            </Link>
            <p className="text-[#B8A99A] text-sm leading-relaxed max-w-sm mb-6">
              Empowering cooperatives with modern wealth management tools. 
              Building stronger communities through financial inclusion and innovation.
            </p>
            <div className="space-y-3">
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-2 text-sm text-[#B8A99A] hover:text-[#D4A853] transition-colors">
                <Envelope size={16} />
                {CONTACT_EMAIL}
              </a>
              <a href={`tel:${CONTACT_PHONE}`} className="flex items-center gap-2 text-sm text-[#B8A99A] hover:text-[#D4A853] transition-colors">
                <Phone size={16} />
                {CONTACT_PHONE}
              </a>
              <div className="flex items-start gap-2 text-sm text-[#B8A99A]">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>{ADDRESS}</span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.to}
                      className="text-sm text-[#B8A99A] hover:text-[#D4A853] transition-colors flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#3D3A36] mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#8A7E72]">
            &copy; {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="text-sm text-[#8A7E72] hover:text-[#D4A853] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="text-sm text-[#8A7E72] hover:text-[#D4A853] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}