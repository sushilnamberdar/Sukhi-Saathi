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
        <WhyChosseUs />
        <Testimonials />
        <Contact />
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



function Contact() {
  const [sent, setSent] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.target);

    // Example: redirect to Formspree, or your own server endpoint.
    // Replace the URL below with your form endpoint (Formspree or serverless function)
    const endpoint = "https://formspree.io/f/yourFormId"; // TODO replace

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) setSent(true);
      else alert("There was a problem sending the message.");
    } catch (err) {
      console.error(err);
      alert("Failed to send — check your endpoint and CORS settings.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 border-2 border-gray-200 mt-3 rounded-lg py-16">
      <h3 className="text-2xl font-semibold">Contact us</h3>
      <p className="mt-2 text-gray-600">Call us or send a message and we will get back within 24 hours.</p>

      <div className="mt-8 grid lg:grid-cols-2 gap-8">
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow">
          <div>
            <label className="text-sm">Your name</label>
            <input name="name" required className="mt-1 w-full border rounded p-2" />
          </div>
          <div>
            <label className="text-sm">Phone or email</label>
            <input name="contact" required className="mt-1 w-full border rounded p-2" />
          </div>
          <div>
            <label className="text-sm">Message</label>
            <textarea name="message" rows="4" className="mt-1 w-full border rounded p-2" />
          </div>
          <div className="flex items-center gap-3">
            <button type="submit" disabled={loading} className=" text-[#009EE3] border-[#009EE3] border-2 bg-white px-4 py-2 rounded-md">{loading ? 'Sending...' : 'Send message'}</button>
            <div className="text-sm text-[#009EE3] hover:text-[#68ccf7] transition">Or call <a href="tel:+447471012326">+44 7471 012326</a></div>
          </div>
          {sent && <div className="text-sm text-green-600">Thanks — message sent. We'll contact you soon.</div>}
        </form>

        <div className="p-6 bg-white  border-gray-300 border-2 border-white/30 rounded-xl shadow">
          <h4 className="font-semibold">Our office</h4>
          <p className="mt-2 text-sm text-gray-600">SukhiSaathi Support — Registered in the UK</p>
          <dl className="mt-4 text-sm text-gray-600">
            <dt className="font-medium">Phone</dt>
            <dd className="mb-2">+44 7471 012326</dd>
            <dt className="font-medium">Email</dt>
            <a href="mailto:director@sukhisaathisupport.co.uk" className="mb-2 text-[#009EE3] hover:text-[#68ccf7] transition">director@sukhisaathisupport.co.uk</a>
            <dt className="font-medium">Address</dt>
            <dd>London / Service area: UK-wide</dd>
          </dl>

          <div className="mt-6">
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2369.360920230065!2d-2.3383725229080636!3d53.569174958027006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487ba5a49325e885%3A0x3a0b55fccb473470!2s173%20Alma%20St%2C%20Radcliffe%2C%20Manchester%20M26%204EX%2C%20UK!5e0!3m2!1sen!2sin!4v1763382518329!5m2!1sen!2sin" className="w-full h-48 rounded" />
          </div>
        </div>
      </div>
    </section>
  );
}


