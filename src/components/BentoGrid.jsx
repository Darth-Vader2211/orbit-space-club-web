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
                        <h3 className="text-3xl font-bold text-white mb-2">Explore the Unknown</h3>
                        <p className="text-gray-300 max-w-md">
                            From telescope nights to high-altitude balloon launches, we provide the tools you need to touch the stars.
                        </p>
                    </div>
                </Box>

                {/* Box 2: Discord/Community (Square) */}
                <Box className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40">
                    <div className="w-12 h-12 bg-indigo-500 rounded-2xl flex items-center justify-center mb-4 text-white">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" /></svg>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-white">Community</h4>
                        <p className="text-sm text-gray-400 mt-1">500+ Online Now</p>
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

                {/* Box 4: Latest Tech (Wide) */}
                <Box className="md:col-span-2 bg-gradient-to-r from-blue-900/20 to-cyan-900/20">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-2 bg-blue-500/20 rounded-lg text-blue-300">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                        </div>
                        <h4 className="text-lg font-bold text-white">Workshop: React + Three.js</h4>
                    </div>
                    <p className="text-sm text-gray-400">
                        Join us this Friday for a deep dive into building 3D web experiences using modern tech stacks.
                    </p>
                </Box>

                {/* Box 5: Next Launch (Square) */}
                <Box className="border-amber-500/30">
                    <span className="text-xs font-mono text-amber-500 uppercase mb-2">Next Launch</span>
                    <div className="text-4xl font-black text-white">T-48H</div>
                    <p className="text-xs text-gray-400 mt-2">Weather Balloon Alpha</p>
                </Box>

            </div>
        </section>
    );
}
