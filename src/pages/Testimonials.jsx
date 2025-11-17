import React from "react";
import { Link } from "react-router-dom";

export default function Testimonials() {
  const items = [
    {
      name: "Mrs Patel",
      text: "Wonderful carers — they treated my mother with respect, kindness, and warmth every day.",
      rating: 5
    },
    {
      name: "Mr Ahmed",
      text: "Professional, punctual, and always supportive. The team made life easier for our family.",
      rating: 5
    },
    {
      name: "Sarah T.",
      text: "My father has dementia, and the carers were incredibly patient and understanding.",
      rating: 4
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 space-y-16">

        {/* HERO */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800">Family Experiences & Reviews</h1>
          <p className="mt-4 text-gray-600 text-lg">
            Real stories from families who trust SukhiSaathi Support with their loved ones.
          </p>
        </div>

        {/* FEATURED STORY */}
        <div className="p-8 bg-white rounded-xl border shadow-sm space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Featured Story</h2>
          <p className="text-gray-700 leading-relaxed">
            “After my mother’s stroke, we were unsure what to do. The SukhiSaathi team supported us
            every step of the way — from daily care to emotional support. Their carers became part
            of our family.”
          </p>
          <span className="text-gray-600 font-semibold">— The Brown Family</span>
        </div>

        {/* TESTIMONIAL GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow border hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700">“{t.text}”</p>
              <cite className="block mt-3 text-sm text-gray-500">— {t.name}</cite>
            </div>
          ))}
        </div>

        {/* IMPACT STATS */}
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-[#009EE3]/10 rounded-xl shadow-sm">
            <h3 className="text-3xl font-bold text-[#009EE3]">98%</h3>
            <p className="text-gray-700 mt-2">Family Satisfaction</p>
          </div>
          <div className="p-6 bg-[#009EE3]/10 rounded-xl shadow-sm">
            <h3 className="text-3xl font-bold text-[#009EE3]">15,000+</h3>
            <p className="text-gray-700 mt-2">Clients Supported</p>
          </div>
          <div className="p-6 bg-[#009EE3]/10 rounded-xl shadow-sm">
            <h3 className="text-3xl font-bold text-[#009EE3]">24/7</h3>
            <p className="text-gray-700 mt-2">Care Availability</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/contact" className="px-8 py-4 bg-[#009EE3] text-white rounded-lg text-lg font-semibold shadow hover:bg-[#007bb8]">
            Speak to Our Care Team
          </Link>
         
        </div>

      </div>
    </section>
  );
}
