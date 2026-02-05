import React from 'react';
import ProfileCard from './ProfileCard';

const crewMembers = [
    { name: "Yash Joshi", role: "R&D Specialist", code: "CMD-01", status: "Active", avatarChar: "Y" },
    { name: "Sarah Connors", role: "Director", code: "FLT-02", status: "Active", avatarChar: "S" },
    { name: "David Bowman", role: "Systems", code: "SYS-03", status: "Away", avatarChar: "D" },
    { name: "Ellen Ripley", role: "Security", code: "SEC-04", status: "Patrol", avatarChar: "E" }
];

export default function Crew() {
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {crewMembers.map((member, index) => (
                        <ProfileCard
                            key={index}
                            name={member.name}
                            role={member.role}
                            code={member.code}
                            status={member.status}
                            avatarChar={member.avatarChar}
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
