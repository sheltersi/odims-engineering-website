"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  Fence,
  Hammer,
  Layers,
  Package,
  Ruler,
  Shield,
  Wrench
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

export default function PalisadeFencingPage() {
  return (
    <main className="bg-gray-50">

      {/* HERO SECTION */}
      <section className="relative bg-[url('/assets/img/palisade-fence.png')] bg-cover bg-center bg-no-repeat h-[75vh] flex items-center">
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Palisade Fencing
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="text-gray-200 mt-4 text-lg max-w-2xl mx-auto"
          >
            Durable, secure and professionally installed palisade fencing for homes, businesses and industrial properties.
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
          Our Palisade Fencing Services
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT COLUMN */}
          <div className="space-y-8">

            <AnimatedBlock delay={0.1}>
              <ServiceBlock
                icon={Fence}
                title="Palisade Fence Installation"
                items={[
                  "Steel palisade fencing for residential & commercial use",
                  "Strong vertical steel bars with secure cross rails",
                  "Available in various heights and bar thicknesses",
                  "Professional, straight-line installation",
                  "Long-lasting hot-dipped galvanised steel options"
                ]}
              />
            </AnimatedBlock>

            <AnimatedBlock delay={0.2}>
              <ServiceBlock
                icon={Shield}
                title="Security Upgrades"
                items={[
                  "Razor wire installation",
                  "Flat wrap or concertina wire",
                  "Anti-climb spikes and blades",
                  "Security gate integration",
                  "Reinforced posts and brackets"
                ]}
              />
            </AnimatedBlock>

            <AnimatedBlock delay={0.3}>
              <ServiceBlock
                icon={Ruler}
                title="Custom Sizes & Designs"
                items={[
                  "Custom height palisade fencing (1.2m, 1.8m, 2.1m, 2.4m, etc.)",
                  "Choice of spear, spike, and round-top styles",
                  "Thicker steel options for high-risk areas",
                  "Industrial-grade steel fabrication",
                ]}
              />
            </AnimatedBlock>

            <AnimatedBlock delay={0.4}>
              <ServiceBlock
                icon={Layers}
                title="Boundary & Perimeter Fencing"
                items={[
                  "Complete perimeter fencing for large properties",
                  "Industrial yard fencing",
                  "Estate and complex boundary fencing",
                  "Factory and warehouse fencing solutions",
                ]}
              />
            </AnimatedBlock>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-8">

            <AnimatedBlock delay={0.5}>
              <ServiceBlock
                icon={Hammer}
                title="Steel Post & Support Installation"
                items={[
                  "Concrete and steel post installation",
                  "Strong foundation footings",
                  "Reinforced post alignment",
                  "Rust-resistant post treatment",
                ]}
              />
            </AnimatedBlock>

            <AnimatedBlock delay={0.6}>
              <ServiceBlock
                icon={Wrench}
                title="Repairs & Maintenance"
                items={[
                  "Fixing bent or damaged bars",
                  "Replacing stolen or rusted panels",
                  "Straightening leaning fencing",
                  "Repainting & anti-rust treatment",
                ]}
              />
            </AnimatedBlock>

            <AnimatedBlock delay={0.7}>
              <ServiceBlock
                icon={AlertTriangle}
                title="Emergency Fence Repairs"
                items={[
                  "Break-in damage repair",
                  "Urgent boundary security restoration",
                  "Replacement of missing or damaged sections",
                  "Immediate temporary security solutions",
                ]}
              />
            </AnimatedBlock>

            <AnimatedBlock delay={0.8}>
              <ServiceBlock
                icon={Package}
                title="Painting & Galvanising Options"
                items={[
                  "Hot-dipped galvanised palisade",
                  "Zinc-coated anti-rust options",
                  "Industrial enamel painting",
                  "Durable weather-resistant finishes"
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
            Need Strong, Secure Palisade Fencing?
          </h3>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            We supply and install high-quality steel palisade fencing designed to protect your property and last for years.
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
