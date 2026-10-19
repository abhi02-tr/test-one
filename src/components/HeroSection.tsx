import React from 'react';
import { Heart, Sparkles, ChevronDown } from 'lucide-react';
import { playChime } from '../utils/audio';

interface HeroSectionProps {
  onOpenSurprise: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenSurprise }) => {
  const handleClick = () => {
    playChime();
    onOpenSurprise();
  };

  return (
    <section
      id="hero-section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 20px 40px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div
        className="glass-card"
        style={{
          maxWidth: '680px',
          width: '100%',
          padding: '40px 24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          position: 'relative',
        }}
      >
        {/* Eyebrow badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'var(--color-rose-100)',
            color: 'var(--color-rose-600)',
            padding: '8px 20px',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.85rem',
            fontWeight: 700,
            letterSpacing: '1px',
            textTransform: 'uppercase',
            boxShadow: '0 2px 8px rgba(244, 63, 94, 0.1)',
          }}
        >
          <Sparkles size={15} style={{ color: 'var(--color-rose-500)' }} />
          <span>A Little Note For You 💌</span>
          <Sparkles size={15} style={{ color: 'var(--color-rose-500)' }} />
        </div>

        {/* Teddy Bear Holding Glowing Heart */}
        <div
          className="animate-float"
          style={{
            position: 'relative',
            width: '230px',
            height: '230px',
            borderRadius: '50%',
            padding: '8px',
            background: 'linear-gradient(135deg, #fecdd3, #fed7aa, #e9d5ff)',
            boxShadow: '0 16px 36px rgba(244, 63, 94, 0.25)',
          }}
        >
          <img
            src="/images/bear_with_heart.jpg"
            alt="Cute fluffy teddy bear holding a glowing heart for Siaa"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '4px solid #ffffff',
            }}
          />
          {/* Animated cute floating heart badge */}
          <div
            className="animate-pulse-slow"
            style={{
              position: 'absolute',
              bottom: '4px',
              right: '12px',
              background: '#f43f5e',
              color: '#ffffff',
              borderRadius: '50%',
              width: '42px',
              height: '42px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(244, 63, 94, 0.4)',
              border: '2px solid #ffffff',
            }}
          >
            <Heart size={22} fill="#ffffff" />
          </div>
        </div>

        {/* Headings */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '580px' }}>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.1rem, 5vw, 3.2rem)',
              fontWeight: 800,
              color: 'var(--color-rose-600)',
              lineHeight: 1.2,
              letterSpacing: '-0.5px',
            }}
          >
            I'm Sorry, Siaa 🥹💗
          </h1>

          <p
            style={{
              fontSize: 'clamp(1.05rem, 2.5vw, 1.25rem)',
              color: 'var(--color-text-main)',
              fontWeight: 500,
              lineHeight: 1.6,
            }}
          >
            Hey Siaa, I think someone didn't get enough hugs today... and that someone responsible is me. 🥺
          </p>

          <p
            style={{
              fontSize: 'clamp(0.98rem, 2vw, 1.12rem)',
              color: 'var(--color-text-muted)',
              fontWeight: 500,
              lineHeight: 1.55,
              background: 'rgba(255, 241, 242, 0.7)',
              padding: '12px 18px',
              borderRadius: 'var(--radius-md)',
              border: '1px dashed var(--color-rose-300)',
            }}
          >
            I'm sorry I didn't give you enough hugs today, madam. I owe you some serious cuddles. ❤️
          </p>
        </div>

        {/* Primary Action Button */}
        <button
          id="btn-open-surprise"
          onClick={handleClick}
          className="btn-primary"
          style={{
            marginTop: '8px',
            padding: '16px 36px',
            fontSize: '1.15rem',
          }}
        >
          <span>Open Your Little Surprise 💌</span>
          <ChevronDown size={20} />
        </button>
      </div>
    </section>
  );
};
