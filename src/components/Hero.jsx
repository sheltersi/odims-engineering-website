import Button from "@/components/Button";

export default function Hero() {
  return (
    <section className="relative h-[750px] md:h-[850px] flex items-center overflow-hidden">

      {/* Background Slider */}
      <div className="hero-fade-slider absolute inset-0 z-0">
        {[
          "/assets/img/welding-workshop.png",
          "/assets/img/gate-img.jpg",
          "/assets/img/gate-motor.jpeg",
          "/assets/img/gate-on-the-ground.jpg",
          "/assets/img/image-1.png",
          "/assets/img/iron-bending-image-2.jpg",
          "/assets/img/iron-bending-image.jpg",
          "/assets/img/Modern-Gate-025.jpg",
          "/assets/img/welding-image.jpeg",
          "/assets/img/gate-2.jpg",
        ].map((img, i) => (
          <div
            key={i}
            className="fade-slide"
            style={{
              "--i": i,
              backgroundImage: `url(${img})`,
            }}
          />
        ))}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* subtle orange glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#C5620B]/20 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 text-white items-center">

          {/* LEFT */}
          <div>

            <p className="text-[#FCB861] uppercase tracking-wider text-sm mb-3">
              Gates • Motors • Garage Doors • Welding
            </p>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              Gate Problems? <br />
              <span className="text-[#FCB861]">
                We Fix, Install & Automate.
              </span>
            </h1>

            <p className="text-gray-300 max-w-lg mb-6">
              Fast, reliable welding and automation services in Johannesburg.
              From gate motors to garage doors — we get your access working again.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 mb-6">
              <a
                href="/quote"
                className="bg-[#C5620B] hover:bg-[#FCB861] text-black px-6 py-3 rounded-lg font-medium transition shadow-lg"
              >
                Request a Quote
              </a>

              <a
                href="https://wa.me/27810713204"
                className="border border-[#C5620B] text-[#FCB861] px-6 py-3 rounded-lg hover:bg-[#C5620B]/10 transition"
              >
                WhatsApp Us
              </a>
            </div>

            {/* Trust Points */}
            <ul className="text-sm text-gray-400 space-y-1">
              <li>✔ 10+ years experience</li>
              <li>✔ Mobile service – we come to you</li>
              <li>✔ Same-day emergency repairs</li>
            </ul>

          </div>

          {/* RIGHT CARD */}
          <div className="flex justify-center md:justify-end">

            <div className="bg-[#0a0a0a]/80 border border-[#1a1a1a] backdrop-blur-xl p-6 rounded-2xl max-w-sm w-full shadow-xl">

              <h3 className="text-xl font-semibold mb-2 text-white">
                🚨 Need urgent help?
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                Gate stuck? Motor not working? Garage door jammed?
                Send us a photo on WhatsApp — we’ll respond quickly.
              </p>

              <a
                href="https://wa.me/27810713204"
                className="block text-center bg-[#C5620B] hover:bg-[#FCB861] text-black py-3 rounded-lg font-medium transition"
              >
                Chat on WhatsApp
              </a>

              {/* subtle divider */}
              <div className="mt-4 text-xs text-gray-500 text-center">
                Fast response during working hours
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}