import React from "react";

export default function Accessibility() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 space-y-10">

        {/* HERO */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800">Accessibility Statement</h1>
          <p className="mt-4 text-gray-600 text-lg">
            We are committed to making our website accessible and usable for everyone, including
            people with disabilities or those using assistive technologies.
          </p>
        </div>

        {/* COMMITMENT */}
        <div className="p-8 bg-gray-50 rounded-xl border shadow-sm space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">1. Our Accessibility Commitment</h2>
          <p className="text-gray-700 leading-relaxed">
            We strive to follow the Web Content Accessibility Guidelines (WCAG) 2.1 AA standards.
            Our goal is to ensure every user can access information, navigate the site, and engage
            with us without barriers.
          </p>
        </div>

        {/* FEATURES */}
        <div className="p-8 bg-white rounded-xl border shadow-sm space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">2. Accessibility Features We Provide</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Keyboard-friendly navigation across the website</li>
            <li>High-contrast, readable text</li>
            <li>Mobile-responsive layouts for all screen sizes</li>
            <li>Alt-text descriptions for meaningful images</li>
            <li>Semantic HTML structure to improve screen reader support</li>
            <li>Clear headings and consistent page layout</li>
          </ul>
        </div>

        {/* ONGOING IMPROVEMENTS */}
        <div className="p-8 bg-gray-50 rounded-xl border shadow-sm space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">3. Continuous Improvements</h2>
          <p className="text-gray-700 leading-relaxed">
            We regularly review our website to identify accessibility issues and make improvements.
            This includes testing with assistive tools where possible and updating content and designs
            to stay aligned with best practices.
          </p>
        </div>

        {/* KNOWN LIMITATIONS */}
        <div className="p-8 bg-white rounded-xl border shadow-sm space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">4. Known Limitations</h2>
          <p className="text-gray-700 leading-relaxed">
            While we aim for full accessibility, there may be some areas that need further refinement.
            If you experience difficulty accessing any part of the site, please contact us so we can help.
          </p>
        </div>

        {/* BROWSER COMPATIBILITY */}
        <div className="p-8 bg-gray-50 rounded-xl border shadow-sm space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">5. Browser Compatibility</h2>
          <p className="text-gray-700 leading-relaxed">
            Our website works best on modern browsers such as Chrome, Edge, Safari, and Firefox.
            Older browsers may not display all features perfectly.
          </p>
        </div>

        {/* CONTACT SECTION */}
        <div className="p-8 bg-white rounded-xl border shadow-sm space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">6. Contact Us About Accessibility</h2>
          <p className="text-gray-700">
            If you encounter accessibility barriers or need assistance accessing information,
            please contact us:
          </p>
          <a
            href="mailto:accessibility@sukhisaathisupport.co.uk"
            className="font-semibold text-[#009EE3] hover:underline"
          >
            accessibility@sukhisaathisupport.co.uk
          </a>
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
