import React, { useState } from 'react';
import { Heart, ArrowUp, Sparkles, Gift } from 'lucide-react';
import { playChime } from '../utils/audio';

export const Footer: React.FC = () => {
  const [showSecret, setShowSecret] = useState(false);

  const scrollToTop = () => {
    playChime();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleSecret = () => {
    playChime();
    setShowSecret((prev) => !prev);
  };

  return (
    <footer
      style={{
        padding: '40px 20px 60px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
      }}
    >
      {/* Secret Note Modal / Card */}
      {showSecret && (
        <div
          className="animate-pop"
          style={{
            maxWidth: '500px',
            width: '100%',
            background: 'linear-gradient(135deg, #fff1f2, #ffe4e6)',
            border: '2px solid var(--color-rose-300)',
            borderRadius: '24px',
            padding: '24px',
            boxShadow: '0 12px 30px rgba(244, 63, 94, 0.2)',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            alignItems: 'center',
          }}
        >
          <div style={{ fontSize: '1.8rem' }}>💌</div>
          <div style={{ fontWeight: 800, color: 'var(--color-rose-600)', fontSize: '1.15rem' }}>
            A Little P.S. Just For You
          </div>
          <p style={{ fontSize: '0.98rem', color: 'var(--color-text-main)', lineHeight: 1.6 }}>
            "You deserve to feel completely treasured and loved every single second. Today was a silly mistake on my part, but tomorrow is going to be full of warm hugs and smiles. Thank you for being you, Siaa."
          </p>
          <div style={{ fontWeight: 700, color: 'var(--color-rose-500)', fontSize: '0.9rem', marginTop: '4px' }}>
            — Abhi 🧸
          </div>
        </div>
      )}

      {/* Secret Note Button */}
      <button
        onClick={toggleSecret}
        className="btn-secondary"
        style={{
          fontSize: '0.88rem',
          padding: '8px 18px',
          borderRadius: 'var(--radius-full)',
        }}
      >
        <Gift size={15} style={{ color: 'var(--color-rose-500)' }} />
        <span>{showSecret ? 'Close Little Secret Note' : 'Tap for a Tiny Secret Note 💌'}</span>
      </button>

      {/* Main Footer Note */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
        <span>Crafted with all my heart and sincere apologies by Abhi for Siaa</span>
        <Heart size={16} fill="#f43f5e" style={{ color: '#f43f5e' }} />
      </div>

      <div style={{ fontSize: '0.82rem', color: 'var(--color-text-light)', display: 'flex', alignItems: 'center', gap: '4px' }}>
        <Sparkles size={12} />
        <span>Made with love, hugs & promises • 2026</span>
        <Sparkles size={12} />
      </div>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        style={{
          marginTop: '8px',
          background: 'rgba(255, 255, 255, 0.8)',
          border: '1px solid var(--color-rose-200)',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          color: 'var(--color-rose-500)',
          boxShadow: 'var(--shadow-sm)',
          transition: 'all 0.2s ease',
        }}
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
};
