"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  Building,
  Cog,
  Flame,
  Hammer,
  Layers,
  Shield,
  Wrench
} from "lucide-react";

import { WhatsAppButton } from "@/components/WhatsAppButton";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

export default function WeldingSteelworkPage() {
  return (
    <main className="bg-gray-50">

      {/* HERO SECTION */}
      <section className="relative bg-[url('/assets/img/welding-image.jpeg')] bg-cover bg-center bg-no-repeat h-[45vh] flex items-center">
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Welding & Steelwork
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="text-gray-200 mt-4 text-lg max-w-2xl mx-auto"
          >
            Professional welding and quality steel fabrication for residential, commercial and industrial projects.
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
          Our Welding & Steelwork Services
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT COLUMN */}
          <div className="space-y-8">

            <AnimatedBlock delay={0.1}>
              <ServiceBlock
                icon={Flame}
                title="General Welding Services"
                items={[
                  "MIG, TIG & ARC welding",
                  "On-site mobile welding",
                  "Steel cutting & fabrication",
                  "Gate, fence & structure repairs",
                  "Precision welding for clean finishes"
                ]}
              />
            </AnimatedBlock>

            <AnimatedBlock delay={0.2}>
              <ServiceBlock
                icon={Layers}
                title="Custom Steel Fabrication"
                items={[
                  "Steel frames & structures",
                  "Table frames & furniture",
                  "Balustrades & handrails",
                  "Shelving, racks & supports",
                  "Built-to-spec custom steelwork"
                ]}
              />
            </AnimatedBlock>

            <AnimatedBlock delay={0.3}>
              <ServiceBlock
                icon={Hammer}
                title="Structural Steelwork"
                items={[
                  "Beams, channels & supports",
                  "Reinforcement & bracing",
                  "Industrial steel components",
                  "Light structural fabrication",
                  "Commercial steel installations"
                ]}
              />
            </AnimatedBlock>

            <AnimatedBlock delay={0.4}>
              <ServiceBlock
                icon={Building}
                title="Steel Installations"
                items={[
                  "On-site steel assembly",
                  "Mounting steel frames & beams",
                  "Installing gates, doors & rails",
                  "Welding reinforcements on location",
                  "Industrial installations"
                ]}
              />
            </AnimatedBlock>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-8">

            <AnimatedBlock delay={0.5}>
              <ServiceBlock
                icon={Wrench}
                title="Repairs & Refurbishment"
                items={[
                  "Fixing cracked, broken or rusted steel",
                  "Rewelding weak joints",
                  "Straightening bent frames",
                  "Replacing broken steel components",
                  "Strengthening existing structures"
                ]}
              />
            </AnimatedBlock>

            <AnimatedBlock delay={0.6}>
              <ServiceBlock
                icon={Cog}
                title="Steel Modification Work"
                items={[
                  "Adjusting gate frames & structures",
                  "Custom brackets & fittings",
                  "Sheet metal cutting & bending",
                  "Expansions & extensions",
                  "Converting old steel to new designs"
                ]}
              />
            </AnimatedBlock>

            <AnimatedBlock delay={0.7}>
              <ServiceBlock
                icon={Shield}
                title="Rust Treatment & Protective Coatings"
                items={[
                  "Rust removal & grinding",
                  "Steel priming & repainting",
                  "Anti-corrosion coatings",
                  "Weather-resistant finishes",
                  "Protective spraying for longevity"
                ]}
              />
            </AnimatedBlock>

            <AnimatedBlock delay={0.8}>
              <ServiceBlock
                icon={AlertTriangle}
                title="Emergency Welding Repairs"
                items={[
                  "Break-in damage repairs",
                  "Urgent gate/rail/frame welding",
                  "Storm or impact damage repairs",
                  "Mobile same-day welding available"
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
            Need Professional Welding or Steel Fabrication?
          </h3>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            From small repairs to large structural projects, we provide strong, precise and reliable welding services.
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



// Container Animation Wrapper
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
