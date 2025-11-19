import React from "react";
import image5 from "../assets/image5.png";

export default function SupportSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
      <img
        src={image5}
        className="rounded-2xl shadow-xl w-full h-96 object-cover"
        alt="Support and wellbeing assistance"
      />

      <div>
        <h2 className="text-3xl font-bold">Supporting daily independence at home</h2>
        <p className="mt-4 text-gray-700">
          Life can bring challenges — our friendly support team is here to make everyday living
          easier, safer, and more comfortable.
        </p>
        <p className="mt-4 text-gray-700">
          We provide non-medical assistance, practical help, and emotional support to individuals
          who benefit from an extra pair of hands in their daily routine.
        </p>

        <div className="flex gap-4 mt-6">
          <a
            href="/services"
            className="px-5 py-3 bg-white text-[#009EE3] border-2 border-[#009EE3] hover:bg-[#009EE3] hover:text-white rounded-md shadow"
          >
            Learn more
          </a>
          <a
            href="/careers"
            className="px-5 py-3 border border-[#009EE3] text-[#009EE3] rounded-md hover:bg-gray-50"
          >
            Join our team
          </a>
        </div>

        <a href="#" className="block mt-6 text-[#009EE3] hover:underline">
          Follow us on Facebook
        </a>
      </div>
    </section>
  );
}
