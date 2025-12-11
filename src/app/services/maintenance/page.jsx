"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  Clock,
  Cog,
  RefreshCcw,
  Settings,
  ShieldAlert,
  Wrench,
  ZapOff
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

export default function MaintenanceEmergencyPage() {
  return (
    <main className="bg-gray-50">

      {/* HERO SECTION */}
      <section className="relative bg-[url('/assets/img/maintenance.png')] bg-cover bg-center bg-no-repeat h-[45vh] flex items-center">
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Maintenance & Emergency Repairs
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="text-gray-200 mt-4 text-lg max-w-2xl mx-auto"
          >
            Regular servicing and urgent call-outs for gates, motors and garage doors.
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
          Our Maintenance & Emergency Repair Services
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT COLUMN */}
          <div className="space-y-8">

            <AnimatedBlock delay={0.1}>
              <ServiceBlock
                icon={Settings}
                title="Routine Gate & Motor Servicing"
                items={[
                  "Lubrication of moving components",
                  "Rail & wheel cleaning",
                  "Motor calibration and testing",
                  "Checking hinges, rollers & brackets",
                  "Preventative maintenance to avoid breakdowns"
                ]}
              />
            </AnimatedBlock>

            <AnimatedBlock delay={0.2}>
              <ServiceBlock
                icon={RefreshCcw}
                title="Garage Door Maintenance"
                items={[
                  "Spring tension adjustments",
                  "Roller & cable inspections",
                  "Motor servicing and alignment",
                  "Noise reduction lubrication",
                  "Full safety testing"
                ]}
              />
            </AnimatedBlock>

            <AnimatedBlock delay={0.3}>
              <ServiceBlock
                icon={ZapOff}
                title="Breakdowns & Electrical Issues"
                items={[
                  "Motor not opening or closing",
                  "Gate stuck or moving slowly",
                  "Power-related automation problems",
                  "Faulty wiring or loose connections",
                  "Circuit board diagnostics"
                ]}
              />
            </AnimatedBlock>

            <AnimatedBlock delay={0.4}>
              <ServiceBlock
                icon={Cog}
                title="Mechanical Repairs"
                items={[
                  "Fixing bent or misaligned gates",
                  "Replacing worn-out wheels",
                  "Track repairs and realignment",
                  "Fixing jammed or grinding components",
                  "Adjusting over-tight or loose chains"
                ]}
              />
            </AnimatedBlock>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-8">

            <AnimatedBlock delay={0.5}>
              <ServiceBlock
                icon={Wrench}
                title="Emergency Welding Repairs"
                items={[
                  "Broken gate frames",
                  "Cracked welds & steel failure",
                  "Reinforcement after break-ins",
                  "Rapid on-site welding services",
                  "Stabilisation of unsafe structures"
                ]}
              />
            </AnimatedBlock>

            <AnimatedBlock delay={0.6}>
              <ServiceBlock
                icon={ShieldAlert}
                title="Security Risk Repairs"
                items={[
                  "Gate stuck open – urgent closure",
                  "Garage door jammed halfway",
                  "Faulty access control systems",
                  "Stolen remote deactivation",
                  "Temporary securing of weak areas"
                ]}
              />
            </AnimatedBlock>

            <AnimatedBlock delay={0.7}>
              <ServiceBlock
                icon={Clock}
                title="Same-Day & After-Hours Callouts"
                items={[
                  "Emergency response for urgent issues",
                  "Fast diagnosis on arrival",
                  "On-the-spot repair when possible",
                  "Temporary safety solutions included",
                  "After-hours availability"
                ]}
              />
            </AnimatedBlock>

            <AnimatedBlock delay={0.8}>
              <ServiceBlock
                icon={AlertTriangle}
                title="Damage from Accidents or Weather"
                items={[
                  "Storm or wind damage repairs",
                  "Gate knocked off track by vehicles",
                  "Fallen or twisted steel structures",
                  "Immediate safety evaluations",
                  "Restoration of functionality"
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
            Need Urgent Repairs or Regular Maintenance?
          </h3>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Whether it is a sudden breakdown or scheduled servicing, our team is ready to assist quickly and professionally.
          </p>

          <a
            href="/contact"
            className="inline-block mt-6 px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Contact Us Now
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



// Service Card Component
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



// WhatsApp Floating Button
function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/27XXXXXXXXX"
      target="_blank"
      className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-4 shadow-xl hover:bg-green-600 transition"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.52 3.48A11.77 11.77 0 0 0 12.07.25C5.67.25.48 5.44.48 11.86a11.8 11.8 0 0 0 1.69 6.07L.25 23.75l6-1.87a11.86 11.86 0 0 0 5.82 1.48h.05c6.41 0 11.6-5.19 11.6-11.6a11.54 11.54 0 0 0-3.2-8.28z"/>
      </svg>
    </a>
  );
}
