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

      {/* SERVICES */}
      <Section >
      {/* <div className="text-center flex flex-col items-center"> */}
     <div className="relative py-20">
  {/* Blue Shapes */}
  <div className="absolute top-0 left-10 w-40 h-40 bg-blue-300 rounded-full blur-2xl  opacity-60"></div>
  <div className="absolute bottom-0 right-10 w-56 h-56 bg-blue-300 rounded-full blur-2xl opacity-50"></div>
  <div className="absolute top-20 right-32 w-24 h-24 bg-blue-300 rounded-full blur-2xl  opacity-40"></div>

  {/* Content */}
  <div className="flex flex-col items-center text-center">
    <h3 className="text-3xl font-mono font-bold">Our Solutions.</h3>
    <hr className="border-4 w-[300px] border-[#7692FF] mb-4 mt-4" />

    <p className="text-blue-950 text-xl font-mono mt-8">
      Automation solutions that keep your property secure and convenient.
    </p>
    <p className="font-mono text-xl pb-8">
      From custom welding to Installation of electric and solar gates, we got you covered.
    </p>
  </div>
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
