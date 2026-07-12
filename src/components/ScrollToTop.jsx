import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[99] transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTop}
        className="group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-black/50 backdrop-blur-md rounded-full border border-white/10 hover:border-red-500/50 shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(239,68,68,0.2)]"
        aria-label="Scroll to top"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Icon Container */}
        <div className="relative z-10 text-white/50 group-hover:text-white transition-colors duration-300 flex flex-col items-center justify-center group-hover:-translate-y-1">
          {/* Arrow */}
          <svg 
            className="w-6 h-6 md:w-7 md:h-7" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 15l7-7 7 7" />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default ScrollToTop;
