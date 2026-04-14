import Link from "next/link";

import { navLinks } from "@/data/navigation";
import {
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="bg-[#040404] text-gray-400 mt-20 border-t border-[#1a1a1a]">

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 grid gap-10 md:grid-cols-4 text-sm">

        {/* Brand */}
        <div>
          <h3 className="text-white text-lg font-bold mb-3">
            ODims Welding & Automation
          </h3>
          <p className="text-gray-500 leading-relaxed">
            Strong steel. Smart access. متخصص in welding, gate motors,
            remotes and garage doors across South Africa.
          </p>

          {/* Accent line */}
          <div className="w-12 h-[2px] bg-[#C5620B] mt-4"></div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-[#FCB861] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/service-areas" className="hover:text-[#FCB861]">
                Service Areas
              </Link>
            </li>
            <li>
              <Link href="/quote" className="text-[#C5620B] hover:text-[#FCB861] font-medium">
                Request a Quote →
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>

          <div className="space-y-3">

            <div className="flex items-start gap-3">
              <div className="bg-[#C5620B]/10 text-[#C5620B] p-2 rounded-full">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <p>+27 63 326 4684</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-[#C5620B]/10 text-[#C5620B] p-2 rounded-full">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <p>info@odims.co.za</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-[#C5620B]/10 text-[#C5620B] p-2 rounded-full">
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <p className="leading-relaxed">
                4 Heelra Rd, Raumaraispark, Johannesburg 2090, South Africa
              </p>
            </div>

          </div>
        </div>

        {/* Service Areas */}
        <div>
          <h4 className="text-white font-semibold mb-3">Service Areas</h4>
          <p className="text-gray-500 leading-relaxed">
            Gauteng, North West, Mpumalanga and surrounding areas.
          </p>

          {/* subtle badge */}
          <div className="mt-4 inline-block px-3 py-1 text-xs bg-[#6A2B09]/40 text-[#FCB861] rounded-full">
            Available for Projects
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-[#1a1a1a] mt-6">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">

          <p className="text-gray-600">
            © {new Date().getFullYear()} Odims Welding & Automation. All rights reserved.
          </p>

          <p className="text-gray-600">
            Designed & Developed by{" "}
            <a
              href="https://sheltersibanda.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C5620B] hover:text-[#FCB861]"
            >
              Shelter
            </a>
          </p>

          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-[#FCB861]">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-[#FCB861]">
              Terms of Service
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}