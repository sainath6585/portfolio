import { motion } from "framer-motion";

const projectsBySkill = {
  React: {
    title: "Manufacturing Operations Dashboard",
    desc: "Built an analytics-driven React dashboard with KPI cards, charts, role-based navigation, dark mode, and responsive system flows.",
    tech: "React • Tailwind • Chart.js • Framer Motion",
  },
  Java: {
    title: "QuickKart E-Commerce Backend",
    desc: "Designed scalable Java backend services with authentication, CRUD flows, business logic, and secure order processing.",
    tech: "Java • JDBC • MySQL",
  },
  Spring: {
    title: "REST API Service Layer",
    desc: "Engineered layered Spring Boot architecture with authentication, API integrations, and production-grade modular services.",
    tech: "Spring Boot • REST • JWT",
  },
  MySQL: {
    title: "Relational Data Systems",
    desc: "Designed optimized schemas, joins, indexing strategy, and query workflows for scalable applications.",
    tech: "MySQL • Indexing • Joins",
  },
};

export default function ProjectsStrip({ activeSkill }) {
  const project = projectsBySkill[activeSkill] || projectsBySkill.React;

  return (
    <section className="relative px-16 pb-24">
        <div className="mb-8">
            <p className="text-cyan-400 text-sm tracking-[0.2em] uppercase">
                Real Build Proof
            </p>
            <h2 className="text-4xl font-bold text-white mt-2">
                Projects Powered by {activeSkill}
            </h2>
        </div>

        
      <motion.div
        key={project.title}
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="rounded-3xl border border-white/10 bg-black/20 backdrop-blur-2xl p-10 shadow-[0_0_40px_rgba(34,211,238,0.08)]"
      >
        <p className="text-sm text-cyan-400 mb-3">
          Featured Build for {activeSkill}
        </p>

        <h3 className="text-4xl font-bold text-white mb-4">
          {project.title}
        </h3>

        <p className="text-white/60 text-lg leading-8 max-w-4xl">
          {project.desc}
        </p>

        <div className="mt-6 inline-block px-5 py-3 rounded-2xl border border-cyan-400/20 bg-cyan-500/10 text-white/80">
          {project.tech}
        </div>
      </motion.div>
    </section>
  );
}