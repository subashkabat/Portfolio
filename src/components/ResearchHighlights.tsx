"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const highlights = [
    {
        title: "Fuzzy Logic Based Fault Current Prediction in DFIG Based Wind Turbine System",
        venue: "Materials Today: Proceedings (Elsevier)",
        year: 2023,
        impact: "Core Ph.D. research on LVRT enhancement for grid-connected wind energy systems using fuzzy intelligence.",
        tags: ["DFIG", "Fuzzy Logic", "Wind Energy"],
        color: "var(--color-electric-400)",
        icon: "🔬",
    },
    {
        title: "Enhancing Smart Grid Security: Detecting Electricity Theft through Ensemble Deep Learning",
        venue: "IEEE ICCES 2023",
        year: 2023,
        impact: "Novel deep learning ensemble approach for smart grid cybersecurity — addressing energy theft in modern power grids.",
        tags: ["Deep Learning", "Smart Grid", "Cybersecurity"],
        color: "var(--color-teal-400)",
        icon: "🛡️",
    },
    {
        title: "A High-Efficiency Seven-Level Inverter with Self-Balanced Switched-Capacitor Topology",
        venue: "J. Mech. Contin. Math. Sci.",
        year: 2025,
        impact: "Breakthrough multilevel inverter design achieving higher efficiency with fewer components for renewable energy integration.",
        tags: ["Power Electronics", "Inverter", "Renewable Energy"],
        color: "var(--color-gold-400)",
        icon: "⚡",
    },
    {
        title: "Harnessing Artificial Intelligence for Global Sustainability: A Cross-Sectoral Analysis",
        venue: "Universal Journal of Advanced Studies",
        year: 2025,
        impact: "Comprehensive cross-domain study exploring AI applications in sustainability — from energy to agriculture.",
        tags: ["AI/ML", "Sustainability", "Cross-Sector"],
        color: "#9333ea",
        icon: "🌍",
    },
];

export default function ResearchHighlights() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-24 sm:py-32 px-6 relative section-aurora">
            {/* Background accent */}
            <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-[var(--color-electric-300)] rounded-full blur-[200px] opacity-[0.04] pointer-events-none" />

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
                        ✦ Featured Work
                    </motion.span>
                    <h2 className="section-heading shimmer-text">Research Highlights</h2>
                    <p className="section-subheading mx-auto mt-4">
                        Key publications that represent the depth of my research across{" "}
                        <span className="text-[var(--color-electric-500)]">renewable energy</span>,{" "}
                        <span className="text-[var(--color-teal-500)]">power systems</span>, and{" "}
                        <span className="text-[var(--color-gold-500)]">artificial intelligence</span>.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {highlights.map((h, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.15 + i * 0.12, type: "spring" }}
                            className="glass-card p-6 sm:p-8 gradient-border group"
                        >
                            {/* Header row */}
                            <div className="flex items-start gap-4 mb-4">
                                <span
                                    className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                                    style={{
                                        background: `${h.color}12`,
                                        border: `1px solid ${h.color}30`,
                                    }}
                                >
                                    {h.icon}
                                </span>
                                <div className="min-w-0">
                                    <h3 className="text-slate-900 text-base font-bold leading-snug mb-1 group-hover:text-[var(--color-electric-500)] transition-colors duration-300">
                                        {h.title}
                                    </h3>
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <span className="text-xs font-medium" style={{ color: h.color }}>
                                            {h.venue}
                                        </span>
                                        <span className="text-slate-300 text-xs">•</span>
                                        <span className="text-[var(--color-gold-500)] text-xs font-bold">{h.year}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Impact description */}
                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                {h.impact}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {h.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 rounded-full text-xs font-medium"
                                        style={{
                                            color: h.color,
                                            background: `${h.color}10`,
                                            border: `1px solid ${h.color}25`,
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
