import React from "react";

export default function WhyChosseUs() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 bg-white text-black">
      <h3 className="text-3xl font-bold text-center">Why Choose Us</h3>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mt-4">
        We provide safe, compassionate, reliable care — delivered by people who treat your family like their own.
      </p>

      {/* FEATURE GRID */}
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow hover:shadow-md transition">
          <h4 className="font-semibold text-lg">Person-centred support</h4>
          <p className="mt-2 text-sm text-gray-700">
            Every care plan is created with you — not for you. We prioritise dignity, choice, and independence.
          </p>
        </div>

        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow hover:shadow-md transition">
          <h4 className="font-semibold text-lg">Fully Trained Carers</h4>
          <p className="mt-2 text-sm text-gray-700">
            Our carers receive ongoing training, DBS checks, and regular supervision to ensure the highest standards.
          </p>
        </div>

        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow hover:shadow-md transition">
          <h4 className="font-semibold text-lg">Reliable & Consistent Support</h4>
          <p className="mt-2 text-sm text-gray-700">
            We provide continuity of care — the same familiar faces who understand your routine and preferences.
          </p>
        </div>

        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow hover:shadow-md transition">
          <h4 className="font-semibold text-lg">24/7 Availability</h4>
          <p className="mt-2 text-sm text-gray-700">
            Whether it's regular visits or urgent support, our team is here whenever you need us.
          </p>
        </div>

        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow hover:shadow-md transition">
          <h4 className="font-semibold text-lg">Local, Trusted Teams</h4>
          <p className="mt-2 text-sm text-gray-700">
            Our carers live and work within your community — providing support that feels personal and familiar.
          </p>
        </div>

        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow hover:shadow-md transition">
          <h4 className="font-semibold text-lg">Specialist Care Expertise</h4>
          <p className="mt-2 text-sm text-gray-700">
            Dementia, mobility support, medication help, complex needs — our team is trained for all levels of care.
          </p>
        </div>

      </div>

      {/* STATS / TRUST SECTION */}
      <div className="mt-16 grid sm:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="text-4xl font-bold text-[#009EE3]">98%</h3>
          <p className="text-gray-600 mt-2">Family Satisfaction</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-[#009EE3]">15,000+</h3>
          <p className="text-gray-600 mt-2">Clients Supported Nationwide</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-[#009EE3]">24/7</h3>
          <p className="text-gray-600 mt-2">Care Availability</p>
        </div>
      </div>

      {/* TRUST BADGES */}
      <div className="mt-16 flex flex-wrap justify-center gap-6">
        <div className="px-6 py-3 bg-gray-100 rounded-xl text-gray-700 border">CQC Compliant</div>
        <div className="px-6 py-3 bg-gray-100 rounded-xl text-gray-700 border">Fully Insured</div>
        <div className="px-6 py-3 bg-gray-100 rounded-xl text-gray-700 border">DBS Checked Staff</div>
        <div className="px-6 py-3 bg-gray-100 rounded-xl text-gray-700 border">ISO-Aligned Standards</div>
      </div>

      {/* CTA */}
      <div className="text-center mt-14">
      
      </div>

    </section>
  );
}
