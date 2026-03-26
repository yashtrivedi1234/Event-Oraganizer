import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Instagram, Twitter, Linkedin, Github } from 'lucide-react';
import logo from '../assets/logo.png';
import ccLogo from '../assets/cc-logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">

        {/* Brand block — full width on mobile, 2 cols on md+ */}
        <div className="col-span-1 sm:col-span-2">
          <Link to="/" className="mb-4 block">
            <img
              src={logo}
              alt="Bamboo Groves"
              className="h-14 sm:h-16 md:h-20 w-auto"
            />
          </Link>
          <p className="text-muted max-w-md text-sm sm:text-base md:text-lg leading-relaxed">
            Crafting extraordinary experiences that blend creative vision with flawless execution.
            Designing unforgettable moments worldwide.
          </p>
          <div className="flex space-x-5 mt-6 md:mt-8 perspective-1000">
            {[
              { icon: <Instagram size={22} />, href: '#', label: 'Instagram' },
              { icon: <Twitter size={22} />, href: '#', label: 'Twitter' },
              { icon: <Linkedin size={22} />, href: '#', label: 'LinkedIn' },
              { icon: <Github size={22} />, href: '#', label: 'GitHub' },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                aria-label={social.label}
                whileHover={{ scale: 1.2, rotateY: 20, z: 20, color: '#f27d26' }}
                className="text-white/50 transition-colors"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div style={{ transform: 'translateZ(10px)' }}>{social.icon}</div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white font-display font-bold uppercase tracking-widest text-xs sm:text-sm mb-4 md:mb-6">
            Navigation
          </h4>
          <ul className="space-y-3 md:space-y-4">
            {[
              { label: 'Home', path: '/' },
              { label: 'About', path: '/about' },
              { label: 'Portfolio', path: '/portfolio' },
              { label: 'Gallery', path: '/gallery' },
              { label: 'Contact', path: '/contact' },
            ].map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-muted hover:text-white transition-colors text-sm md:text-base"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-display font-bold uppercase tracking-widest text-xs sm:text-sm mb-4 md:mb-6">
            Contact
          </h4>
          <ul className="space-y-3 md:space-y-4">
            <li>
              <a
                href="mailto:events@bamboogroves.com"
                className="text-muted hover:text-white transition-colors text-sm md:text-base break-all"
              >
                events@bamboogroves.com
              </a>
            </li>
            <li>
              <a
                href="tel:+15559876543"
                className="text-muted hover:text-white transition-colors text-sm md:text-base"
              >
                +1 (555) 987-6543
              </a>
            </li>
            <li className="text-muted text-sm md:text-base leading-relaxed">
              789 Event Plaza, Arts District
              <br />
              Los Angeles, CA 90012
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto mt-12 md:mt-20 pt-6 md:pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/30 uppercase tracking-widest">
        <p className="text-center sm:text-left">
          © 2026 Bamboo Groves Events Group. All Rights Reserved.
        </p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white transition-colors whitespace-nowrap">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors whitespace-nowrap">
            Terms of Service
          </a>
        </div>
      </div>

      {/* CodeCrafter credit */}
      <div className="max-w-7xl mx-auto mt-6 flex justify-center">
        <div className="inline-flex items-center gap-3 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 shadow-[0_0_20px_rgba(242,125,38,0.15)]">
          <span className="text-xs text-white/80 uppercase tracking-widest">
          Designed &amp; Developed by
          </span>
          <a
            href="https://codecrafter.in"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-105"
          >
            <img src={ccLogo} alt="CodeCrafter Web Solutions" className="h-5 sm:h-6 w-auto" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;