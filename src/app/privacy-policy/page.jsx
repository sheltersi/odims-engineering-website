import React from "react";

import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function PrivacyPolicyPage() {
  const lastUpdated = "January 8, 2026"; // change if needed

  const sections = [
    {
      id: "info-we-collect",
      title: "1. Information We Collect",
      items: [
        "Name",
        "Email address",
        "Phone number",
        "Any details you choose to provide through contact or enquiry forms",
      ],
      note: "We do not collect sensitive personal information such as banking details or identity numbers through this website.",
    },
    {
      id: "how-we-use",
      title: "2. How We Use Your Information",
      items: [
        "Respond to enquiries or requests",
        "Communicate about our services",
        "Provide quotes or service-related information",
        "Improve our customer service",
      ],
      note: "We do not sell, rent, or trade your personal information to third parties.",
    },
    {
      id: "cookies",
      title: "3. Cookies and Website Analytics",
      body:
        "Our website may use cookies or basic analytics tools to understand how visitors use the site (for example, pages visited or time spent on the site). This information is used only for website improvement and does not personally identify you.",
      footer: "You can choose to disable cookies in your browser settings.",
    },
    {
      id: "sharing",
      title: "4. Sharing of Information",
      items: [
        "When required by law",
        "When necessary to respond to your request (for example, contacting you back)",
      ],
      note: "We do not share your information for marketing purposes.",
    },
    {
      id: "security",
      title: "5. Data Security",
      body:
        "We take reasonable steps to protect your personal information from loss, misuse, or unauthorized access. While no website can guarantee 100% security, we strive to use appropriate measures to safeguard your data.",
    },
    {
      id: "third-party-links",
      title: "6. Third-Party Links",
      body:
        "Our website may contain links to external websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review their privacy policies separately.",
    },
    {
      id: "your-rights",
      title: "7. Your Rights",
      body: "You have the right to:",
      items: [
        "Request access to your personal information",
        "Request correction or deletion of your information",
        "Withdraw consent for communication at any time",
      ],
      footer:
        "To exercise any of these rights, please contact us using the details below.",
    },
    {
      id: "contact",
      title: "8. Contact Information",
      body:
        "If you have any questions about this Privacy Policy or how your information is handled, please contact us:",
      contact: {
        business: "ODIMS Welding & Automation",
        email: "info@odims.co.za",
        phone: "+27 63 326 4684",
      },
    },
    {
      id: "changes",
      title: "9. Changes to This Policy",
      body:
        "We may update this Privacy Policy from time to time. Any changes will be posted on this page.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />
        <div className="absolute top-40 -left-24 h-72 w-72 rounded-full bg-indigo-200/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-emerald-200/20 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Policy
          </div>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Privacy Policy
          </h1>

          <p className="mt-2 text-sm text-slate-600">
            ODIMS Welding &amp; Automation • Last updated:{" "}
            <span className="font-medium text-slate-800">{lastUpdated}</span>
          </p>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-700">
            We respect your privacy and are committed to protecting any personal
            information you share with us through our website. This policy
            explains what we collect, why we collect it, and how we protect it.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1fr_280px] lg:items-start">
          {/* Main card */}
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
                          <span className="mt-1 inline-block h-2 w-2 rounded-full bg-slate-400" />
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

                  {s.footer && (
                    <p className="mt-3 text-sm leading-relaxed text-slate-700">
                      {s.footer}
                    </p>
                  )}

                  {s.contact && (
                    <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                      <p className="text-sm font-semibold text-slate-900">
                        {s.contact.business}
                      </p>
                      <div className="mt-3 space-y-2 text-sm text-slate-700">
                        <p>
                          <span className="font-medium text-slate-800">
                            Email:
                          </span>{" "}
                          <a
                            href={`mailto:${s.contact.email}`}
                            className="text-sky-700 underline decoration-sky-300 underline-offset-4 hover:text-sky-800"
                          >
                            {s.contact.email}
                          </a>
                        </p>
                        <p>
                          <span className="font-medium text-slate-800">
                            Phone:
                          </span>{" "}
                          <a
                            href={`tel:${s.contact.phone}`}
                            className="text-sky-700 underline decoration-sky-300 underline-offset-4 hover:text-sky-800"
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

          {/* Sidebar / Table of Contents */}
          <aside className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur lg:sticky lg:top-6">
            <h3 className="text-sm font-semibold text-slate-900">
              On this page
            </h3>
            <nav className="mt-3 space-y-1">
              {sections
                .filter((s) => s.id !== "contact")
                .map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  >
                    {s.title}
                  </a>
                ))}
              <a
                href="#contact"
                className="mt-2 block rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-800"
              >
                Contact details
              </a>
            </nav>

            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600">
              Tip: If you add payments, user accounts, newsletters, or advanced
              tracking later, you should expand this policy.
            </div>
          </aside>
        </div>
      </div>
      <WhatsAppButton />
    </main>
  );
}
