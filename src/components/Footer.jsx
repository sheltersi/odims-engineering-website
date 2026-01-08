import Link from "next/link";

import { faFacebook, faLinkedin, faSquareLinkedin, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faCircleArrowRight, faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="bg-[#091540] text-slate-300 mt-12">
     {/* <div className="absolute rotate-120 bottom-0 top-5 w-22 h-50 bg-blue-400/10 rounded-full"></div>
      <div className="absolute rotate-120 md:right-320 right-96 -bottom-101 w-22 h-120 bg-blue-400/10 rounded-full"></div>
      <div className="absolute rotate-120 md:right-320 right-96 -bottom-130 w-22 h-120 bg-blue-400/10 rounded-full"></div> */}

      <div className="container py-8 grid gap-6 md:grid-cols-4 text-sm">
     {/* <div className="absolute rotate-120 right-10 w-22 h-70 bg-blue-400/10 rounded-full"></div>
     <div className="absolute rotate-120 -bottom-10 right-10 w-22 h-70 bg-blue-400/10 rounded-full"></div>
         */}
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
                  <p className="">+27 63 326 4684</p>
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
</div>

        </div>
        <div>
             <h4 className="font-semibold text-white mb-2">Our Service Areas</h4>
            <p>Gauteng, North West, Mphumalanga and Sorrounding Areas</p>
        </div>
      </div>
  

  {/* Bottom */}
        <div className="md:mx-36 mt-16 mb-10 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
      
          <p className="text-gray-500 text-sm">
  © {new Date().getFullYear()} Odims Welding & Automation. All rights reserved. </p> 
  <p className="text-gray-500 text-sm">Designed & Developed By{" "}
  <a
    href="https://sheltersibanda.com/"
    className="text-sky-500"
    target="_blank"
    rel="noopener noreferrer"
  >
    Shelter
  </a>
</p>

          <div className="flex gap-6 text-sm">
            <Link href="/privacy-policy" className="text-gray-500 hover:text-sky-500 transition-colors">Privacy Policy</Link>
            <a href="/terms-of-service" className="text-gray-500 hover:text-sky-500 transition-colors">Terms of Service</a>
          </div>
        </div>

    </footer>
  );
}
