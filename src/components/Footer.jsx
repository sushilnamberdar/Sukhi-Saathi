import React from "react";
import { Link } from "react-router-dom";
import footerlogo from "../assets/footer/footerlogo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-14 pb-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10">

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
            <li><Link to="/accessibility" className="hover:text-white">Accessibility</Link></li>
            <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link to="/complaints" className="hover:text-white">Complaints</Link></li>
            <li><Link to="/safeguarding" className="hover:text-white">Safeguarding</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Social Media</h3>
          <a
            href="#"
            target="_blank"
            className="inline-flex items-center gap-2 hover:text-white"
          >
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2V9.6c0-2 1.2-3.1 3-3.1h2v2h-1c-.7 0-1 .5-1 1.1V12h2.6l-.4 3H14v7A10 10 0 0 0 22 12" />
            </svg>
            Facebook
          </a>
        </div>

        {/* Company Details */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company Details</h3>
          <p className="text-sm leading-6 text-gray-300">
            SukhiSaathi Support<br />
            London, United Kingdom<br />
            Providing non-regulated home & community support services.<br />
          </p>

          <div className="mt-4 flex gap-4 items-center">
            <img src={footerlogo} className="w-20" />
          </div>
        </div>

      </div>

      <div className="text-center text-gray-400 mt-10 text-sm border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} SukhiSaathi Support — All rights reserved.
      </div>
    </footer>
  );
}
