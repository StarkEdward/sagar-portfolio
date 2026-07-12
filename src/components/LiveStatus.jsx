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
  // Get current time in IST (Indian Standard Time)
  const now = new Date();
  const options = { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: false };
  const formatter = new Intl.DateTimeFormat('en-US', options);
  const parts = formatter.formatToParts(now);
  const hour = parts.find(p => p.type === 'hour').value;
  const minute = parts.find(p => p.type === 'minute').value;
  
  // Format as HH:MM
  const currentTimeStr = `${hour}:${minute}`;

  // Find matching schedule
  for (let item of schedule) {
    if (currentTimeStr >= item.start && currentTimeStr < item.end) {
      return item;
    }
  }
  
  // Fallback just in case
  return schedule[0];
};

const LiveStatus = () => {
  const [status, setStatus] = useState(getCurrentStatus());
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Update status every minute
    const interval = setInterval(() => {
      setStatus(getCurrentStatus());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  // Hide the status bar if the user scrolls down a lot so it doesn't block content
  // We'll let it fade out slightly or scale down if needed, but keeping it visible is fine too.
  // Actually, a nice glassmorphism badge can stay visible!
  
  return (
    <div className="fixed top-24 left-4 md:left-8 z-[60] pointer-events-none transition-all duration-500">
      <div className="bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 rounded-full py-2.5 px-4 md:px-5 flex items-center gap-3 shadow-[0_0_20px_rgba(0,0,0,0.6)]">
        {/* Pulsing Dot */}
        <div className="relative flex h-2.5 w-2.5 md:h-3 md:w-3 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 md:h-3 md:w-3 bg-green-500"></span>
        </div>
        
        {/* Status Text */}
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="text-sm md:text-base shrink-0">{status.icon}</span>
          <span className="text-white/90 text-xs md:text-sm font-semibold tracking-wide whitespace-nowrap truncate max-w-[200px] md:max-w-none">
            {status.text}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LiveStatus;
