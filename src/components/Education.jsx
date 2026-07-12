import React from 'react';
import { education } from '../data/portfolioData';

const EducationCard = ({ title, institution, grade, icon, aosDelay }) => (
  <div 
    data-aos="fade-up"
    data-aos-delay={aosDelay}
    className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/25 hover:scale-[1.02] hover:bg-black/30 hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)] transition-all duration-500 flex flex-col justify-between"
  >
    <div className="flex items-start gap-4 mb-4">
      <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full border border-white/20 text-2xl">
        {icon}
      </div>
      <div>
        <h3 className="text-white font-black text-xl leading-tight mb-1">
          {title}
        </h3>
        <p className="text-red-200 text-sm font-bold uppercase tracking-wider">
          {institution}
        </p>
      </div>
    </div>
    
    <div className="mt-4 pt-4 border-t border-white/10">
      <span className="text-white/60 text-xs font-bold uppercase tracking-widest block mb-1">Grade / Percentage</span>
      <span className="text-white text-lg font-mono font-bold tracking-wider">{grade}</span>
    </div>
  </div>
);

const Education = () => {
  return (
    <section className="bg-[#ff2a2a] pt-20 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      
      {/* Torn paper divider at top */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#0a0a0a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        {/* Header */}
        <div data-aos="fade-up" className="mb-12 md:mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tight uppercase">
            Education
          </h2>
          <p className="text-red-100 text-base md:text-lg font-semibold max-w-lg mx-auto">
            My academic background and qualifications.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          <EducationCard 
            title={education.degree}
            institution={education.institution}
            grade={`CGPA: ${education.cgpa}`}
            icon="🎓"
            aosDelay="100"
          />
          <EducationCard 
            title="Higher Secondary (12th)"
            institution="Kai. Sau. G. F. Patel Jr. College"
            grade={education.twelfth.split('-')[1]?.trim() || "56.33%"}
            icon="🏫"
            aosDelay="250"
          />
          <EducationCard 
            title="Secondary (10th)"
            institution="Sheth V. K. Shah Vidya Mandir"
            grade={education.tenth.split('-')[1]?.trim() || "80.73%"}
            icon="🎒"
            aosDelay="400"
          />
        </div>
      </div>
    </section>
  );
};

export default Education;
