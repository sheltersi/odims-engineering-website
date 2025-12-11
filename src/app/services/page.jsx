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
    <Section>
    <div className="flex flex-col items-center relative py-20">

     {/* Blue Shapes */}
  <div className="absolute top-0 left-10 w-40 h-40 bg-blue-300 rounded-full blur-2xl  opacity-60"></div>
  <div className="absolute bottom-0 right-10 w-56 h-56 bg-blue-300 rounded-full blur-2xl opacity-50"></div>
  <div className="absolute top-20 right-32 w-24 h-24 bg-blue-300 rounded-full blur-2xl  opacity-60"></div>

    <motion.h2
    className="text-[#7692FF] font-mono text-3xl font-extrabold"
    initial="hidden"
    animate="visible"
    variants={fadeIn}
    transition={{ duration: 0.6 }}
  >
      Our Services
    </motion.h2>
    <hr className="border-4 w-[200px] border-[#3D518C] mb-4 mt-4" />
       <motion.p
    className="md:w-2xl mb-8 mt-4 text-slate-600 text-lg font-mono"
    initial="hidden"
    animate="visible"
    variants={fadeIn}
    transition={{ duration: 0.6 }}
  >
        We provide a full range of services for gates, gate motors, remotes, garage doors and custom
        welding projects.
      </motion.p>
      </div>

  <motion.div
      variants={blockFade}
      className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mt-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
        {services.map((service) => (
          <ServiceCard key={service.slug} {...service} />
        ))}
     </motion.div>
    </Section>
         <Section className="bg-slate-100" title="Ready to secure and automate your home?">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-slate-700">
                  Tell us what you need, send a quick photo of your gate or garage door, and we’ll send you
                  a free quote.
                </p>
                <div className="flex gap-3">
                  <Button href="/quote">Get a Free Quote</Button>
                  <Button href="/services" variant="outline">
                    Contact Us
                  </Button>
                </div>
              </div>
            </Section>
            <WhatsAppButton />
            </>
  );
}
