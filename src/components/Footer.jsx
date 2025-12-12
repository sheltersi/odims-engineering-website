import Link from "next/link";

import { faFacebook, faLinkedin, faSquareLinkedin, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faCircleArrowRight, faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="bg-[#091540] text-slate-300 mt-12">
      <div className="container py-8 grid gap-6 md:grid-cols-4 text-sm">
        <div>
          <h3 className="font-semibold text-white mb-2">ODims Welding & Automation</h3>
          <p>Strong steel. Smart access. Welding, gate motors, remotes and garage doors.</p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><Link href="/services" className="hover:underline">Services</Link></li>
            <li><Link href="/service-areas" className="hover:underline">Service Areas</Link></li>
            <li><Link href="/quote" className="hover:underline">Request a Quote</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-2">Contact</h4>
            <div className="flex items-center gap-2">
                <div className="bg-[#84D2F6] text-white p-2 rounded-full">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                  <p className="">+27 81 071 3204</p>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="bg-[#84D2F6] text-white p-2 rounded-full">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                  <p className=""> info@odimsengineering.co.za</p>
              </div>
                <div className="flex items-center gap-2 mt-2">
                <div className="bg-[#84D2F6] text-white p-2 rounded-full">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                 <p> 4 Heelra Rd, Raumaraispark, Johannesburg 2090, South Africa
                </p>
              </div>
               <div className="relative mt-2">
  <input
    type="email"
    placeholder="Enter your email"
    className="peer mt-2 w-full px-4 py-3 pr-12 rounded-xl border border-blue-200 focus:outline-none focus:ring-2 focus:ring-[#F97316]"
  />
   
  <button 
    className="absolute rounded-full right-0 top-1/2 -translate-y-1/2 text-white peer-focus:text-black"
  >
    <FontAwesomeIcon className="p-2 text-[#ABD2FA] text-2xl" icon={faCircleArrowRight} />
  </button>
</div>

        </div>
        <div>
             <h4 className="font-semibold text-white mb-2">Our Service Areas</h4>
            <p>Gauteng, North West, Mphumalanga and Sorrounding Areas</p>
        </div>
      </div>
     <div className="border-t border-slate-700 text-xs text-center py-3 text-slate-500">
  <div className="container py-8 grid gap-6 md:grid-cols-4 text-sm items-center">
    
    <div className="md:col-span-2">
      © {new Date().getFullYear()} ODims Welding & Automation. All rights reserved.
    </div>
<div>
 Designed and developed by <span><a href="https://sheltersibanda.com/">Shelter</a></span>
</div>
    <div className="flex items-center gap-2 justify-center md:justify-end md:text-right">
      <FontAwesomeIcon icon={faSquareLinkedin} />
      <FontAwesomeIcon icon={faFacebook} />
      <FontAwesomeIcon icon={faTwitterSquare} />
    </div>

  </div>
</div>

    </footer>
  );
}
