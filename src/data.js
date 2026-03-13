// src/data.js

export const COMPANY_INFO = {
    name: "ORBIT SPACE CLUB",
    subtitle: "Join the next generation of explorers.",
    est: "EST. 2026",
    copyright: "© 2026 ORBIT SPACE CLUB. ALL SYSTEMS NOMINAL."
};

export const HERO_STATS = [
    { label: "MEMBERS", value: "20+" },
    { label: "EVENTS HELD", value: "1" },
    { label: "PARTNERS", value: "1" },
    { label: "POSSIBILITIES", value: "∞" }
];

export const MISSIONS_DATA = [
    {
        id: 1,
        slug: "starlight-soiree",
        title: "STARLIGHT SOIRÉE",
        date: "JAN 31, 2026",
        time: "18:00 - 22:00 HOURS",
        location: "DYPCET CAMPUS",
        category: "OBSERVATION",
        status: "REGISTRATION OPEN",
        image: "/star_gazing_2.jpg",
        description: "An evening under the stars. Join Orbit Space Club x Matrix Club for a night of celestial discovery.",
        details: {
            headline: "AN EVENING UNDER THE STARS",
            missionBrief: "The Orbit Space Club of DYPCET, in collaboration with the Matrix Club, invites you to an immersive night under the stars. Explore celestial objects, constellations, and the wonders of the night sky through guided observation and high-powered telescopes.",
            agenda: [
                { time: "18:00", activity: "Guest Session: Space & Astronomy Talk" },
                { time: "19:00", activity: "Guided Moongazing & Constellation Mapping" },
                { time: "20:00", activity: "Telescope Observation (Jupiter & Saturn)" },
                { time: "21:30", activity: "Refreshments & Networking" }
            ],
            requirements: [
                "Registration Fee: ₹200",
                "Open to all astronomy enthusiasts",
                "Gear: Dobsonian & Celestron Telescopes",
                "Refreshments Provided"
            ]
        }
    }
];

export const SOCIAL_LINKS = [
    { label: "Instagram", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "Discord", href: "#" }
];

export const MISSION_DEBRIEFS = [
    {
        id: "debrief-01",
        title: "INTO THE VOID",
        date: "OCT 08, 2025",
        description: "A comprehensive workshop testing creativity and cosmic knowledge. Teams competed in 'Space Flag Design', analyzed sci-fi realism in the 'Movie Discussion', and faced the high-pressure 'Wish Bowl' improv challenge.",
        images: [
            "/Into_the_void.jpg"
        ]
    }
];

export const CREW_DATA = [
    { id: 1, name: "Parth Mehatre", division: "Documentation" },
    { id: 2, name: "Divyashree Gurav", division: "Documentation" },
    { id: 3, name: "Prathamesh Nalawade", division: "PR & Outreach" },
    { id: 4, name: "Aditi Patil", division: "PR & Outreach" },
    { id: 5, name: "Hardik Gujar", division: "PR & Outreach" },
    { id: 6, name: "Iqra Hakim", division: "Logistics" },
    { id: 7, name: "Nikhil Jadhav", division: "Logistics" },
    { id: 8, name: "Pranoti Firagannavar", division: "Logistics" },
    { id: 9, name: "Shreeja Satpute", division: "Logistics" },
    { id: 10, name: "Aditya Dabholkar", division: "Logistics" },
    { id: 11, name: "Satej Salokhe", division: "Logistics" },
    { id: 12, name: "Atharva Kate", division: "Research & Development" },
    { id: 13, name: "Yash Joshi", division: "Research & Development" },
    { id: 14, name: "Sakshi Patil", division: "Research & Development" },
    { id: 15, name: "Soukhya Patil", division: "Research & Development" },
    { id: 16, name: "Suyash Hirekerur", division: "Content Development" },
    { id: 17, name: "Shravani Chavan", division: "Content Development" },
    { id: 18, name: "Shravani Chandekar", division: "Content Development" },
    { id: 19, name: "Krishnalee", division: "Media & Design" },
    { id: 20, name: "Pratik Suryawanshi", division: "Media & Design" },
    { id: 21, name: "Kirti Gharge", division: "Media & Design" },
    { id: 22, name: "Anaya Jadhav", division: "Logistics" },
    { id: 23, name: "Ayush Karnewar", division: "Founding Member", isFounder: true },
    { id: 24, name: "Ritvik Kanojia", division: "Founding Member", isFounder: true },
    { id: 25, name: "Saniya Sayyad", division: "Founding Member", isFounder: true },
    { id: 26, name: "Sanskriti Gawade", division: "Founding Member", isFounder: true },
];

