import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import newimg from '../assets/1.webp'

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");


      const [shrink, setShrink] = useState(false);
  
  
      useEffect(() => {
      const handleScroll = () => {
        setShrink(window.scrollY > 20); // shrink on scroll
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  // Load Turnstile token callback
  useEffect(() => {
    // render widget after React mounts
    if (window.turnstile) {
      window.turnstile.render('.cf-turnstile', {
        sitekey: "0x4AAAAAACB8UuVvJ0oVE9z0",
        callback: function (token) {
          setCaptchaToken(token);
        }
      });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!captchaToken) {
      toast.error("Captcha failed. Please try again.");
      setLoading(false);
      return;
    }

    const formData = new FormData(e.target);

    const payload = {
      name: formData.get("name"),
      phone: formData.get("contact"),
      email: "noreply@sukhisaathisupport.co.uk",
      subject: "New Contact Form Submission",
      message: formData.get("message"),
      captcha: captchaToken,
    };

    try {
      const res = await fetch("https://api.sukhisaathisupport.co.uk/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        toast.success("Thank you! We’ve received your message — our team will contact you within 24 hours.");
        e.target.reset();
        setCaptchaToken("");
        window.turnstile?.reset(); // reset widget
      } else {
        toast.error("Error sending message.");
      }
    } catch (err) {
      toast.error("Network error — try again later.");
    }

    setLoading(false);
  };

  return (
    <>
      <section id="contact" className={`max-w-6xl  mx-auto px-4  mt-1 mb-1 py-16 border-2 border-gray-200  rounded-lg ${shrink ? '' : 'mt-20'}`}>

        <h3 className="text-2xl font-semibold">Contact us</h3>
        <p className="mt-2 text-gray-600">Call us or send a message — we respond within 24 hours.</p>

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

            {/* Invisible Turnstile widget */}
            <div
              className="cf-turnstile"
            ></div>

            <button
              type="submit"
              disabled={loading}
              className="border-[#009EE3] border-2 text-[#009EE3] px-4 py-2 rounded-md"
            >
              {loading ? "Sending..." : "Send message"}
            </button>
          </form>

          <div className="p-6 bg-white border-2 border-gray-200 rounded-xl shadow">
            <h4 className="font-semibold">Our office</h4>
            <p className="mt-2 text-sm text-gray-600">SukhiSaathi Support — UK Registered</p>

            <dl className="mt-4 text-sm text-gray-600">
              {/* <dt className="font-medium">Phone</dt> */}
              {/* <dd className="mb-2">phone number </dd> */}

              <dt className="font-medium">Email</dt>
              <a href="mailto:director@sukhisaathisupport.co.uk"
                className="text-[#009EE3] hover:text-[#68ccf7]">info@sukhisaathisupport.co.uk</a>

              <dt className="font-medium mt-3">Address</dt>
              <dd>177 Alma Street, Radcliffe, Manchester, M26 4EX</dd>
              <dd >
                <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2369.360920230065!2d-2.3383725229080636!3d53.569174958027006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487ba5a49325e885%3A0x3a0b55fccb473470!2s173%20Alma%20St%2C%20Radcliffe%2C%20Manchester%20M26%204EX%2C%20UK!5e0!3m2!1sen!2sin!4v1763635986678!5m2!1sen!2sin" ></iframe>
              </dd>
            </dl>
          </div>
        </div>
      </section>
      <Banner />
    </>
  );
}

function Banner() {
  return (
    <section id="about" className="bg-indigo-50/50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <a
          href="mailto:info@sukhisaathisupport.co.uk"
        >
          <img src={newimg} />

        </a>
      </div>
    </section>
  );
}
