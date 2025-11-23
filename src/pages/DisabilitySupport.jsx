import React from "react";
import { Link } from "react-router-dom";
import disabilityImag from '../assets/services/disability.webp';

export default function DisabilitySupport() {
  return (
    <section className="py-16 bg-white">

      {/* TOP HERO IMAGE */}
      <div className="relative w-full h-60 sm:h-64 md:h-80 lg:h-[420px] xl:h-[500px] rounded-xl overflow-hidden mb-12">
        <img
          src={disabilityImag}
          alt="Disability Support"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 space-y-16">

        {/* MAIN HERO */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800">Disability Support</h1>
          <p className="mt-4 text-gray-600 text-lg">
            Flexible, person-led support for individuals with physical, learning or developmental disabilities — promoting independence, confidence and meaningful daily living.
          </p>
        </div>

        {/* ABOUT SECTION */}
        <div className="p-8 bg-gray-50 rounded-xl border shadow-sm">
          <h2 className="text-2xl font-semibold">Supporting Your Journey</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Everyone’s needs are different — that’s why our disability support focuses on your goals, your pace and your way of doing things. Whether it's help at home, building new skills, staying active or getting more involved in your community, we’re here to make each day easier and more empowering.
          </p>
        </div>

        {/* SAFE SUPPORT OPTIONS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Daily living assistance & gentle routine support",
            "Community access, social engagement & outings",
            "Help with planning travel or attending activities",
            "Light household help — cooking, tidying & organising",
            "Wellbeing check-ins & friendly companionship",
            "Skill-building, confidence development & independence coaching"
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white border rounded-xl shadow-sm">
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>

        {/* WHO WE SUPPORT */}
        <div className="p-8 bg-white rounded-xl border shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Who We Support</h2>
          <ul className="space-y-2 text-gray-700 leading-relaxed">
            <li>• Adults with physical disabilities</li>
            <li>• People with learning disabilities</li>
            <li>• Those with cognitive or developmental needs</li>
            <li>• Autism, Down syndrome, sensory challenges & mobility limitations</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/contact"
            className="px-8 py-4 bg-[#009EE3] text-white font-semibold rounded-lg hover:bg-[#007bb8] shadow"
          >
            Get Disability Support
          </Link>
        </div>

      </div>
    </section>
  );
}
