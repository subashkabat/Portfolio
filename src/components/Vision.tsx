"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const studentVision = [
    {
        title: "Skill-Oriented Education",
        description: "Integrating practical skills such as AI, IoT, renewable energy systems, and cybersecurity into the curriculum.",
        icon: "🎯",
        color: "var(--color-electric-400)",
    },
    {
        title: "Research & Innovation Culture",
        description: "Encouraging students to participate in research projects, patents, and innovation competitions.",
        icon: "🔬",
        color: "var(--color-teal-400)",
    },
    {
        title: "Industry Readiness",
        description: "Providing industry internships, certifications, and project-based learning aligned with emerging technologies.",
        icon: "🏢",
        color: "var(--color-gold-400)",
    },
    {
        title: "Entrepreneurship Development",
        description: "Motivating students to become job creators instead of job seekers through startup incubation and innovation programs.",
        icon: "🚀",
        color: "#9333ea",
    },
    {
        title: "Holistic Development",
        description: "Focusing on technical knowledge, leadership skills, ethics, and social responsibility.",
        icon: "🌟",
        color: "#db2777",
    },
];

const strategicGoals = [
    {
        text: "Establishing advanced laboratories and research centers in renewable energy, AI, smart grids, robotics, and data analytics",
        icon: "🏗️",
    },
    {
        text: "Introducing emerging programs — AI/ML, Data Science, Cybersecurity, IoT, Cloud Computing, Blockchain, Full Stack Development, Robotics & Automation",
        icon: "💻",
    },
    {
        text: "Strengthening interdisciplinary collaboration between Electrical Engineering and Computer Science",
        icon: "🤝",
    },
    {
        text: "Increasing high-quality research publications, patents, and funded projects",
        icon: "📝",
    },
    {
        text: "Achieving national and international accreditation and rankings through continuous quality improvement",
        icon: "🏆",
    },
    {
        text: "Developing global collaborations with foreign universities and research institutions",
        icon: "🌍",
    },
    {
        text: "Creating a technology-driven campus with digital classrooms, virtual labs, and smart infrastructure",
        icon: "🖥️",
    },
    {
        text: "Building a vibrant innovation ecosystem through startup incubation centers, hackathons, and technology transfer",
        icon: "💡",
    },
];

export default function Vision() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="vision" className="py-24 sm:py-32 px-6 relative section-aurora">
            {/* Background accents */}
            <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-purple-300 rounded-full blur-[200px] opacity-[0.04] pointer-events-none" />
            <div className="absolute bottom-20 right-0 w-[350px] h-[350px] bg-[var(--color-electric-300)] rounded-full blur-[180px] opacity-[0.04] pointer-events-none" />

            <div className="max-w-6xl mx-auto" ref={ref}>
                {/* Section header */}
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
                        ✦ Vision
                    </motion.span>
                    <h2 className="section-heading shimmer-text">Vision & Strategy</h2>
                    <p className="section-subheading mx-auto mt-4">
                        Creating <span className="text-[var(--color-electric-500)]">future-ready engineers</span> and{" "}
                        <span className="text-[var(--color-teal-500)]">responsible global citizens</span> through innovation-driven education.
                    </p>
                </motion.div>

                {/* Vision for Students */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="mb-16"
                >
                    <h3
                        className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-3"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        <motion.span
                            className="w-10 h-10 rounded-xl bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.2)] flex items-center justify-center text-lg"
                            animate={{ rotate: [0, -8, 8, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        >
                            🎓
                        </motion.span>
                        Vision for Students
                    </h3>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {studentVision.map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 25, scale: 0.95 }}
                                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                                transition={{ duration: 0.5, delay: 0.2 + i * 0.1, type: "spring" }}
                                whileHover={{ scale: 1.03, y: -5 }}
                                className="glass-card p-6 gradient-border group"
                            >
                                <span
                                    className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4 block"
                                    style={{
                                        background: `${item.color}12`,
                                        border: `1px solid ${item.color}30`,
                                    }}
                                >
                                    {item.icon}
                                </span>
                                <h4
                                    className="text-base font-bold text-slate-900 mb-2 group-hover:text-[var(--color-electric-500)] transition-colors duration-300"
                                    style={{ fontFamily: "var(--font-heading)" }}
                                >
                                    {item.title}
                                </h4>
                                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Vision for Institution */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h3
                        className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-3"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        <motion.span
                            className="w-10 h-10 rounded-xl bg-[rgba(20,184,166,0.1)] border border-[rgba(20,184,166,0.2)] flex items-center justify-center text-lg"
                            animate={{ rotate: [0, 8, -8, 0] }}
                            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                        >
                            🏛️
                        </motion.span>
                        Vision for the Institution
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-8 ml-[52px]">
                        Transforming the institution into a <strong className="text-slate-800">center of excellence</strong> in
                        engineering education, research, and innovation — through advanced technologies, industry collaboration,
                        and global academic partnerships.
                    </p>

                    <div className="glass-card p-6 sm:p-8 gradient-border">
                        <h4
                            className="text-sm font-bold text-slate-800 mb-6 flex items-center gap-2 uppercase tracking-wider"
                        >
                            <span className="w-6 h-6 rounded-md bg-[rgba(20,184,166,0.1)] flex items-center justify-center text-xs">🎯</span>
                            Key Strategic Goals
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                            {strategicGoals.map((goal, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -15 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.5 + i * 0.07, type: "spring" }}
                                    whileHover={{ x: 5 }}
                                    className="flex items-start gap-3 group cursor-default"
                                >
                                    <motion.span
                                        className="text-base shrink-0 mt-0.5"
                                        whileHover={{ scale: 1.2, rotate: 10 }}
                                    >
                                        {goal.icon}
                                    </motion.span>
                                    <span className="text-slate-600 text-sm leading-snug group-hover:text-slate-900 transition-colors duration-300">
                                        {goal.text}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
