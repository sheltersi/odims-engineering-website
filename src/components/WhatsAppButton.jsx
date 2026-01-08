"use client";

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/0027810713204"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-23 right-4 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition"
    >
     <FontAwesomeIcon className="text-2xl" icon={faWhatsapp} />
    </a>
  );
}
