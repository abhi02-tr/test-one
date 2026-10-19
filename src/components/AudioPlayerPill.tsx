import React, { useState } from 'react';
import { Music, VolumeX, Sparkles } from 'lucide-react';
import { toggleBackgroundMusic, getIsMusicPlaying, playCutePop } from '../utils/audio';

export const AudioPlayerPill: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(() => getIsMusicPlaying());

  const handleToggle = () => {
    playCutePop();
    const newState = toggleBackgroundMusic((active) => {
      setIsPlaying(active);
    });
    setIsPlaying(newState);
  };

  return (
    <button
      onClick={handleToggle}
      className="audio-toggle-pill"
      title={isPlaying ? 'Pause cozy music-box lullaby' : 'Play cozy music-box lullaby'}
      aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
    >
      {isPlaying ? (
        <>
          <Music size={16} className="animate-spin-slow" style={{ color: 'var(--color-rose-500)' }} />
          <span>Cozy Tune: ON 🎶</span>
          <Sparkles size={13} style={{ color: '#fbbf24' }} />
        </>
      ) : (
        <>
          <VolumeX size={16} style={{ color: 'var(--color-text-muted)' }} />
          <span>Play Music 🎵</span>
        </>
      )}
    </button>
  );
};
