import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4 md:px-12 md:py-6',
        scrolled ? 'bg-background/80 backdrop-blur-md py-4' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-display font-bold tracking-tighter text-white">
          VANGUARD<span className="text-accent">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 perspective-1000">
          {navLinks.map((link) => (
            <motion.div
              key={link.name}
              whileHover={{ rotateX: 20, y: -2, z: 10 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Link
                to={link.path}
                className={cn(
                  'text-sm uppercase tracking-widest font-medium transition-colors hover:text-accent block',
                  location.pathname === link.path ? 'text-accent' : 'text-white/70'
                )}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          <motion.div whileHover={{ scale: 1.05, rotateY: 10, z: 20 }}>
            <Link
              to="/contact"
              className="bg-accent text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all block shadow-lg"
            >
              Book Event
            </Link>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-background z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'text-3xl font-display font-bold uppercase tracking-tighter',
                  location.pathname === link.path ? 'text-accent' : 'text-white'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-accent text-white px-10 py-4 rounded-full text-lg font-bold uppercase tracking-widest"
            >
              Book Event
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
