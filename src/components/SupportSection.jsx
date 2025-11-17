import React from "react";

export default function SupportSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
      <img
        src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?q=80&w=1200&auto=format&fit=crop"
        className="rounded-2xl shadow-xl w-full h-80 object-cover"
      />

      <div>
        <h2 className="text-3xl font-bold">Supporting physical disabilities</h2>
        <p className="mt-4 text-gray-700">
          When life brings challenges, we help clients face them head-on.
        </p>
        <p className="mt-4 text-gray-700">
          We support people with chronic illnesses or severe impairments,
          empowering them to reach their independence and ambitions.
        </p>

        <div className="flex gap-4 mt-6">
          <a href="/services" className="px-5 py-3 bg-indigo-600 text-white rounded-md shadow">Learn more</a>
          <a href="/careers" className="px-5 py-3 border border-indigo-600 text-indigo-600 rounded-md">Join our team</a>
        </div>

        <a href="#" className="block mt-6 text-indigo-600 hover:underline">
          Follow us on Facebook
        </a>
      </div>
    </section>
  );
}
