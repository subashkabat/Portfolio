"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
    {
        category: "Programming",
        color: "var(--color-electric-400)",
        bg: "rgba(59,130,246,0.1)",
        border: "rgba(59,130,246,0.25)",
        icon: "💻",
        skills: ["C", "C++", "Python"],
    },
    {
        category: "Simulation & Design",
        color: "var(--color-teal-400)",
        bg: "rgba(20,184,166,0.1)",
        border: "rgba(20,184,166,0.25)",
        icon: "🔬",
        skills: ["MATLAB", "Simulink", "ETAP", "PLECS"],
    },
    {
        category: "Research & AI/ML",
        color: "var(--color-gold-400)",
        bg: "rgba(251,191,36,0.1)",
        border: "rgba(251,191,36,0.25)",
        icon: "🧠",
        skills: ["PSO", "GSA", "Fuzzy Logic", "ANN", "Deep Learning", "IoT", "Cybersecurity"],
    },
    {
        category: "Power & Energy",
        color: "#9333ea", // purple-600
        bg: "rgba(147,51,234,0.1)",
        border: "rgba(147,51,234,0.25)",
        icon: "⚡",
        skills: ["Power Systems", "Renewable Energy", "Smart Grid", "Electric Vehicles", "Power Electronics", "DFIG", "LVRT"],
    },
    {
        category: "Tools & OS",
        color: "#db2777", // pink-600
        bg: "rgba(219,39,119,0.1)",
        border: "rgba(219,39,119,0.25)",
        icon: "🛠️",
        skills: ["MS Office", "Ubuntu", "Windows"],
    },
];

const reviewerFor = [
    { name: "IEEE Access", icon: "📡" },
    { name: "Elsevier Materials Today", icon: "🔬" },
    { name: "Tech Science Journal", icon: "📚" },
    { name: "International Energy Journal", icon: "⚡" },
    { name: "ASTRJ", icon: "🌟" },
    { name: "Int'l J. Modelling & Simulation", icon: "📊" },
    { name: "IEEE", icon: "🏛️" },
];

export default function Skills() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="skills" className="py-24 sm:py-32 px-6 relative section-aurora">
            {/* Background lights */}
            <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-purple-300 rounded-full blur-[200px] opacity-[0.04] pointer-events-none" />

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
                        className="inline-block text-[var(--color-electric-500)] text-sm font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200"
                    >
                        ✦ Expertise
                    </motion.span>
                    <h2 className="section-heading shimmer-text">Skills & Tools</h2>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {skillGroups.map((group, gi) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 25, scale: 0.95 }}
                            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 + gi * 0.1, type: "spring" }}
                            whileHover={{ scale: 1.03, y: -5 }}
                            className="glass-card p-6 gradient-border"
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <motion.span
                                    className="text-xl"
                                    animate={inView ? { rotate: [0, -15, 15, 0] } : {}}
                                    transition={{ delay: 0.3 + gi * 0.1, duration: 0.6 }}
                                >
                                    {group.icon}
                                </motion.span>
                                <h3
                                    className="text-sm font-bold uppercase tracking-wider"
                                    style={{ color: group.color, fontFamily: "var(--font-heading)" }}
                                >
                                    {group.category}
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill, si) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.6 }}
                                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ delay: 0.25 + gi * 0.1 + si * 0.05, type: "spring" }}
                                        whileHover={{ scale: 1.15, y: -2, boxShadow: `0 0 15px ${group.bg}` }}
                                        className="px-3.5 py-1.5 rounded-lg text-sm font-medium cursor-default transition-all duration-200"
                                        style={{
                                            color: group.color,
                                            background: group.bg,
                                            border: `1px solid ${group.border}`,
                                        }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Reviewer section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="glass-card p-6 sm:p-8 text-center gradient-border"
                >
                    <h3
                        className="text-base sm:text-lg font-bold text-slate-900 mb-5 sm:mb-6 flex items-center justify-center gap-2"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        <motion.span
                            animate={{ rotate: [0, -5, 5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            📝
                        </motion.span>
                        Journal Reviewer
                    </h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {reviewerFor.map((journal, i) => (
                            <motion.span
                                key={journal.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 0.7 + i * 0.06 }}
                                whileHover={{ scale: 1.08, y: -2, boxShadow: "0 0 20px rgba(59,130,246,0.15)" }}
                                className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium text-slate-600 bg-slate-50 border border-slate-200 hover:border-blue-300 hover:text-[var(--color-electric-500)] hover:bg-blue-50 transition-all duration-300 cursor-default flex items-center gap-1.5 sm:gap-2"
                            >
                                <span>{journal.icon}</span>
                                {journal.name}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
