import { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";

// Backend ready hone par yahan apna API ka URL daalna
const API_URL = "http://localhost:5000/api/contact";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const details = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "vanshverma6065@gmail.com",
      href: "mailto:vanshverma6065@gmail.com",
    },
    {
      icon: <FaPhoneAlt />,
      label: "Phone",
      value: "+91 9368549887",
      href: "tel:+919368549887",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "Meerut, Uttar Pradesh",
      href: "",
    },
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
    }
  };

  const input =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-amber-400 transition";

  return (
    <section className="relative w-full min-h-screen pt-28 pb-20 px-6 md:px-16 bg-gray-950 text-white overflow-hidden" id="Contact">
      <style>{`
        .serif { font-family: 'Playfair Display', serif; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes glow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.15); }
        }
        .fade-up { opacity: 0; animation: fadeUp 0.8s ease forwards; }
        .glow { animation: glow 7s ease-in-out infinite; }
      `}</style>

      {/* Background glow */}
      <div className="glow absolute bottom-10 -right-24 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-12">
          <p className="fade-up text-amber-400 font-semibold mb-3">Contact</p>
          <h2
            className="serif fade-up text-4xl md:text-6xl font-semibold leading-tight"
            style={{ animationDelay: "0.15s" }}
          >
            Let's build something
            <br />
            <span className="italic text-amber-400">great together.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left side - details */}
          <div>
            <p
              className="fade-up text-gray-400 leading-relaxed mb-8"
              style={{ animationDelay: "0.3s" }}
            >
              I'm currently looking for an entry-level Full Stack / MERN
              Developer role. If you have an opportunity, a project idea or just
              want to say hi, send me a message and I'll reply as soon as I can.
            </p>

            <div className="flex flex-col gap-4 mb-8">
              {details.map((item, i) => {
                const content = (
                  <>
                    <div className="w-11 h-11 shrink-0 rounded-xl bg-amber-400/15 text-amber-400 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-gray-500">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium">{item.value}</p>
                    </div>
                  </>
                );

                const box =
                  "fade-up flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10";

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`${box} hover:border-amber-400/50 transition`}
                    style={{ animationDelay: `${0.4 + i * 0.1}s` }}
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={item.label}
                    className={box}
                    style={{ animationDelay: `${0.4 + i * 0.1}s` }}
                  >
                    {content}
                  </div>
                );
              })}
            </div>

            {/* Social links */}
            <div
              className="fade-up flex gap-4 text-2xl"
              style={{ animationDelay: "0.8s" }}
            >
              <a
                href="https://github.com/vansh-verma-dev"
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-400 transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/vansh-verma-b2a6a3373/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-400 transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Right side - form */}
          <form
            onSubmit={handleSubmit}
            className="fade-up bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col gap-4"
            style={{ animationDelay: "0.4s" }}
          >
            <div>
              <label className="text-sm text-gray-400 mb-1.5 block">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className={input}
              />
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-1.5 block">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className={input}
              />
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-1.5 block">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                rows="5"
                required
                className={`${input} resize-none`}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="group flex items-center justify-center gap-2 bg-amber-400 text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-amber-300 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
              <FaPaperPlane className="group-hover:translate-x-1 transition" />
            </button>

            {status === "success" && (
              <p className="flex items-center gap-2 text-sm text-green-400">
                <FaCheckCircle /> Message sent! I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-400">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;