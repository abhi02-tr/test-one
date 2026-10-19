import React, { useState } from 'react';
import { Heart, Sparkles, Smile, Frown, Meh } from 'lucide-react';
import { playChime, playCutePop } from '../utils/audio';

export const ApologySection: React.FC = () => {
  const [mood, setMood] = useState<'grumpy' | 'thinking' | 'forgiven' | null>(null);

  const handleMoodSelect = (selectedMood: 'grumpy' | 'thinking' | 'forgiven') => {
    setMood(selectedMood);
    if (selectedMood === 'forgiven') {
      playChime();
    } else {
      playCutePop();
    }
  };

  return (
    <section
      id="apology-section"
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
          maxWidth: '740px',
          width: '100%',
          padding: '44px 28px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '28px',
          border: '2px solid rgba(254, 205, 211, 0.7)',
        }}
      >
        {/* Section Header */}
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--color-rose-500)',
              fontSize: '0.9rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1.2px',
            }}
          >
            <span>From Abhi's Heart</span>
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
            Please Forgive This Silly Boy 🧸
          </h2>
        </div>

        {/* Visual Love Letter & Illustration */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
            width: '100%',
          }}
        >
          {/* Cute envelope / love note preview image */}
          <div
            style={{
              position: 'relative',
              width: '180px',
              height: '180px',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 12px 28px rgba(244, 63, 94, 0.2)',
              border: '3px solid #ffffff',
            }}
            className="animate-float"
          >
            <img
              src="/images/love_letter_envelope.jpg"
              alt="Love letter with heart wax seal for Siaa"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>

          {/* Sincere Letter Container */}
          <div
            style={{
              background: '#fffdf9',
              border: '1.5px solid #fed7aa',
              borderRadius: '24px',
              padding: '32px 26px',
              width: '100%',
              boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.02), 0 8px 24px rgba(254, 215, 170, 0.25)',
              position: 'relative',
            }}
          >
            {/* Top letter badge */}
            <div
              style={{
                position: 'absolute',
                top: '-14px',
                left: '28px',
                background: 'linear-gradient(135deg, #f43f5e, #fb7185)',
                color: '#ffffff',
                padding: '4px 14px',
                borderRadius: '12px',
                fontSize: '0.8rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 4px 10px rgba(244, 63, 94, 0.3)',
              }}
            >
              <Heart size={12} fill="#ffffff" />
              <span>Personal Letter</span>
            </div>

            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1rem, 2.2vw, 1.15rem)',
                color: '#3f2229',
                lineHeight: 1.8,
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <p style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--color-rose-600)' }}>
                Dear Siaa,
              </p>

              <p>
                I know I didn't give you enough hugs today, and I'm sorry. 🥹
              </p>

              <p>
                I should have made more time for those little moments with you. I don't want you to feel like you have to ask for the affection you want.
              </p>

              <p>
                So here's my little promise: next time we meet, I'm making up for today's hug shortage with lots of extra hugs... if you'll let me. 🤗💗
              </p>

              <p style={{ fontWeight: 600, color: 'var(--color-rose-600)', paddingTop: '6px' }}>
                No excuses, just one genuinely sorry Abhi.
              </p>
            </div>
          </div>

          {/* Playful Caption */}
          <div
            style={{
              background: 'rgba(255, 237, 213, 0.65)',
              color: '#9a3412',
              padding: '10px 20px',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.92rem',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              border: '1px solid rgba(253, 186, 116, 0.6)',
              textAlign: 'center',
            }}
          >
            <span>Hug shortage: Abhi's fault. Hug compensation: pending... 😂</span>
          </div>

          {/* Interactive Siaa Mood Meter */}
          <div
            style={{
              width: '100%',
              marginTop: '12px',
              padding: '20px',
              background: 'rgba(255, 255, 255, 0.75)',
              borderRadius: '20px',
              border: '1px solid var(--color-rose-200)',
              textAlign: 'center',
            }}
          >
            <p style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--color-text-main)', marginBottom: '14px' }}>
              Where is Siaa on the forgiveness scale right now? 👇
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
              <button
                onClick={() => handleMoodSelect('grumpy')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '9px 16px',
                  borderRadius: 'var(--radius-full)',
                  border: mood === 'grumpy' ? '2px solid #ef4444' : '1px solid #fed7aa',
                  background: mood === 'grumpy' ? '#fee2e2' : '#ffffff',
                  color: '#991b1b',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  transition: 'all 0.2s ease',
                }}
              >
                <Frown size={16} />
                <span>Still a bit grumpy 😤</span>
              </button>

              <button
                onClick={() => handleMoodSelect('thinking')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '9px 16px',
                  borderRadius: 'var(--radius-full)',
                  border: mood === 'thinking' ? '2px solid #f59e0b' : '1px solid #fed7aa',
                  background: mood === 'thinking' ? '#fef3c7' : '#ffffff',
                  color: '#92400e',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  transition: 'all 0.2s ease',
                }}
              >
                <Meh size={16} />
                <span>Thinking about it... 🤔</span>
              </button>

              <button
                onClick={() => handleMoodSelect('forgiven')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '9px 16px',
                  borderRadius: 'var(--radius-full)',
                  border: mood === 'forgiven' ? '2px solid #ec4899' : '1px solid #fed7aa',
                  background: mood === 'forgiven' ? '#fce7f3' : '#ffffff',
                  color: '#be185d',
                  cursor: 'pointer',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  transition: 'all 0.2s ease',
                }}
              >
                <Smile size={16} />
                <span>Forgiven (for now!) 🥺💗</span>
              </button>
            </div>

            {/* Reaction to mood choice */}
            {mood && (
              <div
                className="animate-pop"
                style={{
                  marginTop: '16px',
                  padding: '12px 18px',
                  borderRadius: '14px',
                  background:
                    mood === 'forgiven'
                      ? 'rgba(252, 231, 243, 0.8)'
                      : mood === 'thinking'
                      ? 'rgba(254, 243, 199, 0.8)'
                      : 'rgba(254, 226, 226, 0.8)',
                  color:
                    mood === 'forgiven'
                      ? '#9d174d'
                      : mood === 'thinking'
                      ? '#78350f'
                      : '#991b1b',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                }}
              >
                {mood === 'grumpy' && (
                  <span>
                    Fair enough! Abhi is officially prepared to do 20 apology sit-ups and bring your favorite sweet snacks. 🍫🙇‍♂️
                  </span>
                )}
                {mood === 'thinking' && (
                  <span>
                    Negotiations are open! Hug compensation terms are highly favorable to you. 📋✨
                  </span>
                )}
                {mood === 'forgiven' && (
                  <span>
                    Aww thank you, Siaa! You just made my entire world brighter. Get ready for those hugs! 🥰🎉
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
