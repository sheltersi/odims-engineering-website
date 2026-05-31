"use client";

import { useRef, useState } from "react";
import Swal from "sweetalert2";

import { WhatsAppButton } from "@/components/WhatsAppButton";
import { supabase } from "@/lib/supabaseClient";
import {
  faClock,
  faFileInvoiceDollar,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const services = [
  "Gate Motor Installation",
  "Welding & Steel Work",
  "Electric Fencing",
  "Security Gate Fabrication",
  "Garage Door Motors",
  "Remote Coding",
  "Burglar Bars & Security Doors",
  "Carports & Steel Structures",
  "Palisade Fencing",
  "Mobile Welding",
  "Maintenance & Repairs",
  "Other Custom Work",
];

export default function QuotePage() {
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const fileInputRef = useRef(null);

  function handleFileChange(e) {
    const selected = Array.from(e.target.files);
    setFiles(selected);
    previews.forEach((url) => URL.revokeObjectURL(url));
    const urls = selected.map((file) => URL.createObjectURL(file));
    setPreviews(urls);
  }

  function removeImage(index) {
    URL.revokeObjectURL(previews[index]);
    const newFiles = files.filter((_, i) => i !== index);
    const newPreviews = previews.filter((_, i) => i !== index);
    setFiles(newFiles);
    setPreviews(newPreviews);
    if (fileInputRef.current) {
      const dt = new DataTransfer();
      newFiles.forEach((f) => dt.items.add(f));
      fileInputRef.current.files = dt.files;
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (loading) return;

    const form = e.target;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name")?.trim(),
      email: formData.get("email")?.trim(),
      phone: formData.get("phone")?.trim(),
      area: formData.get("area")?.trim(),
      service: formData.get("service"),
      message: formData.get("message")?.trim(),
      file_urls: [],
    };

    if (!payload.name || !payload.phone || !payload.service || !payload.message) {
      Swal.fire({
        icon: "warning",
        title: "Missing information",
        text: "Please fill in all required fields.",
      });
      return;
    }

    try {
      setLoading(true);

      if (files.length > 0) {
        for (const file of files) {
          const fileName = `${Date.now()}-${file.name}`;
          const { data, error: uploadError } = await supabase.storage
            .from("contact-uploads")
            .upload(fileName, file);

          if (uploadError) {
            throw new Error(`File upload failed: ${uploadError.message}`);
          }

          payload.file_urls.push(data.path);
        }
      }

      const { error } = await supabase
        .from("contact_requests")
        .insert([payload]);

      if (error) {
        throw new Error(`Database error: ${error.message}`);
      }

      const emailRes = await fetch("/api/send-contact-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!emailRes.ok) {
        throw new Error("Email failed");
      }

      Swal.fire({
        icon: "success",
        title: "Quote request sent!",
        text: "Would you like to continue on WhatsApp?",
        showCancelButton: true,
        confirmButtonText: "Open WhatsApp",
        confirmButtonColor: "#104911",
        cancelButtonText: "Close",
      }).then((result) => {
        if (result.isConfirmed) {
          window.open(
            `https://wa.me/27810713204?text=Hi%20ODiMs%20Team,%20I%20just%20requested%20a%20quote%20for%20${payload.service}`,
            "_blank"
          );
        }
      });

      form.reset();
      setFiles([]);
      previews.forEach((url) => URL.revokeObjectURL(url));
      setPreviews([]);
    } catch (err) {
      console.error("Quote form error:", err);
      Swal.fire({
        icon: "error",
        title: "Something went wrong",
        text: err.message || "Please try again later or contact us directly.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 px-4 py-16 relative overflow-hidden">
      {/* Background abstract shapes */}
      <div className="absolute top-10 left-20 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-2xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-mono text-blue-900">
            Get a Free <span className="text-[#59A5D8]">Quote</span>
          </h1>
          <p className="text-[#6E7A85] mt-4 font-mono text-lg">
            Tell us about your project — we respond within 24 hours.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* QUOTE FORM */}
          <div className="bg-white shadow-2xl rounded-2xl p-8 border border-blue-100">
            <h2 className="text-2xl font-semibold text-blue-900 mb-6">
              Request a Quote
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block font-medium text-blue-900 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block font-medium text-blue-900 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  name="phone"
                  type="tel"
                  required
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block font-medium text-blue-900 mb-1">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Area */}
              <div>
                <label className="block font-medium text-blue-900 mb-1">
                  Area / Suburb
                </label>
                <input
                  name="area"
                  type="text"
                  placeholder="Your location"
                  className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Service */}
              <div>
                <label className="block font-medium text-blue-900 mb-1">
                  Service Required <span className="text-red-500">*</span>
                </label>
                <select
                  name="service"
                  required
                  className="w-full rounded-lg border border-blue-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Upload Photos */}
              <div>
                <label className="block font-medium text-blue-900 mb-1">
                  Upload Photos (optional)
                </label>
                <input
                  type="file"
                  name="attachment"
                  ref={fileInputRef}
                  multiple
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full text-sm rounded-lg border border-blue-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 file:mr-3 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
                />
                {previews.length > 0 && (
                  <div className="grid grid-cols-3 gap-3 mt-4">
                    {previews.map((url, i) => (
                      <div key={url} className="relative group rounded-lg overflow-hidden border border-blue-100">
                        <img
                          src={url}
                          alt={`Preview ${i + 1}`}
                          className="w-full h-24 object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(i)}
                          className="absolute top-1 right-1 bg-red-500 hover:bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block font-medium text-blue-900 mb-1">
                  Project Details <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="Describe what you need done..."
                  className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-4 font-semibold rounded-xl transition-all shadow-md
                  ${loading ? "bg-blue-400 cursor-not-allowed" : "bg-[#84D2F6] hover:bg-blue-700"}
                  text-white`}
              >
                {loading ? "Submitting..." : "Get My Free Quote"}
              </button>
            </form>
          </div>

          {/* RIGHT COLUMN — Benefits + WhatsApp + Stats */}
          <div className="space-y-8">
            {/* Benefits */}
            <div className="bg-white shadow-2xl rounded-2xl p-8 border border-blue-100">
              <h2 className="text-2xl font-semibold text-blue-900 mb-6">
                Why Request a Quote?
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#84D2F6] text-white p-3 rounded-full flex-shrink-0">
                    <FontAwesomeIcon icon={faFileInvoiceDollar} />
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900">Free, No-Obligation Quote</p>
                    <p className="text-[#6E7A85] text-sm">Get a clear estimate with no hidden costs.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#84D2F6] text-white p-3 rounded-full flex-shrink-0">
                    <FontAwesomeIcon icon={faClock} />
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900">Fast Response</p>
                    <p className="text-[#6E7A85] text-sm">We reply within 24 hours, often same-day.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#84D2F6] text-white p-3 rounded-full flex-shrink-0">
                    <FontAwesomeIcon icon={faUserCheck} />
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900">Professional Team</p>
                    <p className="text-[#6E7A85] text-sm">Skilled technicians with years of experience.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-blue-900 shadow-2xl rounded-2xl p-8 text-white">
              <h3 className="text-xl font-semibold mb-4">Prefer WhatsApp?</h3>
              <p className="text-blue-200 mb-6">
                Send us photos and details directly on WhatsApp for a faster quote.
              </p>
              <a
                href="https://wa.me/27810713204?text=Hi%20ODiMs%20Team,%20I%20would%20like%20a%20quote%20for..."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#84D2F6] hover:bg-[#59A5D8] text-blue-900 px-6 py-3 rounded-xl font-semibold transition-all shadow-md"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Trust Stats */}
            <div className="bg-white shadow-2xl rounded-2xl p-8 border border-blue-100 text-center">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-[#59A5D8]">150+</div>
                  <p className="text-[#6E7A85] text-sm">Gates Installed</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#59A5D8]">24h</div>
                  <p className="text-[#6E7A85] text-sm">Response Time</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#59A5D8]">5★</div>
                  <p className="text-[#6E7A85] text-sm">Rating</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#59A5D8]">100%</div>
                  <p className="text-[#6E7A85] text-sm">Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WhatsAppButton />

      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-blue-950/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-2xl shadow-2xl p-10 flex flex-col items-center gap-5 max-w-sm mx-4 animate-in zoom-in-95">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 rounded-full border-4 border-blue-100"></div>
              <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#59A5D8] animate-spin"></div>
            </div>
            <p className="text-lg font-semibold text-blue-900">Preparing Your Quote</p>
            <p className="text-sm text-[#6E7A85] text-center">
              Uploading files and sending your request. This will only take a moment.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
