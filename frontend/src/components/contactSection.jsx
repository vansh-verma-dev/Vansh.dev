import { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

const EMAIL = "vanshverma6065@gmail.com";

const info = [
  { icon: <FaEnvelope />, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: <FaPhoneAlt />, label: "Phone", value: "+91 93685 49887", href: "tel:+919368549887" },
  { icon: <FaMapMarkerAlt />, label: "Location", value: "Meerut, Uttar Pradesh, India" },
];

const socials = [
  { icon: <FaGithub />, label: "GitHub", href: "https://github.com/vansh-verma-dev" },
  { icon: <FaLinkedin />, label: "LinkedIn", href: "https://linkedin.com/in/vansh-verma" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // Abhi ye form user ka mail app khol deta hai (backend ki zarurat nahi).
  // Baad me chaho to EmailJS / Formspree laga sakte ho.
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const inputClass =
    "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-800 placeholder-slate-400 outline-none transition focus:border-indigo-500";

  return (
    <section id="contact" className="bg-white px-4 py-20 text-slate-800">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Get In <span className="text-indigo-600">Touch</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-600">
            Job, project ya koi sawal ho — bas ek message bhej do.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Left: info */}
          <div className="space-y-5">
            {info.map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <span className="rounded-xl bg-indigo-500/10 p-3 text-lg text-indigo-600">
                  {item.icon}
                </span>
                <div>
                  <p className="text-sm text-slate-500">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-slate-800 transition hover:text-indigo-600"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-slate-800">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="flex gap-3 pt-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="rounded-xl border border-slate-200 bg-white p-3 text-xl text-slate-600 transition hover:border-indigo-500 hover:text-indigo-600"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className={inputClass}
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className={inputClass}
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              placeholder="Your Message"
              required
              className={`${inputClass} resize-none`}
            />
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-500"
            >
              Send Message <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}