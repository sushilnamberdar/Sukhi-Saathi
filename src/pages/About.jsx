import React, { useEffect, useState } from "react";
import topbanner from "../assets/AboutSectiontopbanner.webp";

// Accordion imports
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../components/ui/accordion";

export default function About() {
  const [active, setActive] = useState("about");
  const [mactive, setmactive] = useState("about");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const section = params.get("section");
    if (section) {
      setActive(section)
      setmactive(section);
    }
  }, []);

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
            <p className="text-sm opacity-90">Supporting Independence & Everyday Living</p>
          </div>
        </div>

        {/* ---------------- DESKTOP LAYOUT ---------------- */}
        <div className="hidden md:grid md:grid-cols-4 gap-10">
          {/* Sidebar */}
          <div className="md:col-span-1 space-y-6">
            <nav className="space-y-2 p-4 rounded-xl border-2 border-gray-200">
              <button
                onClick={() => setActive("about")}
                className={`block w-full text-left px-4 py-2 rounded-md font-medium ${active === "about"
                  ? "border-[#009EE3] border-2 text-[#009EE3]"
                  : "hover:bg-gray-200"
                  }`}
              >
                About us
              </button>

              <button
                onClick={() => setActive("commitment")}
                className={`block w-full text-left px-4 py-2 rounded-md font-medium ${active === "commitment"
                  ? "border-[#009EE3] border-2 text-[#009EE3]"
                  : "hover:bg-gray-200"
                  }`}
              >
                How we work
              </button>

              <button
                onClick={() => setActive("working")}
                className={`block w-full text-left px-4 py-2 rounded-md font-medium ${active === "working"
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
                <h2 className="text-3xl font-semibold">Who We Are</h2>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  SukhiSaathi Support provides **non-medical, non-regulated home support**
                  designed to make everyday life easier, safer, and more comfortable.
                  Our team focuses on wellbeing, independence, and confident living —
                  offering friendly help around the home and support within the community.
                </p>

                <ul className="mt-6 grid gap-2 text-sm text-gray-600">
                  <li>• Wellbeing-focused support</li>
                  <li>• Help with daily routines</li>
                  <li>• Friendly, trained support workers</li>
                  <li>• Encouragement, companionship & home assistance</li>
                </ul>
              </div>
            )}

            {active === "working" && (
              <div className="border border-2 rounded-2xl p-10 shadow-inner">
                <h2 className="text-3xl font-bold mb-4">Working With Us</h2>

                <p className="text-gray-700 leading-relaxed mb-4">
                  We work closely with individuals and families to offer support
                  that feels personal, respectful, and empowering. Our team is trained to
                  assist with daily living activities — always within the scope of
                  **non-regulated home support**.
                </p>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p><strong>Local and dependable</strong> – Our support workers live within the community, ensuring familiarity and trust.</p>

                  <p><strong>Helping people stay independent</strong> – We provide practical help that enables individuals to continue living confidently at home.</p>

                  <p><strong>Community wellbeing</strong> – We encourage social engagement, daily routines, confidence-building, and positive mental wellbeing.</p>

                  <p><strong>A supportive team</strong> – Our support staff receive training for safe, ethical, and compliant non-regulated support roles.</p>
                </div>
              </div>
            )}

            {active === "commitment" && (
              <div className="bg-white rounded-2xl p-10 shadow border border-gray-200">
                <h2 className="text-3xl font-bold mb-6">Our Commitment</h2>

                <ul className="space-y-3 text-gray-700 leading-relaxed">
                  <li><strong>Quality Support:</strong> We follow ethical standards and best practices for wellbeing-focused home support.</li>
                  <li><strong>Community Led:</strong> Our team understands local needs and adapts support around each person’s routine.</li>
                  <li><strong>Trusted Team:</strong> Friendly, trained support workers committed to dignity, respect, and safety.</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* ---------------- MOBILE ACCORDION ---------------- */}
        <div className="md:hidden mt-8">
          <Accordion type="single" collapsible defaultValue={mactive} onChange={setmactive} className="space-y-4">

            {/* About accordion */}
            <AccordionItem value="about">
              <AccordionTrigger>About us</AccordionTrigger>
              <AccordionContent>
                <div className="bg-white p-5 rounded-xl border shadow">
                  <h2 className="text-2xl font-semibold">Who We Are</h2>
                  <p className="mt-3 text-gray-700 leading-relaxed">
                    We provide non-regulated home and wellbeing support designed
                    to make everyday life easier and more independent.
                  </p>
                  <ul className="mt-4 grid gap-2 text-sm text-gray-600">
                    <li>• Wellbeing-focused support</li>
                    <li>• Companionship & daily encouragement</li>
                    <li>• Help with household routines</li>
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
                    <li>• Ethical, safe support practices</li>
                    <li>• Community-focused routines</li>
                    <li>• Friendly and respectful team</li>
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
                  <p className="text-gray-700 leading-relaxed">
                    We offer dependable, friendly everyday support designed
                    to promote confidence and independence.
                  </p>

                  <p className="mt-3"><strong>Local support workers</strong> who understand the community.</p>
                  <p className="mt-3"><strong>Encouragement & companionship</strong> for everyday routines.</p>
                  <p className="mt-3"><strong>Safe and ethical support</strong> within non-regulated guidelines.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </div>
      </div>
    </section>
  );
}
