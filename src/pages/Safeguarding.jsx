import React from "react";

export default function Safeguarding() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 bg-white space-y-12">

      {/* HERO */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800">Safeguarding & Safety</h1>
        <p className="mt-4 text-gray-600 text-lg">
          We are committed to protecting every individual we support. Safety, dignity, and respect are at the heart of everything we do.
        </p>
      </div>

      {/* SECTION 1 */}
      <div className="p-8 bg-gray-50 rounded-xl border shadow-sm space-y-4">
        <h2 className="text-2xl font-semibold">Our Commitment to Safeguarding</h2>
        <p className="text-gray-700 leading-relaxed">
          Even as a non-CQC regulated support provider, we follow strict safeguarding principles aligned
          with local authority guidance to ensure every person we support is safe, respected, and heard.
        </p>
      </div>

      {/* SECTION 2 */}
      <div className="p-8 bg-white rounded-xl border shadow-sm space-y-4">
        <h2 className="text-2xl font-semibold">How We Keep People Safe</h2>
        <ul className="space-y-2 text-gray-700">
          <li>• Enhanced DBS checks for all team members</li>
          <li>• Mandatory safeguarding & boundaries training</li>
          <li>• Clear reporting procedures for concerns or incidents</li>
          <li>• Lone working policies to ensure staff and client safety</li>
          <li>• Regular reviews with families to monitor wellbeing</li>
        </ul>
      </div>

      {/* SECTION 3 */}
      <div className="p-8 bg-gray-50 border rounded-xl shadow-sm space-y-4">
        <h2 className="text-2xl font-semibold">Raising a Concern</h2>
        <p className="text-gray-700">
          If you ever feel unsafe, worried, or have concerns about someone’s wellbeing, please contact us immediately.
        </p>
        <p className="text-gray-700">
          We handle every concern confidentially and take action where needed.
        </p>
      </div>

      {/* CTA */}
      <div className="text-center">
        <a href="/contact" className="px-8 py-4 bg-[#009EE3] text-white rounded-lg shadow hover:bg-[#007bb8]">
          Contact Our Safeguarding Team
        </a>
      </div>

    </section>
  );
}
