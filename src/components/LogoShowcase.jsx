import React from "react";
import logowithtext from "../assets/logo.png";

export default function LogoShowcase() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 text-center">
      <h2 className="text-2xl font-semibold mb-6">Our Trusted Identity</h2>

      <div className="flex flex-col items-center justify-center space-y-4">
        <img
          src={logowithtext}
          alt="SukhiSaathi Support Logo"
          className="w-52 md:w-64 object-contain"
        />

        <a
          href="https://sukhisaathisupport.co.uk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#009EE3] hover:underline font-medium"
        >
          sukhisaathisupport.co.uk
        </a>
      </div>
    </section>
  );
}
