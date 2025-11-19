import React from "react";

export default function FAQ() {
  const faqs = [
    {
      q: "Are your services regulated by the CQC?",
      a: "We provide non-regulated support services such as companionship, home assistance, supervision, and lifestyle support. These do not require CQC registration."
    },
    {
      q: "Do you provide personal care?",
      a: "No. We do not provide personal care tasks such as washing, dressing, administering medication, or clinical care."
    },
    {
      q: "Which areas do you cover?",
      a: "We support clients across multiple regions in the UK. Please contact us to confirm availability in your postcode."
    },
    {
      q: "Can I choose my support worker?",
      a: "Yes. We try to match clients with the support worker whose personality and availability best suits their needs."
    },
    {
      q: "Do you offer emergency or short-notice support?",
      a: "Where possible, we can arrange rapid-response short-term support depending on staff availability."
    },
    {
      q: "Is your staff trained?",
      a: "All staff complete training in safeguarding, boundaries, communication, lone working, supervision, and ongoing development."
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16 bg-white">
      <h1 className="text-4xl font-bold text-center text-gray-800">Frequently Asked Questions</h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mt-4">
        Find clear answers to the most common questions about our support services.
      </p>

      <div className="mt-12 space-y-6">
        {faqs.map((item, i) => (
          <div key={i} className="p-6 border rounded-xl bg-gray-50 shadow-sm">
            <h3 className="font-semibold text-xl text-gray-800">{item.q}</h3>
            <p className="mt-2 text-gray-700">{item.a}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a href="/contact" className="px-8 py-4 bg-[#009EE3] text-white rounded-lg shadow hover:bg-[#007bb8]">
          Still have questions? Contact us
        </a>
      </div>
    </section>
  );
}
