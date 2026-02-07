import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex-shrink-0">
                    <img src="/orbit-logo.png" alt="Orbit Space Club" className="h-10 w-auto object-contain drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]" />
                </Link>

                {/* Desktop Menu (Hidden on Mobile) */}
                <div className="hidden md:flex items-center gap-8">
                    {['Home', 'Crew', 'Missions', 'Join'].map((item) => (
                        <Link
                            key={item}
                            to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                            className="text-sm font-bold tracking-widest text-gray-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all"
                        >
                            {item.toUpperCase()}
                        </Link>
                    ))}
                    {/* GitHub Link Removed */}
                </div>

                {/* Mobile Menu Button (Hamburger) */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
                        {isOpen ? (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10">
                    <div className="px-6 pt-2 pb-8 space-y-4 flex flex-col items-center">
                        {['Home', 'Crew', 'Missions', 'Join'].map((item) => (
                            <Link
                                key={item}
                                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                className="text-lg font-bold tracking-widest text-white py-2 w-full text-center hover:bg-white/10 rounded-lg transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.toUpperCase()}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
