import { motion } from "framer-motion";

const navItems = ["Home", "Skills", "Projects", "Experience", "Contact"];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="relative rounded-full p-[1.5px] overflow-hidden">
        {/* Rotating neon border */}
        <div className="absolute inset-0 rounded-full animate-spin-slow bg-[conic-gradient(from_0deg,rgba(34,211,238,0.95),transparent_18%,transparent_60%,rgba(236,72,153,0.95),transparent_100%)]" />

        {/* Glass navbar */}
        <div className="relative flex items-center gap-8 px-10 py-4 rounded-full bg-black/75 backdrop-blur-2xl">
          {/* Logo */}
          <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
            SR
          </span>

          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-sm font-medium text-white/80 hover:text-white transition duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}