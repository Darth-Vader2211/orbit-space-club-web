import React from 'react';
import BlurText from './BlurText';
import { HERO_STATS, COMPANY_INFO } from '../data';

export default function Hero() {
    return (
        // CONTAINER: Uses 'min-h-screen' to fill the view, but 'flex-col' to manage flow
        <section className="relative min-h-screen w-full flex flex-col overflow-hidden">

            {/* 1. MAIN CONTENT (Expands to fill space) */}
            <div className="flex-grow flex flex-col justify-center items-center z-10 text-center max-w-4xl mx-auto px-6 gap-8">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-xs font-medium text-blue-200 tracking-widest uppercase">
                        {COMPANY_INFO.est}
                    </span>
                </div>

                {/* Title */}
                <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-tight">
                    <BlurText text={COMPANY_INFO.name} delay={0.2} />
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
                    {COMPANY_INFO.subtitle}
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-2">
                    <button className="px-8 py-3 bg-white text-black text-base font-bold rounded-lg hover:scale-105 transition-transform duration-200">
                        Start Journey
                    </button>
                    <button className="px-8 py-3 bg-transparent border border-white/20 text-white text-base font-bold rounded-lg hover:bg-white/10 transition-colors">
                        View Missions
                    </button>
                </div>
            </div>

            {/* 2. STATS ONLY (Copyright Removed) */}
            <div className="w-full border-t border-white/10 bg-black/20 backdrop-blur-sm z-10 mt-12">
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
