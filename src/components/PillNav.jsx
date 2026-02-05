import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { useNavigate, useLocation } from 'react-router-dom';

export default function PillNav({
    items = [],
    baseColor = '#000000',
    pillColor = '#ffffff',
    pillTextColor = '#000000',
    textColor = '#ffffff'
}) {
    const navRef = useRef(null);
    const pillRef = useRef(null);
    const itemsRef = useRef([]);

    const navigate = useNavigate();
    const location = useLocation();

    // Determine active index based on current URL path
    const getActiveIndexFromPath = () => {
        const currentPath = location.pathname;
        const index = items.findIndex(item => item.href === currentPath);
        return index !== -1 ? index : 0;
    };

    const [activeIndex, setActiveIndex] = useState(getActiveIndexFromPath());
    const [isReady, setIsReady] = useState(false);

    // Update active pill when URL changes (e.g. back button)
    useEffect(() => {
        setActiveIndex(getActiveIndexFromPath());
    }, [location.pathname]);

    useEffect(() => {
        setIsReady(true);
    }, []);

    useEffect(() => {
        if (!isReady || !pillRef.current || !itemsRef.current[activeIndex]) return;

        const currentItem = itemsRef.current[activeIndex];

        gsap.to(pillRef.current, {
            x: currentItem.offsetLeft,
            width: currentItem.offsetWidth,
            duration: 0.3,
            ease: "back.out(1.7)",
            overwrite: true
        });

    }, [activeIndex, isReady]);

    return (
        <nav
            ref={navRef}
            className="relative flex items-center p-2 rounded-full border border-white/20"
            style={{ background: baseColor }}
        >
            <div
                ref={pillRef}
                className="absolute top-2 bottom-2 rounded-full pointer-events-none z-0"
                style={{ background: pillColor, width: 0 }}
            />

            {items.map((item, index) => (
                <a
                    key={index}
                    ref={(el) => (itemsRef.current[index] = el)}
                    href={item.href}
                    onClick={(e) => {
                        e.preventDefault();
                        navigate(item.href); // Router navigation
                    }}
                    className="relative z-10 px-6 py-3 min-w-[120px] text-center text-sm font-bold uppercase tracking-widest cursor-pointer transition-colors duration-300 flex items-center justify-center"
                    style={{
                        color: index === activeIndex ? pillTextColor : textColor
                    }}
                >
                    {item.label}
                </a>
            ))}
        </nav>
    );
}
