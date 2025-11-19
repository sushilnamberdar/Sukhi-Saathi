import React from "react";
import { Link } from "react-router-dom";

export default function HowWeCare() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 space-y-16">

        {/* HERO SECTION */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800">How We Support You</h1>
          <p className="mt-4 text-gray-600 text-lg">
            Our approach is simple: respect, compassion, independence and consistency. 
            Every support plan is tailored around each person’s needs, preferences and lifestyle.
          </p>
        </div>

        {/* SUPPORT APPROACH */}
        <div className="p-8 bg-gray-50 rounded-xl shadow border space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Our Support Approach</h2>
          <p className="text-gray-700 leading-relaxed">
            We believe support should empower people to live well, stay connected and remain in control. 
            Every individual has their own goals, routines, challenges and strengths — and our approach 
            is designed to respect and enhance those.
          </p>

          <ul className="list-disc ml-6 space-y-3 text-gray-700">
            <li><strong>Tailored Support Plans:</strong> We create personalised support plans that reflect your wishes, lifestyle and priorities.</li>
            <li><strong>Family Collaboration:</strong> Families are encouraged to be involved so everyone feels informed and supported.</li>
            <li><strong>Regular Reviews:</strong> We continually check in to ensure the support is still right and make adjustments where needed.</li>
          </ul>
        </div>

        {/* JOURNEY SECTION */}
        <div className="p-8 bg-white rounded-xl border shadow-sm space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Your Support Journey</h2>
          <p className="text-gray-700 leading-relaxed">
            From the first conversation, we guide you through a clear and friendly process 
            to make sure you receive support that fits your daily life.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="p-6 bg-gray-50 rounded-xl shadow border">
              <h3 className="text-xl font-semibold">1. Understanding Your Needs</h3>
              <p className="text-gray-600 mt-2">
                We take time to learn about your routines, goals, preferences and the type of 
                support you feel would help most.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow border">
              <h3 className="text-xl font-semibold">2. Planning Your Support</h3>
              <p className="text-gray-600 mt-2">
                We build a personalised support plan focused on independence, comfort and wellbeing.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow border">
              <h3 className="text-xl font-semibold">3. Ongoing Assistance</h3>
              <p className="text-gray-600 mt-2">
                Our team provides day-to-day support and keeps your plan up-to-date as your needs evolve.
              </p>
            </div>
          </div>
        </div>

        {/* VALUES SECTION */}
        <div className="bg-[#009EE3]/10 p-10 rounded-2xl shadow-inner space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Our Values</h2>
          <ul className="space-y-3 text-gray-700 text-lg">
            <li>• Treating everyone with dignity and respect</li>
            <li>• Promoting independence and confidence</li>
            <li>• Clear communication at every stage</li>
            <li>• Supporting wellbeing and quality of life</li>
            <li>• Building meaningful relationships based on trust</li>
          </ul>
        </div>

        {/* SUPPORT TYPES */}
        <div className="p-8 bg-white rounded-xl border shadow-sm space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Types of Support We Offer</h2>
          <p className="text-gray-700 leading-relaxed">
            Our team is trained to provide a wide range of non-medical, day-to-day support 
            designed to help people stay active, independent and connected.
          </p>

          <ul className="list-disc ml-6 space-y-3 text-gray-700">
            <li>Companionship & social connection</li>
            <li>Help with daily routines & household tasks</li>
            <li>Community access & wellbeing support</li>
            <li>Meal preparation & light assistance</li>
            <li>Confidence-building & independence support</li>
          </ul>

          <p className="text-sm text-gray-500 mt-2">
            *Please note: We provide non-medical, non-regulated support services only.*
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            to="/contact"
            className="px-8 py-4 bg-[#009EE3] text-white rounded-lg text-lg font-semibold shadow hover:bg-[#0082bb]"
          >
            Start Your Support Journey
          </Link>
        </div>

      </div>
    </section>
  );
}
