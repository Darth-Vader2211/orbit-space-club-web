import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MISSIONS_DATA } from '../data';

export default function MissionDetail() {
    const { slug } = useParams();
    const mission = MISSIONS_DATA.find(m => m.slug === slug);

    if (!mission) return <div className="text-white text-center mt-24">MISSION NOT FOUND</div>;

    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
                <div className="lg:col-span-2 space-y-12">
                    <div>
                        <h3 className="text-blue-400 font-bold tracking-widest text-sm uppercase mb-4 flex items-center gap-2"><span className="w-8 h-px bg-blue-500"></span> Mission Objective</h3>
                        <p className="text-gray-300 text-lg leading-relaxed">{mission.details.missionBrief}</p>
                    </div>
                    <div>
                        <h3 className="text-blue-400 font-bold tracking-widest text-sm uppercase mb-6 flex items-center gap-2"><span className="w-8 h-px bg-blue-500"></span> Operation Timeline</h3>
                        <div className="space-y-6 border-l border-white/10 pl-8 relative">
                            {mission.details.agenda.map((item, i) => (
                                <div key={i} className="relative">
                                    <span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-gray-800 border border-blue-500/50"></span>
                                    <span className="block text-white font-bold text-lg">{item.time}</span>
                                    <span className="block text-gray-400">{item.activity}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Link to="/missions" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mt-8">&larr; Return to Log</Link>
                </div>

                <div className="space-y-8">
                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                        <h4 className="text-white font-bold mb-6 border-b border-white/10 pb-2">KEY INTEL</h4>
                        <div className="space-y-4">
                            <div><span className="block text-xs text-gray-500 uppercase">Date</span><span className="text-white font-mono">{mission.date}</span></div>
                            <div><span className="block text-xs text-gray-500 uppercase">Time</span><span className="text-white font-mono">{mission.time}</span></div>
                            <div><span className="block text-xs text-gray-500 uppercase">Location</span><span className="text-white font-mono">{mission.location}</span></div>
                        </div>
                        <button className="w-full mt-8 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg transition-colors">REGISTER NOW</button>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                        <h4 className="text-white font-bold mb-4">GEAR LIST</h4>
                        <ul className="space-y-2">
                            {mission.details.requirements.map((req, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-gray-300"><span className="text-green-400">✓</span> {req}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
