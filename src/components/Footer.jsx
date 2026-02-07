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
                {/* Socials */}
                <div className="flex gap-6 text-gray-400">
                    {/* Instagram Link */}
                    <a
                        href="https://www.instagram.com/orbit.dypcet?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-pink-500 transition-colors"
                    >
                        <span className="sr-only">Instagram</span>
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.673 2.013 10.03 2 12.488 2h-.173zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm5.338-3.205a1.2 1.2 0 110-2.4 1.2 1.2 0 010 2.4z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
}
