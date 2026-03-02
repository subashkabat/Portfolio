"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
    {
        quote: "Dr. Kabat's dedication to research and teaching is truly inspiring. His work on DFIG wind turbines has significantly contributed to the field of renewable energy integration.",
        name: "Research Collaborator",
        role: "Senior IEEE Member",
        icon: "🎓",
        color: "var(--color-electric-400)",
    },
    {
        quote: "An exceptional academic leader who brings innovation to every initiative. His mentorship has shaped the careers of countless engineering students and young researchers.",
        name: "Academic Peer",
        role: "Professor, Electrical Engineering",
        icon: "⚡",
        color: "var(--color-teal-400)",
    },
    {
        quote: "Under Dr. Kabat's leadership as Principal, the institution has achieved remarkable growth in research output, industry collaborations, and NAAC accreditation milestones.",
        name: "Institutional Review",
        role: "RITE Administration",
        icon: "🏛️",
        color: "var(--color-gold-400)",
    },
];

export default function Testimonials() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-24 sm:py-32 px-6 relative section-aurora">
            {/* Background accent */}
            <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-purple-300 rounded-full blur-[200px] opacity-[0.03] pointer-events-none" />

            <div className="max-w-6xl mx-auto" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        className="inline-block text-purple-600 text-sm font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200"
                    >
                        ✦ Endorsements
                    </motion.span>
                    <h2 className="section-heading shimmer-text">What People Say</h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 + i * 0.15, type: "spring" }}
                            className="glass-card p-6 sm:p-8 flex flex-col gradient-border"
                        >
                            {/* Quote icon */}
                            <div className="mb-4">
                                <svg
                                    className="w-8 h-8 opacity-20"
                                    style={{ color: t.color }}
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
                                </svg>
                            </div>

                            {/* Quote text */}
                            <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1 italic">
                                &ldquo;{t.quote}&rdquo;
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                                <span
                                    className="w-10 h-10 rounded-full flex items-center justify-center text-lg shrink-0"
                                    style={{ background: `${t.color}15`, border: `1px solid ${t.color}30` }}
                                >
                                    {t.icon}
                                </span>
                                <div>
                                    <p className="text-slate-900 text-sm font-semibold">{t.name}</p>
                                    <p className="text-slate-500 text-xs">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
