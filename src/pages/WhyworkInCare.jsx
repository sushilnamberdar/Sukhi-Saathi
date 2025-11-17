import React from "react";

export default function WhyWorkInCare() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 space-y-16">
        {/* HERO SECTION */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800">Why Work in Care?</h1>
          <p className="mt-4 text-gray-600 text-lg">
            A career in care is more than a job — it's a chance to change lives, support your
            community, and build a meaningful future.
          </p>
        </div>

        {/* BENEFITS SECTION */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-xl shadow border">
            <h3 className="text-xl font-semibold text-gray-800">Make a Real Difference</h3>
            <p className="mt-3 text-gray-600 text-sm">
              Every day you help someone live safely, independently, and with dignity. Your work
              directly improves people’s lives.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl shadow border">
            <h3 className="text-xl font-semibold text-gray-800">Flexible Working</h3>
            <p className="mt-3 text-gray-600 text-sm">
              Choose shifts that suit your lifestyle — full‑time, part‑time, weekends, or evenings.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl shadow border">
            <h3 className="text-xl font-semibold text-gray-800">Career Progression</h3>
            <p className="mt-3 text-gray-600 text-sm">
              The care sector offers clear pathways to become a senior carer, coordinator,
              supervisor, or even manager.
            </p>
          </div>
        </div>

        {/* PAY & BENEFITS SECTION */}
        <div className="bg-[#009EE3]/10 p-10 rounded-2xl shadow-inner">
          <h2 className="text-3xl font-bold text-gray-800">Pay & Rewards</h2>
          <ul className="mt-6 space-y-3 text-gray-700 text-lg">
            <li>• Competitive hourly pay based on experience</li>
            <li>• Paid mileage + travel time</li>
            <li>• Flexible schedules with guaranteed hours</li>
            <li>• Pension scheme & holiday pay</li>
            <li>• Ongoing training & paid qualifications</li>
          </ul>
        </div>

        {/* WHAT YOU'LL DO SECTION */}
        <div className="p-8 bg-white rounded-xl border shadow-sm">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What You'll Do</h2>
          <p className="text-gray-700 leading-relaxed">
            Working in care involves supporting people in their homes and communities. Your duties
            may include personal care, companionship, medication support, preparing meals, and
            helping individuals stay active and independent.
          </p>
        </div>

        {/* COMMUNITY & ROLE DETAILS */
        <div className="p-8 bg-white rounded-xl border shadow-sm space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Care Work in Every Community</h2>
          <p className="text-gray-700 leading-relaxed">
            Every community has people who require care of some kind. In turn, care professionals
            are in demand everywhere. These are caring, compassionate, dedicated people who love
            helping others.
          </p>
          <p className="text-gray-700 leading-relaxed">
            In cities, getting around may be easy using public transport or walking between jobs.
            In more rural areas, you may need a car to reach clients. No matter where you work,
            you will always have a strong management team behind you — supporting, advising, and
            providing ongoing training.
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 mt-6">The Role of a Care Professional</h3>
          <p className="text-gray-700 leading-relaxed">
            Care work is dynamic and all-encompassing. You may support individuals with everyday
            household tasks such as cooking, cleaning, ironing, and light maintenance. You’ll also
            help with essential life admin.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Personal care is also a key part of the job — helping clients wash, dress, go to the
            toilet, and take their medication. While these tasks may feel challenging at first,
            you will soon recognise the incredible value of supporting someone with their most
            important daily needs.
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 mt-6">Make a Real Difference</h3>
          <p className="text-gray-700 leading-relaxed">
            As a care professional, you’ll have the unique opportunity to help vulnerable people
            lead better, safer, more fulfilling lives. You become a trusted companion who gives
            dignity, respect, and comfort.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The biggest reward is knowing that your actions directly improve another person’s
            life. You are the reason someone feels supported, valued, and cared for.
          </p>
        </div>

        /* WHO CAN APPLY SECTION */}
        <div className="p-8 bg-white rounded-xl border shadow-sm">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Who Can Apply?</h2>
          <ul className="space-y-3 text-gray-700 text-lg">
            <li>• People who are compassionate and caring</li>
            <li>• Anyone who enjoys helping others</li>
            <li>• Individuals seeking flexible work</li>
            <li>• No experience required — full training provided</li>
          </ul>
        </div>

        {/* CTA SECTION */}
        <div className="text-center mt-10">
          <a
            href="/careers"
            className="px-8 py-4 bg-[#009EE3] text-white rounded-lg text-lg font-semibold shadow hover:bg-[#0082bb]"
          >
            Explore Careers
          </a>
        </div>
      </div>
    </section>
  );
}
