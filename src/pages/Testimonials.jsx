import React from "react";

export default function Testimonials() {
  const reviews = [
    { name: "Mrs Patel", text: "Wonderful caring staff. Treated my mother with full respect." },
    { name: "Mr Ahmed", text: "Professional and friendly. Reliable service every time." }
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 py-16 text-center">
      <h1 className="text-3xl font-bold">What Families Say</h1>

      <div className="grid md:grid-cols-2 gap-6 mt-10">
        {reviews.map((r) => (
          <div key={r.name} className="bg-white p-6 rounded-xl shadow border">
            <p className="text-gray-700 italic">“{r.text}”</p>
            <p className="mt-3 text-gray-500 text-sm">— {r.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
