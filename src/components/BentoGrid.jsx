import React from 'react';
import { motion } from 'framer-motion';

const Box = ({ children, className = "" }) => (
    <motion.div
        whileHover={{ scale: 1.02 }}
        className={`bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl p-6 flex flex-col justify-between overflow-hidden relative group ${className}`}
    >
        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {children}
    </motion.div>
);

export default function BentoGrid() {
    return (
        <section className="max-w-7xl mx-auto px-6 mb-24 relative z-10 text-left">
            {/* Section Header */}
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-2">MISSION CONTROL</h2>
                <div className="h-1 w-20 bg-blue-500 rounded-full" />
            </div>

            {/* The Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">

                {/* Box 1: Large Feature (Span 2 cols, 2 rows) */}
                <Box className="md:col-span-2 md:row-span-2 !p-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                        alt="Space"
                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="relative z-20 p-8 h-full flex flex-col justify-end">
                        <h3 className="text-3xl font-bold text-white mb-2">OFFICIAL AEROSPACE DIVISION</h3>
                        <p className="text-gray-300 max-w-md">
                            The student-led aerospace authority of DYPCET. We combine engineering with astronomy to conduct deep-space observation, technical workshops, and collaborative research missions.
                        </p>
                    </div>
                </Box>

                {/* Box 2: Discord/Community (Square) */}
                <Box className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40">
                    {/* New Team Icon */}
                    <svg className="w-8 h-8 text-white mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <div>
                        <h4 className="text-xl font-bold text-white">ORBIT CREW</h4>
                        <p className="text-sm text-gray-400 mt-1">20+ Active Operatives</p>
                    </div>
                </Box>

                {/* Box 3: Status (Square) */}
                <Box>
                    <div className="flex justify-between items-start">
                        <span className="text-xs font-mono text-gray-500 uppercase">System Status</span>
                        <span className="flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                    </div>
                    <div className="mt-auto">
                        <div className="text-2xl font-mono text-white">NOMINAL</div>
                        <div className="text-xs text-green-400 mt-1">All systems go</div>
                    </div>
                </Box>

                {/* Box 4: ISRO News Feed (Wide) */}
                <Box className="relative md:col-span-2 bg-gradient-to-r from-orange-900/20 to-amber-900/20 group hover:border-orange-500/30 transition-colors cursor-pointer">

                    {/* THE GHOST LINK: Covers the entire box area */}
                    <a
                        href="https://www.isro.gov.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 z-10 w-full h-full"
                        aria-label="Visit ISRO"
                    />

                    {/* The Visual Content */}
                    <div className="flex items-center gap-4 mb-4 relative z-0">
                        <div className="p-2 bg-orange-500/20 rounded-lg text-orange-300 group-hover:text-orange-200 transition-colors">
                            {/* Satellite Icon */}
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                            </svg>
                        </div>
                        <h4 className="text-lg font-bold text-white group-hover:text-orange-100 transition-colors">ISRO LIVE FEED</h4>
                    </div>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors relative z-0">
                        Access the latest telemetry and press releases directly from the Indian Space Research Organisation.
                    </p>
                </Box>

                {/* Box 5: Next Launch (Square) */}
                <Box className="border-amber-500/30">
                    <span className="text-xs font-mono text-amber-500 uppercase mb-2">Next Launch</span>
                    <div className="text-4xl font-black text-white">SOON</div>
                    <p className="text-xs text-gray-400 mt-2">Weather Balloon Alpha</p>
                </Box>

            </div>
        </section>
    );
}
