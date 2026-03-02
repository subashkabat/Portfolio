"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const step = Math.ceil(target / 50);
        const timer = setInterval(() => {
            start += step;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(start);
            }
        }, 25);
        return () => clearInterval(timer);
    }, [inView, target]);

    return (
        <span ref={ref} className="shimmer-text text-4xl sm:text-5xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            {count}{suffix}
        </span>
    );
}

const stats = [
    { value: 18, suffix: "+", label: "Years Experience", icon: "📚" },
    { value: 32, suffix: "+", label: "Publications", icon: "📝" },
    { value: 7, suffix: "", label: "Journal Reviews", icon: "🔍" },
    { value: 8, suffix: "+", label: "Professional Memberships", icon: "🌐" },
];

export default function About() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="py-24 sm:py-32 px-6 section-aurora relative">
            {/* Background accents */}
            <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-[var(--color-electric-500)] rounded-full blur-[200px] opacity-[0.04] pointer-events-none" />
            <div className="absolute bottom-20 left-0 w-[300px] h-[300px] bg-[var(--color-teal-500)] rounded-full blur-[150px] opacity-[0.04] pointer-events-none" />

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
                        transition={{ duration: 0.4 }}
                        className="inline-block text-[var(--color-electric-500)] text-sm font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200"
                    >
                        ✦ About Me
                    </motion.span>
                    <h2 className="section-heading shimmer-text">Who I Am</h2>
                </motion.div>

                {/* Bio */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="glass-card p-8 sm:p-10 mb-16 max-w-4xl mx-auto gradient-border"
                >
                    <p className="text-slate-700 text-lg leading-relaxed mb-6">
                        I am <strong className="text-slate-900">Dr. Subash Ranjan Kabat</strong>, currently serving as the{" "}
                        <strong className="text-[var(--color-electric-500)]">Principal</strong> of Radhakrishna Institute of Technology
                        and Engineering (RITE), Bhubaneswar. With a Ph.D. from KIIT Deemed to be University specializing in{" "}
                        <em className="text-[var(--color-teal-500)]">
                            Fault Ride Through Techniques for Grid-Connected DFIG Wind Turbines
                        </em>
                        , I bring over 18 years of dedicated academic and research experience.
                    </p>
                    <p className="text-slate-600 text-base leading-relaxed">
                        My research spans{" "}
                        <span className="text-[var(--color-electric-500)]">Renewable Energy Systems</span>,{" "}
                        <span className="text-[var(--color-teal-500)]">Power Electronics</span>,{" "}
                        <span className="text-[var(--color-gold-500)]">Smart Grid</span>,{" "}
                        Electric Vehicles, IoT, and{" "}
                        <span className="text-purple-600">Artificial Intelligence & Machine Learning</span>.
                        I have authored 32+ publications in reputed IEEE conferences
                        and international journals, and serve as a reviewer for IEEE Access, Elsevier, and several other prestigious
                        journals.
                    </p>
                </motion.div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30, scale: 0.9 }}
                            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.3 + i * 0.1, type: "spring" }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="glass-card p-4 sm:p-6 text-center group cursor-default"
                        >
                            <motion.span
                                className="text-2xl block mb-3"
                                animate={inView ? { rotateY: [0, 360] } : {}}
                                transition={{ delay: 0.6 + i * 0.15, duration: 0.8 }}
                            >
                                {stat.icon}
                            </motion.span>
                            <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                            <p className="text-slate-500 text-sm mt-2 font-medium group-hover:text-slate-900 transition-colors duration-300">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
