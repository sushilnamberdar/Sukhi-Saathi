import React, { useState } from "react";

export default function Jobs() {
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");


  const JOB = {
    title: "Care Assistant",
    location: "United Kingdom",
    desc: "Provide home support, companionship, independence support, and general day-to-day assistance to individuals across the UK. Training provided."
  };

  useEffect(() => {
    if (showForm) {
      setTimeout(() => {
        if (window.turnstile) {
          window.turnstile.render(".cf-turnstile-job", {
            sitekey: "0x4AAAAAACB8UuVvJ0oVE9z0",
            callback: (token) => setCaptchaToken(token),
          });
        }
      }, 300);
    }
  }, [showForm]);

  // SUBMIT APPLICATION
  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("");

    const formData = new FormData(e.target);

    const payload = {
      jobTitle: JOB.title,
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      resume: formData.get("resume"),
      interest: formData.get("interest"),
      message: formData.get("message") || "",
      captcha: captchaToken,    // <-- ADD THIS
    };


    try {
      const res = await fetch("https://api.sukhisaathisupport.co.uk/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        setResult("Application submitted successfully! We will contact you within 24 hours.");
        e.target.reset();
      } else {
        setResult(data.error || "Something went wrong. Try again.");
      }
    } catch (err) {
      setResult("Network error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section className="py-16 max-w-5xl mx-auto px-4">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Care Assistant – Now Hiring</h1>

        <button
          onClick={() => setShowForm(true)}
          className="px-6 py-3 bg-[#009EE3] hover:bg-[#2f728f] text-white rounded-md shadow"
        >
          Apply Now
        </button>
      </div>

      <p className="text-gray-600 max-w-2xl mb-10">
        Join our caring and dedicated team. As a Care Assistant, you will make a positive impact
        on individuals' lives by helping them stay independent, active and supported.
      </p>

      {/* JOB CARD */}
      <div className="p-6 bg-white rounded-xl border shadow-sm">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">{JOB.title}</h3>
          <span className="text-sm text-gray-500">{JOB.location}</span>
        </div>
        <p className="mt-2 text-gray-600">{JOB.desc}</p>

        <button
          onClick={() => setShowForm(true)}
          className="mt-4 text-[#009EE3] font-medium"
        >
          Apply →
        </button>
      </div>

      {/* POPUP FORM */}
      {showForm && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
          onClick={(e) => e.target === e.currentTarget && setShowForm(false)}
        >
          <div className="bg-white w-full max-w-lg rounded-xl p-6 shadow-xl">

            <h2 className="text-2xl font-semibold mb-4">Apply for Care Assistant</h2>

            <form onSubmit={submitForm} className="space-y-4">

              <input type="text" name="name" required placeholder="Your Name" className="border p-2 w-full rounded" />
              <input type="email" name="email" required placeholder="Email" className="border p-2 w-full rounded" />
              <input type="text" name="phone" required placeholder="Phone Number" className="border p-2 w-full rounded" />
              <input type="text" name="resume" required placeholder="Resume Link (Google Drive / URL)" className="border p-2 w-full rounded" />
              <div className="cf-turnstile-job"></div>


              <select name="interest" required className="border p-2 w-full rounded">
                <option value="">Area of Interest</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Weekend only">Weekend Only</option>
                <option value="Night shifts">Night Shifts</option>
              </select>

              <textarea name="message" rows="4" placeholder="Tell us about yourself (optional)" className="border p-2 w-full rounded" />

              <button type="submit" className="w-full bg-[#009EE3] text-white py-3 rounded-md">
                {loading ? "Submitting..." : "Submit Application"}
              </button>

              {result && <p className="text-center mt-2 text-green-600">{result}</p>}
            </form>

            <button
              onClick={() => setShowForm(false)}
              className="mt-4 w-full py-2 bg-gray-200 rounded-md"
            >
              Cancel
            </button>

          </div>
        </div>
      )}
    </section>
  );
}
