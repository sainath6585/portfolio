export default function FloatingParticles() {
  const particles = Array.from({ length: 24 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Exact hero global glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(34,211,238,0.12),transparent_30%),radial-gradient(circle_at_35%_60%,rgba(59,130,246,0.10),transparent_35%),radial-gradient(circle_at_82%_25%,rgba(168,85,247,0.12),transparent_30%),radial-gradient(circle_at_70%_70%,rgba(236,72,153,0.10),transparent_35%)]" />

      {/* Tiny premium particles */}
      {particles.map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-[0_0_12px_rgba(139,92,246,0.45)] animate-pulse"
          style={{
            width: `${2 + Math.random() * 2}px`,
            height: `${2 + Math.random() * 2}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${6 + Math.random() * 6}s`,
            opacity: 0.7,
          }}
        />
      ))}

      {/* subtle technical node lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="8%" y1="18%" x2="20%" y2="35%" stroke="url(#grad)" strokeWidth="0.8" />
        <line x1="80%" y1="25%" x2="92%" y2="48%" stroke="url(#grad)" strokeWidth="0.8" />
        <line x1="12%" y1="78%" x2="28%" y2="90%" stroke="url(#grad)" strokeWidth="0.8" />
        <line x1="72%" y1="82%" x2="88%" y2="65%" stroke="url(#grad)" strokeWidth="0.8" />

        <defs>
          <linearGradient id="grad">
            <stop offset="0%" stopColor="#22D3EE" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}