import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Instagram, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-20 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="text-3xl font-display font-bold tracking-tighter text-white mb-6 block">
            VANGUARD<span className="text-accent">.</span>
          </Link>
          <p className="text-muted max-w-md text-lg leading-relaxed">
            Crafting extraordinary experiences that blend creative vision with flawless execution. 
            Designing unforgettable moments worldwide.
          </p>
          <div className="flex space-x-6 mt-8 perspective-1000">
            {[
              { icon: <Instagram size={24} />, href: '#' },
              { icon: <Twitter size={24} />, href: '#' },
              { icon: <Linkedin size={24} />, href: '#' },
              { icon: <Github size={24} />, href: '#' }
            ].map((social, i) => (
              <motion.a 
                key={i}
                href={social.href} 
                whileHover={{ scale: 1.2, rotateY: 20, z: 20, color: '#f27d26' }}
                className="text-white/50 transition-colors"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div style={{ transform: "translateZ(10px)" }}>{social.icon}</div>
              </motion.a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-display font-bold uppercase tracking-widest text-sm mb-6">Navigation</h4>
          <ul className="space-y-4">
            <li><Link to="/" className="text-muted hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about" className="text-muted hover:text-white transition-colors">About</Link></li>
            <li><Link to="/portfolio" className="text-muted hover:text-white transition-colors">Portfolio</Link></li>
            <li><Link to="/gallery" className="text-muted hover:text-white transition-colors">Gallery</Link></li>
            <li><Link to="/contact" className="text-muted hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display font-bold uppercase tracking-widest text-sm mb-6">Contact</h4>
          <ul className="space-y-4">
            <li className="text-muted">events@vanguard.com</li>
            <li className="text-muted">+1 (555) 987-6543</li>
            <li className="text-muted">789 Event Plaza, Arts District<br />Los Angeles, CA 90012</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center text-xs text-white/30 uppercase tracking-widest">
        <p>© 2026 Vanguard Events Group. All Rights Reserved.</p>
        <div className="flex space-x-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
