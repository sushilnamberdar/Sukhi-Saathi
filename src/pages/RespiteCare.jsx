import React from "react";
import respitecareImg from "../assets/services/RespiteCare.png";

export default function RespiteCare() {
  return (
    <section className="py-16 bg-white">
       <div className="relative w-full h-60 sm:h-64 md:h-80 lg:h-[620px] xl:h-[1600px] rounded-xl overflow-hidden mb-12">
        <img
          src={respitecareImg}
          alt="Respite Care"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-6xl mx-auto px-4 space-y-16">


        {/* HERO */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800">Respite Care</h1>
          <p className="mt-4 text-gray-600 text-lg">
            Reliable short-term care that gives family carers the rest they deserve — with complete peace of mind.
          </p>
        </div>

        {/* ABOUT */}
        <div className="p-8 bg-gray-50 rounded-xl border shadow-sm">
          <h2 className="text-2xl font-semibold">Supporting Carers & Families</h2>
          <p className="mt-3 text-gray-700">
            Taking a break is essential. Our respite care service provides temporary, high-quality support so family members can rest, recharge, or attend important commitments.
          </p>
        </div>

        {/* SERVICES */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Short-term home care cover",
            "Personal care & daily living support",
            "Medication support",
            "Mobility & safety assistance",
            "Companionship & wellbeing support",
            "Overnight respite care"
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white border rounded-xl shadow-sm">
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>

        {/* WHO BENEFITS */}
        <div className="p-8 bg-white border rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-3">Who Is Respite Care For?</h2>
          <ul className="text-gray-700 space-y-2">
            <li>• Family carers needing a break</li>
            <li>• Emergency or last-minute support</li>
            <li>• Post-hospital recovery</li>
            <li>• Short-term increased care needs</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="/contact"
            className="px-8 py-4 bg-[#009EE3] text-white font-semibold rounded-lg hover:bg-[#007bb8] shadow">
            Request Respite Care
          </a>
        </div>

      </div>
    </section>
  );
}
