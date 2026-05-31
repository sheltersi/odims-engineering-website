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
    <div className="min-h-screen bg-white">
      {/* HERO HEADER */}
      <section className="relative py-20 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,theme(colors.blue.800/30),transparent_50%),radial-gradient(ellipse_at_bottom_left,theme(colors.blue.900/40),transparent_50%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Frequently Asked <span className="text-blue-400">Questions</span>
          </h1>
          <p className="text-slate-400 mt-4 text-lg max-w-2xl mx-auto">
            Find quick answers to the most common questions from our customers.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-16">

        {/* FAQ ACCORDION */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-xl shadow-sm p-5">
              
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between text-left"
              >
                <span className="text-slate-900 font-semibold text-lg">{faq.question}</span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`text-blue-500 transition-transform duration-300 ${
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
