import React, { useState } from "react";
import topbanner from "../assets/AboutSectiontopbanner.png";

// Accordion imports
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../components/ui/accordion";

export default function About() {
  const [active, setActive] = useState("working");

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Banner */}
        <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mb-12">
          <img
            src={topbanner}
            alt="About banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-6 left-6 bg-black/60 text-white px-4 py-3 rounded-lg">
            <h1 className="text-2xl font-semibold">About SukhiSaathi Support</h1>
            <p className="text-sm opacity-90">Part of SukhiSaathi Care Network</p>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-4 gap-10">
          {/* Sidebar */}
          <div className="md:col-span-1 space-y-6">
            <nav className="space-y-2  p-4 rounded-xl border-2 border-gray-200">
              <button
                onClick={() => setActive("about")}
                className={`block w-full text-left px-4 py-2 rounded-md font-medium ${
                  active === "about"
                    ? "border-[#009EE3] border-2 text-[#009EE3]"
                    : "hover:bg-gray-200"
                }`}
              >
                About us
              </button>

              <button
                onClick={() => setActive("commitment")}
                className={`block w-full text-left px-4 py-2 rounded-md font-medium ${
                  active === "commitment"
                    ? "border-[#009EE3] border-2 text-[#009EE3]"
                    : "hover:bg-gray-200"
                }`}
              >
                How we work
              </button>

              <button
                onClick={() => setActive("working")}
                className={`block w-full text-left px-4 py-2 rounded-md font-medium ${
                  active === "working"
                    ? "border-[#009EE3] border-2 text-[#009EE3]"
                    : "hover:bg-gray-200"
                }`}
              >
                Working with us
              </button>
            </nav>
          </div>

          {/* Content */}
          <div className="md:col-span-3 space-y-12">
            {active === "about" && (
              <div className="bg-white p-8 rounded-2xl shadow border border-gray-200">
                <h2 className="text-3xl font-semibold">About SukhiSaathi Support</h2>
                <p className="mt-4 text-gray-700">
                  We are a people-first homecare provider delivering compassionate care across communities...
                </p>
                <ul className="mt-6 grid gap-2 text-sm text-gray-600">
                  <li>Personalised care plans</li>
                  <li>24/7 support available</li>
                  <li>Care assessment and regular reviews</li>
                </ul>
              </div>
            )}

            {active === "working" && (
              <div className="border border-2 rounded-2xl p-10 shadow-inner">
                <h2 className="text-3xl font-bold mb-4">Working with us</h2>
                <h3 className="text-xl font-semibold mb-6">
                  Here’s how we’re different to everyone else
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Every care provider talks about person-centred care and high-quality delivery...
                  </p>
                  <p>Instead, let’s talk about how we’re working for you:</p>

                  <p>
                    <strong>We’re always close by</strong> – As part of the UK’s
                    largest care group…
                  </p>

                  <p>
                    <strong>We’re helping people home and keeping them there</strong>…
                  </p>

                  <p>
                    <strong>We’re reducing the burden through community health</strong>…
                  </p>

                  <p>
                    <strong>We’re building the best care workforce for you</strong>…
                  </p>

                  <p>
                    <strong>We’re standing up for what matters</strong>…
                  </p>
                </div>
              </div>
            )}

            {active === "commitment" && (
              <div className="bg-white rounded-2xl p-10 shadow border border-gray-200">
                <h2 className="text-3xl font-bold mb-6">Our Commitment</h2>
                <ul className="space-y-3 text-gray-700 leading-relaxed">
                  <li>
                    <strong>Quality Assurance:</strong> Regular monitoring and
                    compliance with UK care standards.
                  </li>
                  <li>
                    <strong>Community Driven:</strong> We work closely within local
                    communities…
                  </li>
                  <li>
                    <strong>Trusted Workforce:</strong> Highly-trained professionals…
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* ------------------- MOBILE ACCORDION ------------------- */}
        <div className="md:hidden mt-8">
          <Accordion type="single" collapsible defaultValue="about" className="space-y-4">

            {/* About accordion */}
            <AccordionItem value="about">
              <AccordionTrigger>About us</AccordionTrigger>
              <AccordionContent>
                <div className="bg-white p-5 rounded-xl border shadow">
                  <h2 className="text-2xl font-semibold">About SukhiSaathi Support</h2>
                  <p className="mt-3 text-gray-700">
                    We are a people-first homecare provider delivering compassionate care…
                  </p>
                  <ul className="mt-4 grid gap-2 text-sm text-gray-600">
                    <li>Personalised care plans</li>
                    <li>24/7 support available</li>
                    <li>Care assessment and regular reviews</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* How we work accordion */}
            <AccordionItem value="commitment">
              <AccordionTrigger>How we work</AccordionTrigger>
              <AccordionContent>
                <div className="bg-white rounded-xl p-5 border shadow">
                  <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
                  <ul className="space-y-3 text-gray-700 leading-relaxed">
                    <li>
                      <strong>Quality Assurance:</strong> Regular monitoring…
                    </li>
                    <li>
                      <strong>Community Driven:</strong> We work closely...
                    </li>
                    <li>
                      <strong>Trusted Workforce:</strong> Highly-trained professionals…
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Working with us accordion */}
            <AccordionItem value="working">
              <AccordionTrigger>Working with us</AccordionTrigger>
              <AccordionContent>
                <div className="border border-2 rounded-xl p-5 shadow-inner">
                  <h2 className="text-2xl font-bold mb-4">Working with us</h2>
                  <p className="text-gray-700">
                    Every care provider talks about person-centred care…
                  </p>

                  <p className="mt-3">
                    <strong>We’re always close by</strong> – As part of the UK’s
                    largest care group…
                  </p>
                  <p className="mt-3">
                    <strong>We’re helping people home</strong> – From home care…
                  </p>
                  <p className="mt-3">
                    <strong>We’re reducing the burden</strong> – We blend compassion...
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </div>
      </div>
    </section>
  );
}
