"use client"

import { motion } from "framer-motion";

import Button from "@/components/Button";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { services } from "@/data/services";

// export const metadata = {
//   title: "Services | ProGate Welding & Automation",
// };

export default function ServicesPage() {
     const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

  const blockFade = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};
  return (
    <>
    <section className="relative py-20 md:py-28 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,theme(colors.blue.800/30),transparent_50%),radial-gradient(ellipse_at_bottom_left,theme(colors.blue.900/40),transparent_50%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-blue-400 uppercase mb-4">
              <span className="w-6 h-px bg-blue-500 inline-block" />
              What We Do
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.1]">
              Our <span className="text-blue-400">Services</span>
            </h1>
            <div className="max-w-2xl mx-auto">
              <p className="text-center text-slate-400 mt-4 text-lg">
                We provide a full range of services for gates, gate motors, remotes, garage doors and custom
                welding projects.
              </p>
            </div>
          </div>

          <motion.div
            variants={blockFade}
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {services.map((service) => (
              <ServiceCard key={service.slug} {...service} />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-6">
            Ready to secure &amp; automate your home?
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
            Tell us what you need, send a quick photo of your gate or garage door, and we&apos;ll send you a free quote.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/quote" className="bg-white text-blue-700 hover:bg-blue-50 font-bold px-8 py-4 text-base shadow-xl shadow-blue-900/20">
              Get a Free Quote
            </Button>
            <Button href="/contact" variant="outline" className="border-white/40 text-white hover:bg-white/10 font-bold px-8 py-4 text-base">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
      <WhatsAppButton />
    </>
  );
}
