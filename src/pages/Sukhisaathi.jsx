import React from "react";

// Single-file React site for "sukhisaathisupport.co.uk"
// Assumes: Tailwind CSS is configured in the project (Vite / CRA + Tailwind).
// Usage: save as src/App.jsx and run with your usual React setup.

export default function SukhiSaathi() {
  return (
    <div className="font-sans text-gray-800 antialiased">
      {/* <Header /> */}
      <main className="pt-24">
        <About />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}



function Stat({ label, value }) {
  return (
    <div className="flex flex-col">
      <div className="text-2xl font-bold text-indigo-600">{value}</div>
      <div className="text-xs">{label}</div>
    </div>
  );
}

function Services() {
  const services = [
    { title: "78200 - Temporary employment agency activities", desc: "Short-term, flexible staffing solutions for care-related needs." },
    { title: "88100 - Social work activities for elderly & disabled", desc: "Support services aimed at improving daily living for vulnerable people." },
    { title: "96090 - Other service activities (not classified)", desc: "Specialised personal support and lifestyle assistance services." },
    { title: "97000 - Households employing domestic personnel", desc: "Helping families hire and manage trusted domestic care staff." },
    { title: "Live-in Care", desc: "Round-the-clock care in the comfort of home." },
    { title: "Personal Care", desc: "Assistance with washing, dressing and medication." },
    { title: "Companionship", desc: "Friendly support and social visits to reduce loneliness." },
    { title: "Dementia Care", desc: "Specialist support for memory and cognitive needs." },
    { title: "Respite Care", desc: "Temporary cover for family carers." },
    { title: "Night Care", desc: "Assistance and monitoring through the night." },
  ];

  return (
    <section id="services" className="max-w-6xl mx-auto px-4 py-16 bg-white text-black">
      <h2 className="text-3xl font-semibold">Our Services</h2>
      <p className="mt-2 text-gray-600">Flexible and tailored homecare packages to suit individual needs.</p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <article key={s.title} className="p-6 bg-white border border-gray-200 text-black rounded-xl shadow">
            <h3 className="text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-gray-600">{s.desc}</p>
            <a href="#contact" className="mt-4 inline-block text-indigo-600 text-sm">Get in touch →</a>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-indigo-50/50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-semibold">About SukhiSaathi Support</h2>
            <p className="mt-4 text-gray-700">We are a people-first homecare provider delivering compassionate care across communities. Our team are DBS checked, trained, and monitored to deliver the highest standard of care while preserving independence and dignity.</p>

            <ul className="mt-6 grid gap-2 text-sm text-gray-600">
              <li>Personalised care plans</li>
              <li>24/7 support available</li>
              <li>Care assessment and regular reviews</li>
            </ul>
          </div>

          <div>
            <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1000&auto=format&fit=crop&s=placeholder" alt="Team meeting" className="rounded-xl shadow" />
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 bg-white text-black rounded-xl shadow-sm">
      <h3 className="text-2xl font-semibold">Why choose us</h3>
      <div className="mt-6 grid sm:grid-cols-2 gap-6">
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow">
          <h4 className="font-semibold">Person-centred care</h4>
          <p className="mt-2 text-sm text-gray-700">We focus on personal choice and dignity — care plans written with you, not for you.</p>
        </div>
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow">
          <h4 className="font-semibold">Qualified carers</h4>
          <p className="mt-2 text-sm text-gray-700">Ongoing training, DBS checks and supervision for all staff.</p>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { name: "Mrs Patel", text: "Wonderful carers — they treated my mother with respect and warmth." },
    { name: "Mr Ahmed", text: "Professional and punctual. The team made life easier for our family." },
     { name: "Mr Ahmed", text: "Professional and punctual. The team made life easier for our family." },
  ];

  return (
    <section id="testimonials" className="bg-gradient-to-r min-h-screen from-white to-indigo-50 py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h3 className="text-2xl font-semibold">What families say</h3>
        <div className="mt-8 grid gap-6">
          {items.map((t) => (
            <blockquote key={t.name} className="p-6 bg-gray-800 border border-white/30 rounded-xl shadow">
              <p className="text-gray-700">“{t.text}”</p>
              <cite className="block mt-3 text-sm text-gray-500">— {t.name}</cite>
            </blockquote>
          ))}
        </div>
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
    <section id="contact" className="max-w-6xl mx-auto px-4 py-16">
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
            <button type="submit" disabled={loading} className="bg-indigo-600 text-white px-4 py-2 rounded-md">{loading ? 'Sending...' : 'Send message'}</button>
            <div className="text-sm text-gray-500">Or call <strong>0800 123 4567</strong></div>
          </div>
          {sent && <div className="text-sm text-green-600">Thanks — message sent. We'll contact you soon.</div>}
        </form>

        <div className="p-6 bg-gray-800 border border-white/30 rounded-xl shadow">
          <h4 className="font-semibold">Our office</h4>
          <p className="mt-2 text-sm text-gray-600">SukhiSaathi Support — Registered in the UK</p>
          <dl className="mt-4 text-sm text-gray-600">
            <dt className="font-medium">Phone</dt>
            <dd className="mb-2">0800 123 4567</dd>
            <dt className="font-medium">Email</dt>
            <dd className="mb-2">info@sukhisaathisupport.co.uk</dd>
            <dt className="font-medium">Address</dt>
            <dd>London / Service area: UK-wide</dd>
          </dl>

          <div className="mt-6">
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!" className="w-full h-48 rounded" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-14 pb-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10">

        {/* Useful Links */}
        <div className="bg-gray-800 rounded-xl p-6 border border-white/20"><h3 className="text-lg font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">Cookies Policy</a></li>
            <li><a href="#" className="hover:text-white">Accessibility</a></li>
            <li><a href="#" className="hover:text-white">Terms of Use</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Modern Slavery</a></li>
            <li><a href="#" className="hover:text-white">Care Assistant Jobs</a></li>
            <li><a href="#" className="hover:text-white">Gender Pay Gap</a></li>
            <li><a href="#" className="hover:text-white">Visit City & County Healthcare Group</a></li>
            <li><a href="#" className="hover:text-white">Section 172(1) Statement</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="bg-gray-800 rounded-xl p-6 border border-white/20"><h3 className="text-lg font-semibold mb-4">Social Media</h3>
          <ul className="flex items-center gap-4 text-xl">
            <li>
              <a href="#" target="_blank" className="hover:text-white">
                <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1 .9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.6l-.4 3h-2.2v7A10 10 0 0 0 22 12"></path></svg>
              </a>
            </li>
          </ul>
        </div>

        {/* Company Details */}
        <div className="bg-gray-800 rounded-xl p-6 border border-white/20"><h3 className="text-lg font-semibold mb-4">Company Details</h3>
          <p className="text-sm text-gray-300 leading-6">
            SukhiSaathi Support Ltd<br />
            Registered Office: London, UK<br />
            Registered in England and Wales<br />
            Registration No. 06991398
          </p>

          <div className="mt-4 flex gap-4 items-center">
            <img src="https://guardianhomecare.co.uk/wp-content/uploads/sites/30/2020/08/new-ce-badge-fix.png" alt="cert1" className="w-20" />
            <img src="https://guardianhomecare.co.uk/wp-content/uploads/sites/30/2023/07/attachment-300x196.png" alt="cert2" className="w-24" />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} SukhiSaathi Support — All rights reserved.
      </div>
    </footer>
  );
}
