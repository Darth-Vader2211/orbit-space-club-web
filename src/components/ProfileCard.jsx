import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { User, Briefcase, MapPin } from "lucide-react";

export default function ProfileCard({
    name,
    role,
    status,
    code,
    avatarChar,
    customInnerGradient = "linear-gradient(145deg, hsla(339, 40%, 45%, 0.55) 0%, hsla(57, 60%, 70%, 0.27) 100%)",
    behindGlowColor = "hsla(339, 100%, 70%, 0.6)",
    enableMobileTilt = true,
    showUserInfo = true,
}) {
    const ref = useRef(null);

    // Motion values for tilt effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Spring physics for smooth movement
    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    function handleMouseMove({ clientX, clientY }) {
        if (!ref.current) return;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const xPct = (clientX - left) / width - 0.5;
        const yPct = (clientY - top) / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    // Map mouse position to rotation (Maximize tilt for effect)
    const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

    // Lighting effect
    const sheenGradient = useTransform(
        mouseX,
        [-0.5, 0.5],
        [
            "linear-gradient(115deg, transparent, rgba(255,255,255,0) 100%)",
            "linear-gradient(115deg, transparent, rgba(255,255,255,0.3) 100%)"
        ]
    );

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective: 1000,
                transformStyle: "preserve-3d",
            }}
            className="relative w-full h-[350px] flex items-center justify-center"
        >
            {/* Behind Glow (The Atmosphere) */}
            <motion.div
                style={{
                    background: behindGlowColor,
                    filter: "blur(40px)",
                    rotateX,
                    rotateY,
                    scale: 0.9,
                    z: -50
                }}
                className="absolute inset-4 rounded-3xl opacity-40 transition-opacity duration-500 group-hover:opacity-70"
            />

            {/* Main Card */}
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    background: customInnerGradient,
                    transformStyle: "preserve-3d",
                }}
                className="relative w-full h-full rounded-3xl border border-white/20 shadow-xl overflow-hidden flex flex-col justify-between p-6 backdrop-blur-md"
            >
                {/* Sheen Effect */}
                <motion.div
                    style={{ background: sheenGradient }}
                    className="absolute inset-0 z-20 pointer-events-none"
                />

                {/* Header / Status */}
                <div className="flex justify-between items-start z-30 transform translate-z-[20px]">
                    <div className="flex flex-col">
                        <span className="text-[10px] font-mono tracking-[0.2em] text-white/60">ID: {code}</span>
                        <span className="text-xs font-bold text-white/90 uppercase tracking-wider mt-1 border-b border-white/20 pb-1 w-max">
                            Orbit Space Club
                        </span>
                    </div>
                    <div className={`px-2 py-1 rounded-full border border-white/20 text-[10px] font-bold uppercase ${status === 'Active' ? 'bg-green-500/20 text-green-300' : 'bg-amber-500/20 text-amber-300'}`}>
                        {status}
                    </div>
                </div>

                {/* Avatar Section */}
                <div className="flex flex-col items-center justify-center flex-grow z-30 transform translate-z-[40px]">
                    <div className="w-24 h-24 rounded-full bg-black/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                        <span className="text-4xl font-black text-white">{avatarChar}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mt-4 tracking-tight text-center">{name}</h3>
                    <p className="text-sm font-medium text-white/60 tracking-widest uppercase">{role}</p>
                </div>

                {/* Footer Info */}
                {showUserInfo && (
                    <div className="grid grid-cols-2 gap-2 mt-4 z-30 transform translate-z-[20px]">
                        <div className="bg-black/20 rounded-lg p-2 flex items-center gap-2 border border-white/5">
                            <Briefcase size={14} className="text-white/50" />
                            <span className="text-xs text-white/80">Class A</span>
                        </div>
                        <div className="bg-black/20 rounded-lg p-2 flex items-center gap-2 border border-white/5">
                            <MapPin size={14} className="text-white/50" />
                            <span className="text-xs text-white/80">Sector 7</span>
                        </div>
                    </div>
                )}
            </motion.div>
        </motion.div>
    );
}
