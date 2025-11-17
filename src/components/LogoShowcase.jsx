import React from "react";
import logowithtext from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function LogoShowcase() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 text-center">
      <h2 className="text-2xl font-semibold mb-6">Our Trusted Identity</h2>
      <div className="flex items-center flex-col justify-center">
        <img src={logowithtext} alt="SukhiSaathi Support Logo"  />
        <Link className="text-blue-600 hover:underline" to="https://sukhisaathisupport.co.uk">sukhisaathisupport.co.uk</Link>
      </div>
    </section>
  );
}
