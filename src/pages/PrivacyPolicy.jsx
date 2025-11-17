import React from "react";

export default function PrivacyPolicy() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 space-y-10">
        
        {/* HERO */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800">Privacy Policy</h1>
          <p className="mt-4 text-gray-600 text-lg">
            Your privacy is important to us. This page explains how we collect, use, and protect your information.
          </p>
        </div>

        {/* INTRO */}
        <div className="p-8 bg-gray-50 rounded-xl border shadow-sm space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">1. Information We Collect</h2>
          <p className="text-gray-700 leading-relaxed">
            We may collect personal information when you contact us, apply for a job, request services, or use our website.
            This includes your name, email, phone number, address, and any details you provide to help us deliver care safely.
          </p>
        </div>

        {/* HOW WE USE DATA */}
        <div className="p-8 bg-white rounded-xl border shadow-sm space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">2. How We Use Your Information</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>To provide care and support services</li>
            <li>To respond to enquiries</li>
            <li>To manage recruitment applications</li>
            <li>To improve our website and services</li>
            <li>To meet legal, regulatory, and safeguarding requirements</li>
          </ul>
        </div>

        {/* DATA SHARING */}
        <div className="p-8 bg-gray-50 rounded-xl border shadow-sm space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">3. Who We Share Information With</h2>
          <p className="text-gray-700 leading-relaxed">
            We do not sell your information. We may share data only with:
          </p>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Care professionals directly involved in your support</li>
            <li>Regulators such as CQC if legally required</li>
            <li>Emergency services when necessary</li>
            <li>Technology partners who help run our systems securely</li>
          </ul>
        </div>

        {/* DATA SECURITY */}
        <div className="p-8 bg-white rounded-xl border shadow-sm space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">4. Data Security</h2>
          <p className="text-gray-700 leading-relaxed">
            We use strong security measures to protect your personal information and prevent
            unauthorised access, alteration, or loss. Your data is stored safely on encrypted systems.
          </p>
        </div>

        {/* RIGHTS */}
        <div className="p-8 bg-gray-50 rounded-xl border shadow-sm space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">5. Your Rights</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Request access to your personal data</li>
            <li>Request corrections or updates</li>
            <li>Request deletion of your data where applicable</li>
            <li>Object to certain types of data use</li>
            <li>Withdraw consent at any time</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="p-8 bg-white rounded-xl border shadow-sm space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">6. Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have questions about our privacy policy or how your data is used, you can contact us at:
          </p>
          <p className="text-gray-700 font-semibold">contact@sukhisaathisupport.co.uk</p>
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
