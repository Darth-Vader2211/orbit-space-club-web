import React from 'react';
import PillNav from './PillNav';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                {/* Logo Section */}
                <div className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => window.location.href = '/'}>
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                        <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                    </div>
                    <span className="text-xl font-black tracking-[0.2em] text-white hidden md:block">
                        ORBIT
                    </span>
                </div>

                {/* The Pill Nav */}
                <PillNav
                    items={[
                        { label: 'HOME', href: '/' },
                        { label: 'MISSIONS', href: '/missions' },
                        { label: 'CREW', href: '/crew' },
                        { label: 'JOIN', href: '/join' }
                    ]}
                />

                <div className="w-12 hidden md:block"></div>
            </div>
        </nav>
    );
}
