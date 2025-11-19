import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-indigo-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-8 items-center">
        
        {/* Left text section */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Friendly, trusted home support for everyday living
          </h1>

          <p className="mt-4 text-lg text-gray-700">
            SukhiSaathi Support provides non-medical home assistance,
            companionship, and wellbeing support — helping people stay
            independent, confident, and connected at home.
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href="/contact"
              className="inline-block bg-[#009EE3] text-white px-5 py-3 rounded-md shadow"
            >
              Contact us today
            </a>

            <a
              href="/services"
              className="inline-block border border-[#009EE3] text-[#009EE3] px-5 py-3 rounded-md"
            >
              Our support services
            </a>
          </div>

          <div className="mt-8 flex gap-6 text-sm text-gray-600">
            <div>
              <p className="text-2xl font-bold text-[#009EE3]">30+</p>
              <p>Years’ combined experience</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-[#009EE3]">500+</p>
              <p>Individuals supported</p>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop"
            alt="Support worker smiling with an older person"
            className="rounded-2xl shadow-xl w-full object-cover h-80"
          />
        </div>

      </div>
    </section>
  );
}
