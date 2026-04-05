import { motion } from "framer-motion";
import contactImage from "../assets/contact-image.png";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative min-h-screen px-16 py-24 flex items-center justify-between gap-16"
    >
      {/* LEFT CTA */}
      <div className="w-[50%]">
        <p className="text-lg text-white/60 mb-4">Open to Opportunities</p>

        <h2 className="text-6xl font-bold leading-tight mb-8">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Let’s Build
          </span>
          <br />
          <span className="text-white">Something Great</span>
        </h2>

        <p className="text-white/60 leading-8 text-lg max-w-[620px]">
          I’m actively looking for opportunities in Frontend Development,
          React, Java Full Stack, and Software Engineering roles where I can
          contribute with strong UI engineering, scalable system thinking, and
          product-focused execution.
        </p>

        <div className="mt-10 space-y-4">
          <p className="text-white/80 text-lg">
            📧 sainath6585@gmail.com
          </p>
          <p className="text-white/80 text-lg">
            📍 Hyderabad / Bangalore / Remote
          </p>
          <p className="text-white/80 text-lg">
            💼 Open to Frontend, React, Java Full Stack, SDE Roles
          </p>
        </div>

        {/* BUTTONS */}
        <div className="flex gap-5 mt-10">
          <a
            href="mailto:sainath6585@gmail.com"
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold shadow-[0_0_25px_rgba(34,211,238,0.25)] hover:scale-105 transition"
          >
            Hire Me
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            className="px-8 py-4 rounded-2xl border border-cyan-400/20 bg-black/20 backdrop-blur-xl text-white hover:scale-105 transition"
          >
            View Resume
          </a>
        </div>

        {/* SOCIAL LINKS */}
        <div className="flex gap-4 mt-10">
          {["GitHub", "LinkedIn", "Email"].map((item) => (
            <div
              key={item}
              className="px-5 py-3 rounded-2xl border border-white/10 bg-black/20 backdrop-blur-xl text-white/80"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative w-[50%] flex justify-center items-center">
        <div className="absolute w-[420px] h-[420px] rounded-full bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 blur-3xl" />
        <div className="absolute w-[440px] h-[440px] rounded-full border border-cyan-400/15" />

        <img
          src={contactImage}
          alt="contact"
          className="relative w-[420px] rounded-full drop-shadow-[0_0_40px_rgba(34,211,238,0.18)]"
        />
      </div>
    </motion.section>
  );
}