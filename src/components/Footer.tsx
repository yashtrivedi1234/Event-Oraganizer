import React from 'react';
import ccLogo from '../assets/cc-logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-black px-4 py-6 sm:px-6 md:px-12">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 text-center text-xs uppercase tracking-widest text-white/40">
        <p>© 2026 Bamboo Groves Events Group. All Rights Reserved.</p>
        <span className="text-accent/70">|</span>
        <a
          href="https://www.codecrafter.co.in"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-accent/35 bg-accent/10 px-3 py-1.5 text-accent shadow-[0_0_18px_rgba(136,171,50,0.18)] transition-all hover:bg-accent/15 hover:text-white"
        >
          <span className="text-[10px] font-semibold tracking-[0.22em]">Crafted by</span>
          <img src={ccLogo} alt="CodeCrafter" className="h-5 w-auto sm:h-6" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
