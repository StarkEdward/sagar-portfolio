import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import stackImage from '../assets/hero video/hero-image.png';
import { aboutContent } from '../data/portfolioData';

// Tech stack SVG icons rendered inline for crisp rendering
const AWSIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 24 24" fill="#FF9900">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
      <path d="M15.5 11c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm-7 0c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zM12 15c-1.654 0-3-1.346-3-3H7c0 2.757 2.243 5 5 5s5-2.243 5-5h-2c0 1.654-1.346 3-3 3z" />
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">AWS</span>
  </div>
);

const KubernetesIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 24 24" fill="#326CE5">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#326CE5" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Kubernetes</span>
  </div>
);

const TerraformIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 24 24" fill="#5C4EE5">
      <path d="M4 4h6v6H4V4zm8 0h6v6h-6V4zm-8 8h6v6H4v-6zm8 8h6v6h-6v-6z" />
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Terraform</span>
  </div>
);

const DockerIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 24 24" fill="#2496ED">
      <path d="M13.983 11.277c0-.65-.544-1.185-1.2-1.185s-1.2.535-1.2 1.185.544 1.185 1.2 1.185 1.2-.535 1.2-1.185m2.784-.188a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4m-5.46-2.529a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4m-2.735.056a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4m-2.614.055a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4m2.614-2.641a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4m2.735.056a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4m-8.15 5.055a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4m17.067.892c-.104-.541-.836-1.572-2.127-1.854a3.186 3.186 0 00-.931 1.704c.732.185 1.055.672 1.114.851-.101.442-.647 1.121-1.921 1.121H1.051C.471 11.277 0 11.748 0 12.327c0 3.731 3.23 6.772 7.214 6.772h9.123c3.985 0 7.215-3.041 7.215-6.772a6.49 6.49 0 00-1.402-4.135z" />
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Docker</span>
  </div>
);

const JenkinsIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 24 24" fill="#D24939">
      <path d="M12.28 0v2.66c4.08.35 7.6 3.16 8.7 7.08l2.6-.74a12.012 12.012 0 00-11.3-9zM1.98 9.38a11.96 11.96 0 001.95 8.77l2.12-1.7a9.388 9.388 0 01-1.42-6.32zm8.85-6.7A11.923 11.923 0 003.54 6.64l1.96 1.88c1.64-2.17 4.14-3.4 6.84-3.5zm2.76 11.16a1.44 1.44 0 100-2.88 1.44 1.44 0 000 2.88z" />
      <path d="M13.68 15.28c-1.35-.12-2.58.55-3.3 1.58-.2-.73-.87-1.28-1.66-1.32-.4 0-.8.15-1.12.4l.65.65c.12-.13.3-.2.47-.2.37 0 .67.3.67.67 0 .15-.05.28-.13.4a3.86 3.86 0 00-2.6 1.07c-1.07 1.06-1.57 2.62-1.37 4.1.2 1.47 1.1 2.8 2.45 3.56L9 24v-2.38c.67.24 1.4.37 2.14.37h.18v2l1.68-1.68c3.27-1.12 5.5-4.22 5.5-7.7 0-3.33-2.18-6.28-5.32-7.37l-2.08-1.92v2.75a2.535 2.535 0 002.58 4.21zm-1.85 2c-.64.04-1.2.53-1.3 1.16a.434.434 0 00.32.48c.5.15.8.63.8 1.16v2.24H9v-2.24c0-1.14-.65-2.15-1.66-2.55-.26-.1-.36-.43-.2-.67.14-.2.43-.26.65-.13 1.12.63 1.66 1.82 1.66 3.12 0 .5-.4 1-1 1s-1-.5-1-1v-.95c-.32-.23-.5-.6-.5-1 0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2v1.36c.64-.17 1.1-.73 1.15-1.4.03-.54-.4-1.02-.94-1.06a.423.423 0 01-.4-.44c.02-.23.23-.42.47-.4h.02zm9.12-5.46a11.96 11.96 0 00-6.9-5.18v2.7c2.16.8 3.88 2.5 4.7 4.67z" />
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Jenkins</span>
  </div>
);

const GitLabIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 24 24">
      <path d="M23.955 13.587l-1.342-4.135-2.664-8.189c-.156-.475-.826-.475-.98 0l-2.666 8.189h-8.59l-2.668-8.189c-.156-.475-.826-.475-.98 0l-2.664 8.189-1.342 4.135c-.147.458-.026.97.322 1.309L11.996 24l11.64-10.428c.347-.339.467-.85.319-1.31" fill="#E24329"/>
      <path d="M11.996 24l4.57-14.549H11.996V24z" fill="#FC6D26"/>
      <path d="M11.996 24L7.426 9.451h4.57V24z" fill="#FC6D26"/>
      <path d="M11.996 24l11.64-10.428-4.57-4.121L11.996 24z" fill="#FCA326"/>
      <path d="M11.996 24L.357 13.572l4.57-4.121L11.996 24z" fill="#FCA326"/>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">GitLab</span>
  </div>
);

const About = () => {
  const bioRef = useRef(null);
  const isInView = useInView(bioRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img 
                  src={stackImage} 
                  alt="Sagar Kamble — DevOps Engineer" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">{aboutContent.heading}</h2>
          <motion.p 
            ref={bioRef}
            initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
            animate={{ clipPath: isInView ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)" : "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-lg font-bold mb-12 leading-relaxed max-w-3xl text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

          {/* Horizontal Skills Row */}
          <div className="flex flex-wrap items-center gap-6 md:gap-10 mt-8 justify-center md:justify-start">
            <div data-aos="zoom-in" data-aos-delay="300" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <AWSIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="400" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <KubernetesIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="500" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <TerraformIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="600" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <DockerIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="700" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <JenkinsIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="800" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <GitLabIcon />
            </div>
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
