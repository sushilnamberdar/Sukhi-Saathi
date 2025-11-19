import React from "react";
import aboutimage from "../assets/about.png"
import Testimonials from "./Testimonials";
import WhyChosseUs from "./ WhyChooseUs";

// Single-file React site for "sukhisaathisupport.co.uk"
// Assumes: Tailwind CSS is configured in the project (Vite / CRA + Tailwind).
// Usage: save as src/App.jsx and run with your usual React setup.

export default function SukhiSaathi() {
  return (
    <div className="font-sans text-gray-800 antialiased">
      {/* <Header /> */}
      <main className="pt-24">
        <About />    
      </main>
    </div>
  );
}



function About() {
  return (
    <section id="about" className="bg-indigo-50/50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <img src={aboutimage} alt="About SukhiSaathi Support" className="rounded-xl shadow" />
      </div>
    </section>
  );
}






