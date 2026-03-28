import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 md:px-12 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Info */}
          <div>
            <h1 className="h1 font-display font-bold uppercase tracking-tighter mb-12">Start Your <br /> <span className="text-accent">Event.</span></h1>
            <p className="text-muted leading-relaxed mb-12 max-w-md">
              Ready to create something extraordinary? Tell us about your event and let's start the planning process.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-accent">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-muted font-bold">Email</h4>
                  <p>events@Bamboo Groves.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-accent">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-muted font-bold">Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-muted font-bold">Studio</h4>
                  <p>New York, NY</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50, rotateY: 10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            whileHover={{ 
              rotateY: -5, 
              rotateX: 2,
              z: 30,
              boxShadow: "0 40px 80px rgba(0,0,0,0.5)"
            }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 p-12 rounded-3xl border border-white/10 backdrop-blur-md"
            style={{ transformStyle: "preserve-3d" }}
          >
            <form className="space-y-8" style={{ transform: "translateZ(20px)" }}>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-muted">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-transparent border-b border-white/20 py-4 focus:border-accent outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-muted">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-transparent border-b border-white/20 py-4 focus:border-accent outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-muted">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-transparent border-b border-white/20 py-4 focus:border-accent outline-none transition-colors resize-none"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-accent text-white py-6 rounded-2xl font-bold uppercase tracking-widest flex items-center justify-center gap-3"
              >
                Send Message <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
