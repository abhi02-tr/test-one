import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Calendar, Coffee, Sunset, IceCream, Compass, Check, Copy } from 'lucide-react';
import { playDateAcceptedCelebration, playCutePop, playChime } from '../utils/audio';

const DATE_VIBES = [
  { id: 'cafe', icon: Coffee, title: 'Cozy Cafe Date', desc: 'Warm drinks, sweet pastries & endless talks' },
  { id: 'sunset', icon: Sunset, title: 'Sunset Stroll', desc: 'Pleasant evening air, relaxed walking & smiles' },
  { id: 'dessert', icon: IceCream, title: 'Dessert Crawl', desc: 'Waffles, ice cream, or whatever satisfies your sweet tooth' },
  { id: 'surprise', icon: Compass, title: 'Surprise Me!', desc: 'Abhi arranges everything, you just show up looking lovely' },
];

const PLAYFUL_NO_PHRASES = [
  'Hmm, let me think... 😜',
  'Are you sure, madam? 🥺',
  'I will bring your favorite snacks! 🍩',
  'Look at the puppy-eyes teddy! 🧸',
  'Ekdum pakka no? Reconsider please! 🥹',
  'Fine, only if you get 10 extra hugs! 💗',
  'Okay fine, YES! 🥰',
];

export const DateProposalSection: React.FC = () => {
  const [hasAgreed, setHasAgreed] = useState<boolean>(false);
  const [noIndex, setNoIndex] = useState<number>(0);
  const [selectedVibe, setSelectedVibe] = useState<string>('cafe');
  const [specialDemand, setSpecialDemand] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const handleYes = () => {
    playDateAcceptedCelebration();
    setHasAgreed(true);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) {
      // Big celebration confetti burst
      const end = Date.now() + 2000;
      const frame = () => {
        confetti({
          particleCount: 7,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#f43f5e', '#ec4899', '#fbcfe8', '#fef08a'],
        });
        confetti({
          particleCount: 7,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#f43f5e', '#ec4899', '#fbcfe8', '#fef08a'],
        });
        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };
      frame();
    }
  };

  const handlePlayfulNo = () => {
    playCutePop();
    if (noIndex < PLAYFUL_NO_PHRASES.length - 1) {
      setNoIndex((prev) => prev + 1);
    } else {
      handleYes();
    }
  };

  const handleCopyPass = () => {
    playChime();
    const vibeTitle = DATE_VIBES.find((v) => v.id === selectedVibe)?.title || 'Date';
    const note = specialDemand.trim() ? `\nMy note for you: "${specialDemand.trim()}"` : '';
    const shareText = `Hey Abhi! 🧸💗\nI'm ready for our date tomorrow!\nVibe: ${vibeTitle}${note}\nDon't forget all the hugs you promised me! 🤗✨`;

    navigator.clipboard.writeText(shareText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  return (
    <section
      id="date-proposal-section"
      style={{
        padding: '60px 20px 80px',
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
          maxWidth: '760px',
          width: '100%',
          padding: '44px 28px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '28px',
          border: '2px solid rgba(244, 63, 94, 0.3)',
          boxShadow: '0 20px 50px rgba(244, 63, 94, 0.15)',
        }}
      >
        {/* Section Tag */}
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
            textTransform: 'uppercase',
            letterSpacing: '1px',
          }}
        >
          <Calendar size={15} />
          <span>Tomorrow's Invitation</span>
          <Sparkles size={14} />
        </div>

        {/* Section Heading & Subtitle */}
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.9rem, 4vw, 2.7rem)',
              color: 'var(--color-rose-600)',
              fontWeight: 800,
            }}
          >
            One More Question for Tomorrow... 🌸
          </h2>
          <p
            style={{
              fontSize: 'clamp(1.05rem, 2.2vw, 1.2rem)',
              color: 'var(--color-text-main)',
              maxWidth: '560px',
              margin: '0 auto',
            }}
          >
            Since I owe you all these hugs, can I make it up to you tomorrow?
          </p>
          <div
            style={{
              marginTop: '8px',
              padding: '14px 22px',
              background: 'rgba(255, 241, 242, 0.85)',
              borderRadius: '20px',
              border: '1.5px solid var(--color-rose-200)',
              fontSize: '1.25rem',
              fontWeight: 700,
              color: 'var(--color-rose-600)',
              fontFamily: 'var(--font-heading)',
            }}
          >
            "Would you like to go on a date with me tomorrow, Siaa? ☕✨"
          </div>
        </div>

        {/* Proposal Buttons State */}
        {!hasAgreed ? (
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '10px',
              width: '100%',
            }}
          >
            <button
              id="btn-accept-date"
              onClick={handleYes}
              className="btn-primary"
              style={{
                fontSize: '1.25rem',
                padding: '16px 42px',
                transform: 'scale(1.05)',
              }}
            >
              <span>Yes, absolutely! 🥰</span>
            </button>

            <button
              id="btn-playful-no"
              onClick={handlePlayfulNo}
              className="btn-secondary"
              style={{
                fontSize: '1rem',
                padding: '14px 26px',
              }}
            >
              <span>{PLAYFUL_NO_PHRASES[noIndex]}</span>
            </button>
          </div>
        ) : (
          /* Agreement Revealed Section */
          <div
            className="animate-pop"
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              alignItems: 'center',
            }}
          >
            {/* Celebration Banner */}
            <div
              style={{
                width: '100%',
                padding: '24px',
                borderRadius: '24px',
                background: 'linear-gradient(135deg, #fff1f2 0%, #fdf2f8 50%, #fef3c7 100%)',
                border: '2px solid var(--color-rose-300)',
                textAlign: 'center',
                boxShadow: '0 8px 24px rgba(244, 63, 94, 0.15)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.4rem, 3.5vw, 1.9rem)',
                  fontWeight: 800,
                  color: 'var(--color-rose-600)',
                  marginBottom: '8px',
                }}
              >
                YAYYY!! Date Confirmed for Tomorrow! 🎉🧸
              </div>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-text-main)', fontWeight: 500 }}>
                I cannot wait to see your smile and finally give you those hugs in person. Now let's pick our vibe! 🌸
              </p>
            </div>

            {/* Date Vibe Selector */}
            <div style={{ width: '100%' }}>
              <label
                style={{
                  display: 'block',
                  fontWeight: 700,
                  color: 'var(--color-text-main)',
                  marginBottom: '12px',
                  fontSize: '1.05rem',
                  textAlign: 'center',
                }}
              >
                Pick What You Feel Like Doing:
              </label>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '12px',
                  width: '100%',
                }}
              >
                {DATE_VIBES.map((vibe) => {
                  const Icon = vibe.icon;
                  const isSelected = selectedVibe === vibe.id;
                  return (
                    <div
                      key={vibe.id}
                      onClick={() => {
                        playChime();
                        setSelectedVibe(vibe.id);
                      }}
                      style={{
                        padding: '16px',
                        borderRadius: '18px',
                        border: isSelected
                          ? '2px solid var(--color-rose-500)'
                          : '1.5px solid rgba(254, 205, 211, 0.6)',
                        background: isSelected
                          ? 'linear-gradient(135deg, #fff1f2, #fdf2f8)'
                          : 'rgba(255, 255, 255, 0.75)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        boxShadow: isSelected
                          ? '0 6px 16px rgba(244, 63, 94, 0.15)'
                          : 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        gap: '6px',
                      }}
                    >
                      <Icon size={24} style={{ color: isSelected ? 'var(--color-rose-500)' : '#7d5a69' }} />
                      <div style={{ fontWeight: 700, color: 'var(--color-text-main)', fontSize: '0.98rem' }}>
                        {vibe.title}
                      </div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
                        {vibe.desc}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Special Demand Note for Abhi */}
            <div style={{ width: '100%' }}>
              <label
                htmlFor="special-demand"
                style={{
                  display: 'block',
                  fontWeight: 700,
                  color: 'var(--color-text-main)',
                  marginBottom: '8px',
                  fontSize: '0.95rem',
                }}
              >
                Any special order or message for Abhi? (Optional 💌)
              </label>
              <input
                id="special-demand"
                type="text"
                value={specialDemand}
                onChange={(e) => setSpecialDemand(e.target.value)}
                placeholder="e.g. Bring iced coffee and don't forget the first hug immediately! 🧸"
                style={{
                  width: '100%',
                  padding: '14px 18px',
                  borderRadius: '16px',
                  border: '1.5px solid var(--color-rose-200)',
                  background: 'rgba(255, 255, 255, 0.9)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.95rem',
                  outline: 'none',
                  color: 'var(--color-text-main)',
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)',
                }}
              />
            </div>

            {/* Official Date Pass Ticket Display */}
            <div
              style={{
                width: '100%',
                padding: '24px',
                borderRadius: '24px',
                background: 'linear-gradient(135deg, #fffbeb 0%, #fff7ed 50%, #fdf2f8 100%)',
                border: '2px dashed #f59e0b',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                position: 'relative',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderBottom: '1px solid #fde68a',
                  paddingBottom: '10px',
                }}
              >
                <div style={{ fontWeight: 800, color: '#b45309', fontSize: '1.1rem', letterSpacing: '0.5px' }}>
                  🎫 OFFICIAL DATE PASS & HUG VOUCHER
                </div>
                <div style={{ fontSize: '0.82rem', background: '#fef3c7', padding: '4px 10px', borderRadius: '10px', color: '#92400e', fontWeight: 700 }}>
                  VALID TOMORROW
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '10px', fontSize: '0.92rem' }}>
                <div>
                  <span style={{ color: '#78350f', fontWeight: 600 }}>VIP Guest: </span>
                  <span style={{ fontWeight: 700, color: 'var(--color-rose-600)' }}>Siaa 💗</span>
                </div>
                <div>
                  <span style={{ color: '#78350f', fontWeight: 600 }}>Host: </span>
                  <span style={{ fontWeight: 700, color: 'var(--color-rose-600)' }}>Abhi 🧸</span>
                </div>
                <div>
                  <span style={{ color: '#78350f', fontWeight: 600 }}>Chosen Vibe: </span>
                  <span style={{ fontWeight: 700, color: '#b45309' }}>
                    {DATE_VIBES.find((v) => v.id === selectedVibe)?.title}
                  </span>
                </div>
                <div>
                  <span style={{ color: '#78350f', fontWeight: 600 }}>Hug Allowance: </span>
                  <span style={{ fontWeight: 700, color: '#059669' }}>Unlimited 🤗</span>
                </div>
              </div>

              {specialDemand.trim() && (
                <div style={{ background: '#ffffff', padding: '10px 14px', borderRadius: '12px', fontSize: '0.9rem', color: '#78350f', border: '1px solid #fed7aa' }}>
                  <strong>Siaa's Special Note:</strong> "{specialDemand.trim()}"
                </div>
              )}

              {/* Copy confirmation button */}
              <button
                onClick={handleCopyPass}
                style={{
                  marginTop: '8px',
                  alignSelf: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 22px',
                  borderRadius: 'var(--radius-full)',
                  border: 'none',
                  background: copied ? '#10b981' : '#b45309',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(180, 83, 9, 0.25)',
                  transition: 'all 0.2s ease',
                }}
              >
                {copied ? (
                  <>
                    <Check size={16} />
                    <span>Copied! Send it to Abhi on WhatsApp / Chat 📲</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    <span>Copy Date Pass to Send to Abhi 💌</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
