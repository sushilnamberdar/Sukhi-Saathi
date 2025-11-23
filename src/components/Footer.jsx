import React from "react";
import { Link } from "react-router-dom";
import { useCookieConsent } from "../pages/Cookie/CookieConsent";
import linkedinIcon from '../assets/icon/linkedin.png'

export default function Footer() {
  const { openSettings } = useCookieConsent();

  return (
    <footer className="bg-gray-900 text-gray-200 pt-14 pb-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10">

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            <button
              onClick={openSettings}
              className="text-sm text-white hover:text-[#009EE3]"
            >
              Manage Cookies
            </button>
            <li>
              <Link
                to="/cookie-policy"
                className="text-sm text-white hover:text-[#009EE3]"
              >
                Cookie Policy
              </Link>
            </li>
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
            href="https://www.linkedin.com/company/sukhisaathisupport"
            target="_blank"
            className="inline-flex items-center gap-2 hover:text-white"
          >
           <img src={linkedinIcon} alt="LinkedIn" className="w-10 h-10" />
          </a>
        </div>

        {/* Company Details */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company Details</h3>
          <p className="text-sm leading-6 text-gray-300">
            SukhiSaathi Support<br />
            177 Alma Street, Radcliffe, Manchester, England, M26 4EX<br />
            Providing non-regulated home & community support services.<br />
          </p>
          <p className="text-sm leading-6 text-gray-300">Company number 16590265</p>
          <div className="mt-4 flex gap-4 items-center">
          </div>
        </div>

      </div>

      <div className="text-center text-gray-400 mt-10 text-sm border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} SukhiSaathi Support — All rights reserved.
      </div>
    </footer>
  );
}
