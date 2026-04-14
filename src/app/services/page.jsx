"use client";

import { motion } from "framer-motion";

import Button from "@/components/Button";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { services } from "@/data/services";

export default function ServicesPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Section className="bg-[#040404] text-white relative overflow-hidden">

        {/* Subtle industrial accents */}
        <div className="absolute w-40 h-40 left-10 top-20 bg-[#C5620B]/10 rotate-45 blur-2xl"></div>
        <div className="absolute w-40 h-40 right-10 bottom-10 bg-[#FCB861]/10 rotate-45 blur-2xl"></div>

        {/* Header */}
        <div className="text-center py-20">
          <motion.h1
            className="text-4xl md:text-5xl font-bold"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            Our <span className="text-[#FCB861]">Services</span>
          </motion.h1>

          <p className="max-w-2xl mx-auto text-gray-400 mt-4 text-lg">
            We provide professional welding, gate automation and repair services.
            Built for durability, reliability and long-term performance.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.1 }}
        >
          {services.map((service) => (
            <ServiceCard key={service.slug} {...service} />
          ))}
        </motion.div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-[#0a0a0a] text-white border-t border-[#1a1a1a]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-gray-400 max-w-xl">
            Tell us what you need. Send a photo of your gate or garage door and
            we’ll give you a fast, free quote.
          </p>

          <div className="flex gap-4">
            <a
              href="/quote"
              className="bg-[#C5620B] hover:bg-[#FCB861] text-black px-6 py-3 rounded-lg font-medium transition"
            >
              Get a Free Quote
            </a>

            <a
              href="https://wa.me/27810713204"
              className="border border-[#C5620B] text-[#FCB861] px-6 py-3 rounded-lg hover:bg-[#C5620B]/10 transition"
            >
              WhatsApp Us
            </a>
          </div>

        </div>
      </Section>

      <WhatsAppButton />
    </>
  );
}