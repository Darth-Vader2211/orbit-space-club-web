import React, { useLayoutEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { GoArrowUpRight } from 'react-icons/go';

// --- CONFIGURATION ---
const ORBIT_CONFIG = {
    logo: '/orbit-logo.png',
    baseColor: '#0a0a0a',   // Dark background
    menuColor: '#ffffff',   // White hamburger
    buttonBgColor: '#2563eb', // Blue button
    buttonTextColor: '#ffffff',
    items: [
        {
            label: 'Base',
            bgColor: '#171717', // Dark Grey Card
            textColor: '#ffffff',
            links: [
                { label: 'Home Command', href: '/' },
                { label: 'The Crew', href: '/crew' },
                { label: 'About Orbit', href: '/' }
            ]
        },
        {
            label: 'Operations',
            bgColor: '#1e3a8a', // Dark Blue Card
            textColor: '#bfdbfe',
            links: [
                { label: 'Mission Log', href: '/missions' },
                { label: 'Next Launch', href: '/mission/starlight-soiree' },
                { label: 'Declassified', href: '/missions' }
            ]
        },
        {
            label: 'Comms',
            bgColor: '#312e81', // Indigo Card
            textColor: '#e0e7ff',
            links: [
                { label: 'Join the Corps', href: '/join' },
                { label: 'Instagram', href: 'https://www.instagram.com/orbit.dypcet', external: true }
            ]
        }
    ]
};

const CardNav = () => {
    // Props extracted from Config
    const { logo, items, baseColor, menuColor, buttonBgColor, buttonTextColor } = ORBIT_CONFIG;
    const navigate = useNavigate();

    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const navRef = useRef(null);
    const cardsRef = useRef([]);
    const tlRef = useRef(null);

    const calculateHeight = () => {
        const navEl = navRef.current;
        if (!navEl) return 260;

        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        if (isMobile) {
            const contentEl = navEl.querySelector('.card-nav-content');
            if (contentEl) {
                const wasVisible = contentEl.style.visibility;
                const wasPosition = contentEl.style.position;
                const wasHeight = contentEl.style.height;

                contentEl.style.visibility = 'visible';
                contentEl.style.position = 'static';
                contentEl.style.height = 'auto';

                const height = 60 + contentEl.scrollHeight + 16;

                contentEl.style.visibility = wasVisible;
                contentEl.style.position = wasPosition;
                contentEl.style.height = wasHeight;

                return height;
            }
        }
        return 260; // Desktop expanded height default
    };

    const createTimeline = () => {
        const navEl = navRef.current;
        if (!navEl) return null;

        gsap.set(navEl, { height: 60, overflow: 'hidden' });
        gsap.set(cardsRef.current, { y: 50, opacity: 0 });

        const tl = gsap.timeline({ paused: true });
        tl.to(navEl, { height: calculateHeight, duration: 0.4, ease: 'power3.out' });
        tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out', stagger: 0.08 }, '-=0.1');
        return tl;
    };

    useLayoutEffect(() => {
        const tl = createTimeline();
        tlRef.current = tl;
        return () => {
            tl?.kill();
            tlRef.current = null;
        };
    }, []);

    useLayoutEffect(() => {
        const handleResize = () => {
            if (!tlRef.current) return;
            if (isExpanded) {
                const newHeight = calculateHeight();
                gsap.set(navRef.current, { height: newHeight });
            } else {
                tlRef.current.kill();
                tlRef.current = createTimeline();
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isExpanded]);

    const toggleMenu = () => {
        const tl = tlRef.current;
        if (!tl) return;

        if (!isExpanded) {
            setIsHamburgerOpen(true);
            setIsExpanded(true);
            tl.play(0);
        } else {
            setIsHamburgerOpen(false);
            tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
            tl.reverse();
        }
    };

    const handleLinkClick = (e, href, external) => {
        if (!external) {
            e.preventDefault();
            navigate(href);
            toggleMenu(); // Close menu on navigation
        }
    };

    const setCardRef = i => el => {
        if (el) cardsRef.current[i] = el;
    };

    return (
        <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
            <nav
                ref={navRef}
                className="relative w-full max-w-3xl overflow-hidden shadow-2xl border border-white/10 rounded-2xl"
                style={{ backgroundColor: baseColor, height: 60 }}
            >
                <div className="relative h-[60px] flex items-center justify-between px-6 z-20">
                    {/* Hamburger */}
                    <div className="group h-full flex flex-col items-center justify-center cursor-pointer gap-[6px]" onClick={toggleMenu}>
                        <div className={`w-[24px] h-[2px] bg-white transition-all duration-300 ${isHamburgerOpen ? 'translate-y-[8px] rotate-45' : ''}`} />
                        <div className={`w-[24px] h-[2px] bg-white transition-all duration-300 ${isHamburgerOpen ? 'opacity-0' : ''}`} />
                        <div className={`w-[24px] h-[2px] bg-white transition-all duration-300 ${isHamburgerOpen ? '-translate-y-[8px] -rotate-45' : ''}`} />
                    </div>

                    {/* Logo */}
                    <Link to="/" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <img src={logo} alt="Orbit" className="h-8 md:h-10 object-contain drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                    </Link>

                    {/* CTA Button */}
                    <Link to="/join">
                        <button className="hidden md:inline-flex items-center px-6 py-2 rounded-xl font-bold text-sm tracking-widest hover:brightness-110 transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)]" style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}>
                            JOIN
                        </button>
                    </Link>
                </div>

                {/* Expanded Content */}
                <div className={`card-nav-content absolute left-0 right-0 top-[60px] bottom-0 p-2 flex flex-col md:flex-row gap-2 z-10 ${isExpanded ? 'visible pointer-events-auto' : 'invisible pointer-events-none'}`}>
                    {items.map((item, idx) => (
                        <div
                            key={idx}
                            ref={setCardRef(idx)}
                            className="flex flex-col gap-4 p-6 rounded-xl flex-1 min-h-[160px]"
                            style={{ backgroundColor: item.bgColor, color: item.textColor }}
                        >
                            <div className="font-bold text-xl tracking-widest opacity-80 uppercase border-b border-white/10 pb-2">{item.label}</div>
                            <div className="flex flex-col gap-3 mt-auto">
                                {item.links.map((lnk, i) => (
                                    <a
                                        key={i}
                                        href={lnk.href}
                                        onClick={(e) => handleLinkClick(e, lnk.href, lnk.external)}
                                        target={lnk.external ? "_blank" : "_self"}
                                        rel={lnk.external ? "noopener noreferrer" : ""}
                                        className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-100 opacity-70 transition-opacity"
                                    >
                                        <GoArrowUpRight /> {lnk.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </nav>
        </div>
    );
};

export default CardNav;
