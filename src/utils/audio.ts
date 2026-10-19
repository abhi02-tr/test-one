// Web Audio API generator for soft kawaii chimes and romantic lullaby music box
let audioCtx: AudioContext | null = null;
let bgMusicInterval: number | null = null;
let isMusicPlaying = false;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// Play a soft sweet bell/chime note
function playNote(freq: number, startTime: number, duration: number, gainValue = 0.12, type: OscillatorType = 'sine') {
  const ctx = getAudioContext();
  if (!ctx) return;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = type;
  osc.frequency.setValueAtTime(freq, startTime);

  // Soft envelope: attack and decay
  gain.gain.setValueAtTime(0, startTime);
  gain.gain.linearRampToValueAtTime(gainValue, startTime + 0.04);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(startTime);
  osc.stop(startTime + duration);
}

// Gentle chime for button clicks or cards
export function playChime() {
  const ctx = getAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime;
  const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
  notes.forEach((freq, idx) => {
    playNote(freq, now + idx * 0.08, 0.4, 0.1, 'sine');
  });
}

// Warm chord for virtual hug squeeze
export function playHugSound() {
  const ctx = getAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime;
  // Warm soft F major 7 / A minor chord
  const chord = [349.23, 440.0, 523.25, 659.25]; // F4, A4, C5, E5
  chord.forEach((freq) => {
    playNote(freq, now, 0.8, 0.08, 'sine');
  });
  // Little sparkle on top
  playNote(880, now + 0.15, 0.5, 0.06, 'triangle');
}

// Joyful sparkle for accepting the date!
export function playDateAcceptedCelebration() {
  const ctx = getAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime;
  const arpeggio = [523.25, 659.25, 783.99, 987.77, 1046.5, 1318.51];
  arpeggio.forEach((freq, i) => {
    playNote(freq, now + i * 0.1, 0.6, 0.12, 'triangle');
  });
}

// Playful cute boing / boop for silly interactions
export function playCutePop() {
  const ctx = getAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime;
  playNote(600, now, 0.15, 0.12, 'sine');
  playNote(800, now + 0.06, 0.25, 0.1, 'sine');
}

// Romantic music-box lullaby melody (Canon in D / Kawaii Lo-Fi inspired)
const melody = [
  { freq: 587.33, dur: 0.5 }, // D5
  { freq: 659.25, dur: 0.5 }, // E5
  { freq: 739.99, dur: 0.5 }, // F#5
  { freq: 880.00, dur: 0.8 }, // A5
  { freq: 739.99, dur: 0.5 }, // F#5
  { freq: 659.25, dur: 0.5 }, // E5
  { freq: 587.33, dur: 0.8 }, // D5
  { freq: 493.88, dur: 0.5 }, // B4
  { freq: 587.33, dur: 0.5 }, // D5
  { freq: 659.25, dur: 0.8 }, // E5
  { freq: 739.99, dur: 0.5 }, // F#5
  { freq: 659.25, dur: 0.5 }, // E5
  { freq: 587.33, dur: 0.8 }, // D5
];

let melodyIndex = 0;

export function toggleBackgroundMusic(onStateChange?: (playing: boolean) => void): boolean {
  const ctx = getAudioContext();
  if (!ctx) return false;

  if (isMusicPlaying) {
    if (bgMusicInterval) {
      clearInterval(bgMusicInterval);
      bgMusicInterval = null;
    }
    isMusicPlaying = false;
    onStateChange?.(false);
    return false;
  } else {
    isMusicPlaying = true;
    melodyIndex = 0;

    const playNextNote = () => {
      if (!isMusicPlaying) return;
      const current = melody[melodyIndex];
      const now = ctx.currentTime;
      // Play melody note with warm music-box harmonics
      playNote(current.freq, now, current.dur * 1.2, 0.055, 'sine');
      // Subdued octave lower bass note occasionally
      if (melodyIndex % 3 === 0) {
        playNote(current.freq / 2, now, 0.9, 0.035, 'triangle');
      }

      melodyIndex = (melodyIndex + 1) % melody.length;
    };

    playNextNote();
    bgMusicInterval = window.setInterval(playNextNote, 600);
    onStateChange?.(true);
    return true;
  }
}

export function getIsMusicPlaying(): boolean {
  return isMusicPlaying;
}
