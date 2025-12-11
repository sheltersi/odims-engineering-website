"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  BatteryCharging,
  Cog,
  KeyRound,
  Radio,
  Shield,
  Wrench,
  Zap
} from "lucide-react";

import { WhatsAppButton } from "@/components/WhatsAppButton";

// Animation variant
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

export default function GateMotorPage() {
  return (
    <main className="bg-gray-50">

      {/* HERO SECTION */}
      <section className="relative bg-[url('/assets/img/gate-motor.jpeg')] bg-cover bg-center bg-no-repeat h-[45vh] flex items-center">
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Gate Motor Installation & Repairs
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="text-gray-200 mt-4 text-lg max-w-2xl mx-auto"
          >
            Professional installation, repairs, upgrades, and automation for all major gate motor brands.
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
          Our Gate Motor Services
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT COLUMN */}
          <div className="space-y-8">

            <AnimatedBlock delay={0.1}>
              <ServiceBlock
                icon={Zap}
                title="New Gate Motor Installation"
                items={[
                  "Installation of sliding and swing motors",
                  "Centurion, ET Nice, DACE & more",
                  "Motor setup & full configuration",
                  "Smooth and quiet operation",
                  "Safety-compliant installation"
                ]}
              />
            </AnimatedBlock>

            <AnimatedBlock delay={0.2}>
              <ServiceBlock
                icon={Wrench}
                title="Gate Motor Repairs"
                items={[
                  "Motor not opening or closing",
                  "Gearbox repairs or replacement",
                  "PCB (motherboard) troubleshooting",
                  "Motor overheating issues",
                  "Noisy or weak motors"
                ]}
              />
            </AnimatedBlock>

            <AnimatedBlock delay={0.3}>
              <ServiceBlock
                icon={BatteryCharging}
                title="Battery Replacement & Backup Systems"
                items={[
                  "New battery supply & installation",
                  "Battery testing & diagnostics",
                  "Load shedding protection systems",
                  "Lithium battery upgrades"
                ]}
              />
            </AnimatedBlock>

            <AnimatedBlock delay={0.4}>
              <ServiceBlock
                icon={Radio}
                title="Remote Control Programming"
                items={[
                  "Add new remotes",
                  "Remove stolen/lost remotes",
                  "Long-range remote options",
                  "Multi-button programming"
                ]}
              />
            </AnimatedBlock>

          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-8">

            <AnimatedBlock delay={0.5}>
              <ServiceBlock
                icon={Shield}
                title="Gate Motor Security Upgrades"
                items={[
                  "Anti-theft motor brackets",
                  "Lockable steel motor cages",
                  "Anchor plates & security bolts",
                  "Motor tamper alarms"
                ]}
              />
            </AnimatedBlock>

            <AnimatedBlock delay={0.6}>
              <ServiceBlock
                icon={Cog}
                title="Track, Rail & Wheel Alignment"
                items={[
                  "Straightening bent gates",
                  "Installing new wheels & tracks",
                  "Friction reduction adjustments",
                  "Longer motor lifespan improvements"
                ]}
              />
            </AnimatedBlock>

            <AnimatedBlock delay={0.7}>
              <ServiceBlock
                icon={KeyRound}
                title="Access Control Integration"
                items={[
                  "Audio & video intercom systems",
                  "Keypad entry installation",
                  "GSM/phone-controlled gate access",
                  "Complex & estate access control"
                ]}
              />
            </AnimatedBlock>

            <AnimatedBlock delay={0.8}>
              <ServiceBlock
                icon={AlertTriangle}
                title="Emergency Callouts"
                items={[
                  "Gate stuck open or closed",
                  "Power failure issues",
                  "Motor jammed or overheating",
                  "Urgent remote programming",
                  "Emergency battery replacement"
                ]}
              />
            </AnimatedBlock>

          </div>
        </div>
   </section>
        {/* CALL TO ACTION */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mt-20 bg-slate-100 py-8"
        >
          <h3 className="text-2xl font-semibold text-gray-800">
            Need Your Gate Motor Fixed or Installed?
          </h3>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Fast and professional service for all gate motor brands.  
            We install, repair, upgrade and automate your gate — the right way.
          </p>

          <a
            href="/contact"
            className="inline-block mt-6 px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Get a Free Quote
          </a>
        </motion.div>
   

      {/* FLOATING WHATSAPP BUTTON */}
      <WhatsAppButton />
    </main>
  );
}

// COMPONENT: Animated Wrapper
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

// COMPONENT: Service Block Box
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


