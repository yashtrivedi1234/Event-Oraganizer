import React from 'react';
import { Link } from 'react-router-dom';
import ccLogo from '../assets/cc-logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-black px-4 py-10 sm:px-6 md:px-12 md:py-12">
      <div className="mx-auto max-w-7xl text-center">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs uppercase tracking-widest text-white/30">
          <p>© 2026 Bamboo Groves Events Group. All Rights Reserved.</p>
          <Link to="/privacy-policy" className="whitespace-nowrap transition-colors hover:text-white">
            Privacy Policy
          </Link>
          <Link to="/terms-of-service" className="whitespace-nowrap transition-colors hover:text-white">
            Terms of Service
          </Link>
        </div>

        <div className="mt-5 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 shadow-[0_0_20px_rgba(136,171,50,0.15)]">
            <span className="text-xs uppercase tracking-widest text-white/80">
              Designed &amp; Developed by
            </span>
            <a
              href="https://www.codecrafter.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-90 transition-all duration-300 hover:scale-105 hover:opacity-100"
            >
              <img src={ccLogo} alt="CodeCrafter Web Solutions" className="h-5 w-auto sm:h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
