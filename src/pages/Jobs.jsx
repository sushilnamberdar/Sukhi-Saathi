import React, { useState } from "react";

const JOBS = [
  { title: "Care Coordinator", location: "Blackburn", desc: "We’re creating brighter days... meaningful and rewarding work..." },
  { title: "Care Coordinator", location: "Blackpool", desc: "Do you have a passion for delivering exceptional care?..." },
  { title: "Female Support Worker", location: "Basildon", desc: "We’re creating brighter days... city & county..." },
  { title: "Care Assistant", location: "Rayleigh", desc: "Meaningful and rewarding work that makes a real difference..." },
  { title: "Care Assistant", location: "South Ockendon", desc: "N/A..." },
  { title: "Care Assistant", location: "Basildon", desc: "We’re creating brighter days... exciting opportunities..." },
  { title: "Care Assistant", location: "Ormskirk", desc: "Every day will be different... rewarding work..." },
  { title: "Weekend On-call Coordinator", location: "Bamber Bridge", desc: "Fresh challenges. Exciting opportunities..." },
  { title: "Care Assistant", location: "Fleetwood", desc: "Meaningful and rewarding work..." },
  { title: "Support Worker", location: "Blackpool", desc: "Helping people live better lives..." }
];

export default function Jobs() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState({ postcode: "", keyword: "" });
  const perPage = 5;
  const [showForm, setShowForm] = useState(false);

  const filtered = JOBS.filter((job) => {
    const matchPost = search.postcode === "" || job.location.toLowerCase().includes(search.postcode.toLowerCase());
    const matchKey = search.keyword === "" || job.title.toLowerCase().includes(search.keyword.toLowerCase());
    return matchPost && matchKey;
  });

  const totalPages = Math.ceil(filtered.length / perPage) || 1;
  const start = (page - 1) * perPage;
  const currentJobs = filtered.slice(start, start + perPage);

  return (
    <section className="py-16 max-w-6xl mx-auto px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Find the right job for you</h1>
        <button onClick={() => setShowForm(true)} className="px-6 py-3 bg-[#009EE3] hover:bg-[#2f728f] text-white rounded-md shadow">Apply Now</button>
      </div>

      <p className="text-gray-600 max-w-2xl mb-10">
        We have extraordinary people doing great work every day. From community support roles to office-based work,
        there’s a place for you here.
      </p>

      <div className=" bg-gray-20 border-[#009EE3] p-6 rounded-xl border mb-10">
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

      <div className="space-y-6">
        {currentJobs.map((job, i) => (
          <div key={i} className="p-6 bg-white rounded-xl border shadow-sm">
            <div className="flex justify-between">
              <h3 className="text-xl font-semibold">{job.title}</h3>
              <span className="text-sm text-gray-500">{job.location}</span>
            </div>
            <p className="mt-2 text-gray-600">{job.desc}</p>
            <button className="mt-4 text-[#009EE3] font-medium">Find out more →</button>
          </div>
        ))}
      </div>

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
            className={`px-3 py-1 border rounded ${page === i + 1 ? "bg-[#009EE3] text-white" : ""}`}
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
    {showForm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-lg rounded-xl p-6 shadow-xl animate-fadeIn">
            <h2 className="text-2xl font-semibold mb-4">Apply Now</h2>
            <form onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                formData.append("access_key", "74b5ffa2-8778-4733-855b-0e1b19bd6060");

                await fetch("https://api.web3forms.com/submit", {
                  method: "POST",
                  body: formData,
                });
              }} className="space-y-4">
              <input type="text" name="name" required placeholder="Your Name" className="border p-2 w-full rounded" />
              <input type="email" name="email" required placeholder="Email" className="border p-2 w-full rounded" />
              <input type="text" name="phone" required placeholder="Phone Number" className="border p-2 w-full rounded" />
              <input type="text" name="resume" required placeholder="Resume Link (Google Drive / URL)" className="border p-2 w-full rounded" />
              <textarea name="message" rows="4" placeholder="Tell us about yourself" className="border p-2 w-full rounded" />
              <select name="speciality" required className="border p-2 w-full rounded">
                <option value="">Select speciality</option>
                <option value="Care Assistant">Care Assistant</option>
                <option value="Support Worker">Support Worker</option>
                <option value="Care Coordinator">Care Coordinator</option>
                <option value="Supervisor">Field Care Supervisor</option>
                <option value="Live-in Carer">Live-in Carer</option>
              </select>
              <select name="interest" required className="border p-2 w-full rounded">
                <option value="">Area of Interest</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Weekends Only">Weekends Only</option>
                <option value="Night Shifts">Night Shifts</option>
              </select>
              <button type="submit" className="w-full bg-[#009EE3] text-white py-3 rounded-md">Submit Application</button>
            </form>
            <button onClick={() => setShowForm(false)} className="mt-4 w-full py-2 bg-gray-200 rounded-md">Cancel</button>
          </div>
        </div>
      )}
    </section>
  );
}
