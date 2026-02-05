import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { MISSIONS_DATA, MISSION_DEBRIEFS } from '../data';

export default function Missions() {
    return (
        // Component wrapper with ID for potential anchor linking if needed
        <section id="missions" className="py-24 max-w-7xl mx-auto px-6">

            {/* 1. UPCOMING / ACTIVE MISSIONS (The Main Log) */}
            <div className="mb-24">
                <div className="mb-12 text-center">
                    <h1 className="text-5xl font-black text-white tracking-tighter mb-4">
                        MISSION <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">LOG</span>
                    </h1>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Current active directives and planned operations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {MISSIONS_DATA.map((mission) => (
                        <Link
                            key={mission.id}
                            to={`/mission/${mission.slug}`}
                            className="group relative h-80 rounded-3xl overflow-hidden border border-white/10 bg-black/50 cursor-pointer block"
                        >
                            <img
                                src={mission.image}
                                alt={mission.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                            <div className="absolute inset-0 p-8 flex flex-col justify-end items-start">
                                <div className="flex gap-3 mb-4">
                                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold tracking-widest uppercase border border-blue-500/20">{mission.category}</span>
                                    <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold tracking-widest uppercase border border-amber-500/20">{mission.status}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">{mission.title}</h3>
                                <p className="text-gray-300 text-sm leading-relaxed max-w-md">{mission.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* 2. DECLASSIFIED MISSIONS (The Photo Archive) */}
            <div className="border-t border-white/10 pt-24">

                <div className="mb-16">
                    {/* The 'Top Secret' Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold tracking-widest uppercase mb-4 animate-pulse">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                        Clearance Level: Public
                    </div>

                    {/* The New Title */}
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        DECLASSIFIED <span className="text-white/20">MISSIONS</span>
                    </h2>
                </div>

                <div className="space-y-24">
                    {MISSION_DEBRIEFS.map((debrief, index) => (
                        <div key={debrief.id} className="relative">

                            {/* Timeline Connector Line */}
                            {index !== MISSION_DEBRIEFS.length - 1 && (
                                <div className="absolute top-10 left-0 bottom-[-100px] w-px bg-gradient-to-b from-white/20 to-transparent hidden md:block" />
                            )}

                            <div className="flex flex-col md:flex-row gap-12">

                                {/* Left: Text Info */}
                                <div className="md:w-1/3 pt-2">
                                    <span className="text-4xl font-black text-white/10 block mb-2">{debrief.date}</span>
                                    <h3 className="text-2xl font-bold text-white mb-4">{debrief.title}</h3>
                                    <p className="text-gray-400 leading-relaxed text-sm border-l-2 border-white/10 pl-4">
                                        {debrief.description}
                                    </p>
                                </div>

                                {/* Right: Image Grid (Scrapbook Style) */}
                                <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {debrief.images.map((img, i) => (
                                        <div
                                            key={i}
                                            // --- FIX IS HERE: Changed height to h-[600px] for the main image ---
                                            className={`relative rounded-xl overflow-hidden border border-white/10 bg-white/5 group ${i === 0 ? 'sm:col-span-2 h-[600px]' : 'h-48'}`}
                                        >
                                            <img
                                                src={img}
                                                alt="Evidence"
                                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                                            />
                                            {/* Hover Overlay */}
                                            <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"></div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </section>
    );
}
