import React from "react";
import respitecareImg from "../assets/services/RespiteCare.png";

export default function RespiteCare() {
  return (
    <section className="py-16 bg-white">
      
      {/* TOP IMAGE */}
      <div className="relative w-full h-60 sm:h-64 md:h-80 lg:h-[420px] rounded-xl overflow-hidden mb-12">
        <img
          src={respitecareImg}
          alt="Respite Support"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 space-y-16">

        {/* HERO */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800">Respite Support</h1>
          <p className="mt-4 text-gray-600 text-lg">
            Short-break support that gives family carers time to rest, recharge or attend important commitments — while we offer friendly, reliable assistance at home.
          </p>
        </div>

        {/* ABOUT */}
        <div className="p-8 bg-gray-50 rounded-xl border shadow-sm">
          <h2 className="text-2xl font-semibold">Supporting Families When They Need It Most</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Everyone needs a break sometimes. Our respite support service provides temporary, non-regulated help 
            so family members can have peace of mind while they take time for themselves, work, emergencies or personal commitments.
          </p>
        </div>

        {/* SUPPORT OPTIONS (SAFE WORDING) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Short-break home support and routine assistance",
            "Meal preparation, light household help & gentle organisation",
            "Friendly wellbeing check-ins",
            "Supervision, social interaction & emotional reassurance",
            "Support with hobbies, activities & community engagement",
            "Flexible daytime and scheduled visiting support"
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white border rounded-xl shadow-sm">
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>

        {/* WHO BENEFITS */}
        <div className="p-8 bg-white border rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-3">Who Is Respite Support For?</h2>
          <ul className="text-gray-700 space-y-2 leading-relaxed">
            <li>• Family carers needing time to rest or manage personal commitments</li>
            <li>• Families looking for temporary support during busy periods</li>
            <li>• Individuals who benefit from companionship and daily living assistance</li>
            <li>• Short-term support after routine changes, stress or temporary challenges</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/contact"
            className="px-8 py-4 bg-[#009EE3] text-white font-semibold rounded-lg hover:bg-[#007bb8] shadow"
          >
            Request Respite Support
          </a>
        </div>

      </div>
    </section>
  );
}
