import { motion } from "framer-motion";
import { useState } from "react";
import skillsAvatar from "../assets/skills-avatar.png";

const skillGroups = [
  {
    title: "Programming",
    desc: "Java, JavaScript, OOP principles, debugging, and clean problem-solving workflows.",
  },
  {
    title: "Java Full Stack",
    desc: "Core Java, JDBC, Servlets, JSP, Hibernate, Spring, and backend system design.",
  },
  {
    title: "Frontend",
    desc: "HTML, CSS, JavaScript, React, responsive UI systems, and reusable components.",
  },
  {
    title: "Database & Tools",
    desc: "SQL, MySQL, Git, GitHub, Eclipse, SDLC workflows, and version control.",
  },
];

const nodeLabels = {
  React: ["UI", "State", "Render"],
  Java: ["API", "Logic", "Services"],
  Spring: ["REST", "Auth", "Layers"],
  MySQL: ["Schema", "Query", "Index"],
};

const skillCategoryMap = {
  React: "Frontend",
  Java: "Programming",
  Spring: "Java Full Stack",
  MySQL: "Database & Tools",
};

const skillModes = {
  React: "Frontend Mode",
  Java: "Backend Logic",
  Spring: "Architecture Flow",
  MySQL: "Data Core",
};

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState("React");

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative min-h-screen px-6 md:px-10 lg:px-16 py-16 lg:py-24 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16"
    >
      {/* LEFT */}
      <motion.div
        initial={{ x: -60, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full lg:w-[28%] text-center lg:text-left"
      >
        <p className="text-lg text-white/60 mb-4">Tech Arsenal</p>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Full Stack
          </span>
          <br />
          <span className="text-white">Capabilities</span>
        </h2>

        <p className="mt-8 text-base md:text-lg leading-8 text-white/60 max-w-md mx-auto lg:mx-0">
          I build scalable systems across frontend, backend, databases, APIs,
          and modern developer tooling.
        </p>
      </motion.div>

      {/* CENTER */}
      <div className="relative w-full lg:w-[44%] flex justify-center items-center h-[420px] md:h-[520px] lg:h-[650px]">
        {/* OUTER ORBIT */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-[280px] h-[280px] md:w-[360px] md:h-[360px] lg:w-[460px] lg:h-[460px] rounded-full"
        >
          {[
            { name: "React", top: "0%", left: "50%" },
            { name: "Java", top: "50%", left: "100%" },
            { name: "Spring", top: "100%", left: "50%" },
            { name: "MySQL", top: "50%", left: "0%" },
          ].map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{ scale: 1.08 }}
              onMouseEnter={() => setActiveSkill(skill.name)}
              className={`absolute -translate-x-1/2 -translate-y-1/2 px-3 md:px-5 py-2 md:py-3 text-xs md:text-sm rounded-2xl backdrop-blur-xl text-white/80 transition-all duration-300 ${
                activeSkill === skill.name
                  ? "bg-cyan-500/20 border border-cyan-400/40 shadow-[0_0_30px_rgba(34,211,238,0.25)]"
                  : "bg-black/30 border border-cyan-400/20"
              }`}
              style={{ top: skill.top, left: skill.left }}
            >
              {skill.name}
            </motion.div>
          ))}
        </motion.div>

        {/* INNER ORBIT */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          className="absolute w-[200px] h-[200px] md:w-[260px] md:h-[260px] lg:w-[320px] lg:h-[320px] rounded-full"
        >
          {[
            { name: "JDBC", top: "0%", left: "50%" },
            { name: "Servlets", top: "50%", left: "100%" },
            { name: "JSP", top: "100%", left: "50%" },
            { name: "Git", top: "50%", left: "0%" },
          ].map((skill) => (
            <div
              key={skill.name}
              className="absolute -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-xl bg-black/25 border border-purple-400/20 backdrop-blur-xl text-white/70 text-[10px] md:text-sm"
              style={{ top: skill.top, left: skill.left }}
            >
              {skill.name}
            </div>
          ))}
        </motion.div>

        {/* GLOW */}
        <div className="absolute w-[200px] h-[200px] md:w-[260px] md:h-[260px] lg:w-[300px] lg:h-[300px] rounded-full blur-3xl opacity-20 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500" />

        {/* AVATAR */}
        <img
          src={skillsAvatar}
          alt="skills-avatar"
          className="relative w-[180px] md:w-[260px] lg:w-[360px] rounded-full drop-shadow-[0_0_40px_rgba(34,211,238,0.18)]"
        />

        {/* MODE LABEL */}
        <div className="absolute bottom-2 md:bottom-6 px-4 md:px-6 py-2 md:py-3 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl text-xs md:text-sm text-white/80">
          {skillModes[activeSkill]}
        </div>
      </div>

      {/* RIGHT STACK */}
      <div className="w-full lg:w-[28%] flex flex-col gap-4 md:gap-6">
        {skillGroups.map((group) => (
          <motion.div
            key={group.title}
            whileHover={{ scale: 1.02 }}
            className={`px-5 py-4 rounded-2xl backdrop-blur-xl transition-all duration-300 ${
              skillCategoryMap[activeSkill] === group.title
                ? "border border-cyan-400/40 bg-cyan-500/10 shadow-[0_0_30px_rgba(34,211,238,0.18)]"
                : "border border-white/10 bg-black/20"
            }`}
          >
            <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
              {group.title}
            </h3>
            <p className="text-white/60 leading-6 text-xs md:text-sm">
              {group.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}