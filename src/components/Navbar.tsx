import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import logo from '../assets/logo.png';

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

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 w-full z-50 transition-all duration-300 pointer-events-auto',
          // Responsive padding: tight on mobile, generous on desktop
          'px-4 py-2 sm:px-6 sm:py-3 md:px-10 md:py-4 lg:px-14 lg:py-5',
          scrolled
            ? 'bg-background/85 backdrop-blur-md shadow-lg shadow-black/20'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">

          {/* Logo — scales fluidly across breakpoints */}
          <Link to="/" className="block flex-shrink-0">
            <img
              src={logo}
              alt="Bamboo Groves Pvt. Ltd."
              className={cn(
                'w-auto transition-all duration-300',
                // Responsive logo height
                scrolled
                  ? 'h-10 sm:h-12 md:h-14'
                  : 'h-12 sm:h-14 md:h-16 lg:h-20'
              )}
            />
          </Link>

          {/* Desktop Nav — visible md and above */}
          <div className="hidden md:flex items-center gap-5 lg:gap-8 perspective-1000">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ rotateX: 20, y: -2, z: 10 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Link
                  to={link.path}
                  className={cn(
                    'text-xs lg:text-sm uppercase tracking-widest font-medium transition-colors hover:text-accent block whitespace-nowrap',
                    location.pathname === link.path
                      ? 'text-accent'
                      : 'text-white/70'
                  )}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            <motion.div whileHover={{ scale: 1.05, rotateY: 10, z: 20 }}>
              <Link
                to="/contact"
                className="bg-accent text-white px-4 py-2 lg:px-6 lg:py-2 rounded-full text-xs lg:text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all block shadow-lg whitespace-nowrap"
              >
                Book Event
              </Link>
            </motion.div>
          </div>

          {/* Mobile / Tablet Toggle — visible below md */}
          <button
            className="md:hidden text-white p-1 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile / Tablet Full-screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-0 bg-background z-40 flex flex-col items-center justify-center md:hidden"
          >
            {/* Close button in corner */}
            <button
              className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X size={28} />
            </button>

            {/* Logo inside mobile menu */}
            <Link to="/" className="mb-10" onClick={() => setIsOpen(false)}>
              <img
                src={logo}
                alt="Bamboo Groves Pvt. Ltd."
                className="h-14 sm:h-16 w-auto"
              />
            </Link>

            <div className="flex flex-col items-center gap-6 sm:gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                >
                  <Link
                    to={link.path}
                    className={cn(
                      'text-2xl sm:text-3xl font-display font-bold uppercase tracking-tighter transition-colors',
                      location.pathname === link.path
                        ? 'text-accent'
                        : 'text-white hover:text-accent'
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * navLinks.length, duration: 0.3 }}
                className="mt-2"
              >
                <Link
                  to="/contact"
                  className="bg-accent text-white px-8 py-3 sm:px-10 sm:py-4 rounded-full text-base sm:text-lg font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all block"
                >
                  Book Event
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;