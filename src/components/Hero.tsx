"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useCallback, useMemo } from "react";

// Hook to detect mobile/touch devices for performance gating
function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const check = () => {
            setIsMobile(
                window.innerWidth < 768 ||
                "ontouchstart" in window ||
                navigator.maxTouchPoints > 0
            );
        };
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);
    return isMobile;
}

// Typewriter effect component
function TypewriterEffect() {
    const roles = useMemo(() => ["Principal", "Professor", "Researcher", "Ph.D. Scholar", "Innovator"], []);
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    const tick = useCallback(() => {
        const currentRole = roles[currentRoleIndex];
        if (!isDeleting) {
            setDisplayText(currentRole.substring(0, displayText.length + 1));
            if (displayText.length + 1 === currentRole.length) {
                setTimeout(() => setIsDeleting(true), 1800);
                return;
            }
        } else {
            setDisplayText(currentRole.substring(0, displayText.length - 1));
            if (displayText.length - 1 === 0) {
                setIsDeleting(false);
                setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
                return;
            }
        }
    }, [displayText, isDeleting, currentRoleIndex, roles]);

    useEffect(() => {
        const speed = isDeleting ? 50 : 100;
        const timer = setTimeout(tick, speed);
        return () => clearTimeout(timer);
    }, [tick, isDeleting]);

    return (
        <span className="inline-flex items-center">
            <span className="shimmer-text" style={{ fontFamily: "var(--font-heading)" }}>
                {displayText}
            </span>
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
                className="inline-block w-[3px] h-[1.2em] bg-[var(--color-electric-400)] ml-1 rounded-full shadow-[0_0_8px_var(--color-electric-400)]"
            />
        </span>
    );
}

// Lightweight floating particles - ONLY rendered on desktop
function Particles() {
    const [particles, setParticles] = useState<{ id: number; x: number; size: number; delay: number; duration: number; color: string }[]>([]);
    const [viewHeight, setViewHeight] = useState(800);

    useEffect(() => {
        setViewHeight(window.innerHeight);
        const colors = ["var(--color-electric-400)", "var(--color-teal-400)", "var(--color-gold-400)", "var(--color-electric-300)"];
        // Reduced from 30 to 12 particles for better performance
        const pts = Array.from({ length: 12 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            size: Math.random() * 3 + 1,
            delay: Math.random() * 8,
            duration: Math.random() * 10 + 8,
            color: colors[Math.floor(Math.random() * colors.length)],
        }));
        setParticles(pts);
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full"
                    style={{
                        left: `${p.x}%`,
                        bottom: "-10px",
                        width: p.size,
                        height: p.size,
                        background: p.color,
                        willChange: "transform",
                    }}
                    animate={{
                        y: [0, -(viewHeight + 50)],
                        opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                        duration: p.duration,
                        delay: p.delay,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    );
}

export default function Hero() {
    const isMobile = useIsMobile();

    return (
        <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background orbs - static on mobile, animated on desktop */}
            <div className="absolute inset-0 pointer-events-none">
                {isMobile ? (
                    /* Static lightweight gradients for mobile - no animation, reduced blur */
                    <>
                        <div
                            className="absolute top-10 left-[5%] w-[250px] h-[250px] rounded-full opacity-[0.15]"
                            style={{ background: "var(--color-electric-500)", filter: "blur(80px)" }}
                        />
                        <div
                            className="absolute bottom-10 right-[5%] w-[200px] h-[200px] rounded-full opacity-[0.1]"
                            style={{ background: "var(--color-teal-500)", filter: "blur(60px)" }}
                        />
                    </>
                ) : (
                    /* Full animated orbs for desktop */
                    <>
                        <motion.div
                            animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.12, 0.25, 0.12],
                                x: [0, 30, 0],
                                y: [0, -20, 0],
                            }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-10 left-[5%] w-[500px] h-[500px] bg-[var(--color-electric-500)] rounded-full blur-[140px]"
                            style={{ willChange: "transform, opacity" }}
                        />
                        <motion.div
                            animate={{
                                scale: [1.2, 1, 1.2],
                                opacity: [0.08, 0.2, 0.08],
                                x: [0, -25, 0],
                                y: [0, 30, 0],
                            }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute bottom-10 right-[5%] w-[450px] h-[450px] bg-[var(--color-teal-500)] rounded-full blur-[120px]"
                            style={{ willChange: "transform, opacity" }}
                        />
                        <motion.div
                            animate={{
                                scale: [1, 1.4, 1],
                                opacity: [0.05, 0.12, 0.05],
                                rotate: [0, 180, 360],
                            }}
                            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[var(--color-electric-500)] to-[var(--color-teal-500)] rounded-full blur-[180px]"
                            style={{ willChange: "transform, opacity" }}
                        />
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.12, 0.06] }}
                            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                            className="absolute top-[60%] left-[20%] w-[300px] h-[300px] bg-purple-300 rounded-full blur-[120px]"
                        />
                    </>
                )}
            </div>

            {/* Floating particles - desktop only */}
            {!isMobile && <Particles />}

            {/* Grid lines - hidden on mobile for perf */}
            {!isMobile && (
                <div
                    className="absolute inset-0 pointer-events-none opacity-[0.04]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />
            )}

            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                {/* Profile Image - simplified effects on mobile */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex justify-center mb-8"
                >
                    <div className="relative group">
                        {/* Outer glow ring - static on mobile */}
                        {isMobile ? (
                            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[var(--color-electric-500)] to-[var(--color-teal-500)] opacity-20 blur-xl" />
                        ) : (
                            <motion.div
                                animate={{ opacity: [0.15, 0.35, 0.15], scale: [1, 1.05, 1] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -inset-6 rounded-full bg-gradient-to-r from-[var(--color-electric-500)] to-[var(--color-teal-500)] blur-2xl"
                            />
                        )}

                        {/* Animated rotating gradient ring - desktop only */}
                        {!isMobile && (
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                                className="absolute -inset-2 rounded-full"
                                style={{
                                    background:
                                        "conic-gradient(from 0deg, var(--color-electric-500), var(--color-teal-500), var(--color-gold-400), var(--color-electric-400), var(--color-teal-400), var(--color-electric-500))",
                                    willChange: "transform",
                                }}
                            />
                        )}

                        {/* Static gradient ring on mobile */}
                        {isMobile && (
                            <div
                                className="absolute -inset-1.5 rounded-full"
                                style={{
                                    background:
                                        "conic-gradient(from 0deg, var(--color-electric-500), var(--color-teal-500), var(--color-gold-400), var(--color-electric-400), var(--color-teal-400), var(--color-electric-500))",
                                }}
                            />
                        )}

                        {/* Inner glow - simplified */}
                        <div className="absolute -inset-4 rounded-full bg-[var(--color-electric-500)] opacity-15 blur-xl" />

                        {/* Status dot */}
                        <motion.div
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute -bottom-1 -right-1 z-20 w-6 h-6 rounded-full bg-[var(--color-teal-400)] border-[3px] border-[var(--color-navy-950)] shadow-[0_0_10px_var(--color-teal-400)]"
                        />

                        {/* Image container */}
                        <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-[3px] border-[var(--color-navy-950)]">
                            <Image
                                src="/profile.png"
                                alt="Dr. Subash Ranjan Kabat"
                                fill
                                className="object-cover object-top"
                                priority
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Greeting tag */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.2)] text-[var(--color-electric-400)] text-sm font-medium mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-[var(--color-teal-400)]" />
                    Welcome to my Portfolio
                </motion.div>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                    style={{ fontFamily: "var(--font-heading)" }}
                >
                    <span className="text-slate-900">Dr. Subash Ranjan</span>
                    <br />
                    <span className="shimmer-text">Kabat</span>
                </motion.h1>

                {/* Typewriter role effect */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="flex items-center justify-center gap-3 mb-8"
                >
                    <div className="px-6 py-3 rounded-2xl bg-[rgba(59,130,246,0.06)] border border-[rgba(59,130,246,0.15)] text-xl sm:text-2xl font-semibold min-h-[52px] min-w-[200px] flex items-center justify-center">
                        <TypewriterEffect />
                    </div>
                </motion.div>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="text-slate-600 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Advancing knowledge in{" "}
                    <span className="text-[var(--color-electric-500)] font-medium">Renewable Energy</span>,{" "}
                    <span className="text-[var(--color-teal-500)] font-medium">Power Systems</span>, and{" "}
                    <span className="text-[var(--color-gold-500)] font-medium">Artificial Intelligence</span>{" "}
                    with 18+ years of academic excellence and 32+ research publications.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className="flex flex-col sm:flex-row w-full sm:w-auto justify-center items-stretch sm:items-center gap-4 px-4 sm:px-0"
                >
                    <a
                        href="#publications"
                        className="group relative px-8 py-3.5 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.35)] flex justify-center items-center w-full sm:w-auto"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-electric-500)] to-[var(--color-teal-500)]" />
                        <span className="relative z-10 flex items-center gap-2">
                            View Publications
                            <svg
                                className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3.5 rounded-xl font-semibold border border-slate-300 text-slate-800 hover:bg-slate-50 hover:border-slate-400 transition-all duration-300 flex justify-center items-center w-full sm:w-auto"
                    >
                        Contact Me
                    </a>
                    <a
                        href="/cv.pdf"
                        download
                        className="group relative px-8 py-3.5 rounded-xl font-semibold overflow-hidden border border-amber-600/30 transition-all duration-300 flex justify-center items-center w-full sm:w-auto"
                        style={{ background: "rgba(251,191,36,0.1)" }}
                    >
                        <span className="relative z-10 flex items-center gap-2 text-amber-700">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Download CV
                        </span>
                    </a>
                </motion.div>

                {/* Research Profile Links */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                    className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8"
                >
                    {[
                        {
                            href: "https://www.linkedin.com/in/dr-subash-ranjan-kabat-203782b4/", label: "LinkedIn", icon: (
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            )
                        },
                        {
                            href: "https://scholar.google.com/citations?user=E83xzwYAAAAJ&hl=en", label: "Google Scholar", icon: (
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 100 14 7 7 0 000-14z" />
                                </svg>
                            )
                        },
                        {
                            href: "https://orcid.org/my-orcid?orcid=0000-0003-3535-1815", label: "ORCID", icon: (
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 01-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-1.847-1.247-3.722-3.891-3.722h-2.428z" />
                                </svg>
                            )
                        },
                        {
                            href: "https://www.scopus.com/authid/detail.uri?authorId=57222732793", label: "Scopus", icon: (
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M24 19.059l-.14-1.777c-1.426.772-2.945 1.076-4.465 1.076-3.319 0-5.96-2.782-5.96-6.475 0-3.903 2.595-6.31 5.633-6.31 1.917 0 3.39.303 4.792 1.075L24 4.895c-1.286-.608-2.337-.889-4.698-.889-4.534 0-7.97 3.53-7.97 8.017 0 5.12 4.09 7.924 7.876 7.924 1.635 0 3.249-.373 4.792-1.888zM.466 8.626C.466 7.037 1.568 5.66 3.905 5.66c1.822 0 3.085.91 3.085 2.596 0 3.226-5.749 2.457-5.749 4.186 0 .537.42.888 1.195.888.862 0 1.59-.49 2.17-1.121l1.17 1.307C4.79 14.555 3.577 15 2.453 15 .792 15 0 13.923 0 12.736c0-3.159 5.516-2.39 5.516-4.303 0-.583-.466-.933-1.334-.933-.862 0-1.728.35-2.547 1.026L.466 7.6v1.026z" />
                                </svg>
                            )
                        },
                        {
                            href: "https://www.researchgate.net/profile/Dr-Subash-Kabat?ev=hdr_xprf", label: "ResearchGate", icon: (
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19.586 0c-1.37 0-2.086.925-2.086 2.086 0 1.086.706 2.086 2.086 2.086 1.37 0 2.086-.925 2.086-2.086C21.672.925 20.956 0 19.586 0zM4.414 5C1.586 5 0 7.665 0 10.586c0 4.276 3.178 7.414 7.414 7.414 2.83 0 4.414-2.585 4.414-5.414 0-3.49-2.13-5.13-4.172-5.13-1.285 0-2.242.714-2.242.714s.375-2.13 2.571-2.13c.625 0 .938.375.938.938 0 .526-.125.89-.125.89h2.063s.313-1.063.313-1.813C11.174 4.014 9.938 5 7.414 5H4.414zm15.172.828v12.344h-2.086v-4.172h-2.086l-2.086 4.172H11.07l2.293-4.496c-1.214-.569-2.086-1.862-2.086-3.52 0-2.483 1.69-4.328 4.172-4.328h4.137zm-4.172 2.086c-1.214 0-2.086.871-2.086 2.086s.872 2.086 2.086 2.086h2.086V7.914h-2.086z" />
                                </svg>
                            )
                        },
                        {
                            href: "https://vidwan.inflibnet.ac.in/profile/603959", label: "Vidwan", icon: (
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                </svg>
                            )
                        },
                        {
                            href: "https://ieee-collabratec.ieee.org/app/p/SUBASHRANJANKabat430811", label: "IEEE", icon: (
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3.2 1.6C1.4 1.6 0 3 0 4.8v14.4C0 21 1.4 22.4 3.2 22.4h17.6c1.8 0 3.2-1.4 3.2-3.2V4.8c0-1.8-1.4-3.2-3.2-3.2H3.2zm1.3 5.6h2.3v9.6H4.5V7.2zm4.1 0h6.8v2H10.9v1.8h3.9v1.8h-3.9v2h4.7v2H8.6V7.2zm8.5 0h6.8v2h-4.5v1.8h3.9v1.8h-3.9v2h4.7v2h-7V7.2z" />
                                </svg>
                            )
                        },
                    ].map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group w-11 h-11 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300"
                            title={link.label}
                        >
                            {link.icon}
                        </a>
                    ))}
                </motion.div>

                {/* Scroll down indicator - desktop only */}
                {!isMobile && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2"
                    >
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="flex flex-col items-center gap-2 text-[#64748b] text-xs"
                        >
                            <span className="tracking-widest uppercase text-[10px]">Scroll Down</span>
                            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="text-[#64748b]">
                                <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="1.5" />
                                <motion.circle
                                    animate={{ cy: [8, 14, 8] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    cx="8"
                                    r="2"
                                    fill="var(--color-electric-400)"
                                />
                            </svg>
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
