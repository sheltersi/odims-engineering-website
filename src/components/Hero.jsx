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
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/70 to-slate-900/50" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-blue-300 uppercase tracking-widest text-sm font-semibold mb-4">
              Gates &bull; Gate Motors &bull; Garage Doors &bull; Welding
            </p>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
              Professional Welding &amp; Automation Services
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-lg mb-8">
              We install, repair and maintain gates, gate motors, remotes and garage doors &mdash;
              fast, reliable and affordable in Johannesburg and surrounding areas.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <Button href="/quote" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 text-base shadow-xl shadow-blue-900/30">
                Request a Quote
              </Button>
              <Button href="/contact" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold px-8 py-4 text-base backdrop-blur-sm">
                Contact Us
              </Button>
            </div>

            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                10+ years experience
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Mobile service &mdash; we come to you
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Same-day emergency repairs when available
              </li>
            </ul>
          </div>

          <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">!</span>
                <div>
                  <h3 className="text-white font-bold">Need urgent help?</h3>
                  <p className="text-xs text-blue-200">We respond fast</p>
                </div>
              </div>
              <p className="text-sm text-slate-300 mb-5 leading-relaxed">
                Gate stuck open, remote not working or garage door jammed? Send us a WhatsApp with a
                photo and we&apos;ll respond as soon as possible.
              </p>
              <a
                href="https://wa.me/27810713204"
                className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white text-sm font-bold transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
