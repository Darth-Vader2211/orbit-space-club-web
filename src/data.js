// src/data.js

export const COMPANY_INFO = {
    name: "ORBIT SPACE CLUB",
    subtitle: "Join the next generation of explorers.",
    est: "EST. 2026",
    copyright: "© 2026 ORBIT SPACE CLUB. ALL SYSTEMS NOMINAL."
};

export const HERO_STATS = [
    { label: "MEMBERS", value: "10+" },
    { label: "EVENTS", value: "1" },
    { label: "PARTNERS", value: "1" },
    { label: "POSSIBILITIES", value: "∞" }
];

export const MISSIONS_DATA = [
    {
        id: 1,
        title: "Lunar Gateway Survey",
        category: "Exploration",
        status: "Active",
        description: "Mapping potential landing sites for the upcoming crewed mission. High-resolution telemetry required.",
        image: "https://images.unsplash.com/photo-1541873676-a18131494184?q=80&w=800"
    },
    {
        id: 2,
        title: "Mars Rover Calibration",
        category: "Engineering",
        status: "Planned",
        description: "Final systems check for the autonomous navigation unit before deployment.",
        image: "https://images.unsplash.com/photo-1614728853970-3027b9cb2406?q=80&w=800"
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
        title: "SKY WATCH ALPHA",
        date: "OCT 14, 2025",
        description: "Our first successful deep-space observation night. We gathered at the North Ridge Observatory to track the Orion Nebula. Conditions were clear, allowing for high-res captures.",
        images: [
            "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=800",
            "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=800",
            "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=800"
        ]
    },
    {
        id: "debrief-02",
        title: "OPERATION: ROVER MK1",
        date: "DEC 05, 2025",
        description: "Field tests for the new suspension system. The rover successfully navigated the gravel pit obstacle course, though the comms module needs signal boosting.",
        images: [
            "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800",
            "https://images.unsplash.com/photo-1614728853970-3027b9cb2406?q=80&w=800"
        ]
    }
];
