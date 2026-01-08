"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  Cog,
  Component,
  DoorOpen,
  RefreshCcw,
  Settings,
  ShieldCheck,
  Wrench,
  Zap
} from "lucide-react";

import { WhatsAppButton } from "@/components/WhatsAppButton";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

export default function GarageDoorsPage() {
  return (
    <main className="bg-gray-50">

      {/* HERO SECTION */}
      <section className="relative bg-[url('/assets/img/garage-door.png')] bg-cover bg-center bg-no-repeat h-[45vh] flex items-center">
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Garage Doors & Automation
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="text-gray-200 mt-4 text-lg max-w-2xl mx-auto"
          >
            Installation, automation and repairs for all types of garage doors – fast, reliable and professional.
          </motion.p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-800 mb-12"
        >
          Our Garage Door Services
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT COLUMN */}
          <div className="space-y-8">

            <AnimatedBlock delay={0.1}>
              <ServiceBlock
                icon={DoorOpen}
                title="Garage Door Installation"
                items={[
                  "Roll-up garage door installation",
                  "Sectional garage door installation",
                  "Custom and wooden garage doors",
                  "Steel and aluminium door installation",
                  "Secure, balanced and smooth operation"
                ]}
              />
            </AnimatedBlock>

            <AnimatedBlock delay={0.2}>
              <ServiceBlock
                icon={Zap}
                title="Garage Door Automation"
                items={[
                  "Automation of new or existing garage doors",
                  "Installation of garage door motors",
                  "Quiet & powerful automation systems",
                  "Compatible with most door types",
                  "Safety beam installation included"
                ]}
              />
            </AnimatedBlock>

            <AnimatedBlock delay={0.3}>
              <ServiceBlock
                icon={Wrench}
                title="Garage Door Repairs"
                items={[
                  "Broken springs or tension issues",
                  "Bent or damaged panels",
                  "Door not opening/closing smoothly",
                  "Cable, roller & pulley repairs",
                  "Emergency break-in repair"
                ]}
              />
            </AnimatedBlock>

            <AnimatedBlock delay={0.4}>
              <ServiceBlock
                icon={RefreshCcw}
                title="Garage Door Servicing"
                items={[
                  "Lubrication & noise reduction",
                  "Spring tension adjustments",
                  "Motor servicing & calibration",
                  "Track and roller cleaning",
                  "Preventative maintenance"
                ]}
              />
            </AnimatedBlock>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-8">

            <AnimatedBlock delay={0.5}>
              <ServiceBlock
                icon={Component}
                title="Motor & Automation Repairs"
                items={[
                  "Motor not responding",
                  "Door stops halfway or jams",
                  "Overheating motor",
                  "Faulty circuit boards",
                  "Remote & receiver issues"
                ]}
              />
            </AnimatedBlock>

            <AnimatedBlock delay={0.6}>
              <ServiceBlock
                icon={Settings}
                title="Spring, Cable & Roller Replacement"
                items={[
                  "Broken torsion springs",
                  "Loose or worn-out cables",
                  "Damaged or noisy rollers",
                  "Smooth and balanced door movement",
                  "Safety-checked mechanical components"
                ]}
              />
            </AnimatedBlock>

            <AnimatedBlock delay={0.7}>
              <ServiceBlock
                icon={ShieldCheck}
                title="Safety & Security Upgrades"
                items={[
                  "Anti-theft brackets",
                  "Safety beam installation",
                  "Manual override locks",
                  "Stronger hinges and hardware",
                  "Secure motor enclosures"
                ]}
              />
            </AnimatedBlock>

            <AnimatedBlock delay={0.8}>
              <ServiceBlock
                icon={AlertTriangle}
                title="Emergency Callouts"
                items={[
                  "Garage door stuck open or closed",
                  "Motor failure assistance",
                  "After-hours emergency repairs",
                  "Security-related urgent repairs"
                ]}
              />
            </AnimatedBlock>

          </div>
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mt-20"
        >
          <h3 className="text-2xl font-semibold text-gray-800">
            Need Garage Door Installation, Automation or Repairs?
          </h3>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            We install, automate and repair all garage door types.  
            Get fast, professional and affordable service today.
          </p>

          <a
            href="/contact"
            className="inline-block mt-6 px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Get a Free Quote
          </a>
        </motion.div>
      </section>

      {/* WHATSAPP FLOATING BUTTON */}
      <WhatsAppButton />
    </main>
  );
}

// Animated Wrapper
function AnimatedBlock({ children, delay }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

// Service Card
function ServiceBlock({ icon: Icon, title, items }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 border border-slate-200">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-7 h-7 text-blue-600" />
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>

      <ul className="space-y-2 text-gray-600">
        {items.map((item, i) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}
