import React, { useState, useEffect } from 'react';

const schedule = [
  { start: "00:00", end: "07:30", icon: "🌙", text: "Sleeping (My CI/CD pipelines are working though!)" },
  { start: "07:30", end: "07:45", icon: "🥱", text: "Waking up & booting up my brain" },
  { start: "07:45", end: "07:55", icon: "🪥", text: "Brushing teeth" },
  { start: "07:55", end: "08:15", icon: "☕", text: "Sipping morning coffee" },
  { start: "08:15", end: "08:30", icon: "🎧", text: "Vibing to songs & clearing the email inbox" },
  { start: "08:30", end: "08:45", icon: "🚿", text: "Taking a shower" },
  { start: "08:45", end: "09:00", icon: "🍳", text: "Breakfast (Fuel for the day)" },
  { start: "09:00", end: "10:00", icon: "🏍️", text: "Morning commute to the Nandurbar office on my Yamaha R15M." },
  { start: "10:00", end: "13:00", icon: "🏥", text: "At Office - Doing Office Work" },
  { start: "13:00", end: "13:30", icon: "🍱", text: "Lunch Break" },
  { start: "13:30", end: "14:00", icon: "📱", text: "Scrolling Insta Reels (Brain cooldown)" },
  { start: "14:00", end: "16:30", icon: "⚙️", text: "Back to Office work" },
  { start: "16:30", end: "17:30", icon: "🏍️", text: "Evening commute back home on my Yamaha R15M." },
  { start: "17:30", end: "18:00", icon: "🛋️", text: "Freshening up after a long day" },
  { start: "18:00", end: "18:30", icon: "🏋️", text: "Home Workout session" },
  { start: "18:30", end: "19:30", icon: "✌️", text: "Chilling and hanging out with friends" },
  { start: "19:30", end: "20:00", icon: "📱", text: "Daily dose of Insta Reels" },
  { start: "20:00", end: "20:30", icon: "🍽️", text: "Dinner Time" },
  { start: "20:30", end: "21:15", icon: "▶️", text: "Watching YouTube videos" },
  { start: "21:15", end: "22:15", icon: "🎬", text: "Binge-watching a web series" },
  { start: "22:15", end: "24:00", icon: "🚀", text: "Working on personal projects & DevOps experiments" }
];

const getCurrentStatus = () => {
  const now = new Date();
  const options = { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: false };
  const formatter = new Intl.DateTimeFormat('en-US', options);
  const parts = formatter.formatToParts(now);
  const hour = parts.find(p => p.type === 'hour').value;
  const minute = parts.find(p => p.type === 'minute').value;
  const currentTimeStr = `${hour}:${minute}`;

  for (let item of schedule) {
    if (currentTimeStr >= item.start && currentTimeStr < item.end) {
      return item;
    }
  }
  return schedule[0];
};

const LiveStatus = () => {
  const [status, setStatus] = useState(getCurrentStatus());

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus(getCurrentStatus());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>
        {`
          @media (max-width: 767px) {
            .marquee-container {
              display: flex;
              overflow: hidden;
              white-space: nowrap;
              width: 100%;
              mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
              -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
            }
            .marquee-content {
              padding-left: 100%;
              animation: marquee 10s linear infinite;
              display: inline-block;
            }
            @keyframes marquee {
              0% { transform: translate(0, 0); }
              100% { transform: translate(-100%, 0); }
            }
          }
        `}
      </style>

      <div className="fixed top-[70px] left-2 right-2 md:top-24 md:left-8 md:right-auto z-[60] pointer-events-auto group">
        
        {/* Outer Cyberpunk Container */}
        <div 
          className="relative w-full md:w-auto bg-[#050505]/95 backdrop-blur-md border border-red-500/40 p-2.5 md:p-3.5 flex items-center gap-3 md:gap-4 shadow-[0_0_15px_rgba(239,68,68,0.2)] transition-all duration-500 md:group-hover:shadow-[0_0_25px_rgba(239,68,68,0.4)] md:group-hover:border-red-500/70"
          style={{ clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)' }}
        >
          {/* Subtle breathing glow background behind the box */}
          <div className="absolute inset-0 bg-red-500/5 animate-[pulse_4s_ease-in-out_infinite]"></div>
          
          {/* Radar Icon */}
          <div className="relative w-8 h-8 md:w-9 md:h-9 rounded-full border border-red-500/30 flex items-center justify-center shrink-0 bg-black overflow-hidden shadow-[inset_0_0_10px_rgba(239,68,68,0.2)]">
            {/* Rotating sweep line */}
            <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent_70%,rgba(239,68,68,0.6)_100%)] animate-[spin_2s_linear_infinite]"></div>
            {/* Concentric rings */}
            <div className="absolute w-5 h-5 rounded-full border border-red-500/40"></div>
            <div className="absolute w-2 h-2 rounded-full border border-red-500/60"></div>
            {/* Center blip */}
            <div className="absolute w-1 h-1 rounded-full bg-red-400 animate-ping"></div>
            <div className="absolute w-1 h-1 rounded-full bg-red-500"></div>
            {/* Horizontal/Vertical grid lines */}
            <div className="absolute w-full h-[1px] bg-red-500/20"></div>
            <div className="absolute h-full w-[1px] bg-red-500/20"></div>
          </div>
          
          {/* Status Content */}
          <div className="flex flex-col overflow-hidden relative z-10 flex-1 min-w-0 pr-2">
            {/* Top Label */}
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-[9px] md:text-[10px] text-red-500 font-mono font-bold tracking-widest uppercase">
                Live System Status
              </span>
              {/* Blinking recording indicator */}
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-[pulse_1s_ease-in-out_infinite]"></span>
            </div>
            
            {/* Actual Status Text */}
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <span className="text-sm md:text-base shrink-0 opacity-90 grayscale-[0.2] drop-shadow-md">{status.icon}</span>
              
              <div className="marquee-container flex-1 min-w-0">
                <span className="marquee-content text-white/90 text-xs md:text-sm font-semibold tracking-wide md:!p-0 md:!animate-none md:inline-block md:truncate md:max-w-[280px] md:group-hover:max-w-[500px] transition-[max-width] duration-700 ease-in-out">
                  <span className="text-red-400 font-bold">Currently:</span> {status.text}
                </span>
              </div>
            </div>
          </div>

          {/* Decorative corner tech elements */}
          <div className="absolute top-0 right-0 w-3 h-[1px] bg-red-500"></div>
          <div className="absolute top-0 right-0 w-[1px] h-3 bg-red-500"></div>
          <div className="absolute bottom-0 left-0 w-3 h-[1px] bg-red-500"></div>
          <div className="absolute bottom-0 left-0 w-[1px] h-3 bg-red-500"></div>
        </div>
      </div>
    </>
  );
};

export default LiveStatus;
