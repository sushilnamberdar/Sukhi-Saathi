import React from "react";

export default function Services() {
  const services = [
    { title: "78200 - Temporary employment agency activities", desc: "Short-term, flexible staffing solutions for care-related needs." },
    { title: "88100 - Social work activities for elderly & disabled", desc: "Support services aimed at improving daily living for vulnerable people." },
    { title: "96090 - Other service activities (not classified)", desc: "Specialised personal support and lifestyle assistance services." },
    { title: "97000 - Households employing domestic personnel", desc: "Helping families hire and manage trusted domestic care staff." },
    { title: "Live-in Care", desc: "Round-the-clock care in the comfort of home." },
    { title: "Personal Care", desc: "Help with washing, dressing and medication." },
    { title: "Companionship", desc: "Friendly support and social visits to reduce loneliness." },
    { title: "Dementia Care", desc: "Specialist support for memory and cognitive needs." },
    { title: "Respite Care", desc: "Temporary cover for family carers." },
    { title: "Night Care", desc: "Assistance and monitoring through the night." },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold">Our Services</h1>
      <p className="mt-2 text-gray-600">Flexible and tailored homecare packages to suit individual needs.</p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="p-6 bg-white shadow rounded-xl border">
            <h3 className="text-xl font-semibold">{s.title}</h3>
            <p className="text-gray-700 mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
