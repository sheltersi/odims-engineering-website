"use client";

import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";

export function AnimatedBillCards() {
  const items = [
    {
      title: "Standard Gate Installation",
      price: "R4,500",
      includes: [
        "Steel frame installation",
        "Sliding or swing mechanism",
        "Basic primer coating",
        "3-month workmanship warranty",
      ],
      highlight: false,
    },
    {
      title: "Premium Gate Installation",
      price: "R6,800",
      includes: [
        "Modern design frame",
        "Smooth sliding track",
        "Weather-resistant coating",
        "6-month warranty",
        "Motor-ready installation",
      ],
      highlight: true,
    },
    {
      title: "Gate Motor Package",
      price: "R3,200",
      includes: [
        "Motor setup and alignment",
        "Remote programming",
        "Safety beam installation",
        "Full system testing",
      ],
      highlight: false,
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="mt-20">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-4xl font-bold text-center text-gray-800 mb-10"
      >
        Pricing Packages
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto px-4">
        {items.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className={`p-8 rounded-2xl shadow-xl border 
              ${
                item.highlight
                  ? "bg-blue-600 text-white border-blue-700 scale-[1.03]"
                  : "bg-white border-gray-200 hover:shadow-2xl"
              }
              transition-transform duration-300 hover:-translate-y-2 cursor-pointer`}
          >
            <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
            <p
              className={`text-4xl font-extrabold ${
                item.highlight ? "text-white" : "text-blue-600"
              } mb-6`}
            >
              {item.price}
            </p>

            <ul className="space-y-3 mb-8">
              {item.includes.map((inc, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle
                    className={`w-6 h-6 ${
                      item.highlight ? "text-white" : "text-blue-600"
                    }`}
                  />
                  <span>{inc}</span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-3 rounded-xl font-semibold transition 
                ${
                  item.highlight
                    ? "bg-white text-blue-700 hover:bg-gray-200"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
            >
              Choose Package
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
