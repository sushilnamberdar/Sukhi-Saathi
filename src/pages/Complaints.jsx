import React from "react";

export default function Complaints() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 space-y-12 bg-white">

      {/* HERO */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800">Complaints & Feedback</h1>
        <p className="mt-4 text-gray-600 text-lg">
          Your voice helps us provide better support. We welcome all feedback — positive or negative.
        </p>
      </div>

      {/* SECTION 1 */}
      <div className="p-8 bg-gray-50 border rounded-xl shadow-sm space-y-4">
        <h2 className="text-2xl font-semibold">Our Promise</h2>
        <p className="text-gray-700">
          We aim to resolve all concerns quickly, professionally, and with complete transparency.
          Every complaint is taken seriously and reviewed by our management team.
        </p>
      </div>

      {/* SECTION 2 */}
      <div className="p-8 bg-white border rounded-xl shadow-sm space-y-4">
        <h2 className="text-2xl font-semibold">How to Make a Complaint</h2>
        <ul className="space-y-2 text-gray-700">
          <li>• Speak to your support worker or local coordinator</li>
          <li>• Call our office to speak confidentially with a manager</li>
          <li>• Submit a written complaint using our contact form</li>
        </ul>
      </div>

      {/* SECTION 3 */}
      <div className="p-8 bg-gray-50 border rounded-xl shadow-sm space-y-4">
        <h2 className="text-2xl font-semibold">What Happens Next?</h2>
        <ul className="space-y-2 text-gray-700">
          <li>• We acknowledge your complaint within 48 hours</li>
          <li>• A manager reviews details and investigates thoroughly</li>
          <li>• You receive a written response with outcomes & next steps</li>
        </ul>
      </div>

      {/* FEEDBACK */}
      <div className="p-8 bg-white rounded-xl border shadow-sm space-y-4">
        <h2 className="text-2xl font-semibold">Share Your Feedback</h2>
        <p className="text-gray-700">
          Whether you want to say thank you or suggest improvements — your comments matter.
        </p>
      </div>

      {/* CTA */}
      <div className="text-center">
        <a href="/contact" className="px-8 py-4 bg-[#009EE3] text-white rounded-lg shadow hover:bg-[#007bb8]">
          Send Us Your Feedback
        </a>
      </div>

    </section>
  );
}
