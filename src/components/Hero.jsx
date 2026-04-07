import { motion } from "framer-motion";
import heroImage from "../assets/hero.png";
import useParallax from "../hooks/useParallax";
import FloatingParticles from "./FloatingParticles";
import {
  FaReact,
  FaJava,
  FaJsSquare,
} from "react-icons/fa";
import {
  SiSpring,
  SiMysql,
} from "react-icons/si";

export default function Hero() {
  const { x, y } = useParallax();

  return (
    <section
      id="home"
      className="relative min-h-screen grid grid-cols-[1.15fr_1fr_1.15fr] items-center px-16 pt-20 overflow-hidden"
    >
      <FloatingParticles />

      {/* LEFT */}
      <motion.div
        className="translate-x-8"
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          transform: `translate(${x * 0.4}px, ${y * 0.4}px)`,
        }}
      >
        <p className="text-xl text-white/70 mb-4">Hello, I’m</p>

        <h1 className="text-6xl font-bold leading-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            S.V. SAINATH
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
            REDDY
          </span>
        </h1>

        <div className="mt-6 w-20 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500" />

        <p className="mt-8 max-w-md text-lg leading-9 text-white/60">
          I build scalable web applications, craft beautiful user experiences
          and solve complex problems with clean code.
        </p>

        <a href="#projects">
          <button className="glow-btn mt-8">
            View My Work →
          </button>
        </a>

        {/* <div className="flex gap-4 pt-6">
          {["🐙", "in", "✉"].map((icon) => (
            <div
              key={icon}
              className="w-12 h-12 rounded-xl border border-white/10 bg-black/20 backdrop-blur-xl flex items-center justify-center text-lg"
            >
              {icon}
            </div>
          ))}
        </div> */}
      </motion.div>

      {/* CENTER */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative flex justify-center  translate-x-2"
        style={{
          transform: `translate(${x}px, ${y}px)`,
        }}
      >
        {/* Premium rotating orbit ring */}
<div className="absolute w-[520px] h-[520px] rounded-full p-[2px] overflow-hidden">
  <div className="absolute inset-0 rounded-full animate-spin-slower bg-[conic-gradient(from_0deg,rgba(34,211,238,0.95),transparent_18%,transparent_60%,rgba(236,72,153,0.95),transparent_100%)]" />
</div>

{/* inner cut to make ring thin */}
<div className="absolute w-[512px] h-[512px] rounded-full bg-[#05070d]" />

{/* soft center halo */}
<div className="absolute w-[420px] h-[420px] rounded-full bg-gradient-to-r from-cyan-500/12 via-blue-500/10 to-pink-500/12 blur-3xl" />
        <img
          src={heroImage}
          alt="hero"
          className="relative w-[540px] drop-shadow-[0_0_50px_rgba(34,211,238,0.22)] animate-[float_6s_ease-in-out_infinite] rounded-full"
        />
      </motion.div>

      {/* RIGHT */}
      <motion.div
        className="translate-x-18"
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          transform: `translate(${-x * 0.4}px, ${-y * 0.4}px)`,
        }}
      >
        <p className="text-xl text-white/70 mb-4">A Full Stack</p>

        <h2 className="text-6xl font-bold leading-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            DEVELOPER
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
            ENGINEER
          </span>
        </h2>

        <div className="mt-6 w-20 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500" />

        <p className="mt-8 max-w-md text-lg leading-9 text-white/60">
          Turning ideas into powerful digital solutions using modern technologies.
        </p>

        <div className="flex gap-4 pt-6">
          {[
            <FaReact />,
            <FaJava />,
            <SiSpring />,
            <SiMysql />,
            <FaJsSquare />,
          ].map((icon, index) => (
            <div
              key={index}
              className="w-14 h-14 rounded-xl border border-cyan-400/20 bg-black/20 backdrop-blur-xl flex items-center justify-center text-2xl text-cyan-300 shadow-[0_0_18px_rgba(59,130,246,0.18)] hover:scale-110 hover:shadow-[0_0_24px_rgba(139,92,246,0.25)] transition"
            >
              {icon}
            </div>
          ))}
        </div>
      </motion.div>

      {/* SCROLL */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50">
        <div className="w-8 h-14 rounded-full border border-white/30 flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
        </div>
        <p className="mt-2 text-sm">Scroll Down</p>
      </div>
    </section>
  );
}