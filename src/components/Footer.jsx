import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative px-16 py-10 border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex items-center justify-between"
      >
        <p className="text-white/50 text-sm">
          © 2026 Sai Nath. Designed & Developed with React + Framer Motion.
        </p>

        <div className="flex gap-4">
          {["GitHub", "LinkedIn", "Email"].map((item) => (
            <div
              key={item}
              className="px-4 py-2 rounded-xl border border-white/10 bg-black/20 backdrop-blur-xl text-white/70 text-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </motion.div>
    </footer>
  );
}