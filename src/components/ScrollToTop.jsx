import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
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
      className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[99] transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-50 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTop}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group w-14 h-14 md:w-16 md:h-16 flex items-center justify-center outline-none cursor-pointer"
        aria-label="Scroll to top"
      >
        {/* Outer rotating dashed ring */}
        <div className={`absolute inset-0 rounded-full border-2 border-dashed transition-all duration-500 ${isHovered ? 'animate-[spin_3s_linear_infinite] border-red-500/80' : 'animate-[spin_8s_linear_infinite] border-white/20'}`}></div>
        
        {/* Inner solid glassmorphism ring */}
        <div className={`absolute inset-1.5 rounded-full border border-white/10 bg-[#0a0a0a]/90 backdrop-blur-md transition-all duration-500 group-hover:bg-red-500/10 group-hover:border-red-500/50 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_25px_rgba(239,68,68,0.3)]`}></div>

        {/* Orbital glowing dot */}
        <div className={`absolute inset-0 transition-opacity duration-300 ${isHovered ? 'opacity-100 animate-[spin_2s_linear_infinite_reverse]' : 'opacity-0'}`}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[1px] w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,1)]"></div>
        </div>

        {/* Floating elements inside */}
        <div className="relative z-10 flex flex-col items-center justify-center overflow-hidden h-full w-full rounded-full">
          
          {/* Main Double Arrow (Disappears up on hover) */}
          <svg 
            className={`w-6 h-6 md:w-7 md:h-7 text-white/70 transition-all duration-500 ease-in-out ${isHovered ? '-translate-y-10 opacity-0 text-red-400' : 'translate-y-0 opacity-100'}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
          </svg>
          
          {/* Second Solid Arrow (Blasts in from bottom on hover) */}
          <svg 
            className={`absolute w-6 h-6 md:w-7 md:h-7 text-red-500 transition-all duration-500 ease-in-out ${isHovered ? 'translate-y-0 opacity-100 scale-110' : 'translate-y-10 opacity-0 scale-50'}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 19V5M5 12l7-7 7 7" />
          </svg>
          
        </div>
      </button>
    </div>
  );
};

export default ScrollToTop;
