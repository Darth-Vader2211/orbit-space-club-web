import React from 'react';
import { COMPANY_INFO, SOCIAL_LINKS } from '../data';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="w-full border-t border-white/10 bg-black/20 backdrop-blur-sm relative z-10 py-12">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Brand */}
                {/* Brand */}
                <div className="col-span-1 space-y-6">
                    {/* Glowing Footer Logo */}
                    <Link to="/" className="inline-block">
                        <img
                            src="/orbit-logo.png"
                            alt="Orbit Space Club"
                            // Same blue neon glow, scaled down for the footer
                            className="h-12 w-auto drop-shadow-[0_0_10px_rgba(56,189,248,0.6)] filter brightness-110"
                        />
                    </Link>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        The official aerospace division of DYPCET. Bridging engineering and astronomy through exploration and research.
                    </p>
                </div>

                {/* Copyright */}
                <p className="text-gray-500 text-xs uppercase tracking-widest text-center md:text-left">
                    {COMPANY_INFO.copyright}
                </p>

                {/* Socials */}
                <div className="flex gap-6 text-gray-400">
                    {SOCIAL_LINKS.map((link, i) => (
                        <a key={i} href={link.href} className="hover:text-white transition-colors uppercase">
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
