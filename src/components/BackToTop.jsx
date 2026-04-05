import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-[0_0_25px_rgba(34,211,238,0.25)] hover:scale-105 transition"
    >
      ↑
    </button>
  );
}