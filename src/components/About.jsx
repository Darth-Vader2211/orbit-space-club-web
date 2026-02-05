import React from 'react';

export default function About() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-24 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* LEFT: The Manifesto */}
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-bold tracking-widest uppercase mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                        Mission Briefing
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        WE ARE THE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                            NEXT GENERATION
                        </span>
                    </h2>

                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                        Orbit Space Club is not just a student organization; it is a dedicated launchpad for future astronomers, engineers, and visionaries.
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        We bridge the gap between textbook theory and real-world application. From building high-altitude weather balloons to coding satellite tracking software, we don't just study space—we touch it.
                    </p>

                    <button className="text-white font-bold border-b border-blue-500 pb-1 hover:text-blue-400 transition-colors">
                        READ OUR FULL MANIFESTO &rarr;
                    </button>
                </div>

                {/* RIGHT: The 3 Pillars */}
                <div className="grid gap-6">
                    {[
                        { title: "ENGINEERING", desc: "Rocketry, Rovers, & Hardware", icon: "🚀", color: "bg-orange-500/10 border-orange-500/20 text-orange-400" },
                        { title: "ASTRONOMY", desc: "Observation, Photography, & Mapping", icon: "🔭", color: "bg-purple-500/10 border-purple-500/20 text-purple-400" },
                        { title: "RESEARCH", desc: "Data Analysis & Astrophysics", icon: "💻", color: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" }
                    ].map((item, i) => (
                        <div key={i} className={`p-6 rounded-2xl border backdrop-blur-sm transition-transform hover:scale-[1.02] ${item.color} border-opacity-50`}>
                            <div className="flex items-start gap-4">
                                <span className="text-3xl">{item.icon}</span>
                                <div>
                                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                    <p className="text-white/60 text-sm mt-1">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
