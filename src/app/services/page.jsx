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

     {/* Blue Shapes */}
   <div className="absolute w-40 h-40 md:left-120 left-20 top-50 bg-blue-300/20 rotate-45"></div>
      <div className="absolute w-40 h-40 md:left-160 left-55 top-50 bg-blue-300/20 rotate-45"></div>
      <div className="absolute w-40 h-40 md:left-200 left-95 top-50 bg-blue-300/20 rotate-45"></div>

    <div className="flex flex-col items-center relative py-20">


    {/* <motion.h2
    className="text-[#7692FF] font-mono text-3xl font-extrabold"
    initial="hidden"
    animate="visible"
    variants={fadeIn}
    transition={{ duration: 0.6 }}
  >
      Our Services
    </motion.h2>
    <hr className="border-4 w-[200px] border-[#3D518C] mb-4 mt-4" />
     */}
        <div className="text-center mb-12 pb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-mono text-blue-900">
            Our <span className="text-[#59A5D8]">Services</span>
          </h1>

  <div className="max-w-2xl mx-auto">
    <p className="text-center text-[#6E7A85] mt-4 font-mono text-lg">
             We provide a full range of services for gates, gate motors, remotes, garage doors and custom
        welding projects.
    </p>
  </div>
    </div>
</div>


  <motion.div
      variants={blockFade}
      className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mt-4"
      initial="hidden"
      whileInView="visible"
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
