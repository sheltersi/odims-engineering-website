"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  DoorClosed,
  Grid,
  Hammer,
  LayoutGrid,
  Lock,
  Shield,
  Wrench
} from "lucide-react";

import { WhatsAppButton } from "@/components/WhatsAppButton";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

export default function BurglarBarsPage() {
  return (
    <main className="bg-gray-50">

      {/* HERO SECTION */}
      <section className="relative bg-[url('/assets/img/burglar-bars.png')] bg-cover bg-center bg-no-repeat h-[45vh] flex items-center">
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Burglar Bars & Security Doors
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="text-gray-200 mt-4 text-lg max-w-2xl mx-auto"
          >
            Strong, stylish and secure steel burglar bars and security doors for homes and businesses.
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
          Our Burglar Bar & Security Door Services
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT COLUMN */}
          <div className="space-y-8">

            <AnimatedBlock delay={0.1}>
              <ServiceBlock
                icon={Shield}
                title="Burglar Bar Fabrication"
                items={[
                  "Custom steel burglar bars for windows",
                  "Horizontal, vertical or cross-grid designs",
                  "Fitted for houses, flats and complexes",
                  "Rust-resistant and durable materials",
                  "Secure welded joints"
                ]}
              />
            </AnimatedBlock>

            <AnimatedBlock delay={0.2}>
              <ServiceBlock
                icon={LayoutGrid}
                title="Cottage Pane Burglar Bars"
                items={[
                  "Neat cottage-pane style bars",
                  "Perfect for modern or classic homes",
                  "Can match your window frame pattern",
                  "Strong and aesthetically pleasing",
                ]}
              />
            </AnimatedBlock>

            <AnimatedBlock delay={0.3}>
              <ServiceBlock
                icon={DoorClosed}
                title="Security Door Installation"
                items={[
                  "Heavy-duty steel security doors",
                  "Custom swing and sliding security doors",
                  "Front door and back door protection",
                  "Including lock plates and anti-lever frames",
                ]}
              />
            </AnimatedBlock>

            <AnimatedBlock delay={0.4}>
              <ServiceBlock
                icon={Grid}
                title="Sliding Security Gates"
                items={[
                  "Retractable sliding gates",
                  "Room dividers and passage gates",
                  "Balcony and patio security sliders",
                  "Smooth and easy to operate",
                ]}
              />
            </AnimatedBlock>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-8">

            <AnimatedBlock delay={0.5}>
              <ServiceBlock
                icon={Lock}
                title="Enhanced Security Features"
                items={[
                  "Tamper-resistant screws",
                  "Anti-lift and anti-lever brackets",
                  "Reinforced steel corners",
                  "Internal locking mechanisms",
                ]}
              />
            </AnimatedBlock>

            <AnimatedBlock delay={0.6}>
              <ServiceBlock
                icon={Hammer}
                title="Repairs & Upgrades"
                items={[
                  "Fixing bent or damaged burglar bars",
                  "Welding cracked or broken joints",
                  "Upgrading to thick steel bars",
                  "Repainting and rust treatment",
                ]}
              />
            </AnimatedBlock>

            <AnimatedBlock delay={0.7}>
              <ServiceBlock
                icon={AlertTriangle}
                title="Emergency Security Repairs"
                items={[
                  "Post-break-in repairs",
                  "Urgent reinforcement of doors or windows",
                  "Temporary security solutions",
                  "Fast on-site response",
                ]}
              />
            </AnimatedBlock>

            <AnimatedBlock delay={0.8}>
              <ServiceBlock
                icon={Shield}
                title="Commercial Security Fabrication"
                items={[
                  "Shopfront security doors",
                  "Warehouse window bars",
                  "Office security gates",
                  "Industrial-strength steel solutions",
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
            Need Strong, Secure Burglar Bars or Security Doors?
          </h3>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            We design and install custom burglar bars and steel security doors that keep your family safe and your home protected.
          </p>

          <a
            href="/contact"
            className="inline-block mt-6 px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Request a Free Quote
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
      <WhatsAppButton />
    </div>
  );
}


