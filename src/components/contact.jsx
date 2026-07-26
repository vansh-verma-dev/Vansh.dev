import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="bg-black py-24 px-6 text-white">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Contact
        </h2>
        <p className="text-zinc-400 text-center mb-20">
          Have a project in mind? Let's talk.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-zinc-400" size={18} />
              <div>
                <p className="text-zinc-500 text-xs uppercase tracking-widest">
                  Email
                </p>
                <p className="text-white mt-1">yourname@email.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-zinc-400" size={16} />
              <div>
                <p className="text-zinc-500 text-xs uppercase tracking-widest">
                  Phone
                </p>
                <p className="text-white mt-1">+91 00000 00000</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-zinc-400" size={18} />
              <div>
                <p className="text-zinc-500 text-xs uppercase tracking-widest">
                  Location
                </p>
                <p className="text-white mt-1">Your City, India</p>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-6 mt-6">
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                <FaGithub size={20} />
              </a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <form className="flex flex-col gap-8">
            <div>
              <label className="text-zinc-500 text-xs uppercase tracking-widest">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-transparent border-b border-white/20 focus:border-white outline-none py-2 mt-2 placeholder:text-zinc-600 transition-colors"
              />
            </div>

            <div>
              <label className="text-zinc-500 text-xs uppercase tracking-widest">
                Email
              </label>
              <input
                type="email"
                placeholder="you@email.com"
                className="w-full bg-transparent border-b border-white/20 focus:border-white outline-none py-2 mt-2 placeholder:text-zinc-600 transition-colors"
              />
            </div>

            <div>
              <label className="text-zinc-500 text-xs uppercase tracking-widest">
                Message
              </label>
              <textarea
                rows="3"
                placeholder="Tell me about your project..."
                className="w-full bg-transparent border-b border-white/20 focus:border-white outline-none py-2 mt-2 placeholder:text-zinc-600 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="mt-2 border border-white text-white py-3 hover:bg-white hover:text-black transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;