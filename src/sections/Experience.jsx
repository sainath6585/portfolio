import { motion } from "framer-motion";
import expVideo from "../assets/experience/exp-intro.mp4";

const growthStages = [
  {
    title: "Foundation",
    desc: "Core Java, OOP, SQL, debugging, SDLC fundamentals, and structured problem solving.",
  },
  {
    title: "Full Stack Systems",
    desc: "React UI engineering, Spring architecture, REST APIs, JDBC, Hibernate, and scalable workflows.",
  },
  {
    title: "Product Execution",
    desc: "Built dashboards, OTT platforms, immersive UI systems, Swiggy clone, and advanced portfolio storytelling.",
  },
  {
    title: "Collaboration Mindset",
    desc: "Focused on communication, technical assessments, knowledge transfer, and engineering maturity.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative min-h-screen px-16 py-24 flex items-center justify-between gap-16"
    >
      {/* LEFT FLOW */}
      <div className="w-[42%]">
        <p className="text-lg text-white/60 mb-4">Professional Growth</p>

        <h2 className="text-6xl font-bold mb-10 leading-tight">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Engineering
          </span>
          <br />
          <span className="text-white">Evolution</span>
        </h2>

        <div className="space-y-8">
          {growthStages.map((stage, index) => (
            <motion.div
              key={stage.title}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative pl-10"
            >
              <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.35)]" />
              <div className="absolute left-[7px] top-6 h-full w-[2px] bg-gradient-to-b from-cyan-400/50 to-transparent" />

              <h3 className="text-2xl font-semibold text-white mb-2">
                {stage.title}
              </h3>
              <p className="text-white/60 leading-8">
                {stage.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CENTER CONNECTOR */}
      <div className="w-[6%] flex justify-center">
        <div className="w-[2px] h-[420px] bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 shadow-[0_0_25px_rgba(34,211,238,0.2)]" />
      </div>

      {/* RIGHT BIG VIDEO */}
      <div className="w-2xl relative w-[52%] flex justify-center">
        <div className="absolute w-[520px] h-[520px] rounded-full bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 blur-3xl" />

       <video
            src={expVideo}
            autoPlay
            muted
            loop
            playsInline
            className="relative w-[540px] h-[620px] object-cover rounded-[32px] border border-cyan-400/15 shadow-[0_0_60px_rgba(34,211,238,0.12)]"
        />
      </div>
    </section>
  );
}