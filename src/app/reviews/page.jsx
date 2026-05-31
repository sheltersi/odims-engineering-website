"use client";

import { WhatsAppButton } from "@/components/WhatsAppButton";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const reviews = [
  {
    name: "Thabo M.",
    location: "Johannesburg",
    rating: 5,
    message:
      "Excellent service! My gate motor was fixed within an hour. Friendly and professional team.",
  },
  {
    name: "Lerato P.",
    location: "Pretoria",
    rating: 5,
    message:
      "Their welding work is top-notch. The custom gate they built for my home looks amazing!",
  },
  {
    name: "Sipho K.",
    location: "Rustenburg",
    rating: 4,
    message:
      "Very reliable and quick. They installed my electric fence neatly and explained everything clearly.",
  },
  {
    name: "Nomsa D.",
    location: "Nelspruit",
    rating: 5,
    message:
      "Great communication and fair pricing. I highly recommend them for any automation work.",
  },
  {
    name: "David R.",
    location: "Midrand",
    rating: 5,
    message:
      "They installed a solar gate motor for my house. Works perfectly! The team knows what they’re doing.",
  },
  {
    name: "Anita S.",
    location: "Soweto",
    rating: 4,
    message:
      "They came out the same day to fix my broken gate. Fast and friendly! I will use them again.",
  },
];

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* HERO HEADER */}
      <section className="relative py-20 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,theme(colors.blue.800/30),transparent_50%),radial-gradient(ellipse_at_bottom_left,theme(colors.blue.900/40),transparent_50%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Customer <span className="text-blue-400">Reviews</span>
          </h1>
          <p className="text-slate-400 mt-4 text-lg max-w-2xl mx-auto">
            See what our clients say about our service and workmanship.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">

        {/* REVIEWS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:mt-4">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 hover:shadow-lg transition-shadow"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className="text-yellow-500 text-lg"
                  />
                ))}
              </div>

              {/* Message */}
              <p className="text-slate-700 font-medium mb-4 leading-relaxed">
                {review.message}
              </p>

              <hr className="border-slate-100 my-4" />

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-slate-900 font-semibold">{review.name}</p>
                  <p className="text-slate-500 text-sm">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CALL TO ACTION */}
        <div className="text-center mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Have we done work for you?
          </h2>
          <p className="text-slate-500 mb-6">
            We would love to hear about your experience!
          </p>

          <a
            href="/contact"
            className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 shadow-md transition-all"
          >
            Leave a Review
          </a>
        </div>

      </div>
      <WhatsAppButton />
    </div>
  );
}
