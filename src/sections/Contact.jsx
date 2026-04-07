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
      className="relative min-h-screen px-6 md:px-10 lg:px-16 py-16 lg:py-24 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16"
    >
      {/* LEFT CTA */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <p className="text-lg text-white/60 mb-4">Open to Opportunities</p>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Let’s Build
          </span>
          <br />
          <span className="text-white">Something Great</span>
        </h2>

        <p className="text-white/60 leading-7 md:leading-8 text-base md:text-lg max-w-[620px] mx-auto lg:mx-0">
          I’m actively looking for opportunities in Frontend Development,
          React, Java Full Stack, and Software Engineering roles where I can
          contribute with strong UI engineering, scalable system thinking, and
          product-focused execution.
        </p>

        <div className="mt-8 md:mt-10 space-y-3 md:space-y-4">
          <p className="text-white/80 text-base md:text-lg">
            📧 svsainathreddy6585@gmail.com
          </p>
          <p className="text-white/80 text-base md:text-lg">
            📍 Hyderabad / Bangalore / Remote
          </p>
          <p className="text-white/80 text-base md:text-lg">
            💼 Open to Frontend, React, Java Full Stack, SDE Roles
          </p>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-10">
          <a
            href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSBmlkBlbWjXXwSCwLrdTHMpqRlTCKdMWThNMfwwRHVRSxDqqmvMRgjHfJbFcnqXHMfDxbCS"
            className="px-6 md:px-8 py-3 md:py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold shadow-[0_0_25px_rgba(34,211,238,0.25)] hover:scale-105 transition text-center"
          >
            Hire Me
          </a>

          <a
            href="src\assets\SOMIREDDY VENKATA SAINATH REDDY.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-6 md:px-8 py-3 md:py-4 rounded-2xl border border-cyan-400/20 bg-black/20 backdrop-blur-xl text-white hover:scale-105 transition text-center"
          >
           Resume
          </a>
        </div>

        {/* SOCIAL LINKS */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 mt-8 md:mt-10">
          <a
            href="https://github.com/sainath6585"
            target="_blank"
            rel="noreferrer"
            className="px-4 md:px-5 py-3 rounded-2xl border border-white/10 bg-black/20 backdrop-blur-xl text-white/80 hover:scale-105 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/svsainathreddy"
            target="_blank"
            rel="noreferrer"
            className="px-4 md:px-5 py-3 rounded-2xl border border-white/10 bg-black/20 backdrop-blur-xl text-white/80 hover:scale-105 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative w-full lg:w-1/2 flex justify-center items-center">
        <div className="absolute w-[260px] h-[260px] md:w-[340px] md:h-[340px] lg:w-[420px] lg:h-[420px] rounded-full bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 blur-3xl" />
        <div className="absolute w-[280px] h-[280px] md:w-[360px] md:h-[360px] lg:w-[440px] lg:h-[440px] rounded-full border border-cyan-400/15" />

        <img
          src={contactImage}
          alt="contact"
          className="relative w-[220px] md:w-[300px] lg:w-[420px] rounded-full drop-shadow-[0_0_40px_rgba(34,211,238,0.18)]"
        />
      </div>
    </motion.section>
  );
}