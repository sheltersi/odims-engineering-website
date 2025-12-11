"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  Cog,
  Construction,
  Flame,
  Hammer,
  Shield,
  Truck,
  Wrench
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

export default function MobileWeldingPage() {
  return (
    <main className="bg-gray-50">

      {/* HERO SECTION */}
      <section className="relative bg-[url('/assets/img/mobile-welding-hero.jpg')] bg-cover bg-center bg-no-repeat h-[45vh] flex items-center">
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Mobile Welding Services
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="text-gray-200 mt-4 text-lg max-w-2xl mx-auto"
          >
            Fast, on-site welding for emergencies or small repairs.  
            We come to your location to save you time.
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
          Our Mobile Welding Services
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT COLUMN */}
          <div className="space-y-8">

            <AnimatedBlock delay={0.1}>
              <ServiceBlock
                icon={Truck}
                title="Fully Mobile On-Site Welding"
                items={[
                  "We come to your home or business",
                  "Ideal for urgent repairs",
                  "No need to remove steel structures",
                  "Fast arrival times",
                  "Convenient and time-saving"
                ]}
              />
            </AnimatedBlock>

            <AnimatedBlock delay={0.2}>
              <ServiceBlock
                icon={Flame}
                title="Gate, Fence & Burglar Bar Repairs"
                items={[
                  "Broken or cracked welds",
                  "Bending or structural failure",
                  "Reinforcing weak areas",
                  "Rewelding steel panels and frames",
                  "Rust-related repairs"
                ]}
              />
            </AnimatedBlock>

            <AnimatedBlock delay={0.3}>
              <ServiceBlock
                icon={Construction}
                title="Carports, Steel Frames & Structures"
                items={[
                  "Fixing damaged carport beams",
                  "Strengthening steel posts",
                  "Repairing collapsed roof structures",
                  "Steel frame adjustments",
                  "Small structural welding jobs"
                ]}
              />
            </AnimatedBlock>

            <AnimatedBlock delay={0.4}>
              <ServiceBlock
                icon={Hammer}
                title="Small Fabrication Jobs On-Site"
                items={[
                  "Bracket and hinge fabrication",
                  "Small frame modifications",
                  "Drilling, grinding & adjustments",
                  "Fitting steel plates or supports",
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
                  "Break-in damage repair",
                  "Gate motor bracket welding",
                  "Bent gate or fence straightening",
                  "Urgent safety welding",
                  "Storm damage welding fixes"
                ]}
              />
            </AnimatedBlock>

            <AnimatedBlock delay={0.6}>
              <ServiceBlock
                icon={Shield}
                title="Security Reinforcement"
                items={[
                  "Extra steel bars added on-site",
                  "Anti-lever plates",
                  "Reinforced security gates",
                  "Strengthening weak structures",
                  "Replacing stolen steel sections"
                ]}
              />
            </AnimatedBlock>

            <AnimatedBlock delay={0.7}>
              <ServiceBlock
                icon={Cog}
                title="Metal Component Repairs"
                items={[
                  "Steel brackets & hinges",
                  "Rollers and tracks welding",
                  "Steel frames and supports",
                  "Heavy-duty reinforcement",
                  "Custom welded parts"
                ]}
              />
            </AnimatedBlock>

            <AnimatedBlock delay={0.8}>
              <ServiceBlock
                icon={AlertTriangle}
                title="High-Risk / Immediate Callouts"
                items={[
                  "Security doors not closing",
                  "Gate hanging off its track",
                  "Broken steel exposed to entry risk",
                  "Immediate on-site stabilisation",
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
            Need Fast Mobile Welding Assistance?
          </h3>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            From emergency fixes to small repairs, we come directly to your location with professional welding equipment.
          </p>

          <a
            href="/contact"
            className="inline-block mt-6 px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Get Immediate Help
          </a>
        </motion.div>
      </section>

      {/* WHATSAPP FLOATING BUTTON */}
      <WhatsAppButton />
    </main>
  );
}



// Animated Wrapper Component
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
