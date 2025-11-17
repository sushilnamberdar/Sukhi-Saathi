import React, { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p className="mt-2 text-gray-700">We reply within 24 hours.</p>

      <div className="grid md:grid-cols-2 gap-10 mt-10">

        {/* Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="bg-white p-6 shadow rounded-xl space-y-4"
        >
          <input className="w-full p-2 border rounded" placeholder="Your Name" required />
          <input className="w-full p-2 border rounded" placeholder="Email or Phone" required />
          <textarea className="w-full p-2 border rounded" rows="4" placeholder="Message" />
          <button className="bg-indigo-600 text-white px-4 py-2 rounded">Send</button>

          {sent && <p className="text-green-600 text-sm">Message sent!</p>}
        </form>

        {/* Sidebar */}
        <div className="bg-white p-6 shadow rounded-xl">
          <h3 className="text-xl font-semibold">Our Office</h3>
          <p className="mt-2 text-gray-600">SukhiSaathi Support — UK-wide care</p>

          <ul className="mt-4 text-gray-700 space-y-2">
            <li>📞 0800 123 4567</li>
            <li>📧 info@sukhisaathisupport.co.uk</li>
            <li>📍 London, UK</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
