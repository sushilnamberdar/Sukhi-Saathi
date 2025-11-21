import React from "react";

export default function WhyChosseUs() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16  text-black">
      <h3 className="text-3xl font-bold text-center">Why Choose Us</h3>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mt-4">
        We provide safe, friendly and reliable support — delivered by people who treat your family with respect and dignity.
      </p>

      {/* FEATURE GRID */}
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow hover:shadow-md transition">
          <h4 className="font-semibold text-lg">Person-centred support</h4>
          <p className="mt-2 text-sm text-gray-700">
            We work around your routines, preferences and lifestyle — giving you full choice and control every day.
          </p>
        </div>

        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow hover:shadow-md transition">
          <h4 className="font-semibold text-lg">Trained Support Workers</h4>
          <p className="mt-2 text-sm text-gray-700">
            Our team receives regular training, DBS checks, and ongoing development to deliver safe and consistent help.
          </p>
        </div>

        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow hover:shadow-md transition">
          <h4 className="font-semibold text-lg">Reliable & Consistent Visits</h4>
          <p className="mt-2 text-sm text-gray-700">
            You’ll see familiar faces who understand your needs and build supportive, trusting relationships.
          </p>
        </div>

        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow hover:shadow-md transition">
          <h4 className="font-semibold text-lg">24/7 Support Availability</h4>
          <p className="mt-2 text-sm text-gray-700">
            Whether it's daytime, evenings or weekends — our team is here whenever you need assistance.
          </p>
        </div>

        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow hover:shadow-md transition">
          <h4 className="font-semibold text-lg">Local, Trusted Team</h4>
          <p className="mt-2 text-sm text-gray-700">
            We operate within your community, giving you personalised support from people who genuinely care.
          </p>
        </div>

        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow hover:shadow-md transition">
          <h4 className="font-semibold text-lg">Enhanced Wellbeing Support</h4>
          <p className="mt-2 text-sm text-gray-700">
            We help with routines, social activities, household tasks and safe independence — tailored to your lifestyle.
          </p>
        </div>

      </div>

      {/* STATS / TRUST SECTION */}
      <div className="mt-16 grid sm:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="text-4xl font-bold text-[#009EE3]">98%</h3>
          <p className="text-gray-600 mt-2">Client Satisfaction</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-[#009EE3]">Local</h3>
          <p className="text-gray-600 mt-2">Community Support</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-[#009EE3]">24/7</h3>
          <p className="text-gray-600 mt-2">Support Line</p>
        </div>
      </div>

      {/* TRUST BADGES */}
      <div className="mt-16 flex flex-wrap justify-center gap-6">
        <div className="px-6 py-3 bg-gray-100 rounded-xl text-gray-700 border">Fully Insured</div>
        <div className="px-6 py-3 bg-gray-100 rounded-xl text-gray-700 border">DBS Checked Team</div>
        <div className="px-6 py-3 bg-gray-100 rounded-xl text-gray-700 border">Quality Standards Focused</div>
        <div className="px-6 py-3 bg-gray-100 rounded-xl text-gray-700 border">Trusted Community Support</div>
      </div>
    </section>
  );
}
