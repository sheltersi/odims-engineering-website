import Button from "@/components/Button";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <>
      {/* HERO */}
    <Hero />

  <Section className="bg-[#040404] text-white relative overflow-hidden">

  {/* Industrial Glow Accents (subtle, not playful) */}
  <div className="absolute top-10 left-10 w-40 h-40 bg-[#C5620B]/10 rounded-full blur-3xl"></div>
  <div className="absolute bottom-10 right-10 w-56 h-56 bg-[#FCB861]/10 rounded-full blur-3xl"></div>

  <div className="text-center py-20 max-w-3xl mx-auto">

    {/* Kicker */}
    <p className="text-[#FCB861] uppercase tracking-wider text-sm mb-3">
      What We Do
    </p>

    {/* Headline */}
    <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
      Reliable Gate & Welding
      <br />
      <span className="text-[#FCB861]">Solutions That Last</span>
    </h2>

    {/* Description */}
    <p className="text-gray-400 text-lg leading-relaxed mb-4">
      We design, install and repair gate systems, garage doors and custom
      welding structures built for strength, security and long-term use.
    </p>

    <p className="text-gray-500 text-base">
      From electric and solar gates to custom steel fabrication — we deliver
      dependable solutions for homes and businesses.
    </p>

    {/* Accent Line */}
    <div className="w-16 h-[3px] bg-[#C5620B] mx-auto mt-6"></div>

  </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 ">
          {services.map((service) => (
            <ServiceCard key={service.slug} {...service} />
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section title="What Our Clients Say">
        <div className="grid gap-5 md:grid-cols-3 mt-4">
          {testimonials.map((t, idx) => (
            <TestimonialCard key={idx} {...t} />
          ))}
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section className="bg-slate-100" title="Ready to secure and automate your home?">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-700">
            Tell us what you need, send a quick photo of your gate or garage door, and we’ll send you
            a free quote.
          </p>
          <div className="flex gap-3">
            <Button href="/quote">Get a Free Quote</Button>
            <Button href="/services" variant="outline">
              View All Services
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
