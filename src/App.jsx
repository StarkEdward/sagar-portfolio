import React from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import LiveStatus from './components/LiveStatus'
import Hero from './components/Hero'
import About from './components/About'
import TechnicalSkills from './components/TechnicalSkills'
import Services from './components/Services'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Certificates from './components/Certificates'
import SoftSkills from './components/SoftSkills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-green-500 z-[9999] origin-left"
        style={{ 
          scaleX,
          boxShadow: "0 0 10px #22c55e, 0 0 20px #22c55e"
        }}
      />
      <Preloader />
      <Navbar />
      <LiveStatus />
      <Hero />
      <About />
      <TechnicalSkills />
      <Services />
      <Projects />
      <Experience />
      <Education />
      <Certificates />
      <SoftSkills />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
