"use client";

import { useState } from "react";

import { WhatsAppButton } from "@/components/WhatsAppButton";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const faqs = [
  {
    question: "Which areas do you service?",
    answer:
      "We proudly service Gauteng, North West, and Mpumalanga provinces. Some nearby areas may also be considered depending on the project.",
  },
  {
    question: "How long does it take to get a quote?",
    answer:
      "We respond to quote requests within 24 hours. In urgent cases, you can call us directly for immediate assistance.",
  },
  {
    question: "Do you offer same-day service?",
    answer:
      "Yes, for certain repairs such as gate motors, welding fixes, and electric fence issues, we do offer same-day service depending on availability.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept EFT, cash, and mobile payments. For larger projects, a deposit may be required before work begins.",
  },
  {
    question: "Do you provide guarantees on your work?",
    answer:
      "Yes, all our installations come with a workmanship guarantee. Gate motors and other equipment come with the manufacturer's warranty as well.",
  },
  {
    question: "Can you install both electric and solar gate motors?",
    answer:
      "Absolutely. We install, repair, and service electric and solar-powered gate motors for both sliding and swing gates.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 px-4 py-16 relative overflow-hidden">

      {/* Background abstract shapes */}
      <div className="absolute top-0 left-20 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-2xl"></div>
   
   <div className="absolute w-40 h-40 md:left-120 left-20 bg-blue-300/20 rotate-45"></div>
      <div className="absolute w-40 h-40 md:left-160 left-55 bg-blue-300/20 rotate-45"></div>
      <div className="absolute w-40 h-40 md:left-200 left-95 bg-blue-300/20 rotate-45"></div>

      <div className="max-w-4xl mx-auto relative z-10">

        {/* HEADER */}
          <div className="text-center mb-12 pb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-mono text-blue-900">
            Frequently Asked <span className="text-[#59A5D8]">Questions</span>
          </h1>

  <div className="max-w-2xl mx-auto">
    <p className="text-center text-[#6E7A85] mt-4 font-mono text-lg">
            Find quick answers to the most common questions from our customers.
    </p>
  </div>
</div>

        {/* FAQ ACCORDION */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-blue-200 rounded-xl shadow-md p-5">
              
              {/* Question Row */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between text-left"
              >
                <span className="text-blue-900 font-semibold text-lg">{faq.question}</span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`text-blue-700 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              {openIndex === index && (
                <p className="mt-3 text-gray-500 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      <WhatsAppButton />
    </div>
  );
}
