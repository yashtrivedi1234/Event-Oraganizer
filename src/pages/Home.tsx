import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Play, Star, Users, Globe, Award, Calendar, CheckCircle2, Plus, Minus } from 'lucide-react';

const Home: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 relative overflow-hidden bg-transparent">
        <div className="max-w-7xl mx-auto w-full relative z-10 perspective-1000">
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1.2, delay: 2, ease: "easeOut" }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.span 
              className="text-accent font-mono text-sm uppercase tracking-[0.3em] mb-4 block"
              style={{ transform: "translateZ(80px)" }}
            >
              Luxury Event Production Studio
            </motion.span>
            <h1 className="text-[12vw] md:text-[8vw] leading-[0.9] font-display font-bold uppercase tracking-tighter mb-8">
              <motion.span style={{ display: "inline-block", transform: "translateZ(160px)" }}>CRAFTING</motion.span> <br />
              <motion.span 
                className="text-white/20 outline-text inline-block" 
                style={{ transform: "translateZ(120px)" }}
              >
                UNFORGETTABLE
              </motion.span> <br />
              <motion.span style={{ display: "inline-block", transform: "translateZ(240px)" }}>MOMENTS</motion.span>
            </h1>
            
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mt-12">
              <motion.button
                whileHover={{ scale: 1.05, transform: "translateZ(60px)", rotateY: 8, rotateX: -5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-10 py-5 rounded-full font-bold uppercase tracking-widest flex items-center gap-3 group shadow-[0_30px_60px_rgba(255,255,255,0.15)]"
              >
                Explore Events <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </motion.button>
              
              <motion.div 
                className="flex items-center gap-4 cursor-pointer group"
                style={{ transform: "translateZ(40px)" }}
                whileHover={{ transform: "translateZ(60px)" }}
              >
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-accent transition-colors">
                  <Play size={16} fill="white" className="group-hover:fill-accent transition-colors" />
                </div>
                <span className="text-sm uppercase tracking-widest font-medium group-hover:text-accent transition-colors">Watch Showreel</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 md:px-12 border-y border-white/10 bg-black/40 backdrop-blur-sm" data-scroll-section>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { icon: <Calendar size={32} />, value: '500+', label: 'Events Produced' },
            { icon: <Users size={32} />, value: '1M+', label: 'Guests Served' },
            { icon: <Globe size={32} />, value: '24', label: 'Countries Reached' },
            { icon: <Award size={32} />, value: '15', label: 'Industry Awards' }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-accent mb-4 flex justify-center">{stat.icon}</div>
              <h3 className="text-4xl md:text-5xl font-display font-bold mb-2">{stat.value}</h3>
              <p className="text-muted text-xs uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Specializations Showcase */}
      <section className="py-32 px-6 md:px-12 bg-black" data-scroll-section>
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <span className="text-accent font-mono text-sm uppercase tracking-[0.3em] mb-4 block">Core Specializations</span>
            <h2 className="text-5xl md:text-8xl font-display font-bold uppercase tracking-tighter">OUR SIGNATURE <br /> <span className="text-white/20 outline-text">EXPERIENCES</span></h2>
          </div>

          <div className="space-y-40">
            {[
              { 
                title: 'Corporate Galas', 
                desc: 'Elegance meets corporate vision. We produce high-stakes galas that leave a lasting impression on stakeholders and employees alike, blending formal prestige with creative flair.',
                img: 'https://picsum.photos/seed/gala-lux/1200/800',
                tags: ['Strategic Networking', 'Theatrical Lighting', 'VIP Management']
              },
              { 
                title: 'Private Soirées', 
                desc: 'Intimate, exclusive, and deeply personal. From milestone birthdays to private concerts, we craft moments that belong only to you, focused on storytelling and emotional resonance.',
                img: 'https://picsum.photos/seed/soiree-night/1200/800',
                tags: ['Bespoke Decor', 'Curated Entertainment', 'Atmospheric Design']
              },
              { 
                title: 'Product Launches', 
                desc: 'The world is watching. We create high-impact, tech-forward launches that turn products into cultural phenomena, utilizing immersive technology to tell your brand story.',
                img: 'https://picsum.photos/seed/tech-launch/1200/800',
                tags: ['Immersive Tech', 'Media Integration', 'High-Impact Visuals']
              },
              { 
                title: 'Destination Events', 
                desc: 'No borders, no limits. We handle the complex logistics of international events, ensuring a seamless experience in any corner of the globe, from tropical retreats to historic European estates.',
                img: 'https://picsum.photos/seed/destination-resort/1200/800',
                tags: ['Global Logistics', 'Cultural Integration', 'Travel Concierge']
              }
            ].map((spec, i) => (
              <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center perspective-2000`}>
                <motion.div 
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ 
                    rotateY: i % 2 === 0 ? 10 : -10,
                    rotateX: 5,
                    scale: 1.02,
                    z: 50
                  }}
                  transition={{ duration: 0.8 }}
                  className="w-full md:w-1/2 aspect-[3/2] overflow-hidden rounded-3xl group shadow-2xl"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <motion.img 
                    src={spec.img} 
                    alt={spec.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                    style={{ translateZ: "20px" }}
                  />
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="w-full md:w-1/2"
                >
                  <h3 className="text-4xl md:text-6xl font-display font-bold uppercase mb-6">{spec.title}</h3>
                  <p className="text-xl text-muted leading-relaxed mb-8">{spec.desc}</p>
                  <div className="flex flex-wrap gap-3">
                    {spec.tags.map((tag, j) => (
                      <span key={j} className="px-4 py-2 border border-white/10 rounded-full text-xs uppercase tracking-widest font-bold text-accent">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-6 md:px-12 bg-white text-black" data-scroll-section>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-end mb-20">
            <div>
              <span className="text-accent font-mono text-sm uppercase tracking-[0.3em] mb-4 block">Our Expertise</span>
              <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter">
                THE ART OF <br /> CELEBRATION
              </h2>
            </div>
            <p className="text-xl text-black/60 leading-relaxed max-w-md">
              From intimate galas to large-scale corporate productions, we bring vision to life with precision and flair.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {[
              { title: 'Corporate Galas', desc: 'Sophisticated productions that reflect your company\'s prestige and vision.' },
              { title: 'Private Soirées', desc: 'Intimate and exclusive celebrations tailored to your personal story.' },
              { title: 'Product Launches', desc: 'High-impact events designed to create buzz and leave a lasting impression.' },
              { title: 'Destination Events', desc: 'Seamlessly executed experiences in the world\'s most breathtaking locations.' },
              { title: 'Immersive Tech', desc: 'Integrating AR, VR, and interactive installations into live environments.' },
              { title: 'Brand Activations', desc: 'Creative experiential marketing that connects brands with their audience.' }
            ].map((service, i) => (
              <div key={i} className="p-12 border border-black/10 hover:bg-black hover:text-white transition-all duration-500 group">
                <span className="text-4xl font-display font-bold mb-8 block opacity-20 group-hover:opacity-100">0{i+1}</span>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">{service.title}</h3>
                <p className="opacity-60 group-hover:opacity-80">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-6 md:px-12 bg-black overflow-hidden" data-scroll-section>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-accent font-mono text-sm uppercase tracking-[0.3em] mb-4 block">How We Work</span>
            <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter">OUR PROCESS</h2>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 hidden md:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
              {[
                { step: '01', title: 'Discovery', desc: 'We dive deep into your vision, goals, and audience to build a solid foundation.' },
                { step: '02', title: 'Design', desc: 'Our creative team crafts a unique visual and experiential language for your event.' },
                { step: '03', title: 'Production', desc: 'We handle every technical detail, from lighting and sound to vendor logistics.' },
                { step: '04', title: 'Execution', desc: 'On-site management ensures a flawless experience from the first guest to the last.' }
              ].map((item, i) => (
                <div key={i} className="bg-background border border-white/10 p-8 rounded-2xl hover:border-accent transition-colors">
                  <span className="text-accent font-display font-bold text-4xl mb-6 block">{item.step}</span>
                  <h3 className="text-xl font-bold uppercase mb-4 tracking-widest">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-32 px-6 md:px-12" data-scroll-section>
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-20">
            <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter">
              FEATURED <br /> PRODUCTIONS
            </h2>
            <Link to="/portfolio" className="text-accent font-bold uppercase tracking-widest border-b border-accent pb-2">View All</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: 'The Crystal Gala', category: 'Corporate', img: 'https://picsum.photos/seed/gala/800/1000' },
              { title: 'Velvet Night', category: 'Private Soirée', img: 'https://picsum.photos/seed/velvet/800/1000' },
              { title: 'Nexus Tech Launch', category: 'Product Launch', img: 'https://picsum.photos/seed/techlaunch/800/1000' },
              { title: 'Artisan Dinner', category: 'Private Event', img: 'https://picsum.photos/seed/dinner/800/1000' }
            ].map((work, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -20 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/5] overflow-hidden mb-6 relative">
                  <img 
                    src={work.img} 
                    alt={work.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white text-black px-8 py-3 rounded-full font-bold uppercase text-sm tracking-widest">View Details</span>
                  </div>
                </div>
                <span className="text-accent font-mono text-xs uppercase tracking-widest mb-2 block">{work.category}</span>
                <h3 className="text-3xl font-display font-bold uppercase">{work.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Marquee */}
      <section className="py-20 bg-white overflow-hidden" data-scroll-section>
        <div className="flex whitespace-nowrap">
          <motion.div 
            className="flex space-x-20 items-center px-10"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {['GOOGLE', 'APPLE', 'TESLA', 'NIKE', 'ROLEX', 'PRADA', 'NETFLIX', 'SPOTIFY'].map((client, i) => (
              <span key={i} className="text-black/20 text-6xl md:text-8xl font-display font-bold tracking-tighter">{client}</span>
            ))}
            {/* Duplicate for seamless loop */}
            {['GOOGLE', 'APPLE', 'TESLA', 'NIKE', 'ROLEX', 'PRADA', 'NETFLIX', 'SPOTIFY'].map((client, i) => (
              <span key={i+'_dup'} className="text-black/20 text-6xl md:text-8xl font-display font-bold tracking-tighter">{client}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 md:px-12" data-scroll-section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-accent font-mono text-sm uppercase tracking-[0.3em] mb-4 block">Common Questions</span>
            <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter">FAQ</h2>
          </div>

          <div className="space-y-4">
            {[
              { q: 'How far in advance should we book?', a: 'For large-scale corporate events, we recommend booking 6-12 months in advance. For private soirées, 3-6 months is usually sufficient.' },
              { q: 'Do you handle destination events?', a: 'Yes, we have a global network of partners and can produce events anywhere in the world, handling all logistics and local vendor management.' },
              { q: 'What is your typical event budget?', a: 'We specialize in luxury productions. Our projects typically start at $50,000, but we tailor every proposal to the specific scale and requirements of the event.' },
              { q: 'Can you integrate custom technology?', a: 'Absolutely. We have an in-house tech team that specializes in AR/VR, custom lighting installations, and interactive digital experiences.' }
            ].map((faq, i) => (
              <div key={i} className="border border-white/10 rounded-2xl overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full p-8 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-xl font-bold uppercase tracking-widest">{faq.q}</span>
                  {activeFaq === i ? <Minus className="text-accent" /> : <Plus className="text-accent" />}
                </button>
                <motion.div 
                  initial={false}
                  animate={{ height: activeFaq === i ? 'auto' : 0, opacity: activeFaq === i ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-8 pt-0 text-muted leading-relaxed">
                    {faq.a}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 md:px-12 bg-accent text-white" data-scroll-section>
        <div className="max-w-4xl mx-auto text-center">
          <Star className="mx-auto mb-8 opacity-50" size={48} />
          <h2 className="text-3xl md:text-5xl font-serif italic leading-tight mb-12">
            "Vanguard Events exceeded every expectation. Their ability to handle complex logistics while maintaining a high level of creative flair is truly impressive."
          </h2>
          <div>
            <p className="font-bold uppercase tracking-widest">Michael Chen</p>
            <p className="text-white/60 text-sm uppercase tracking-widest mt-1">Director of Events, Global Tech Corp</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-6 md:px-12 text-center relative overflow-hidden" data-scroll-section>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-6xl md:text-9xl font-display font-bold uppercase tracking-tighter mb-12">
            READY TO <br /> <span className="text-accent">CELEBRATE?</span>
          </h2>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-4 bg-white text-black px-12 py-6 rounded-full font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-all group"
          >
            Start Planning <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
        
        {/* Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-display font-bold text-white/5 pointer-events-none select-none">
          VANGUARD
        </div>
      </section>
    </div>
  );
};

export default Home;
