import React from "react";

export default function Terms() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 space-y-10">

        {/* HERO */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800">Terms & Conditions</h1>
          <p className="mt-4 text-gray-600 text-lg">
            By using this website, you agree to the terms outlined below. Please read them carefully.
          </p>
        </div>

        {/* USE OF WEBSITE */}
        <div className="p-8 bg-gray-50 rounded-xl border shadow space-y-3">
          <h2 className="text-2xl font-semibold text-gray-800">1. Use of This Website</h2>
          <p className="text-gray-700 leading-relaxed">
            You agree to use our website lawfully and responsibly. You must not attempt to disrupt,
            damage, or misuse the site or any related systems.
          </p>
        </div>

        {/* INFORMATION ACCURACY */}
        <div className="p-8 bg-white rounded-xl border shadow space-y-3">
          <h2 className="text-2xl font-semibold text-gray-800">2. Information on This Site</h2>
          <p className="text-gray-700 leading-relaxed">
            We strive to ensure information on this site is accurate and up to date, but we cannot
            guarantee that all content is error-free. Website content may change without notice.
          </p>
        </div>

        {/* SERVICES DESCRIPTION */}
        <div className="p-8 bg-gray-50 rounded-xl border shadow space-y-3">
          <h2 className="text-2xl font-semibold text-gray-800">3. Our Services</h2>
          <p className="text-gray-700 leading-relaxed">
            Information about our support services is provided for general guidance.
            Service availability may vary by location, and an assessment may be required before
            support can be offered.
          </p>
        </div>

        {/* USER RESPONSIBILITIES */}
        <div className="p-8 bg-white rounded-xl border shadow space-y-3">
          <h2 className="text-2xl font-semibold text-gray-800">4. User Responsibilities</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>You must provide accurate details when contacting or applying to us.</li>
            <li>You must not use content from our site without permission.</li>
            <li>You must not impersonate another person or submit false information.</li>
          </ul>
        </div>

        {/* PRIVACY */}
        <div className="p-8 bg-gray-50 rounded-xl border shadow space-y-3">
          <h2 className="text-2xl font-semibold text-gray-800">5. Privacy & Data Use</h2>
          <p className="text-gray-700">
            Your use of our website is also governed by our Privacy Policy.
          </p>
          <a href="/privacy-policy" className="text-[#009EE3] font-semibold hover:underline">
            View Privacy Policy →
          </a>
        </div>

        {/* LIABILITY */}
        <div className="p-8 bg-white rounded-xl border shadow space-y-3">
          <h2 className="text-2xl font-semibold text-gray-800">6. Limitation of Liability</h2>
          <p className="text-gray-700 leading-relaxed">
            SukhiSaathi Support is not responsible for:
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>Losses caused by website downtime or technical issues</li>
            <li>Errors in third-party links, tools, or external content</li>
            <li>Decisions made based on information from this website</li>
          </ul>
          <p className="text-gray-700">
            This does not affect your statutory consumer rights.
          </p>
        </div>

        {/* CHANGES */}
        <div className="p-8 bg-gray-50 rounded-xl border shadow space-y-3">
          <h2 className="text-2xl font-semibold text-gray-800">7. Changes to These Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            We may update these Terms & Conditions from time to time. Continued use of the website
            means you accept the latest version.
          </p>
        </div>

        {/* CONTACT */}
        <div className="p-8 bg-white rounded-xl border shadow space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">8. Contact Us</h2>
          <p className="text-gray-700">
            If you have questions about these Terms & Conditions, please contact:
          </p>
          <a
            href="mailto:contact@sukhisaathisupport.co.uk"
            className="font-semibold text-[#009EE3] hover:underline"
          >
            contact@sukhisaathisupport.co.uk
          </a>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="/contact"
            className="px-8 py-4 bg-[#009EE3] text-white rounded-lg text-lg font-semibold shadow hover:bg-[#007bb8]"
          >
            Contact Us
          </a>
        </div>

      </div>
    </section>
  );
}
