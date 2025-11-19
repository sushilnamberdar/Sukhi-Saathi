import React from "react";
import { Link } from "react-router-dom";

export default function Careers() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Careers & Opportunities</h1>
          <p className="mt-2 text-gray-600">Join our team of support workers helping local people to live well at home.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-50 rounded-xl border">
            <h3 className="font-semibold">Why join us?</h3>
            <p className="mt-2 text-gray-700">Flexible shifts, local work, training and development opportunities.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl border">
            <h3 className="font-semibold">Support & Training</h3>
            <p className="mt-2 text-gray-700">Role-specific induction and ongoing development to build your skills.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl border">
            <h3 className="font-semibold">Apply</h3>
            <p className="mt-2 text-gray-700">See current vacancies and apply online.</p>
            <div className="mt-4">
              <Link to="/jobs" className="px-4 py-2 bg-[#009EE3] text-white rounded-md">View jobs</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
