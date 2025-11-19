import React, { useState } from "react";

const JOBS = [
  { title: "Support Coordinator", location: "Blackburn", desc: "Coordinate daily support schedules, assist teams, and ensure individuals receive consistent, high-quality non-regulated home support." },
  { title: "Support Coordinator", location: "Blackpool", desc: "Help manage community support operations, communicate with families, and organise worker rotas." },
  { title: "Female Support Worker", location: "Basildon", desc: "Provide practical home support, companionship, community access and general wellbeing assistance." },
  { title: "Support Worker", location: "Rayleigh", desc: "Support individuals with routines, meal prep, social visits and maintaining independence at home." },
  { title: "Support Worker", location: "South Ockendon", desc: "Assist with household tasks, visits, and community activities. Training provided." },
  { title: "Support Worker", location: "Basildon", desc: "Offer consistent day-to-day practical support and companionship." },
  { title: "Support Worker", location: "Ormskirk", desc: "Help individuals stay connected, active and independent through daily support visits." },
  { title: "Weekend On-Call Coordinator", location: "Bamber Bridge", desc: "Handle weekend support enquiries, assist teams and manage emergency scheduling." },
  { title: "Support Worker", location: "Fleetwood", desc: "Provide meaningful support across local communities on flexible shifts." },
  { title: "Community Support Worker", location: "Blackpool", desc: "Encourage social engagement, community participation and daily wellbeing." }
];

export default function Jobs() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState({ postcode: "", keyword: "" });
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const perPage = 5;

  // ----- FILTER JOBS -----
  const filtered = JOBS.filter((job) => {
    const matchPost =
      search.postcode.trim() === "" ||
      job.location.toLowerCase().includes(search.postcode.toLowerCase());

    const matchKey =
      search.keyword.trim() === "" ||
      job.title.toLowerCase().includes(search.keyword.toLowerCase());

    return matchPost && matchKey;
  });

  const totalPages = Math.ceil(filtered.length / perPage) || 1;
  const start = (page - 1) * perPage;
  const currentJobs = filtered.slice(start, start + perPage);

  // ----- SUBMIT FORM -----
  const submitForm = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("");

    const formData = new FormData(event.target);
    formData.append("access_key", "74b5ffa2-8778-4733-855b-0e1b19bd6060");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Application submitted successfully!");
        event.target.reset();
      } else {
        setResult("Something went wrong. Try again.");
      }
    } catch {
      setResult("Network error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section className="py-16 max-w-6xl mx-auto px-4">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Find the right job for you</h1>
        <button
          onClick={() => setShowForm(true)}
          className="px-6 py-3 bg-[#009EE3] hover:bg-[#2f728f] text-white rounded-md shadow"
        >
          Apply Now
        </button>
      </div>

      <p className="text-gray-600 max-w-2xl mb-10">
        We have dedicated people doing important work every day. Whether you're supporting individuals
        in the community or helping from an office, there’s a place for you here.
      </p>

      {/* SEARCH FILTERS */}
      <div className="bg-gray-20 border border-[#009EE3] p-6 rounded-xl mb-10">
        <h2 className="font-semibold mb-4">Search jobs in your area</h2>

        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <input
            className="border rounded p-2 w-full"
            placeholder="Full postcode"
            value={search.postcode}
            onChange={(e) => setSearch({ ...search, postcode: e.target.value })}
          />

          <input
            className="border rounded p-2 w-full"
            placeholder="Keywords"
            value={search.keyword}
            onChange={(e) => setSearch({ ...search, keyword: e.target.value })}
          />
        </div>

        <button
          onClick={() => setPage(1)}
          className="px-6 py-3 bg-[#009EE3] text-white rounded-md"
        >
          Search
        </button>
      </div>

      {/* JOB LIST */}
      <div className="space-y-6">
        {currentJobs.map((job, i) => (
          <div key={i} className="p-6 bg-white rounded-xl border shadow-sm">
            <div className="flex justify-between">
              <h3 className="text-xl font-semibold">{job.title}</h3>
              <span className="text-sm text-gray-500">{job.location}</span>
            </div>
            <p className="mt-2 text-gray-600">{job.desc}</p>
            <button
              onClick={() => setShowForm(true)}
              className="mt-4 text-[#009EE3] font-medium"
            >
              Apply → 
            </button>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center items-center gap-3 mt-10 text-lg">
        <button
          onClick={() => page > 1 && setPage(page - 1)}
          className="px-3 py-1 border rounded"
        >
          ←
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-1 border rounded ${
              page === i + 1 ? "bg-[#009EE3] text-white" : ""
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => page < totalPages && setPage(page + 1)}
          className="px-3 py-1 border rounded"
        >
          →
        </button>
      </div>

      {/* POPUP FORM */}
      {showForm && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
          onClick={(e) => e.target === e.currentTarget && setShowForm(false)}
        >
          <div className="bg-white w-full max-w-lg rounded-xl p-6 shadow-xl">
            <h2 className="text-2xl font-semibold mb-4">Apply Now</h2>

            <form onSubmit={submitForm} className="space-y-4">
              <input type="text" name="name" required placeholder="Your Name" className="border p-2 w-full rounded" />
              <input type="email" name="email" required placeholder="Email" className="border p-2 w-full rounded" />
              <input type="text" name="phone" required placeholder="Phone Number" className="border p-2 w-full rounded" />
              <input type="text" name="resume" required placeholder="Resume Link (Google Drive / URL)" className="border p-2 w-full rounded" />

              <select name="speciality" required className="border p-2 w-full rounded">
                <option value="">Select speciality</option>
                <option value="Support Worker">Support Worker</option>
                <option value="Coordinator">Support Coordinator</option>
                <option value="Live-in Support">Live-in Support</option>
                <option value="Supervisor">Field Supervisor</option>
              </select>

              <select name="interest" required className="border p-2 w-full rounded">
                <option value="">Area of Interest</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Weekend only">Weekend Only</option>
                <option value="Night shifts">Night Shifts</option>
              </select>

              <textarea name="message" rows="4" placeholder="Tell us about yourself" className="border p-2 w-full rounded" />

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
