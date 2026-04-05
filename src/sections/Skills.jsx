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
  className="relative min-h-screen px-16 flex items-center justify-between gap-16"
>
      {/* LEFT */}
      <motion.div
        initial={{ x: -60, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-[28%]"
      >
        <p className="text-lg text-white/60 mb-4">Tech Arsenal</p>

        <h2 className="text-6xl font-bold leading-tight">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Full Stack
          </span>
          <br />
          <span className="text-white">Capabilities</span>
        </h2>

        <p className="mt-8 text-lg leading-9 text-white/60 max-w-md">
          I build scalable systems across frontend, backend, databases, APIs,
          AI workflows, NLP and modern developer tooling.
        </p>
      </motion.div>

      {/* CENTER */}
      <div className="relative w-[44%] flex justify-center items-center h-[650px]">
        {/* OUTER ORBIT */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: activeSkill ? 26 : 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-[460px] h-[460px] rounded-full"
        >
          {[
            { name: "React", top: "0%", left: "50%" },
            { name: "Java", top: "50%", left: "100%" },
            { name: "Spring", top: "100%", left: "50%" },
            { name: "MySQL", top: "50%", left: "0%" },
          ].map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{ scale: 1.12 }}
              onMouseEnter={() => setActiveSkill(skill.name)}
              className={`absolute -translate-x-1/2 -translate-y-1/2 px-5 py-3 rounded-2xl backdrop-blur-xl text-white/80 transition-all duration-300 ${
                activeSkill === skill.name
                  ? "bg-cyan-500/20 border border-cyan-400/40 shadow-[0_0_30px_rgba(34,211,238,0.25)]"
                  : "bg-black/30 border border-cyan-400/20 shadow-[0_0_20px_rgba(34,211,238,0.12)]"
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
          className="absolute w-[320px] h-[320px] rounded-full"
        >
          {[
            { name: "JDBC", top: "0%", left: "50%" },
            { name: "Servlets", top: "50%", left: "100%" },
            { name: "JSP", top: "100%", left: "50%" },
            { name: "Git", top: "50%", left: "0%" },

          ].map((skill) => (
            <div
              key={skill.name}
              className="absolute -translate-x-1/2 -translate-y-1/2 px-4 py-2 rounded-xl bg-black/25 border border-purple-400/20 backdrop-blur-xl text-white/70 text-sm shadow-[0_0_18px_rgba(168,85,247,0.14)]"
              style={{ top: skill.top, left: skill.left }}
            >
              {skill.name}
            </div>
          ))}
        </motion.div>

        {/* GLOW RINGS */}
        <div className="absolute w-[460px] h-[460px] rounded-full border border-cyan-400/15" />
        <div className="absolute w-[320px] h-[320px] rounded-full border border-purple-500/15" />

        {/* CONNECTION LINE */}
        {activeSkill && (
          <div className="absolute right-[-240px] flex items-center">
            <div className="relative w-[200px] h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-70 shadow-[0_0_18px_rgba(34,211,238,0.25)] overflow-hidden">
              <div className="absolute top-0 left-0 h-full w-10 bg-white/60 blur-sm animate-pulse" />

              {nodeLabels[activeSkill]?.map((label, index) => (
                <div
                  key={label}
                  className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center"
                  style={{ left: `${25 + index * 25}%` }}
                >
                  <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.45)]" />
                  <span className="mt-2 text-[10px] text-white/60 whitespace-nowrap">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* REACTIVE GLOW */}
        <div
          className="absolute w-[300px] h-[300px] rounded-full blur-3xl transition-all duration-500 opacity-20"
          style={{
            background:
              activeSkill === "React"
                ? "linear-gradient(90deg, #22d3ee, #3b82f6, #8b5cf6)"
                : activeSkill === "Java"
                ? "linear-gradient(90deg, #60a5fa, #6366f1, #22d3ee)"
                : activeSkill === "Spring"
                ? "linear-gradient(90deg, #c084fc, #ec4899, #3b82f6)"
                : "linear-gradient(90deg, #f472b6, #8b5cf6, #22d3ee)",
          }}
        />

        {/* AVATAR */}
        <img
          src={skillsAvatar}
          alt="skills-avatar"
          className="relative w-[360px] mb-5 rounded-full drop-shadow-[0_0_40px_rgba(34,211,238,0.18)]"
        />

        {/* MODE LABEL */}
        <div className="absolute bottom-6 px-6 py-3 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl text-sm text-white/80">
          {skillModes[activeSkill]}
        </div>
      </div>

      {/* RIGHT STACK */}
      <div className="w-[28%] flex flex-col gap-6">
        {skillGroups.map((group) => (
          <motion.div
            key={group.title}
            whileHover={{ scale: 1.03 }}
            className={`px-6 py-5 rounded-2xl backdrop-blur-xl transition-all duration-300 ${
             skillCategoryMap[activeSkill] === group.title
                ? "border border-cyan-400/40 bg-cyan-500/10 shadow-[0_0_30px_rgba(34,211,238,0.18)]"
                : "border border-white/10 bg-black/20"
            }`}
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              {group.title}
            </h3>
            <p className="text-white/60 leading-7 text-sm">
              {group.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}