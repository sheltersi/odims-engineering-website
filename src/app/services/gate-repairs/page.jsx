"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  Hammer,
  Layers,
  Package,
  RefreshCcw,
  Settings2,
  Wrench,
  ZapOff
} from "lucide-react";

import { WhatsAppButton } from "@/components/WhatsAppButton";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

export default function GateRepairsPage() {
  return (
    <main className="bg-gray-50">

      {/* HERO SECTION */}
      <section className="relative bg-[url('/assets/img/gate-2.jpg')] bg-cover bg-center bg-no-repeat h-[45vh] flex items-center">
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Gate Repairs & Maintenance
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="text-gray-200 mt-4 text-lg max-w-2xl mx-auto"
          >
            Fast, reliable repairs and full maintenance for all types of steel gates and automation systems.
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
          Our Repair & Maintenance Services
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT COLUMN */}
          <div className="space-y-8">

            <AnimatedBlock delay={0.1}>
              <ServiceBlock
                icon={Wrench}
                title="General Gate Repairs"
                items={[
                  "Fixing broken or bent gate frames",
                  "Repairing cracked welds",
                  "Replacing damaged steel parts",
                  "Restoring structural integrity"
                ]}
              />
            </AnimatedBlock>

            <AnimatedBlock delay={0.2}>
              <ServiceBlock
                icon={Settings2}
                title="Gate Alignment & Straightening"
                items={[
                  "Straightening leaning gates",
                  "Fixing gates that drag or scrape",
                  "Re-aligning heavy or sagging gates",
                  "Balancing weight distribution"
                ]}
              />
            </AnimatedBlock>

            <AnimatedBlock delay={0.3}>
              <ServiceBlock
                icon={ZapOff}
                title="Gate Motor Related Issues"
                items={[
                  "Gate not opening or closing",
                  "Gate getting stuck halfway",
                  "Motor trying to run but gate not moving",
                  "Slow or weak gate movement"
                ]}
              />
            </AnimatedBlock>

            <AnimatedBlock delay={0.4}>
              <ServiceBlock
                icon={Layers}
                title="Wheel, Track & Rail Repairs"
                items={[
                  "Replacing worn or broken wheels",
                  "Installing new tracks",
                  "Straightening bent rails",
                  "Reducing friction for smoother movement"
                ]}
              />
            </AnimatedBlock>

          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-8">

            <AnimatedBlock delay={0.5}>
              <ServiceBlock
                icon={Hammer}
                title="Welding & Structural Reinforcements"
                items={[
                  "Strengthening weak gate joints",
                  "Adding new steel supports",
                  "Repairing rusted or hollow sections",
                  "Replacing corroded panels"
                ]}
              />
            </AnimatedBlock>

            <AnimatedBlock delay={0.6}>
              <ServiceBlock
                icon={RefreshCcw}
                title="Gate Refurbishment & Restoration"
                items={[
                  "Rust treatment & cleaning",
                  "Repainting and priming",
                  "Upgrading to modern designs",
                  "Replacing old panels with steel sheets"
                ]}
              />
            </AnimatedBlock>

            <AnimatedBlock delay={0.7}>
              <ServiceBlock
                icon={AlertTriangle}
                title="Emergency Repair Callouts"
                items={[
                  "Gate stuck open or closed",
                  "Accidental damage",
                  "Post-break-in repairs",
                  "After-hours availability"
                ]}
              />
            </AnimatedBlock>

            <AnimatedBlock delay={0.8}>
              <ServiceBlock
                icon={Package}
                title="Maintenance Plans"
                items={[
                  "Regular lubrication & servicing",
                  "Checking wheels, tracks & brackets",
                  "Motor diagnostic checks",
                  "Preventative maintenance visits"
                ]}
              />
            </AnimatedBlock>

          </div>
        </div>

        {/* CALL TO ACTION */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mt-20"
        >
          <h3 className="text-2xl font-semibold text-gray-800">
            Get Your Gate Repaired Today
          </h3>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            We repair steel gates, sliding systems, motors, wheels, rails and more — professionally and efficiently.
          </p>

          <a
            href="/contact"
            className="inline-block mt-6 px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Request a Free Estimate
          </a>
        </motion.div>
      </section>

      {/* FLOATING WHATSAPP BUTTON */}
      <WhatsAppButton />
    </main>
  );
}

// ANIMATED WRAPPER
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

// SERVICE CARD
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


