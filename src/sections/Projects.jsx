import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import projectsAvatar from "../assets/projects-avatar.png";
import manufacturingVideo from "../assets/videos/manufacturing.mp4";
import loginVideo from "../assets/videos/login-ui.mp4";
import swiggyVideo from "../assets/videos/swiggy.mp4";
import quickkartVideo from "../assets/videos/quickkart-video.mp4";
import portfolioVideo from "../assets/videos/portfolio.mp4";

const projects = [
  {
    title: "Manufacturing Operations Dashboard",
    desc: "Built KPI analytics dashboards with React, role-based navigation, dark mode, charts, and responsive layouts for real-world manufacturing workflows.",
    stack: "React • Tailwind • Chart.js • Framer Motion",
    video: manufacturingVideo,
    type: "Technical Assessment",
    github: "https://github.com/sainath6585/factoryiq-manufacturing-dashboard",
    live: "https://factoryiq-manufacturing-dashboard.vercel.app/auth",
  },
  {
    title: "Immersive Glass Login Interface",
    desc: "A conceptual login interface built with semantic HTML and layered CSS effects using stacked assets, blur depth, hover transitions, and a glassmorphism foreground.",
    stack: "HTML • CSS • Glassmorphism • Layered UI",
    video: loginVideo,
    type: "Creative UI",
    github: "https://github.com/sainath6585",
    live: "https://your-live-link.com",
  },
  {
    title: "QuickKart E-Commerce System",
    desc: "Designed and developed a Java-based e-commerce backend system with authentication, product CRUD workflows, secure order processing, and MySQL persistence using JDBC architecture.",
    stack: "Java • JDBC • MySQL • CRUD",
    video: quickkartVideo,
    type: "Java Full Stack",
    github: "https://github.com/sainath6585/Quick-Kart",
    live: "https://your-live-link.com",
  },
  {
    title: "Swiggy Landing Page Clone",
    desc: "Built a Swiggy-inspired landing page using React class components with reusable sections, hero layouts, restaurant cards, app download modules, and footer architecture.",
    stack: "React • JSX • CSS • Class Components",
    video: swiggyVideo,
    type: "Frontend Clone",
    github: "https://github.com/sainath6585/Swiggy_Landing_Page",
    live: "https://your-live-link.com",
  },
  {
    title: "3D Developer Portfolio",
    desc: "Designed and developed an immersive storytelling portfolio with neon systems, orbit interactions, glassmorphism, and recruiter-focused product psychology.",
    stack: "React • Tailwind • Framer Motion",
    video: portfolioVideo,
    type: "Personal Branding",
    github: "https://github.com/sainath6585/portfolio",
    live: "https://portfolio-sainath6585s-projects.vercel.app/",
  },
];

export default function Projects() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 2) % projects.length);
  const prev = () =>
    setIndex((prev) => (prev - 2 + projects.length) % projects.length);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  const visibleProjects = [
    projects[index],
    projects[(index + 1) % projects.length],
  ];

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative min-h-screen px-6 md:px-10 lg:px-16 py-16 lg:py-24 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16"
    >
      {/* LEFT AVATAR */}
      <div className="relative w-full lg:w-[30%] flex justify-center items-center h-[300px] md:h-[420px] lg:h-[700px]">
        <div className="absolute w-[260px] h-[260px] md:w-[340px] md:h-[340px] lg:w-[420px] lg:h-[420px] rounded-full bg-gradient-to-r from-cyan-500/15 via-blue-500/10 to-purple-500/15 blur-3xl" />
        <div className="absolute w-[280px] h-[280px] md:w-[360px] md:h-[360px] lg:w-[460px] lg:h-[460px] rounded-full border border-cyan-400/15" />

        <img
          src={projectsAvatar}
          alt="projects-avatar"
          className="relative w-[220px] md:w-[300px] lg:w-[380px] rounded-full drop-shadow-[0_0_40px_rgba(34,211,238,0.18)]"
        />
      </div>

      {/* RIGHT */}
      <div className="w-full lg:w-[70%]">
        <p className="text-lg text-white/60 mb-4 text-center lg:text-left">
          Independent Product Development
        </p>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 leading-tight text-center lg:text-left">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Projects
          </span>
          <br />
          <span className="text-white">I Engineered</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="wait">
            {visibleProjects.map((project) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: 60, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -60, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group rounded-[28px] overflow-hidden border border-white/10 bg-black/20 backdrop-blur-2xl"
              >
                <div className="h-48 md:h-56 overflow-hidden relative">
                  <video
                    src={project.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>

                <div className="p-5 md:p-6">
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                    {project.title}
                  </h3>

                  <p className="text-white/60 leading-6 md:leading-7 text-sm md:text-base">
                    {project.desc}
                  </p>

                  <div className="mt-4 text-xs md:text-sm text-cyan-400">
                    {project.stack}
                  </div>

                  <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <span className="px-3 py-1 rounded-xl text-xs border border-cyan-400/20 bg-cyan-500/10 text-cyan-300 w-fit">
                      {project.type}
                    </span>

                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-sm text-white/80"
                      >
                        GitHub
                      </a>

                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 rounded-xl border border-cyan-400/20 bg-cyan-500/10 text-sm text-cyan-300"
                      >
                        Live
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* ARROWS */}
        <div className="flex justify-center lg:justify-start gap-4 mt-10">
          <button
            onClick={prev}
            className="w-12 h-12 md:w-14 md:h-14 rounded-2xl border border-cyan-400/20 bg-black/20 text-white text-xl md:text-2xl"
          >
            ←
          </button>
          <button
            onClick={next}
            className="w-12 h-12 md:w-14 md:h-14 rounded-2xl border border-cyan-400/20 bg-black/20 text-white text-xl md:text-2xl"
          >
            →
          </button>
        </div>

        <p className="mt-4 text-xs md:text-sm text-white/40 text-center lg:text-left">
          Showing {index + 1}-{Math.min(index + 2, projects.length)} of{" "}
          {projects.length}
        </p>
      </div>
    </motion.section>
  );
}