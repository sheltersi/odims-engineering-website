"use client";

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 px-4 py-16 relative overflow-hidden">

      {/* Background abstract shapes */}
      <div className="absolute top-0 left-10 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      
      <div className="absolute w-40 h-40 md:left-120 left-20 bg-blue-300/20 rotate-45"></div>
      <div className="absolute w-40 h-40 md:left-160 left-55 bg-blue-300/20 rotate-45"></div>
      <div className="absolute w-40 h-40 md:left-200 left-95 bg-blue-300/20 rotate-45"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* HEADER */}
  <div className="text-center mb-12 pb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-mono text-blue-900">
            Customer <span className="text-[#59A5D8]">Reviews</span>
          </h1>

  <div className="max-w-2xl mx-auto">
    <p className="text-center text-[#6E7A85] mt-4 font-mono text-lg">
      See what our clients say about our service and workmanship.
    </p>
  </div>
</div>

        {/* REVIEWS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:mt-4">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl border border-blue-100 p-6"
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
              <p className="text-blue-900 font-medium mb-4 leading-relaxed">
                {review.message}
              </p>

              {/* Divider */}
              <hr className="border-blue-200 my-4" />

              {/* Reviewer Info */}
              <div className="flex items-center gap-3">
                {/* Initial bubble */}
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-lg">
                  {review.name.charAt(0)}
                </div>

                <div>
                  <p className="text-blue-900 font-semibold">{review.name}</p>
                  <p className="text-blue-700 text-sm">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CALL TO ACTION */}
        <div className="text-center mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
            Have we done work for you?
          </h2>
          <p className="text-blue-700 mb-6">
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
    </div>
  );
}
