import React from 'react';
import { Link } from 'react-router-dom';
import BlurText from './BlurText';
import { HERO_STATS, COMPANY_INFO } from '../data';
import Aurora from './Aurora';

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-[#050505]">
          
          {/* Dynamic Aurora Background */}
          <div className="absolute inset-0 z-0 opacity-80">
            <Aurora 
              colorStops={["#050505", "#8fb4fe", "#fd28c2"]} 
              speed={0.8} 
              blend={0.5} 
              amplitude={1.2} 
            />
          </div>

          {/* Existing Hero Content (Ensure this div has z-10 and relative positioning) */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 h-screen flex flex-col justify-center items-center text-center pt-20">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-xs font-medium text-blue-200 tracking-widest uppercase">
                    {COMPANY_INFO.est}
                </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-tight mt-6">
                <BlurText text={COMPANY_INFO.name} delay={0.2} />
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mt-6">
                {COMPANY_INFO.subtitle}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link to="/join" className="px-8 py-3 bg-white text-black text-base font-bold rounded-lg hover:scale-105 transition-transform duration-200">
                    Start Journey
                </Link>
                <Link to="/missions" className="px-8 py-3 bg-transparent border border-white/20 text-white text-base font-bold rounded-lg hover:bg-white/10 transition-colors">
                    View Missions
                </Link>
            </div>
          </div>

          {/* 2. STATS ONLY (Copyright Removed) */}
          <div className="w-full border-t border-white/10 bg-black/20 backdrop-blur-sm z-10 mt-auto relative absolute bottom-0">
            <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
                {HERO_STATS.map((stat, i) => (
                    <div key={i} className="flex flex-col">
                        <span className="text-2xl font-bold text-white">{stat.value}</span>
                        <span className="text-[10px] text-gray-500 tracking-widest uppercase mt-1">{stat.label}</span>
                    </div>
                ))}
            </div>
          </div>
        </section>
    );
}
