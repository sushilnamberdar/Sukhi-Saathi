import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-indigo-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-8 items-center">
        
        {/* Left text section */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Compassionate home care services across the UK
          </h1>

          <p className="mt-4 text-lg text-gray-700">
            SukhiSaathi Support provides personalised live-in care,
            companionship, and homecare support tailored to you or your
            loved one. Safe. Dignified. Reliable.
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href="/contact"
              className="inline-block bg-[#009EE3] text-white px-5 py-3 rounded-md shadow"
            >
              Book a free assessment
            </a>

            <a
              href="/services"
              className="inline-block border border-[#009EE3] text-[#009EE3] px-5 py-3 rounded-md"
            >
              Our services
            </a>
          </div>

          <div className="mt-8 flex  gap-3 text-sm text-gray-600">
            <div>
            <p className="text-2xl">30+</p>
            <p className="text-gray-600">Years' combined experience:</p>
            </div>
            <div>
            <p className="text-2xl">500+</p>
            <p className="text-gray-600">Clients supported:</p>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop"
            alt="Carer and older woman smiling"
            className="rounded-2xl shadow-xl w-full object-cover h-80"
          />
        </div>

      </div>
    </section>
  );
}



