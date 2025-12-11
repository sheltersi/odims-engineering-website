"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  KeyRound,
  LockKeyhole,
  Power,
  Radio,
  ShieldCheck,
  Smartphone,
  Wifi
} from "lucide-react";

import { WhatsAppButton } from "@/components/WhatsAppButton";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

export default function RemoteProgrammingPage() {
  return (
    <main className="bg-gray-50">

      {/* HERO SECTION */}
      <section className="relative bg-[url('/assets/img/remote-hero.jpg')] bg-cover bg-center bg-no-repeat h-[45vh] flex items-center">
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Remote Programming & Access Control
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="text-gray-200 mt-4 text-lg max-w-2xl mx-auto"
          >
            Programming new remotes, removing stolen ones, keypad systems, GSM access and full access control solutions.
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
          Our Remote Programming & Access Services
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT COLUMN */}
          <div className="space-y-8">

            <AnimatedBlock delay={0.1}>
              <ServiceBlock
                icon={Radio}
                title="Remote Programming"
                items={[
                  "Programming new remotes for your gate motor",
                  "Programming additional remotes for family members",
                  "Replacing lost or broken remotes",
                  "Fast on-site setup and testing"
                ]}
              />
            </AnimatedBlock>

            <AnimatedBlock delay={0.2}>
              <ServiceBlock
                icon={LockKeyhole}
                title="Stolen / Lost Remote Removal"
                items={[
                  "Delete stolen remotes from your system",
                  "Remove access for previous tenants",
                  "Re-secure your gate for safety",
                  "Anti-theft access clean-up"
                ]}
              />
            </AnimatedBlock>

            <AnimatedBlock delay={0.3}>
              <ServiceBlock
                icon={KeyRound}
                title="Keypad & Manual Access Systems"
                items={[
                  "Installing access control keypads",
                  "Setup pin-code entry for visitors",
                  "Resetting or changing access codes",
                  "Weatherproof, durable keypads"
                ]}
              />
            </AnimatedBlock>

            <AnimatedBlock delay={0.4}>
              <ServiceBlock
                icon={ShieldCheck}
                title="Secure Access Automation"
                items={[
                  "Automatic gate lock integration",
                  "Timed access settings",
                  "Secure multi-user access",
                  "Estate & complex access solutions"
                ]}
              />
            </AnimatedBlock>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-8">

            <AnimatedBlock delay={0.5}>
              <ServiceBlock
                icon={Smartphone}
                title="GSM / App-Controlled Access"
                items={[
                  "Open your gate via smartphone",
                  "Call-to-open systems",
                  "App access for visitors and family",
                  "Remote access control for complexes"
                ]}
              />
            </AnimatedBlock>

            <AnimatedBlock delay={0.6}>
              <ServiceBlock
                icon={Wifi}
                title="Wireless Receiver Upgrades"
                items={[
                  "Upgrade to long-range receivers",
                  "More stable and secure remote range",
                  "Multi-channel receiver installation",
                  "Improved response speed"
                ]}
              />
            </AnimatedBlock>

            <AnimatedBlock delay={0.7}>
              <ServiceBlock
                icon={Power}
                title="Access Control Power Systems"
                items={[
                  "Backup power for access systems",
                  "Battery replacements",
                  "Load shedding-ready access control",
                  "Protecting systems from power dips"
                ]}
              />
            </AnimatedBlock>

            <AnimatedBlock delay={0.8}>
              <ServiceBlock
                icon={AlertTriangle}
                title="Emergency Access Issues"
                items={[
                  "Gate will not respond to remote",
                  "No communication between motor & remote",
                  "Visitor/gate access failures",
                  "Emergency system reset"
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
            Need Remote Programming or Access Control?
          </h3>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Whether you need new remotes, deleted stolen ones, or upgraded access control systems, we’ve got you covered.
          </p>

          <a
            href="/contact"
            className="inline-block mt-6 px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Get Assistance Now
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


