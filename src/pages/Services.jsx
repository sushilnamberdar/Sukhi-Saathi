import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Contact from "./Contact";

export default function Services() {
  const [Path,setpath] = useState("null");
  const location = useLocation();

 
  useEffect(() => {
    const cleaned = location.pathname.replace("/", "") || "home";
    setpath(cleaned);
  }, [location]);

  const services = [
    {
      title: "Temporary Employment & Care Staffing",
      subtitle: " Temporary employment agency activities",
      desc: "Providing trained, compliant, flexible care staff to support homes, families, and organisations on short notice."
    },
    {
      title: "Social Care for Elderly & Disabled",
      subtitle: " Social work activities without accommodation",
      desc: "Community-based support focused on independence, safety, dignity and personalised daily living assistance."
    },
    {
      title: "Specialist Lifestyle & Support Services",
      subtitle: " Other service activities not elsewhere classified",
      desc: "Tailored lifestyle support for individuals needing help with personal organisation, routines and home living."
    },
    {
      title: "Household Care Employment Services",
      subtitle: " Households as employers of domestic personnel",
      desc: "Helping families safely employ trusted domestic and care personnel, including recruitment and vetting."
    },
    // Care services
    {
      title: "Live-in Care",
      desc: "24-hour personalised care for individuals who wish to remain safely in the comfort of their own home."
    },
    {
      title: "Personal Care",
      desc: "Support with washing, dressing, grooming, medication and other essential daily personal needs."
    },
    {
      title: "Companionship",
      desc: "Friendly home visits, conversation, emotional support and meaningful social engagement."
    },
    {
      title: "Dementia Care",
      desc: "Specialist dementia-trained carers supporting memory, behaviour, routine, and emotional wellbeing."
    },
    {
      title: "Respite Care",
      desc: "Short-term care to support family carers, offering peace of mind and temporary relief."
    },
    {
      title: "Night Care",
      desc: "Full overnight support including safety checks, mobility assistance, and reassurance."
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 space-y-16">

        {/* HERO SECTION */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800">Our Services</h1>
          <p className="mt-4 text-gray-600 text-lg">
            Tailored homecare and support services designed to meet the unique needs of every individual.
          </p>
        </div>

        {/* SERVICE GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl border shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-gray-800">{s.title}</h3>
              {s.subtitle && (
                <p className="mt-1 text-sm text-[#009EE3] font-medium">{s.subtitle}</p>
              )}
              <p className="mt-3 text-gray-700 leading-relaxed text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
      {Path==="services-home-care" && <Contact />}
    </section>
  );
}
