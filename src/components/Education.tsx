"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const education = [
    {
        degree: "Ph.D.",
        field: "Fault Ride Through Technique for Grid Connected DFIG",
        institution: "School of Electrical Engineering, KIIT Deemed to be University",
        university: "KIIT Deemed to be University, Bhubaneswar",
        year: "2022",
        grade: "",
        icon: "🎓",
        color: "var(--color-electric-400)",
    },
    {
        degree: "M.Tech.",
        field: "Power System",
        institution: "VSSUT, Burla, Odisha",
        university: "VSSUT, Burla, Odisha",
        year: "2011",
        grade: "CGPA: 8.30",
        icon: "⚡",
        color: "var(--color-teal-400)",
    },
    {
        degree: "B.Tech.",
        field: "Electrical Engineering",
        institution: "Bhadrak Institute of Engineering and Technology",
        university: "BPUT, Rourkela, Odisha",
        year: "2006",
        grade: "71.56%",
        icon: "🔧",
        color: "var(--color-gold-400)",
    },
];

export default function Education() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="education" className="py-24 sm:py-32 px-6 relative section-aurora">
            {/* Background accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-electric-500)] rounded-full blur-[200px] opacity-[0.03] pointer-events-none" />

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
                        className="inline-block text-[var(--color-teal-500)] text-sm font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200"
                    >
                        ✦ Education
                    </motion.span>
                    <h2 className="section-heading shimmer-text">Academic Qualifications</h2>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Animated vertical line */}
                    <motion.div
                        initial={{ height: 0 }}
                        animate={inView ? { height: "100%" } : {}}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="absolute left-6 sm:left-1/2 top-0 w-px bg-gradient-to-b from-[var(--color-electric-500)] via-[var(--color-teal-500)] to-[var(--color-gold-400)]"
                        style={{ boxShadow: "0 0 8px rgba(59,130,246,0.3)" }}
                    />

                    {education.map((edu, i) => (
                        <motion.div
                            key={edu.degree}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50, y: 20 }}
                            animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.3 + i * 0.2, type: "spring", damping: 20 }}
                            className={`relative mb-12 sm:mb-16 pl-12 sm:pl-0 ${i % 2 === 0
                                ? "sm:pr-[calc(50%+40px)] sm:text-right"
                                : "sm:pl-[calc(50%+40px)]"
                                }`}
                        >
                            {/* Timeline dot with glow */}
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={inView ? { scale: 1 } : {}}
                                transition={{ delay: 0.4 + i * 0.2, type: "spring" }}
                                className="absolute left-3.5 sm:left-1/2 sm:-translate-x-1/2 top-6 w-5 h-5 rounded-full bg-white border-2 z-10"
                                style={{
                                    borderColor: edu.color,
                                    boxShadow: `0 0 15px ${edu.color}30`,
                                }}
                            >
                                <motion.div
                                    animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0.3, 0.8] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute inset-0.5 rounded-full"
                                    style={{ background: edu.color }}
                                />
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.02, y: -3 }}
                                className="glass-card p-5 sm:p-8 gradient-border"
                                style={{ boxShadow: `0 0 25px rgba(59,130,246,0.06)` }}
                            >
                                <div className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? "sm:justify-end" : ""}`}>
                                    <motion.span
                                        className="text-2xl"
                                        animate={inView ? { rotate: [0, -10, 10, 0] } : {}}
                                        transition={{ delay: 0.5 + i * 0.2, duration: 0.6 }}
                                    >
                                        {edu.icon}
                                    </motion.span>
                                    <span
                                        className="text-sm font-bold px-3 py-1 rounded-full border"
                                        style={{
                                            color: edu.color,
                                            background: `${edu.color}15`,
                                            borderColor: `${edu.color}40`,
                                        }}
                                    >
                                        {edu.year}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                                    {edu.degree} — {edu.field}
                                </h3>
                                <p className="text-sm font-medium mb-2" style={{ color: edu.color }}>{edu.institution}</p>
                                <p className="text-slate-500 text-sm">{edu.university}</p>
                                {edu.grade && (
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={inView ? { opacity: 1 } : {}}
                                        transition={{ delay: 0.8 + i * 0.2 }}
                                        className="text-[var(--color-gold-400)] text-sm font-semibold mt-2 flex items-center gap-1.5"
                                        style={{ justifyContent: i % 2 === 0 ? "flex-end" : "flex-start" }}
                                    >
                                        <span>⭐</span> {edu.grade}
                                    </motion.p>
                                )}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
