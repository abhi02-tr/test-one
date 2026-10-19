import React from 'react';

interface Particle {
  id: number;
  symbol: string;
  left: number;
  size: number;
  duration: number;
  delay: number;
}

const SYMBOLS = ['💗', '🌸', '✨', '🧸', '💖', '⭐', '🤍', '🧁'];

// Deterministic seed-based pseudo-random generator to ensure pure rendering
function pseudoRandom(seed: number): number {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

const STATIC_PARTICLES: Particle[] = Array.from({ length: 18 }).map((_, i) => ({
  id: i,
  symbol: SYMBOLS[i % SYMBOLS.length],
  left: Math.round(pseudoRandom(i * 13 + 7) * 92),
  size: Math.round(pseudoRandom(i * 17 + 3) * 14) + 14,
  duration: Math.round(pseudoRandom(i * 23 + 5) * 12) + 14,
  delay: Math.round(pseudoRandom(i * 31 + 11) * 10),
}));

export const BackgroundDecorations: React.FC = () => {
  return (
    <div className="bg-decorations" aria-hidden="true">
      {STATIC_PARTICLES.map((p) => (
        <span
          key={p.id}
          className="floating-bg-item"
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        >
          {p.symbol}
        </span>
      ))}
    </div>
  );
};
