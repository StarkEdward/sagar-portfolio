import React, { useState, useEffect } from 'react';
import { projects, socialLinks } from '../data/portfolioData';
import ElectricBorder from './ElectricBorder';
import Tilt from 'react-parallax-tilt';
import MagneticButton from './MagneticButton';

const TerminalAnimation = () => {
  const [text, setText] = useState('');
  const [line2, setLine2] = useState('');
  const [line3, setLine3] = useState('');
  const [progress, setProgress] = useState('');
  const [line4, setLine4] = useState('');
  const [line5, setLine5] = useState('');
  const [line6, setLine6] = useState('');
  const [line7, setLine7] = useState('');
  const [line8, setLine8] = useState('');
  
  useEffect(() => {
    let isCancelled = false;

    const runAnimation = async () => {
      while (!isCancelled) {
        // Reset state for looping
        setText('');
        setLine2('');
        setLine3('');
        setProgress('');
        setLine4('');
        setLine5('');
        setLine6('');
        setLine7('');
        setLine8('');

        // Helper for typing text
        const typeText = async (setter, fullText, speed = 40) => {
          for (let i = 0; i <= fullText.length; i++) {
            if (isCancelled) return;
            setter(fullText.substring(0, i));
            await new Promise(r => setTimeout(r, speed));
          }
        };

        // Helper for progressive counting
        const countProgress = async () => {
          let current = 0;
          while (current < 99) {
            if (isCancelled) return;
            current += Math.floor(Math.random() * 15) + 5;
            if (current > 99) current = 99;
            setProgress(`[${current}%]`);
            await new Promise(r => setTimeout(r, 150));
          }
        };

        await new Promise(r => setTimeout(r, 1000));
        if (isCancelled) break;
        
        await typeText(setText, "> git fetch origin new-projects");
        
        await new Promise(r => setTimeout(r, 500));
        if (isCancelled) break;
        
        await typeText(setLine2, "> pulling architecture blueprints...");
        
        await new Promise(r => setTimeout(r, 500));
        if (isCancelled) break;
        
        await typeText(setLine3, "> compiling dependencies ");
        
        await countProgress();
        
        if (isCancelled) break;
        setProgress(`[100%]`);
        await new Promise(r => setTimeout(r, 400));
        
        if (isCancelled) break;
        await typeText(setLine4, "> decrypting classified_project.enc...");
        await new Promise(r => setTimeout(r, 400));
        
        if (isCancelled) break;
        await typeText(setLine5, "> ERROR: Security firewall triggered 🔒");
        await new Promise(r => setTimeout(r, 500));

        if (isCancelled) break;
        await typeText(setLine6, "> deploying countermeasures...");
        await new Promise(r => setTimeout(r, 600));

        if (isCancelled) break;
        await typeText(setLine7, "> System halted: Developer requires caffeine to continue ☕");
        await new Promise(r => setTimeout(r, 1000));

        if (isCancelled) break;
        await typeText(setLine8, "> aborting mission...");
        
        // Wait at the end before clearing and looping
        await new Promise(r => setTimeout(r, 4000));
      }
    };

    runAnimation();

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <div className="w-full bg-[#0a0a0a] rounded-lg border border-white/10 p-5 font-mono text-xs md:text-sm text-left shadow-2xl relative overflow-hidden group-hover:border-white/20 transition-colors">
      {/* Mac window dots */}
      <div className="flex gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
        <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
      </div>
      
      {/* Terminal content */}
      <div className="space-y-2 min-h-[80px]">
        <div className="text-green-400">
          {text}
          {text.length > 0 && line2.length === 0 && <span className="animate-pulse">_</span>}
        </div>
        {line2.length > 0 && (
          <div className="text-blue-400">
            {line2}
            {line2.length > 0 && line3.length === 0 && <span className="animate-pulse">_</span>}
          </div>
        )}
        {line3.length > 0 && (
          <div className="text-red-400">
            {line3}
            <span className="ml-2">{progress}</span>
            {line3.length > 0 && line4.length === 0 && <span className="animate-pulse ml-1">_</span>}
          </div>
        )}
        {line4.length > 0 && (
          <div className="text-yellow-400">
            {line4}
            {line4.length > 0 && line5.length === 0 && <span className="animate-pulse">_</span>}
          </div>
        )}
        {line5.length > 0 && (
          <div className="text-[#ff2a2a] font-bold">
            {line5}
            {line5.length > 0 && line6.length === 0 && <span className="animate-pulse">_</span>}
          </div>
        )}
        {line6.length > 0 && (
          <div className="text-blue-400">
            {line6}
            {line6.length > 0 && line7.length === 0 && <span className="animate-pulse">_</span>}
          </div>
        )}
        {line7.length > 0 && (
          <div className="text-purple-400 font-bold">
            {line7}
            {line7.length > 0 && line8.length === 0 && <span className="animate-pulse">_</span>}
          </div>
        )}
        {line8.length > 0 && (
          <div className="text-gray-400 italic">
            {line8}
            <span className="animate-pulse">_</span>
          </div>
        )}
      </div>
      
      {/* Subtle scanline effect */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0.02),rgba(255,255,255,0))] opacity-50 translate-y-[-100%] group-hover:animate-[shimmer_2s_infinite]"></div>
    </div>
  );
};

const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const ProjectCard = ({ project }) => (
  <Tilt 
    tiltMaxAngleX={5} 
    tiltMaxAngleY={5} 
    scale={1.02} 
    transitionSpeed={1000} 
    glareEnable={true} 
    glareMaxOpacity={0.1} 
    glareColor="#ffffff" 
    glarePosition="all"
    className="h-full"
  >
    <div 
      className={`relative rounded-2xl p-[1px] group transition-all duration-500 h-full ${
        project.isFlagship 
          ? 'bg-gradient-to-br from-red-500/50 via-white/10 to-red-500/30 hover:from-red-500 hover:via-red-400/30 hover:to-red-500/60' 
          : 'bg-white/10 hover:bg-white/20'
      }`}
    >
      <div className={`rounded-2xl p-6 md:p-8 h-full backdrop-blur-md transition-all duration-500 flex flex-col md:flex-row gap-8 items-center ${
        project.isFlagship 
          ? 'bg-[#0f0f0f]/95 group-hover:bg-[#0f0f0f]/90' 
          : 'bg-[#111111]/90 group-hover:bg-[#111111]/80'
      }`}>
      
      {/* Content Side */}
      <div className="flex-1 w-full">
        {/* Badge */}
        {project.badge && (
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-red-400 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20 mb-4">
            {project.badge}
          </span>
        )}

        {/* Number + Title */}
        <div className="flex items-baseline gap-4 mb-4">
          <span className="text-5xl font-black text-white/10 font-serif italic">{project.number}</span>
          <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">{project.title}</h3>
        </div>

        {/* Description */}
        <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6 max-w-2xl font-medium">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.techTags.map((tag) => (
            <span 
              key={tag}
              className="px-3 py-1 text-xs font-bold text-white/70 bg-white/5 rounded-full border border-white/10 hover:bg-red-500/20 hover:border-red-500/30 hover:text-red-300 transition-all duration-300 cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 relative z-50">
          {/* GitHub */}
          {project.links.github && (
            <a 
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold hover:bg-white hover:text-black transition-all duration-300 group/btn relative z-50"
            >
              <GitHubIcon />
              GitHub
            </a>
          )}

          {/* Live Demo (single) */}
          {project.links.demo !== undefined && (
            <a 
              href={project.links.demo || '#'}
              target={project.links.demo ? "_blank" : undefined}
              rel={project.links.demo ? "noopener noreferrer" : undefined}
              onClick={project.links.demo ? undefined : (e) => e.preventDefault()}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 relative z-50 ${
                project.links.demo 
                  ? 'bg-[#ff2a2a] text-white hover:bg-red-600 hover:shadow-[0_0_20px_rgba(255,42,42,0.4)]' 
                  : 'bg-white/5 text-white/40 border border-white/10 cursor-not-allowed'
              }`}
            >
              <ExternalLinkIcon />
              {project.links.demo ? 'Visit Site' : 'Demo Coming Soon'}
            </a>
          )}


          {/* Frontend Demo (Karigar) */}
          {project.links.frontendDemo && (
            <a 
              href={project.links.frontendDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff2a2a] text-white text-sm font-semibold hover:bg-red-600 hover:shadow-[0_0_20px_rgba(255,42,42,0.4)] transition-all duration-300 relative z-50"
            >
              <ExternalLinkIcon />
              Frontend Demo
            </a>
          )}

          {/* Backend API (Karigar) */}
          {project.links.backendApi && (
            <a 
              href={project.links.backendApi}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold hover:bg-white/20 transition-all duration-300"
            >
              <ExternalLinkIcon />
              Backend API
            </a>
          )}
        </div>
      </div>

      {/* Image Side */}
      {project.image && (
        <div className="w-full md:w-2/5 shrink-0 rounded-xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-colors bg-[#0a0a0a] shadow-inner">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
          />
        </div>
      )}
    </div>
    
    {/* Subtle scanline effect */}
    <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0.02),rgba(255,255,255,0))] opacity-50 translate-y-[-100%] group-hover:animate-[shimmer_2s_infinite]"></div>
    </div>
  </Tilt>
);

const Projects = () => {
  return (
    <section id="projects" className="bg-[#0a0a0a] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 md:mb-20">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-8 shadow-sm bg-white/5 backdrop-blur-sm">
            Featured Projects
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
            Work that speaks <br className="hidden md:block" />for itself
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-lg font-medium leading-relaxed">
            A selection of projects that showcase my expertise in full-stack development and modern architecture.
          </p>
        </div>

        {/* Project Cards */}
        <div className="flex flex-col gap-6 md:gap-8">
          {projects.map((project, index) => {
            const delay = String((index + 1) * 100);
            const card = (
              <ProjectCard 
                key={`card-${project.id}`} 
                project={project} 
              />
            );

            if (project.id === 'tejprash') {
              return (
                <div key={project.id} data-aos="fade-up" data-aos-delay={delay}>
                  <ElectricBorder
                    color="#ff2a2a"
                    speed={0.75}
                    chaos={0.15}
                    borderRadius={16}
                    className="w-full h-full"
                  >
                    {card}
                  </ElectricBorder>
                </div>
              );
            }

            return (
              <div key={project.id} data-aos="fade-up" data-aos-delay={delay}>
                {card}
              </div>
            );
          })}

          {/* Coming Soon Card with Terminal Combo */}
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="relative rounded-2xl p-[1px] group transition-all duration-500"
          >
            <div className="rounded-2xl p-8 md:p-10 h-full backdrop-blur-md transition-all duration-500 bg-[#111111]/40 hover:bg-[#111111]/80 flex flex-col md:flex-row items-center justify-between gap-8 border-2 border-dashed border-white/10 hover:border-red-500/30">
              
              {/* Left Side: Lock & Text */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-red-500/30 transition-colors relative">
                  <svg className="w-8 h-8 text-white/30 group-hover:text-red-400 transition-colors relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  {/* Ping animation on hover */}
                  <div className="absolute inset-0 rounded-full bg-red-500/20 group-hover:animate-ping opacity-0 group-hover:opacity-100"></div>
                </div>

                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-3xl font-black text-white/5 font-serif italic">04</span>
                  <h3 className="text-xl md:text-2xl font-black text-white/60 group-hover:text-white/90 tracking-tight transition-colors">
                    Next Big Thing
                  </h3>
                </div>
                
                <p className="text-white/30 group-hover:text-white/50 text-sm md:text-base leading-relaxed max-w-sm font-medium transition-colors">
                  Currently architecting something new in the background. Check back later or explore my GitHub for daily cloud experiments.
                </p>
              </div>

              {/* Right Side: Terminal Animation */}
              <div className="w-full md:w-[50%] lg:w-[60%] shrink-0">
                <TerminalAnimation />
              </div>

            </div>
          </div>
        </div>

        {/* GitHub CTA */}
        <div data-aos="fade-up" data-aos-delay="500" className="mt-16 flex justify-center">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white font-bold text-lg hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-500 group"
          >
            <GitHubIcon />
            Explore All My Repositories
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
