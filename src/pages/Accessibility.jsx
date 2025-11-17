import React from "react";

export default function Accessibility() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 space-y-10">

        {/* HERO */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800">Accessibility Statement</h1>
          <p className="mt-4 text-gray-600 text-lg">
            We are committed to making our website accessible for everyone, including people with
            disabilities or those using assistive technologies.
          </p>
        </div>

        {/* OUR COMMITMENT */}
        <div className="p-8 bg-gray-50 rounded-xl border shadow-sm space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">1. Our Accessibility Commitment</h2>
          <p className="text-gray-700 leading-relaxed">
            We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1 AA standards.  
            Our goal is to ensure that every user can access information and services without
            barriers.
          </p>
        </div>

        {/* FEATURES */}
        <div className="p-8 bg-white rounded-xl border shadow-sm space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">2. Accessibility Features</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Keyboard-friendly navigation across all pages</li>
            <li>Readable text contrast and large font sizes</li>
            <li>Mobile-responsive design on all devices</li>
            <li>Alt-text for meaningful images</li>
            <li>Semantic HTML structure to support screen readers</li>
          </ul>
        </div>

        {/* ONGOING IMPROVEMENTS */}
        <div className="p-8 bg-gray-50 rounded-xl border shadow-sm space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">3. Continuous Improvements</h2>
          <p className="text-gray-700 leading-relaxed">
            We regularly review our website and content to identify and fix any accessibility issues.
            Updates and improvements are ongoing to ensure an inclusive experience.
          </p>
        </div>

        {/* KNOWN LIMITATIONS */}
        <div className="p-8 bg-white rounded-xl border shadow-sm space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">4. Known Limitations</h2>
          <p className="text-gray-700 leading-relaxed">
            While we work towards full compliance, there may be some areas that are not yet perfect.
            If you experience issues, please let us know so we can improve.
          </p>
        </div>

        {/* CONTACT SECTION */}
        <div className="p-8 bg-gray-50 rounded-xl border shadow-sm space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">5. Contact Us About Accessibility</h2>
          <p className="text-gray-700">
            If you encounter any accessibility barriers on our website or need assistance, please reach out to us:
          </p>
          <a href="mailto:accessibility@sukhisaathisupport.co.uk" className="font-semibold text-[#009EE3] hover:underline">accessibility@sukhisaathisupport.co.uk</a>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="/contact"
            className="px-8 py-4 bg-[#009EE3] text-white rounded-lg text-lg font-semibold shadow hover:bg-[#007bb8]"
          >
            Contact Support
          </a>
        </div>

      </div>
    </section>
  );
}
