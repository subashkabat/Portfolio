"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
    {
        role: "Principal",
        institution: "RITE, Bhubaneswar",
        from: "April 2023",
        to: "Present",
        current: true,
        icon: "👔",
    },
    {
        role: "Associate Professor / HOD",
        institution: "RITE, Bhubaneswar",
        from: "Oct 2022",
        to: "April 2023",
        current: false,
        icon: "🏛️",
    },
    {
        role: "Assistant Professor / HOD",
        institution: "RITE, Bhubaneswar",
        from: "Jan 2017",
        to: "Sept 2022",
        current: false,
        icon: "📖",
    },
    {
        role: "Assistant Professor",
        institution: "Raajdhani Engg. College, Bhubaneswar",
        from: "July 2016",
        to: "Jan 2017",
        current: false,
        icon: "🎯",
    },
    {
        role: "Assistant Professor",
        institution: "Vikash Institute of Technology, Bargarh",
        from: "Feb 2011",
        to: "July 2016",
        current: false,
        icon: "⚡",
    },
    {
        role: "Lecturer",
        institution: "PKACE, Bargarh",
        from: "Aug 2006",
        to: "July 2009",
        current: false,
        icon: "📚",
    },
];

export default function Experience() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="experience" className="py-24 sm:py-32 px-6 relative section-aurora">
            {/* Background lights */}
            <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[var(--color-teal-500)] rounded-full blur-[200px] opacity-[0.04] pointer-events-none" />

            <div className="max-w-5xl mx-auto" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        className="inline-block text-[var(--color-electric-500)] text-sm font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200"
                    >
                        ✦ Career
                    </motion.span>
                    <h2 className="section-heading shimmer-text">Work Experience</h2>
                </motion.div>

                <div className="relative">
                    {/* Animated vertical line */}
                    <motion.div
                        initial={{ height: 0 }}
                        animate={inView ? { height: "100%" } : {}}
                        transition={{ duration: 2, ease: "easeOut" }}
                        className="absolute left-6 sm:left-8 top-0 w-px"
                        style={{
                            background: "linear-gradient(180deg, var(--color-electric-400), var(--color-teal-400), var(--color-navy-800))",
                            boxShadow: "0 0 8px rgba(37,99,235,0.1)",
                        }}
                    />

                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -40, y: 10 }}
                            animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.15 + i * 0.12, type: "spring", damping: 20 }}
                            className="relative pl-12 sm:pl-20 mb-8 last:mb-0"
                        >
                            {/* Dot with glow */}
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={inView ? { scale: 1 } : {}}
                                transition={{ delay: 0.2 + i * 0.12, type: "spring" }}
                                className={`absolute left-3.5 sm:left-6 top-6 w-5 h-5 rounded-full border-2 z-10 ${exp.current
                                    ? "border-[var(--color-teal-500)] bg-[var(--color-navy-950)]"
                                    : "border-slate-300 bg-[var(--color-navy-950)]"
                                    }`}
                                style={exp.current ? { boxShadow: "0 0 15px var(--color-teal-400)" } : {}}
                            >
                                {exp.current && (
                                    <div className="absolute inset-1 rounded-full bg-[var(--color-teal-400)]">
                                        <div className="absolute inset-0 rounded-full bg-[var(--color-teal-400)] animate-ping opacity-40" />
                                    </div>
                                )}
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.02, x: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className={`glass-card p-5 sm:p-6 ${exp.current ? "gradient-border" : ""}`}
                                style={exp.current ? { boxShadow: "0 0 30px rgba(20,184,166,0.1), 0 0 60px rgba(20,184,166,0.04)" } : {}}
                            >
                                <div className="flex flex-wrap items-center gap-3 mb-2">
                                    <span className="text-xl">{exp.icon}</span>
                                    <h3 className="text-lg font-bold text-slate-900" style={{ fontFamily: "var(--font-heading)" }}>
                                        {exp.role}
                                    </h3>
                                    {exp.current && (
                                        <motion.span
                                            animate={{ opacity: [0.7, 1, 0.7] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-teal-50 text-[var(--color-teal-500)] border border-teal-200 shadow-sm"
                                        >
                                            ● CURRENT
                                        </motion.span>
                                    )}
                                </div>
                                <p className="text-[var(--color-electric-400)] text-sm font-medium">{exp.institution}</p>
                                <p className="text-slate-500 text-sm mt-1 flex items-center gap-1.5">
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    {exp.from} → {exp.to}
                                </p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
