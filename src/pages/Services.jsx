import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Contact from "./Contact";

export default function Services() {
  const [Path, setpath] = useState("null");
  const location = useLocation();


  useEffect(() => {
    const cleaned = location.pathname.replace("/", "") || "home";
    setpath(cleaned);
  }, [location]);

  const services = [
    {
      title: "Temporary Care & Support Staffing",
      subtitle: "Flexible Support Personnel",
      desc: "Providing friendly, trained support workers to assist families and organisations with everyday non-regulated care tasks."
    },
    {
      title: "Lifestyle & Independence Support",
      subtitle: "Daily Living Assistance",
      desc: "Helping individuals manage routines, stay organised, and remain confident and independent at home."
    },
    {
      title: "Household Care Employment Services",
      subtitle: "Domestic Personnel Support",
      desc: "Helping families identify, vet, and organise trusted household support and companionship workers."
    },
    {
      title: "Live-In Home Support",
      desc: "Round-the-clock companionship, household support, supervision, community access, and daily routine assistance. (Non-regulated)"
    },
    {
      title: "Companionship",
      desc: "Conversation, emotional support, social visits, outings, hobbies, and community activities."
    },
    {
      title: "Respite Support",
      desc: "Short-term assistance giving family members time to rest while we help with safe, everyday non-regulated tasks."
    },
    {
      title: "Night Sitting & Home Supervision",
      desc: "Overnight presence, reassurance, monitoring, and household support — without delivering personal care."
    }
  ];


  return (
    <section className="py-16 ">
      <div className="max-w-6xl mx-auto px-4 space-y-16">

        {/* HERO SECTION */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800">Our Services</h1>
          <p className="mt-4 text-gray-600 text-lg">
            Tailored homecare and support services designed to meet the unique needs of every individual.
          </p>
          <p className="mt-4 text-gray-600 text-lg">
            We provide personalised home support, companionship, and practical daily-living assistance —
            helping individuals feel confident, safe, and independent.
          </p>

          <p className="mt-2 text-sm text-gray-500">
            *We offer non-regulated support services (companionship, household help, community access, daily
            living assistance). We do not provide personal care or medical services that require CQC registration.
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
      {Path === "services-home-care" && <Contact />}
    </section>
  );
}
