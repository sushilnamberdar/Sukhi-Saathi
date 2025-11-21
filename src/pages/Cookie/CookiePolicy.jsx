import React from "react";
import { Link } from "react-router-dom";
import { useCookieConsent } from "./CookieConsent";

export default function CookiePolicy() {

  const { openSettings } = useCookieConsent();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 space-y-10">

        {/* ... your full cookie policy sections ... */}

        {/* CTA */}
        <div className="text-center mt-10 space-y-4">

          <button
            onClick={openSettings}
            className="px-6 py-3 rounded-full bg-gray-800 text-white text-sm hover:bg-gray-700 shadow"
          >
            Manage Cookie Preferences
          </button>

          <br />

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
