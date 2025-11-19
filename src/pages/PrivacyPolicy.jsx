import React from "react";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 space-y-10">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800">Privacy Policy</h1>
          <p className="mt-4 text-gray-600 text-lg">
            This Privacy Policy explains how we collect, use, and protect the personal information
            you share with SukhiSaathi Support.
          </p>
        </div>

        {/* INTRO */}
        <div className="p-8 bg-gray-50 rounded-xl border shadow space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">1. Information We Collect</h2>
          <p className="text-gray-700 leading-relaxed">
            We may collect personal information when you contact us, submit a form, apply for a job,
            or request information. This may include:
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>Name and contact details</li>
            <li>Email address and phone number</li>
            <li>Address or location details</li>
            <li>Information you submit in enquiries or applications</li>
            <li>Technical data such as IP address and browser information</li>
          </ul>
        </div>

        {/* USE OF DATA */}
        <div className="p-8 bg-white rounded-xl border shadow space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">2. How We Use Your Information</h2>
          <p className="text-gray-700 leading-relaxed">We may use your information to:</p>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>Respond to enquiries and provide requested information</li>
            <li>Process job applications</li>
            <li>Arrange consultations or callbacks</li>
            <li>Improve our services and website</li>
            <li>Meet legal or safety obligations</li>
          </ul>
        </div>

        {/* DATA SHARING */}
        <div className="p-8 bg-gray-50 rounded-xl border shadow space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">3. Who We Share Your Data With</h2>
          <p className="text-gray-700">
            We do not sell or trade your information. We may share data with:
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>Team members who respond to enquiries or applications</li>
            <li>Emergency services if required for safety</li>
            <li>Technology partners who help run our secure systems</li>
            <li>Regulatory bodies if we are legally required to provide information</li>
          </ul>
        </div>

        {/* DATA SECURITY */}
        <div className="p-8 bg-white rounded-xl border shadow space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">4. How We Protect Your Information</h2>
          <p className="text-gray-700 leading-relaxed">
            We use appropriate technical and organisational measures to protect your personal data,
            including encryption, secure storage, and access controls.
          </p>
        </div>

        {/* DATA RETENTION */}
        <div className="p-8 bg-gray-50 rounded-xl border shadow space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">5. How Long We Keep Your Data</h2>
          <p className="text-gray-700 leading-relaxed">
            We keep personal information only for as long as necessary to fulfil the purpose it was
            collected for, or as required by UK law.
          </p>
        </div>

        {/* YOUR RIGHTS */}
        <div className="p-8 bg-white rounded-xl border shadow space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">6. Your Rights</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>Access your personal data</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion where appropriate</li>
            <li>Object to certain uses of your data</li>
            <li>Withdraw consent for optional processing</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="p-8 bg-gray-50 rounded-xl border shadow space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">7. Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions about this Privacy Policy or how your data is handled, you can contact us at:
          </p>
          <a href="mailto:privacy@sukhisaathisupport.co.uk" className="font-semibold text-[#009EE3]">privacy@sukhisaathisupport.co.uk</a>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            to="/contact"
            className="px-8 py-4 bg-[#009EE3] text-white rounded-lg text-lg font-semibold shadow hover:bg-[#007bb8]"
          >
            Contact Us
          </Link>
        </div>
        
      </div>
    </section>
  );
}
