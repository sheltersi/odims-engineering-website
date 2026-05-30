import Button from "@/components/Button";

export default function Hero() {
  return (
    <section className="relative h-[750px] md:h-[850px] py-20 md:py-32 flex items-center overflow-hidden">
    
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
 <div className="absolute inset-0 bg-black/60"></div>
</div>


      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="hero-inner grid md:grid-cols-2 gap-10 text-white">
          <div className="flex-1">
            <p className="hero-kicker">Gates • Gate Motors • Garage Doors • Welding</p>
            <h1 className="hero-title">Professional Welding & Automation Services</h1>
            <p className="hero-subtitle">
              We install, repair and maintain gates, gate motors, remotes and garage doors –
              fast, reliable and affordable in Johannesburg and surrounding areas.
            </p>

            <div className="flex flex-wrap gap-3 mb-4">
              <Button href="/quote">Request a Quote</Button>
              <Button href="/contact" variant="outline" className="bg-[#ABD2FA]">
                Contact Us
              </Button>
            </div>

            <ul className="text-sm text-slate-200 space-y-1">
              <li>• 10+ years experience</li>
              <li>• Mobile service – we come to you</li>
              <li>• Same-day emergency repairs when available</li>
            </ul>
          </div>

          <div className="flex-1">
            <div className="card bg-slate-900/40 border-slate-700 text-slate-400 backdrop-blur">
              <h3 className="text-lg font-semibold mb-2">Need urgent help?</h3>
              <p className="text-sm mb-4">
                Gate stuck open, remote not working or garage door jammed? Send us a WhatsApp with a
                photo and we’ll respond as soon as possible.
              </p>
              <a href="https://wa.me/27810713204" className="btn btn-primary text-sm">
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
