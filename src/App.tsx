import React from 'react';
import { BackgroundDecorations } from './components/BackgroundDecorations';
import { AudioPlayerPill } from './components/AudioPlayerPill';
import { HeroSection } from './components/HeroSection';
import { ApologySection } from './components/ApologySection';
import { VirtualHugSection } from './components/VirtualHugSection';
import { HugPromiseSection } from './components/HugPromiseSection';
import { DateProposalSection } from './components/DateProposalSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const handleOpenSurprise = () => {
    const apologyEl = document.getElementById('apology-section');
    if (apologyEl) {
      apologyEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Background Floating Hearts & Sparkles */}
      <BackgroundDecorations />

      {/* Floating Audio Player Control Pill */}
      <AudioPlayerPill />

      {/* Main Content Container */}
      <main style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        {/* Section A: Welcome / Apology Hero */}
        <HeroSection onOpenSurprise={handleOpenSurprise} />

        {/* Section B: A Proper Apology */}
        <ApologySection />

        {/* Section C: Virtual Hug Interaction */}
        <VirtualHugSection />

        {/* Section D: The Hug Promise */}
        <HugPromiseSection />

        {/* Section E: Date Proposal for Tomorrow */}
        <DateProposalSection />
      </main>

      {/* Footer & Secret Note Easter Egg */}
      <Footer />
    </div>
  );
};

export default App;
