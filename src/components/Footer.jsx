import React from 'react';
import { COMPANY_INFO, SOCIAL_LINKS } from '../data';

export default function Footer() {
    return (
        <footer className="w-full border-t border-white/10 bg-black/20 backdrop-blur-sm relative z-10 py-12">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Brand */}
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <span className="text-xl font-bold text-white tracking-widest">ORBIT</span>
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
