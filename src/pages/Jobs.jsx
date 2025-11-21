import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

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

  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("");

    const formData = new FormData(e.target);

    formData.append("jobTitle", JOB.title);
    formData.append("captcha", captchaToken);

    try {
      const res = await fetch("https://api.sukhisaathisupport.co.uk/apply", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        setResult("Application submitted successfully! We will contact you within 24 hours.");
        toast.success("Application submitted successfully!");
        e.target.reset();
      } else {
        setResult(data.error || "Something went wrong. Try again.");
        toast.error(data.error || "Something went wrong. Try again.");
      }
    } catch (err) {
      setResult("Network error. Please try again.");
      toast.error("Network error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section className="py-16 max-w-5xl mx-auto px-4">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Care Assistant – Now Hiring
          </h1>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Join our caring and dedicated team. Help individuals stay independent, active, 
            and supported with dignity and compassion.
          </p>
        </div>

        <button
          onClick={() => setShowForm(true)}
          className=" w-56 pl-2 pr-2 h-10 flex xl:w-44 items-center justify-center   bg-gradient-to-r from-[#009EE3] to-[#2f728f] text-white rounded-full shadow-lg hover:scale-105 transition"
        >
          Apply Now
        </button>
      </div>

      {/* JOB CARD */}
      <div className="p-8 rounded-2xl shadow-lg bg-gradient-to-tr from-white via-blue-50 to-white border border-blue-100 transform hover:shadow-2xl transition">
        <div className="flex justify-between">
          <h3 className="text-2xl font-semibold text-gray-800">{JOB.title}</h3>
          <span className="text-sm text-gray-500">{JOB.location}</span>
        </div>

        <p className="mt-4 text-gray-600 leading-relaxed">{JOB.desc}</p>

        <button
          onClick={() => setShowForm(true)}
          className="mt-6 inline-block text-[#009EE3] hover:underline font-medium text-lg"
        >
          Apply for this role →
        </button>
      </div>

      {/* POPUP FORM */}
      {showForm && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={(e) => e.target === e.currentTarget && setShowForm(false)}
        >

          {/* FORM CONTAINER */}
          <div className="relative bg-white/90 backdrop-blur-lg border border-gray-200 w-full max-w-lg rounded-2xl p-8 shadow-2xl">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute right-4 top-4 text-gray-600 hover:text-red-500 text-xl"
            >
              ✕
            </button>

            {/* TITLE */}
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Apply for Care Assistant
            </h2>

            {/* FORM */}
            <form onSubmit={submitForm} className="space-y-4">

              <input type="text" name="name" required placeholder="Full Name"
                className="border p-3 w-full rounded-lg shadow-sm focus:ring-[#009EE3] focus:border-[#009EE3]" />

              <input type="email" name="email" required placeholder="Email"
                className="border p-3 w-full rounded-lg shadow-sm focus:ring-[#009EE3] focus:border-[#009EE3]" />

              <input type="text" name="phone" required placeholder="Phone Number"
                className="border p-3 w-full rounded-lg shadow-sm focus:ring-[#009EE3] focus:border-[#009EE3]" />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Upload Resume (PDF, DOC, DOCX, JPG, PNG)
                </label>
                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  required
                  className="border p-3 w-full rounded-lg shadow-sm bg-white"
                />
              </div>

              <select name="interest" required
                className="border p-3 w-full rounded-lg shadow-sm bg-white focus:ring-[#009EE3]">
                <option value="">Area of Interest</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Weekend only">Weekend Only</option>
                <option value="Night shifts">Night Shifts</option>
              </select>

              <textarea name="message" rows="4" placeholder="Message (optional)"
                className="border p-3 w-full rounded-lg shadow-sm focus:ring-[#009EE3]"></textarea>

              {/* CAPTCHA */}
              <div className="cf-turnstile-job"></div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="w-full py-3 rounded-full bg-gradient-to-r from-[#009EE3] to-[#2f728f] text-white font-semibold shadow hover:scale-[1.02] transition"
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>

              {result && (
                <p className="text-center mt-3 text-green-600 font-medium">{result}</p>
              )}
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
