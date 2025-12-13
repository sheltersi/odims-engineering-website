"use client";

import { motion } from "framer-motion";
import {
  Award,
  Clock,
  Hammer,
  ShieldCheck,
  Users,
  Wrench
} from "lucide-react";

export default function AboutPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="bg-gradient-to-b from-gray-50 to-white">

       {/* Blue Shapes */}
   <div className="absolute w-40 h-40 md:left-120 left-20 top-50 bg-blue-300/20 rotate-45"></div>
      <div className="absolute w-40 h-40 md:left-160 left-55 top-50 bg-blue-300/20 rotate-45"></div>
      <div className="absolute w-40 h-40 md:left-200 left-95 top-50 bg-blue-300/20 rotate-45"></div>


      {/* ================= HERO ================= */}
      <section className="relative flex flex-col items-center py-24 overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/10"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 font-mono">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl font-extrabold max-w-3xl font-mono"
          >
            <span className=" Precision & Trust">Built on Strength,</span><span className="text-[#59A5D8]"> Precision & Trust</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-gray-700 max-w-3xl"
          >
            ODiMs Welding & Automation is a South African-based company specialising in
            gates, steel fabrication, welding, automation and security solutions for
            homes and businesses.
          </motion.p>
        </div>
      </section>

      {/* ================= STORY ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              What started as a hands-on welding service grew into a full-scale
              fabrication and automation business. We saw the need for reliable,
              well-built gates, strong steel structures, and secure automation systems
              that actually last.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, we combine skilled workmanship, quality materials and practical
              experience to deliver solutions that are not just functional — but built
              to stand the test of time.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200"
          >
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <Hammer className="text-blue-600" /> Skilled steel & welding experts
              </li>
              <li className="flex items-center gap-3">
                <ShieldCheck className="text-blue-600" /> Security-focused installations
              </li>
              <li className="flex items-center gap-3">
                <Wrench className="text-blue-600" /> Repairs, upgrades & maintenance
              </li>
              <li className="flex items-center gap-3">
                <Clock className="text-blue-600" /> Fast response & on-site service
              </li>
            </ul>
          </motion.div>

        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            What We Stand For
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">

            <ValueCard
              icon={<Award />}
              title="Quality Workmanship"
              text="We never cut corners. Every weld, joint and installation is done with care and precision."
            />

            <ValueCard
              icon={<Users />}
              title="Customer First"
              text="We listen, advise honestly, and deliver solutions that fit your needs and budget."
            />

            <ValueCard
              icon={<ShieldCheck />}
              title="Safety & Reliability"
              text="From secure gates to strong steel structures, safety and durability come first."
            />

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            Let’s Build Something Strong Together
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-gray-700 max-w-2xl mx-auto"
          >
            Whether you need a new gate, automation, welding repairs or custom steel
            fabrication — we’re ready to help.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex justify-center gap-4"
          >
            <a
              href="/contact"
              className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Contact Us
            </a>

            <a
              href="/projects"
              className="px-8 py-4 border border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition"
            >
              View Our Work
            </a>
          </motion.div>

        </div>
      </section>

    </main>
  );
}

/* ================= COMPONENT ================= */

function ValueCard({ icon, title, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 text-center"
    >
      <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {title}
      </h3>
      <p className="text-gray-700">
        {text}
      </p>
    </motion.div>
  );
}
