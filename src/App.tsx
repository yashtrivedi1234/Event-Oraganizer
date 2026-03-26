import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import ScrollToTop from './components/ScrollToTop';
import Scene3D from './components/Scene3D';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, rotateY: 10, scale: 0.95, z: -100 }}
        animate={{ opacity: 1, rotateY: 0, scale: 1, z: 0 }}
        exit={{ opacity: 0, rotateY: -10, scale: 0.95, z: -100 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="perspective-2000"
        style={{ transformStyle: "preserve-3d" }}
      >
        <SmoothScroll>
          {children}
          <Footer />
        </SmoothScroll>
      </motion.div>
    </AnimatePresence>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <AnimatePresence>
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>
      
      {!loading && (
        <>
          <Scene3D />
          <CustomCursor />
          <Navbar />
          <Routes>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/portfolio" element={<PageWrapper><Portfolio /></PageWrapper>} />
            <Route path="/gallery" element={<PageWrapper><Gallery /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          </Routes>
        </>
      )}
    </Router>
  );
}
