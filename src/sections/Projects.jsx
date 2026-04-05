import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import projectsAvatar from "../assets/projects-avatar.png"
import manufacturingVideo from "../assets/projects/manufacturing.mp4";
import loginVideo from "../assets/projects/login-ui.mp4";
import swiggyVideo from "../assets/projects/swiggy.mp4";
import quickkartVideo from "../assets/projects/quickkart-video.mp4";
// import ottVideo from "../assets/projects/ott.mp4";
import portfolioVideo from "../assets/projects/portfolio.mp4";

const projects = [
  {
    title: "Manufacturing Operations Dashboard",
    desc: "Built KPI analytics dashboards with React, role-based navigation, dark mode, charts, and responsive layouts for real-world manufacturing workflows.",
    stack: "React • Tailwind • Chart.js • Framer Motion",
    video: manufacturingVideo,
    type: "Technical Assessment",
    github: "https://github.com/yourusername/manufacturing-dashboard",
    live: "https://your-live-link.com",
  },
  {
    title: "Immersive Glass Login Interface",
    desc: "A conceptual login interface built with semantic HTML and layered CSS effects using stacked assets, blur depth, hover transitions, and a glassmorphism foreground.",
    stack: "HTML • CSS • Glassmorphism • Layered UI",
    video: loginVideo,
    type: "Creative UI",
    github: "https://github.com/yourusername/login-ui",
    live: "https://your-live-link.com",
  },
  {
    title: "QuickKart E-Commerce System",
    desc: "Designed and developed a Java-based e-commerce backend system with authentication, product CRUD workflows, secure order processing, and MySQL persistence using JDBC architecture.",
    stack: "Java • JDBC • MySQL • CRUD",
    video: quickkartVideo,
    type: "Java Full Stack",
    github: "https://github.com/yourusername/quickkart",
    live: "https://your-live-link.com",
},
  {
    title: "Swiggy Landing Page Clone",
    desc: "Built a Swiggy-inspired landing page using React class components with reusable sections, hero layouts, restaurant cards, app download modules, and footer architecture.",
    stack: "React • JSX • CSS • Class Components",
    video: swiggyVideo,
    type: "Frontend Clone",
    github: "https://github.com/yourusername/swiggy-clone",
    live: "https://your-live-link.com",
  },
//   {
//     title: "Movie OTT Platform",
//     desc: "Created a streaming-inspired movie platform with API integration, genre-based rendering, hero banners, and cinematic browsing layouts.",
//     stack: "React • API • JavaScript",
//     // video: ottVideo,
//     type: "Frontend Project",
//     github: "https://github.com/yourusername/ott-platform",
//     live: "https://your-live-link.com",
//   },
  {
    title: "3D Developer Portfolio",
    desc: "Designed and developed an immersive storytelling portfolio with neon systems, orbit interactions, glassmorphism, and recruiter-focused product psychology.",
    stack: "React • Tailwind • Framer Motion",
    video: portfolioVideo,
    type: "Personal Branding",
    github: "https://github.com/yourusername/portfolio",
    live: "https://your-live-link.com",
  },
];

export default function Projects() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 2) % projects.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 2 + projects.length) % projects.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 6000);

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
      className="relative min-h-screen px-16 py-24 flex items-center justify-between gap-16"
    >
      {/*  VIDEO */}
        < div className="relative w-[30%] flex justify-center items-center h-[700px]">
        <div className="absolute w-[420px] h-[420px] rounded-full bg-gradient-to-r from-cyan-500/15 via-blue-500/10 to-purple-500/15 blur-3xl" />
        <div className="absolute w-[460px] h-[460px] rounded-full border border-cyan-400/15" />

        <img
          src={projectsAvatar}
          alt="projects-avatar"
          className="relative w-[380px] rounded-full drop-shadow-[0_0_40px_rgba(34,211,238,0.18)]"
        />
      </div>

      {/* RIGHT CAROUSEL */}
      <div className="w-[70%]">
        <p className="text-lg text-white/60 mb-4">
          Independent Product Development
        </p>

        <h2 className="text-6xl font-bold mb-10 leading-tight">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Projects
          </span>
          <br />
          <span className="text-white">I Engineered</span>
        </h2>

        <div className="grid grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {visibleProjects.map((project) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: 80, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -80, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 0 50px rgba(34,211,238,0.12)",
                }}
                className="group rounded-[28px] overflow-hidden border border-white/10 bg-black/20 backdrop-blur-2xl"
              >
                {/* TOP VIDEO */}
                <div className="h-56 overflow-hidden relative">
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

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-white/60 leading-7">
                    {project.desc}
                  </p>
                  <div className="mt-4 text-sm text-cyan-400">
                    {project.stack}
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-xl text-xs border border-cyan-400/20 bg-cyan-500/10 text-cyan-300">
                      {project.type}
                    </span>

                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-sm text-white/80 hover:bg-white/10 transition"
                      >
                        GitHub
                      </a>

                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 rounded-xl border border-cyan-400/20 bg-cyan-500/10 text-sm text-cyan-300 hover:scale-105 transition"
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
        <div className="flex gap-4 mt-10">
          <button
            onClick={prev}
            className="w-14 h-14 rounded-2xl border border-cyan-400/20 bg-black/20 backdrop-blur-xl text-white text-2xl hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.18)] transition"
          >
            ←
          </button>
          <button
            onClick={next}
            className="w-14 h-14 rounded-2xl border border-cyan-400/20 bg-black/20 backdrop-blur-xl text-white text-2xl hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.18)] transition"
          >
            →
          </button>
        </div>

        {/* COUNTER */}
        <p className="mt-4 text-sm text-white/40">
          Showing {index + 1}-{Math.min(index + 2, projects.length)} of{" "}
          {projects.length}
        </p>
      </div>
    </motion.section>
  );
}