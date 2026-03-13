import React, { useState } from 'react';
import ProfileCard from './ProfileCard';
import { CREW_DATA } from '../data';

export default function Crew() {
    const [activeDivision, setActiveDivision] = useState('All');

    const divisions = ['All', 'Founders', ...new Set(CREW_DATA.map(member => member.division))];

    const filteredCrew = activeDivision === 'All' 
        ? CREW_DATA 
        : activeDivision === 'Founders'
        ? CREW_DATA.filter(member => member.isFounder)
        : CREW_DATA.filter(member => member.division === activeDivision);

    return (
        <section className="py-24 px-4 relative z-10 w-full">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase mb-4">
                        Mission Crew
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Meet the elite team leading our exploration into the unknown.
                    </p>
                </div>

                {/* Division Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {divisions.map((division, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveDivision(division)}
                            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                                activeDivision === division
                                    ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(147,51,234,0.5)]'
                                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                            }`}
                        >
                            {division}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredCrew.map((member, index) => (
                        <ProfileCard
                            key={index}
                            name={member.name}
                            role={member.division}
                            code={`OSC-${member.id.toString().padStart(2, '0')}`}
                            status="Active"
                            avatarChar={member.name.charAt(0)}
                            // NEW: Purple & Gold Cosmic Theme
                            customInnerGradient="linear-gradient(145deg, hsla(280, 40%, 45%, 0.55) 0%, hsla(44, 60%, 70%, 0.27) 100%)"
                            behindGlowColor="hsla(280, 100%, 70%, 0.6)"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
