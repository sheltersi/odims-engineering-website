"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Cog,
  Hammer,
  Layers,
  PenTool,
  Shield,
  Wrench
} from "lucide-react";

import Section from "@/components/Section";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function GateFabricationPage() {
    const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const blockFade = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

  return (
    <main className="bg-gray-50">

      {/* HERO SECTION */}
      <section className="relative bg-[url('/assets/img/gate-img.jpg')] bg-cover bg-center bg-no-repeat h-[45vh] flex items-center">
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Gate Fabrication Services
          </h1>
          <p className="text-gray-200 mt-4 text-lg max-w-2xl mx-auto">
            Premium custom steel gates built for security, durability and modern style.
          </p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16">
 <motion.h2
    className="text-3xl font-bold text-gray-800 mb-8"
    initial="hidden"
    animate="visible"
    variants={fadeIn}
    transition={{ duration: 0.6 }}
  >
    What’s Included in Our Gate Fabrication Service
  </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT COLUMN */}
          <div className="space-y-8">
    <motion.div
      variants={blockFade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
            <ServiceBlock
              icon={PenTool}
              title="Custom Gate Design"
              items={[
                "Modern horizontal & vertical designs",
                "Privacy sheet gates",
                "Laser-cut decorative gates",
                "Sliding & swing gate styles",
                "Professional measurements"
              ]}
            />
    </motion.div>
    
     <motion.div
      variants={blockFade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
            <ServiceBlock
              icon={Hammer}
              title="Full Gate Fabrication"
              items={[
                "Welding of frames & structure",
                "Steel sheet installation",
                "Box panel designs",
                "Reinforced frames",
                "Weather-resistant finishing"
              ]}
            />
    </motion.div>

      <motion.div
      variants={blockFade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
            <ServiceBlock
              icon={Layers}
              title="Sliding & Swing Gates"
              items={[
                "Track installation",
                "Heavy-duty frame reinforcement",
                "Pedestrian gates",
                "Balanced hinge mounting",
                "Custom size options"
              ]}
            />
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-8">
              <motion.div
      variants={blockFade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
            <ServiceBlock
              icon={Shield}
              title="Privacy & Decorative Gates"
              items={[
                "Full steel sheet privacy gates",
                "Slit + sheet modern designs",
                "Laser-cut art patterns",
                "Solid panel construction",
                "Noise-dampened designs"
              ]}
            /></motion.div>

      <motion.div
      variants={blockFade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
            <ServiceBlock
              icon={Cog}
              title="Gate Hardware Installation"
              items={[
                "Wheels, rollers & tracks",
                "Hinges & lock plates",
                "Motor brackets",
                "Gate stoppers",
                "Smooth sliding mechanisms"
              ]}
            /></motion.div>

 <motion.div
      variants={blockFade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
            <ServiceBlock
              icon={Wrench}
              title="Repairs, Upgrades & Restoration"
              items={[
                "Straightening bent gates",
                "Rust repair & repainting",
                "Replacing steel sheets",
                "Upgrading old gates",
                "On-site welding modifications"
              ]}
            /></motion.div>
          </div>
        </div>
  </section>
        {/* CALL TO ACTION */}
        <Section className="bg-slate-100">
         <motion.div
      variants={blockFade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
        <div className="text-center mt-20">
          <h3 className="text-2xl font-semibold text-gray-800">
            Ready to Upgrade Your Gate?
          </h3>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Get a free measurement, design consultation and quotation.  
            We fabricate high-quality steel gates built to last for years.
          </p>

          <a
            href="/contact"
            className="inline-block mt-6 px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Contact Us for a Free Quote
          </a>
        </div></motion.div>
        </Section>
    
      <WhatsAppButton />
    </main>
  );
}

function ServiceBlock({ icon: Icon, title, items }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 border border-slate-200">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-7 h-7 text-blue-600" />
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>

      <ul className="space-y-2 text-gray-600">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <BadgeCheck className="w-5 h-5 text-green-600 mt-0.5" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
