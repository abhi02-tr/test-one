import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { HeartHandshake, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { playChime } from '../utils/audio';

interface PromiseCard {
  id: string;
  icon: string;
  title: string;
  description: string;
  accentColor: string;
  bgGradient: string;
}

const CARDS: PromiseCard[] = [
  {
    id: 'extra-hugs',
    icon: '🤗',
    title: 'Extra Hugs',
    description: 'For all the hugs I forgot to give you today. 🤗',
    accentColor: '#f43f5e',
    bgGradient: 'linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%)',
  },
  {
    id: 'longer-hugs',
    icon: '🥹💗',
    title: 'Longer Hugs',
    description: 'A few extra seconds, if you\'re comfortable with that. 🥹💗',
    accentColor: '#ec4899',
    bgGradient: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)',
  },
  {
    id: 'unlimited-cuteness',
    icon: '🧸',
    title: 'Unlimited Cuteness',
    description: 'Bonus smiles, silly jokes, and my best effort to make you happy. 🧸',
    accentColor: '#d97706',
    bgGradient: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)',
  },
];

export const HugPromiseSection: React.FC = () => {
  const [claimedCards, setClaimedCards] = useState<Record<string, boolean>>({});

  const handleClaim = (cardId: string) => {
    playChime();
    setClaimedCards((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }));

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) {
      confetti({
        particleCount: 25,
        spread: 50,
        origin: { y: 0.8 },
        colors: ['#f43f5e', '#ec4899', '#f59e0b'],
      });
    }
  };

  const allClaimed = CARDS.every((card) => claimedCards[card.id]);

  return (
    <section
      id="hug-promise-section"
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
          maxWidth: '860px',
          width: '100%',
          padding: '44px 28px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '32px',
        }}
      >
        {/* Section Heading */}
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--color-rose-500)',
              fontSize: '0.85rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1.2px',
            }}
          >
            <HeartHandshake size={15} />
            <span>Binding Affection Agreement</span>
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
            My Official Hug Compensation Plan 📋😂
          </h2>

          <p
            style={{
              fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
              color: 'var(--color-text-muted)',
              maxWidth: '560px',
            }}
          >
            Tap each card to claim your compensations. Guaranteed non-negotiable by Abhi!
          </p>
        </div>

        {/* 3 Promise Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
            width: '100%',
          }}
        >
          {CARDS.map((card) => {
            const isClaimed = claimedCards[card.id];
            return (
              <div
                key={card.id}
                style={{
                  background: card.bgGradient,
                  borderRadius: '24px',
                  padding: '28px 22px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: '14px',
                  border: isClaimed
                    ? `2.5px solid ${card.accentColor}`
                    : '1.5px solid rgba(255, 255, 255, 0.8)',
                  boxShadow: isClaimed
                    ? '0 12px 28px rgba(244, 63, 94, 0.2)'
                    : '0 6px 18px rgba(0, 0, 0, 0.04)',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onClick={() => handleClaim(card.id)}
              >
                {/* Stamp if claimed */}
                {isClaimed && (
                  <div
                    className="animate-pop"
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      background: card.accentColor,
                      color: '#ffffff',
                      borderRadius: '50%',
                      width: '26px',
                      height: '26px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <CheckCircle2 size={16} />
                  </div>
                )}

                {/* Card Icon */}
                <div
                  style={{
                    fontSize: '2.4rem',
                    lineHeight: 1,
                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
                  }}
                >
                  {card.icon}
                </div>

                {/* Card Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: 'var(--color-text-main)',
                  }}
                >
                  {card.title}
                </h3>

                {/* Card Description */}
                <p
                  style={{
                    fontSize: '0.98rem',
                    color: 'var(--color-text-muted)',
                    lineHeight: 1.5,
                    flex: 1,
                  }}
                >
                  {card.description}
                </p>

                {/* Action button */}
                <button
                  type="button"
                  style={{
                    marginTop: '8px',
                    padding: '8px 18px',
                    borderRadius: 'var(--radius-full)',
                    border: 'none',
                    background: isClaimed ? '#10b981' : card.accentColor,
                    color: '#ffffff',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'transform 0.2s ease',
                  }}
                >
                  {isClaimed ? (
                    <>
                      <CheckCircle2 size={15} />
                      <span>Claimed by Siaa ✔️</span>
                    </>
                  ) : (
                    <span>Tap to Claim 🌸</span>
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {/* Mutual Agreement Guarantee Footer */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.9)',
            border: '1.5px dashed var(--color-rose-300)',
            borderRadius: '20px',
            padding: '20px 24px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--color-rose-600)',
              fontWeight: 700,
              fontSize: '1rem',
            }}
          >
            <ShieldCheck size={20} />
            <span>Official Hug Warranty & Guarantee</span>
          </div>

          <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', maxWidth: '620px' }}>
            Issued by Abhi • Fully valid for Siaa • Never expires • Zero return fees • Subject only to Siaa's consent and comfort level ❤️
          </p>

          {allClaimed && (
            <div
              className="animate-pop"
              style={{
                marginTop: '6px',
                color: '#059669',
                fontWeight: 700,
                fontSize: '0.95rem',
              }}
            >
              🎉 All 3 Hug Vouchers Activated! Next step: Let's pick a time to meet tomorrow! 👇
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
