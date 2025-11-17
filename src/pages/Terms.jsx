import React from "react";

export default function Terms() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 space-y-10">

        {/* HERO */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800">Terms & Conditions</h1>
          <p className="mt-4 text-gray-600 text-lg">
            These terms govern the use of our website, services, and any information provided by SukhiSaathi Support.
          </p>
        </div>

        {/* INTRO SECTION */}
        <div className="p-8 bg-gray-50 rounded-xl border shadow-sm space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">1. Use of Our Website</h2>
          <p className="text-gray-700 leading-relaxed">
            By accessing or using our website, you agree to follow these terms. You must use this
            site legally and for its intended purposes only.
          </p>
        </div>

        {/* SERVICES SECTION */}
        <div className="p-8 bg-white rounded-xl border shadow-sm space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">2. Our Services</h2>
          <p className="text-gray-700 leading-relaxed">
            Our services are designed to provide high-quality care and support to individuals.
            Service availability may vary by location. Full assessments are required before support begins.
          </p>
        </div>

        {/* USER RESPONSIBILITIES */}
        <div className="p-8 bg-gray-50 rounded-xl border shadow-sm space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">3. User Responsibilities</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>You must provide accurate information when contacting or applying to us.</li>
            <li>You must not attempt to hack, disrupt, or misuse the site.</li>
            <li>You must not use content from our website without permission.</li>
          </ul>
        </div>

        {/* DATA & PRIVACY */}
        <div className="p-8 bg-white rounded-xl border shadow-sm space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">4. Data & Privacy</h2>
          <p className="text-gray-700 leading-relaxed">
            We collect and use data according to our Privacy Policy. By using our site, you agree to how
            we process your information, as described in our Privacy Policy.
          </p>
          <a href="/privacy-policy" className="text-[#009EE3] font-semibold hover:underline">
            View our Privacy Policy →
          </a>
        </div>

        {/* LIMITATION OF LIABILITY */}
        <div className="p-8 bg-gray-50 rounded-xl border shadow-sm space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">5. Limitation of Liability</h2>
          <p className="text-gray-700 leading-relaxed">
            SukhiSaathi Support is not liable for any damages resulting from the use of this website,
            service interruptions, or inaccurate information. This does not affect statutory rights.
          </p>
        </div>

        {/* CHANGES TO TERMS */}
        <div className="p-8 bg-white rounded-xl border shadow-sm space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">6. Changes to These Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            We may update these terms from time to time. Continued use of our website implies acceptance of the latest version.
          </p>
        </div>

        {/* CONTACT */}
        <div className="p-8 bg-gray-50 rounded-xl border shadow-sm space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">7. Contact Us</h2>
          <p className="text-gray-700">
            If you have questions about these Terms & Conditions, please contact us at:
          </p>
          <a href="mailto:director@sukhisaathisupport.co.uk" className="font-semibold text-[#009EE3] hover:underline">director@sukhisaathisupport.co.uk</a>
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
