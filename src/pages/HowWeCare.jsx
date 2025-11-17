import React from "react";

export default function HowWeCare() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 space-y-16">

        {/* HERO SECTION */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800">How We Care</h1>
          <p className="mt-4 text-gray-600 text-lg">
            Our approach to care is simple: compassion, dignity, independence, and consistency.
            We tailor every care plan to each individual’s unique needs.
          </p>
        </div>

        {/* OUR CARE APPROACH */}
        <div className="p-8 bg-gray-50 rounded-xl shadow border space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Our Care Approach</h2>
          <p className="text-gray-700 leading-relaxed">
            We believe care should be personal, safe, and empowering. Every person we support has
            their own goals, abilities, challenges, and preferences — and our care approach reflects that.
          </p>

          <ul className="list-disc ml-6 space-y-3 text-gray-700">
            <li><strong>Personalised Care Plans:</strong> Every individual receives a tailored support plan based on a full assessment of their needs and wishes.</li>
            <li><strong>Family Involvement:</strong> We keep families informed and involved, building strong partnerships from day one.</li>
            <li><strong>Continuous Monitoring:</strong> Our team reviews each care plan regularly to ensure the best support possible.</li>
          </ul>
        </div>

        {/* THE CARE JOURNEY */}
        <div className="p-8 bg-white rounded-xl border shadow-sm space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">The Care Journey</h2>
          <p className="text-gray-700 leading-relaxed">
            From the moment someone reaches out to us, we follow a structured but flexible process
            to make sure they receive the right care at the right time.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="p-6 bg-gray-50 rounded-xl shadow border">
              <h3 className="text-xl font-semibold">1. Assessment</h3>
              <p className="text-gray-600 mt-2">A trained professional meets with the individual and family to understand needs, routines, preferences, and goals.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow border">
              <h3 className="text-xl font-semibold">2. Care Planning</h3>
              <p className="text-gray-600 mt-2">We create a tailored plan designed to promote independence, comfort, and safety.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow border">
              <h3 className="text-xl font-semibold">3. Ongoing Support</h3>
              <p className="text-gray-600 mt-2">Our team provides day-to-day support while regularly reviewing progress and adapting care when needed.</p>
            </div>
          </div>
        </div>

        {/* OUR VALUES */}
        <div className="bg-[#009EE3]/10 p-10 rounded-2xl shadow-inner space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Our Values</h2>
          <ul className="space-y-3 text-gray-700 text-lg">
            <li>• Treating everyone with dignity and respect</li>
            <li>• Promoting independence wherever possible</li>
            <li>• Clear communication with families</li>
            <li>• Ensuring safety and wellbeing at all times</li>
            <li>• Building strong bonds of trust with our clients</li>
          </ul>
        </div>

        {/* SPECIALIST SUPPORT */}
        <div className="p-8 bg-white rounded-xl border shadow-sm space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Specialist Care We Provide</h2>
          <p className="text-gray-700 leading-relaxed">
            Our team is trained to support a wide range of needs — from daily personal care to
            complex conditions.
          </p>

          <ul className="list-disc ml-6 space-y-3 text-gray-700">
            <li>Dementia & Alzheimer's support</li>
            <li>Reablement & post-hospital recovery</li>
            <li>Disability & mobility assistance</li>
            <li>Medication support</li>
            <li>End-of-life and palliative support</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="/contact"
            className="px-8 py-4 bg-[#009EE3] text-white rounded-lg text-lg font-semibold shadow hover:bg-[#0082bb]"
          >
            Start Your Care Journey
          </a>
        </div>

      </div>
    </section>
  );
}