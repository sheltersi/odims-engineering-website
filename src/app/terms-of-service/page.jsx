import React from "react";

export default function TermsOfServicePage() {
  const lastUpdated = "January 8, 2026"; 

  const sections = [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      body:
        "By accessing or using this website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website.",
    },
    {
      id: "services",
      title: "2. Our Services",
      body:
        "ODIMS Welding & Automation provides welding, fabrication, automation, and related industrial services. Information provided on this website is for general informational purposes only and does not constitute a binding offer unless confirmed in writing.",
    },
    {
      id: "use-of-website",
      title: "3. Use of the Website",
      items: [
        "Use the website only for lawful purposes",
        "Not attempt to disrupt or compromise the website’s security",
        "Not misuse or copy content without permission",
      ],
      note:
        "Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.",
    },
    {
      id: "quotes",
      title: "4. Quotes and Estimates",
      body:
        "Any quotes or estimates provided through this website or via communication are subject to change based on project scope, materials, timelines, and site conditions. Final pricing will be confirmed before work begins.",
    },
    {
      id: "intellectual-property",
      title: "5. Intellectual Property",
      body:
        "All content on this website, including text, images, logos, and designs, is the property of ODIMS Welding & Automation unless otherwise stated. You may not reproduce, distribute, or use any content without prior written consent.",
    },
    {
      id: "limitation",
      title: "6. Limitation of Liability",
      body:
        "While we strive to keep information accurate and up to date, ODIMS Welding & Automation makes no warranties or guarantees regarding the completeness or accuracy of website content. We shall not be liable for any direct or indirect damages arising from the use of this website.",
    },
    {
      id: "third-party",
      title: "7. Third-Party Links",
      body:
        "This website may include links to third-party websites for convenience. We do not control or endorse the content of those websites and are not responsible for any loss or damage arising from their use.",
    },
    {
      id: "termination",
      title: "8. Termination of Use",
      body:
        "We reserve the right to suspend or terminate access to this website at any time without notice if these Terms of Service are violated.",
    },
    {
      id: "law",
      title: "9. Governing Law",
      body:
        "These Terms of Service are governed by and interpreted in accordance with the laws of the Republic of South Africa.",
    },
    {
      id: "contact",
      title: "10. Contact Information",
      body:
        "If you have any questions regarding these Terms of Service, please contact us:",
      contact: {
        business: "ODIMS Welding & Automation",
        email: "info@odims.co.za",
        phone: "+27 63 326 4684",
      },
    },
    {
      id: "changes",
      title: "11. Changes to These Terms",
      body:
        "We may update these Terms of Service from time to time. Any changes will be effective immediately once posted on this page.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />
        <div className="absolute top-40 -right-24 h-72 w-72 rounded-full bg-sky-200/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-200/20 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-indigo-500" />
            Legal
          </div>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Terms of Service
          </h1>

          <p className="mt-2 text-sm text-slate-600">
            ODIMS Welding &amp; Automation • Last updated:{" "}
            <span className="font-medium text-slate-800">{lastUpdated}</span>
          </p>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-700">
            These Terms of Service govern your use of our website and outline the
            conditions under which our services and information are provided.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
          {/* Main content */}
          <section className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur sm:p-8">
            <div className="space-y-8">
              {sections.map((s) => (
                <article key={s.id} id={s.id} className="scroll-mt-24">
                  <h2 className="text-lg font-semibold text-slate-900">
                    {s.title}
                  </h2>

                  {s.body && (
                    <p className="mt-2 text-sm leading-relaxed text-slate-700">
                      {s.body}
                    </p>
                  )}

                  {s.items && (
                    <ul className="mt-3 space-y-2 text-sm text-slate-700">
                      {s.items.map((item, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="mt-1 h-2 w-2 rounded-full bg-slate-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {s.note && (
                    <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                      <span className="font-medium text-slate-900">Note: </span>
                      {s.note}
                    </div>
                  )}

                  {s.contact && (
                    <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                      <p className="text-sm font-semibold text-slate-900">
                        {s.contact.business}
                      </p>
                      <div className="mt-3 space-y-2 text-sm text-slate-700">
                        <p>
                          <span className="font-medium">Email:</span>{" "}
                          <a
                            href={`mailto:${s.contact.email}`}
                            className="text-sky-700 underline underline-offset-4 hover:text-sky-800"
                          >
                            {s.contact.email}
                          </a>
                        </p>
                        <p>
                          <span className="font-medium">Phone:</span>{" "}
                          <a
                            href={`tel:${s.contact.phone}`}
                            className="text-sky-700 underline underline-offset-4 hover:text-sky-800"
                          >
                            {s.contact.phone}
                          </a>
                        </p>
                      </div>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>

          {/* Sidebar */}
          <aside className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur lg:sticky lg:top-6">
            <h3 className="text-sm font-semibold text-slate-900">
              On this page
            </h3>
            <nav className="mt-3 space-y-1">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                >
                  {s.title}
                </a>
              ))}
            </nav>

            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600">
              These terms apply only to website usage and general services.
              Project-specific agreements may be provided separately.
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
