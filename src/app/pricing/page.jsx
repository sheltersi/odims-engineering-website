"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

import { AnimatedBillCards } from "@/components/AnimatedBillCards";
import { ComparePricingTable } from "@/components/ComparePricingTable";

export default function PricingSection() {
  const pricing = [
    {
      title: "Sliding Gates",
      price: "From R4,500",
      features: [
        "Custom sizes",
        "Modern or palisade designs",
        "Motor-ready frame",
        "Installation available",
      ],
    },
    {
      title: "Privacy Sheet Gates",
      price: "From R6,500",
      features: [
        "Solid steel sheet",
        "Premium modern look",
        "Laser-cut options available",
        "Strong & long-lasting",
      ],
      featured: true,
    },
    {
      title: "Gate Motor Installation",
      price: "From R1,800",
      features: [
        "All major brands",
        "New installation or repairs",
        "Remote programming",
        "Safety checks included",
      ],
    },
    {
      title: "Burglar Bars",
      price: "From R350 per window",
      features: [
        "Custom sizes",
        "Strong steel build",
        "Modern or cottage-pane style",
        "Installation included",
      ],
    },
    {
      title: "Carports",
      price: "From R8,000",
      features: [
        "Steel frame",
        "IBR roof available",
        "Custom sizes",
        "Perfect for homes & businesses",
      ],
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 relative bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Background accents */}
      <div className="absolute -top-10 left-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-2xl"></div>
<div className="absolute w-40 h-40 md:left-120 left-20 bg-blue-300/20 rotate-45"></div>
<div className="absolute w-40 h-40 md:left-160 left-55 bg-blue-300/20 rotate-45"></div>
<div className="absolute w-40 h-40 md:left-200 left-95 bg-blue-300/20 rotate-45"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        {/* <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-800 mb-12"
        >
          Pricing Guide
        </motion.h2>
        */}
        
        <div className="text-center mb-12 pb-12">
  <h1 className="text-4xl md:text-5xl font-bold font-mono text-blue-900">
    Pricing <span className="text-[#59A5D8]">Guide</span>
  </h1>

  <div className="max-w-2xl mx-auto">
    <p className="text-center text-[#6E7A85] mt-4 font-mono text-lg">
     Choose a category, switch billing, and compare packages. Transparent pricing for every job.
    </p>
  </div>
</div>

      

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {pricing.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl p-8 shadow-lg border 
                ${
                  item.featured
                    ? "bg-blue-600 text-white border-blue-700 shadow-xl scale-[1.02]"
                    : "bg-white text-gray-800 border-gray-200 hover:shadow-2xl"
                }
                transition-transform duration-300 hover:-translate-y-1 cursor-pointer`}
            >
              {/* Title */}
              <h3
                className={`text-2xl font-semibold mb-2 ${
                  item.featured ? "text-white" : "text-gray-800"
                }`}
              >
                {item.title}
              </h3>

              {/* Price */}
              <p
                className={`font-bold text-3xl mb-4 ${
                  item.featured ? "text-white" : "text-blue-600"
                }`}
              >
                {item.price}
              </p>

              {/* Features */}
              <ul className="space-y-3">
                {item.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-gray-600 dark:text-gray-200"
                  >
                    <CheckCircle
                      className={`w-5 h-5 ${
                        item.featured ? "text-white" : "text-blue-600"
                      }`}
                    />
                    <span className={item.featured ? "text-white" : ""}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-6">
                <a
                  href="/quote"
                  className={`block text-center px-6 py-3 rounded-xl font-semibold transition 
                    ${
                      item.featured
                        ? "bg-white text-blue-700 hover:bg-gray-100"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                >
                  Get Quote
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatedBillCards />
      <ComparePricingTable />
    </section>
  );
}
