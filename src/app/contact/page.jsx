"use client";

import { useState } from "react";
import Swal from "sweetalert2";

import ServicesMap from "@/components/ServicesAreaMap";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { supabase } from "@/lib/supabaseClient";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const services = [
  "Gate Fabrication",
  "Gate Motor Installation",
  "Gate Repairs & Maintenance",
  "Garage Doors & Automation",
  "Burglar Bars & Security Doors",
  "Carports & Steel Structures",
  "Palisade Fencing",
  "Welding & Steelwork",
  "Mobile Welding Services",
  "Custom Steel Fabrication",
  "Maintenance & Emergency Repairs",
  "Something Else Not On The List",
];

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [imageFiles, setImageFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [videoFiles, setVideoFiles] = useState([]);
  const [videoPreviews, setVideoPreviews] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);

  function toggleService(service) {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  }

  function handleImageChange(e) {
    const selected = Array.from(e.target.files);
    setImageFiles([...imageFiles, ...selected]);
    setImagePreviews([...imagePreviews, ...selected.map((file) => URL.createObjectURL(file))]);
  }

  function handleVideoChange(e) {
    const selected = Array.from(e.target.files);
    setVideoFiles([...videoFiles, ...selected]);
    setVideoPreviews([...videoPreviews, ...selected.map((file) => URL.createObjectURL(file))]);
  }

  function removeImage(index) {
    URL.revokeObjectURL(imagePreviews[index]);
    setImageFiles(imageFiles.filter((_, i) => i !== index));
    setImagePreviews(imagePreviews.filter((_, i) => i !== index));
  }

  function removeVideo(index) {
    URL.revokeObjectURL(videoPreviews[index]);
    setVideoFiles(videoFiles.filter((_, i) => i !== index));
    setVideoPreviews(videoPreviews.filter((_, i) => i !== index));
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
      service: selectedServices,
      message: formData.get("message")?.trim(),
      file_urls: [],
    };

    

    // -----------------------
    // CLIENT-SIDE VALIDATION
    // -----------------------

    if (
      !payload.name ||
      !payload.email ||
      selectedServices.length === 0 ||
      !payload.message
    ) {
      Swal.fire({
        icon: "warning",
        title: "Missing information",
        text: "Please fill in all required fields.",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(payload.email)) {
      Swal.fire({
        icon: "error",
        title: "Invalid email",
        text: "Please enter a valid email address.",
      });
      return;
    }

    try {
      setLoading(true);

      // -----------------------
    // File upload code
    // -----------------------

    const allFiles = [...imageFiles, ...videoFiles];
    if (allFiles.length > 0) {
      for (const file of allFiles) {
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

      // -----------------------
      // SAVE TO SUPABASE
      // -----------------------
      const { error } = await supabase
        .from("contact_requests")
        .insert([payload]);

      if (error) {
        throw new Error("Database error");
      }

      // -----------------------
      // SEND EMAIL (SERVER)
      // -----------------------
      const emailRes = await fetch("/api/send-contact-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!emailRes.ok) {
        throw new Error("Email failed");
      }

      // -----------------------
      // SUCCESS FEEDBACK
      // -----------------------
      // Swal.fire({
      //   icon: "success",
      //   title: "Message sent!",
      //   text: "Thank you for contacting us. We’ll get back to you shortly.",
      //   confirmButtonColor: "#2563eb",
      // });

      Swal.fire({
        icon: "success",
        title: "Message sent!",
        text: "Would you like to continue on WhatsApp?",
        showCancelButton: true,
        confirmButtonText: "Open WhatsApp",
        confirmButtonColor: "#104911",
        cancelButtonText: "Close",
      }).then((result) => {
        if (result.isConfirmed) {
          window.open(
            `https://wa.me/27810713204?text=Hi%20ODiMs%20Team,%20I%20just%20sent%20a%20request%20for%20${payload.service.join(", ")}`,
            "_blank"
          );
        }
      });

      form.reset();
      setSelectedServices([]);
      imagePreviews.forEach((url) => URL.revokeObjectURL(url));
      videoPreviews.forEach((url) => URL.revokeObjectURL(url));
      setImageFiles([]);
      setImagePreviews([]);
      setVideoFiles([]);
      setVideoPreviews([]);
    } catch (err) {
      console.error("Contact form error:", err);
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
    <div className="min-h-screen bg-white">
      {/* HERO HEADER */}
      <section className="relative py-20 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,theme(colors.blue.800/30),transparent_50%),radial-gradient(ellipse_at_bottom_left,theme(colors.blue.900/40),transparent_50%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Contact <span className="text-blue-400">Us</span>
          </h1>
          <p className="text-slate-400 mt-4 text-lg max-w-2xl mx-auto">
            We are here to help. Reach out anytime.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* CONTACT INFORMATION BOX */}
          <div className="bg-white shadow-2xl rounded-2xl p-8 border border-blue-100">
            <h2 className="text-2xl font-semibold text-blue-900 mb-6">
              Get in Touch
            </h2>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="bg-blue-600 text-white p-3 rounded-full">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Phone Number</p>
                  <p className="text-slate-500">+27 63 326 4684</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="bg-blue-600 text-white p-3 rounded-full">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Email Address</p>
                  <p className="text-slate-500">info@odims.co.za</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="bg-blue-600 text-white p-3 rounded-full">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Our Location</p>
                  <p className="text-slate-500">Johannesburg, South Africa</p>
                </div>
              </div>
            </div>

            {/* Small Message */}
            <p className="text-slate-500 text-sm mt-10">
              Our team replies within 1–12 hours. For urgent help, please call
              us directly.
            </p>
          </div>

          {/* CONTACT FORM */}
          <div className="bg-white shadow-2xl rounded-2xl p-8 border border-blue-100">
            <h2 className="text-2xl font-semibold text-blue-900 mb-6">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block font-medium text-blue-900 mb-1">
                  Full Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Enter your name"
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
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block font-medium text-blue-900 mb-1">
                  Phone Number
                </label>
                <input
                  name="phone"
                  type="text"
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* services */}
              <div>
                <label className="block font-medium text-blue-900 mb-2">
                  Service Required
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {services.map((service) => (
                    <label
                      key={service}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg border cursor-pointer transition-colors ${
                        selectedServices.includes(service)
                          ? "bg-blue-50 border-blue-400"
                          : "border-blue-200 hover:border-blue-300"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={selectedServices.includes(service)}
                        onChange={() => toggleService(service)}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-slate-700">{service}</span>
                    </label>
                  ))}
                </div>
                {selectedServices.length > 0 && (
                  <p className="text-xs text-blue-600 mt-2">
                    {selectedServices.length} service{selectedServices.length > 1 ? "s" : ""} selected
                  </p>
                )}
              </div>

              {/* image upload */}
              <div>
                <label className="block font-medium text-blue-900 mb-1">
                  Upload Images (optional)
                </label>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={(e) => { handleImageChange(e); e.target.value = ""; }}
                  className="w-full text-sm rounded-lg border border-blue-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 file:mr-3 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
                />
                {imagePreviews.length > 0 && (
                  <p className="text-xs text-blue-600 mt-1">{imagePreviews.length} image{imagePreviews.length > 1 ? "s" : ""} selected</p>
                )}
                {imagePreviews.length > 0 && (
                  <div className="grid grid-cols-3 gap-3 mt-4">
                    {imagePreviews.map((url, i) => (
                      <div key={url} className="relative group rounded-lg overflow-hidden border border-blue-100">
                        <img src={url} alt={`Preview ${i + 1}`} className="w-full h-24 object-cover" />
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

              {/* video upload */}
              <div>
                <label className="block font-medium text-blue-900 mb-1">
                  Upload Videos (optional)
                </label>
                <input
                  type="file"
                  multiple
                  accept="video/*"
                  onChange={(e) => { handleVideoChange(e); e.target.value = ""; }}
                  className="w-full text-sm rounded-lg border border-blue-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 file:mr-3 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
                />
                {videoPreviews.length > 0 && (
                  <p className="text-xs text-blue-600 mt-1">{videoPreviews.length} video{videoPreviews.length > 1 ? "s" : ""} selected</p>
                )}
                {videoPreviews.length > 0 && (
                  <div className="grid grid-cols-3 gap-3 mt-4">
                    {videoPreviews.map((url, i) => (
                      <div key={url} className="relative group rounded-lg overflow-hidden border border-blue-100">
                        <video src={url} className="w-full h-24 object-cover" controls />
                        <button
                          type="button"
                          onClick={() => removeVideo(i)}
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
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-4 font-semibold rounded-xl transition-all shadow-md
                            ${
                              loading
                                ? "bg-blue-400 cursor-not-allowed"
                                : "bg-blue-600 hover:bg-blue-700"
                            }
                            text-white
                          `}
                    >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>

        {/* MAP SECTION */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4 text-center">
            Our Location
          </h2>

          <div className="w-full h-64 bg-blue-200/30 rounded-2xl border border-blue-100 flex items-center justify-center text-blue-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.3293493002298!2d28.076554675636654!3d-26.12080237712807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950d3c9da215d9%3A0xf23027d64f85a7ac!2s4%20Heelra%20Rd%2C%20Raumaraispark%2C%20Johannesburg%2C%202090!5e0!3m2!1sen!2sza!4v1765031112834!5m2!1sen!2sza"
              className="w-full h-64"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <WhatsAppButton />

      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-blue-950/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl p-10 flex flex-col items-center gap-5 max-w-sm mx-4">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 rounded-full border-4 border-blue-100"></div>
              <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 animate-spin"></div>
            </div>
            <p className="text-lg font-semibold text-slate-900">Sending Your Message</p>
            <p className="text-sm text-slate-500 text-center">
              Uploading files and sending your request. This will only take a moment.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
