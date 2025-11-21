import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MobileMenu() {
  const [open, setOpen] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const [aboutOpen, setAboutOpen] = React.useState(false);
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 20); // shrink on scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuRef = React.useRef(null);

  // CLOSE MENU ON OUTSIDE CLICK
  React.useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
        setServicesOpen(false);
        setAboutOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="md:hidden relative" ref={menuRef}>
      {/* Hamburger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="p-2 border rounded-lg bg-white shadow-sm"
      >
        {open ? (
          <svg width="22" height="22" stroke="currentColor" fill="none" strokeWidth="2">
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg width="22" height="22" stroke="currentColor" fill="none" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        )}
      </button>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className={`fixed top-16  left-0 right-0 w-full bg-white shadow-xl border-t p-5 z-50 space-y-4 ${shrink ? "mt-7" : "mt-12"}`}>
          <Link to="/" className="hover:text-[#009EE3]">Home</Link>

          {/* SERVICES DROPDOWN */}
          <div>
            <button
              className="flex justify-between items-center w-full py-2 text-gray-700 font-medium"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services
              {servicesOpen ? (
                <svg width="20" height="20" stroke="currentColor" fill="none" strokeWidth="2">
                  <path d="M18 15l-6-6-6 6" />
                </svg>
              ) : (
                <svg width="20" height="20" stroke="currentColor" fill="none" strokeWidth="2">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              )}
            </button>

            {servicesOpen && (
              <div className="pl-4 mt-2 space-y-2">
                <Link to="/home-care" className="block text-gray-700">Home Care</Link>
                <Link to="/disability-support" className="block text-gray-700">Disability Support</Link>
                <Link to="/companionship" className="block text-gray-700">Companionship Care</Link>
                <Link to="/respite" className="block text-gray-700">Respite Care</Link>
              </div>
            )}
          </div>

          {/* ABOUT DROPDOWN */}
          <div>
            <button
              className="flex justify-between items-center w-full py-2 text-gray-700 font-medium"
              onClick={() => setAboutOpen(!aboutOpen)}
            >
              About
              {aboutOpen ? (
                <svg width="20" height="20" stroke="currentColor" fill="none" strokeWidth="2">
                  <path d="M18 15l-6-6-6 6" />
                </svg>
              ) : (
                <svg width="20" height="20" stroke="currentColor" fill="none" strokeWidth="2">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              )}
            </button>

            {aboutOpen && (
              <div className="pl-4 mt-2 space-y-2">
                <Link to="/about" className="block text-gray-700">About Us</Link>
                <Link to="/about?section=commitment" className="block text-gray-700">How We Work</Link>
                <Link to="/about?section=working" className="block text-gray-700">Working With Us</Link>
              </div>
            )}
          </div>

          {/* EXTRA LINKS */}
          <Link to="/how-we-care" className="block py-2 text-gray-700">
            How We Care
          </Link>

          <Link to="/jobs" className="block py-2 text-gray-700">
            Jobs
          </Link>



          {/* CONTACT BUTTON */}
          <Link
            to="/contact"
            className="block py-2 text-center bg-[#009EE3] text-white rounded-md shadow"
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}
