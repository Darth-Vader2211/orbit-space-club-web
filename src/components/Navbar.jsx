import React from 'react';
import PillNav from './PillNav';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <img
                        src="/orbit-logo.png"
                        alt="Orbit Space Club Logo"
                        className="h-12 w-auto object-contain"
                    />
                </Link>

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
