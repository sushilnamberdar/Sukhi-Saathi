import React from "react";
import campanionshipImg from "../assets/services/companionship.png";
import icon from '../assets/logo.png'

export default function CompanionshipCare() {
  return (
    <section className="py-16 bg-white">
      <div className="relative w-full h-60 sm:h-64 md:h-80 lg:h-[620px] xl:h-[1600px] rounded-xl overflow-hidden mb-12">
        <img
          src={campanionshipImg}
          alt="Companionship Care"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-4 bg-black/60 text-white rounded-lg">
        <img src={icon} className="h-14"/>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 space-y-16">

        {/* HERO */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800">Companionship Care</h1>
          <p className="mt-4 text-gray-600 text-lg">
            Friendly, meaningful support to reduce loneliness, encourage social activity, and bring joy to everyday life.
          </p>
        </div>

        {/* ABOUT */}
        <div className="bg-gray-50 p-8 rounded-xl border">
          <h2 className="text-2xl font-semibold">What Is Companionship Care?</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Companionship care focuses on emotional wellbeing. Our carers offer friendship,
            conversation, outings, and help with tasks — making life brighter and more connected.
          </p>
        </div>

        {/* FEATURES */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Conversation & emotional support",
            "Walks, hobbies & activities",
            "Help attending clubs or community groups",
            "Light household tasks",
            "Meal preparation",
            "Outings, shopping & appointments"
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white border rounded-xl shadow-sm">
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>

        {/* BENEFITS */}
        <div className="p-8 bg-white border rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-3">Why Companionship Matters</h2>
          <p className="text-gray-700 leading-relaxed">
            Many older adults feel isolated — companionship care helps maintain happiness,
            confidence, and mental wellbeing.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="/contact"
            className="px-8 py-4 bg-[#009EE3] text-white font-semibold rounded-lg hover:bg-[#007bb8] shadow">
            Arrange Companionship Care
          </a>
        </div>

      </div>
    </section>
  );
}
