import React from "react";
import { Link } from "react-router-dom";

export default function WhyWorkInCare() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 space-y-16">

        {/* HERO SECTION */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800">Why Work in Support?</h1>
          <p className="mt-4 text-gray-600 text-lg">
            Working in community support is more than a job — it’s a chance to make a meaningful
            difference while building a rewarding future.
          </p>
        </div>

        {/* BENEFITS SECTION */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-xl shadow border">
            <h3 className="text-xl font-semibold text-gray-800">Make a Real Difference</h3>
            <p className="mt-3 text-gray-600 text-sm">
              Each day, you help someone live more confidently and independently. Your support has
              a direct impact on their wellbeing and quality of life.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl shadow border">
            <h3 className="text-xl font-semibold text-gray-800">Flexible Working</h3>
            <p className="mt-3 text-gray-600 text-sm">
              Choose hours that fit your lifestyle — full-time, part-time, weekends or evenings.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl shadow border">
            <h3 className="text-xl font-semibold text-gray-800">Room to Grow</h3>
            <p className="mt-3 text-gray-600 text-sm">
              Progress into roles such as team lead, coordinator, supervisor or office support.
            </p>
          </div>
        </div>

        {/* PAY & BENEFITS SECTION */}
        <div className="bg-[#009EE3]/10 p-10 rounded-2xl shadow-inner">
          <h2 className="text-3xl font-bold text-gray-800">Pay & Rewards</h2>
          <ul className="mt-6 space-y-3 text-gray-700 text-lg">
            <li>• Competitive hourly rates</li>
            <li>• Paid mileage & travel time (where applicable)</li>
            <li>• Flexible hours & reliable scheduling</li>
            <li>• Holiday pay & pension options</li>
            <li>• Ongoing training & development opportunities</li>
          </ul>
        </div>

        {/* WHAT YOU'LL DO SECTION */}
        <div className="p-8 bg-white rounded-xl border shadow-sm">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What You'll Do</h2>
          <p className="text-gray-700 leading-relaxed">
            As a support worker, you will help individuals in their homes and local communities with
            day-to-day tasks. This may include household assistance, meal preparation, organising
            routines, community access, emotional support and helping people stay active and engaged.
          </p>
        </div>

        {/* COMMUNITY & ROLE DETAILS */}
        <div className="p-8 bg-white rounded-xl border shadow-sm space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Support Work in Every Community</h2>
          <p className="text-gray-700 leading-relaxed">
            People of all ages may need extra help at different stages of life. Support workers play
            a vital role across cities, towns and rural areas — offering a friendly, reliable and caring presence.
          </p>
          <p className="text-gray-700 leading-relaxed">
            In busy city areas, travelling between clients might be possible by walking or public
            transport. In rural locations, your own vehicle can help you reach people who rely on
            you. No matter where you work, you will be backed by a supportive team who guides,
            mentors and helps you grow.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800">The Role of a Support Professional</h3>
          <p className="text-gray-700 leading-relaxed">
            Support work is varied and meaningful. You may assist with household routines such as
            tidying, meal prep, organising appointments, gentle activity support, community visits,
            wellbeing check-ins, and helping individuals stay socially connected.
          </p>

          <p className="text-gray-700 leading-relaxed">
            You become someone people rely on — offering encouragement, reassurance, and day-to-day
            support that helps them feel more confident and independent.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800">Make a Real Difference</h3>
          <p className="text-gray-700 leading-relaxed">
            The most rewarding part of this work is knowing that your presence has a direct, positive
            impact on someone’s life. You help people feel valued, supported and understood — and
            that impact lasts far beyond each visit.
          </p>
        </div>

        {/* WHO CAN APPLY SECTION */}
        <div className="p-8 bg-white rounded-xl border shadow-sm">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Who Can Apply?</h2>
          <ul className="space-y-3 text-gray-700 text-lg">
            <li>• Anyone compassionate, patient and understanding</li>
            <li>• People who enjoy helping others</li>
            <li>• Individuals looking for flexible or meaningful work</li>
            <li>• No previous experience required — training provided</li>
          </ul>
        </div>

        {/* CTA SECTION */}
        <div className="text-center mt-10">
          <Link
            to="/careers"
            className="px-8 py-4 bg-[#009EE3] text-white rounded-lg text-lg font-semibold shadow hover:bg-[#0082bb]"
          >
            Explore Careers
          </Link>
        </div>

      </div>
    </section>
  );
}
