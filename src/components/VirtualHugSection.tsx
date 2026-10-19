import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, Flame } from 'lucide-react';
import { playHugSound } from '../utils/audio';

export const VirtualHugSection: React.FC = () => {
  const [hugCount, setHugCount] = useState<number>(0);
  const [isSqueezing, setIsSqueezing] = useState<boolean>(false);
  const [lastHugTime, setLastHugTime] = useState<number | null>(null);

  const triggerConfetti = () => {
    // Check reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Launch cute heart-shaped and pastel confetti
    confetti({
      particleCount: 35,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#f43f5e', '#ec4899', '#fda4af', '#fcd34d', '#e9d5ff'],
      shapes: ['circle'],
      scalar: 1.2,
    });
  };

  const handleSendHug = () => {
    playHugSound();
    setHugCount((prev) => prev + 1);
    setLastHugTime(Date.now());
    setIsSqueezing(true);

    triggerConfetti();

    setTimeout(() => {
      setIsSqueezing(false);
    }, 750);
  };

  return (
    <section
      id="virtual-hug-section"
      style={{
        padding: '60px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div
        className="glass-card"
        style={{
          maxWidth: '720px',
          width: '100%',
          padding: '44px 28px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          textAlign: 'center',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--color-rose-500)',
              fontSize: '0.85rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
          >
            <Sparkles size={14} />
            <span>Emergency Hug Dispatch</span>
            <Sparkles size={14} />
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
              color: 'var(--color-rose-600)',
              fontWeight: 800,
            }}
          >
            Until I Can Give You a Real Hug 🤗
          </h2>
          <p
            style={{
              fontSize: 'clamp(1rem, 2.2vw, 1.15rem)',
              color: 'var(--color-text-main)',
              maxWidth: '540px',
            }}
          >
            Here's a tiny virtual hug to make up for at least one of the hugs you missed today.
          </p>
        </div>

        {/* Hugging Bears Visual */}
        <div
          className={isSqueezing ? 'animate-squeeze' : 'animate-float'}
          style={{
            position: 'relative',
            width: '240px',
            height: '240px',
            borderRadius: '50%',
            padding: '6px',
            background: 'linear-gradient(135deg, #fecdd3, #fbcfe8, #fed7aa)',
            boxShadow: isSqueezing
              ? '0 0 40px rgba(244, 63, 94, 0.6)'
              : '0 16px 36px rgba(244, 63, 94, 0.22)',
            transition: 'box-shadow 0.3s ease',
          }}
        >
          <img
            src="/images/hugging_bears.jpg"
            alt="Adorable teddy bears cuddling warmly"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '4px solid #ffffff',
            }}
          />

          {isSqueezing && (
            <div
              className="animate-pop"
              style={{
                position: 'absolute',
                top: '-10px',
                right: '15px',
                background: '#f43f5e',
                color: '#ffffff',
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                fontWeight: 700,
                fontSize: '0.85rem',
                boxShadow: '0 4px 12px rgba(244, 63, 94, 0.4)',
                border: '2px solid #ffffff',
              }}
            >
              *SQUEEEZE* 🫂💗
            </div>
          )}
        </div>

        {/* Interactive Button */}
        <button
          id="btn-send-hug"
          onClick={handleSendHug}
          className="btn-primary"
          style={{
            fontSize: '1.2rem',
            padding: '16px 40px',
            boxShadow: '0 10px 28px rgba(244, 63, 94, 0.4)',
          }}
        >
          <Heart size={22} fill="#ffffff" />
          <span>Send Me a Hug 🤗</span>
        </button>

        {/* Hug Counter Badge */}
        {hugCount > 0 && (
          <div
            className="animate-pop"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255, 241, 242, 0.95)',
              border: '1.5px solid var(--color-rose-300)',
              padding: '8px 20px',
              borderRadius: 'var(--radius-full)',
              color: 'var(--color-rose-600)',
              fontWeight: 700,
              fontSize: '0.95rem',
            }}
          >
            <Flame size={18} style={{ color: '#f43f5e' }} />
            <span>Virtual Hugs Delivered to Siaa: {hugCount}</span>
          </div>
        )}

        {/* Hug Reaction Message */}
        {lastHugTime && (
          <div
            className="animate-pop"
            style={{
              marginTop: '8px',
              padding: '24px',
              borderRadius: '24px',
              background: 'linear-gradient(135deg, rgba(255, 241, 242, 0.9) 0%, rgba(253, 242, 248, 0.9) 100%)',
              border: '2px solid var(--color-rose-300)',
              maxWidth: '560px',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                fontWeight: 800,
                color: 'var(--color-rose-600)',
                letterSpacing: '0.5px',
              }}
            >
              BIG VIRTUAL HUG FOR YOU, SIAA! 🫂💗
            </div>

            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--color-text-main)',
                fontWeight: 500,
              }}
            >
              Just a little preview. The real hugs are reserved for when we meet. 🥹
            </p>

            {/* Bonus cute progression texts based on count */}
            {hugCount >= 3 && hugCount < 5 && (
              <p
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--color-rose-500)',
                  fontWeight: 600,
                  borderTop: '1px dashed var(--color-rose-200)',
                  paddingTop: '8px',
                }}
              >
                🧸 Hug warmth at 100%! Abhi is officially 1000% apologetic and fond of you.
              </p>
            )}

            {hugCount >= 5 && (
              <p
                style={{
                  fontSize: '0.92rem',
                  color: '#9d174d',
                  fontWeight: 700,
                  borderTop: '1px dashed var(--color-rose-200)',
                  paddingTop: '8px',
                }}
              >
                ✨ Unlimited hug combo unlocked! Madam, your personal hug account has reached VIP status! 🥰
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
