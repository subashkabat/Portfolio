"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const awards = [
    { title: "Prime Teachers Award — Excellence in teaching & academic contribution", icon: "🏆" },
    { title: "Best IQAC Coordinator Award — Quality assurance & institutional development", icon: "⭐" },
    { title: "Appreciation from NxtWave — Significant contribution in AI initiatives", icon: "🤖" },
];
const certifications = [
    { title: "Certified Cybersecurity Trainer — Palo Alto Networks", icon: "🔐" },
    { title: "Advanced Training Facilitator — Future Ready Contributor Programme (BPUT)", icon: "🚀" },
    { title: "Reviewer — IEEE Access, Elsevier Materials Today Proceedings, International Energy Journal", icon: "📝" },
    { title: "Editorial Board Member — American Journal of Electrical Power and Energy Systems", icon: "📰" },
];
const memberships = [
    { name: "IEEE", desc: "Professional Member", icon: "📡" },
    { name: "ISTE", desc: "Life Time Member", icon: "🎓" },
    { name: "SESI", desc: "Solar Energy Society of India", icon: "☀️" },
    { name: "IAENG", desc: "Int'l Association of Engineers", icon: "🌐" },
    { name: "IFERP", desc: "Professional Member", icon: "📖" },
    { name: "InSc", desc: "Life Time Member", icon: "🔬" },
    { name: "SIPH", desc: "Scientific Int'l Publishing House", icon: "📚" },
    { name: "I2OR", desc: "Associate Member", icon: "🏛️" },
];
const responsibilities = [
    { text: "Providing academic and administrative leadership for the institution", icon: "👔" },
    { text: "President, Institution's Innovation Council", icon: "💡" },
    { text: "Implementing quality assurance through IQAC, NAAC & NBA", icon: "✅" },
    { text: "Convener, NAAC SSR Committee", icon: "📋" },
    { text: "IQAC Coordinator", icon: "🎖️" },
    { text: "Developing industry-oriented curriculum & skill development programs", icon: "📘" },
    { text: "Promoting research, innovation, patents & publications", icon: "🔬" },
    { text: "Strengthening industry–academia collaboration for internships & placements", icon: "🤝" },
    { text: "Faculty Coordinator, Virtual Lab — IIT Kharagpur", icon: "🖥️" },
    { text: "Coordinator, Edu-Skill Training Program", icon: "🎯" },
];

export default function Awards() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    return (
        <section id="awards" className="py-24 sm:py-32 px-6 relative section-aurora">
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[var(--color-gold-500)] rounded-full blur-[200px] opacity-[0.03] pointer-events-none" />
            <div className="max-w-6xl mx-auto" ref={ref}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
                    <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 1, scale: 1 } : {}} className="inline-block text-[var(--color-teal-500)] text-sm font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200">✦ Recognition</motion.span>
                    <h2 className="section-heading shimmer-text">Awards & Memberships</h2>
                </motion.div>
                <div className="grid lg:grid-cols-2 gap-6">
                    {/* Awards & Certifications */}
                    <motion.div initial={{ opacity: 0, y: 25 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2, type: "spring" }} whileHover={{ y: -5 }} className="glass-card p-6 sm:p-8 gradient-border">
                        <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2" style={{ fontFamily: "var(--font-heading)" }}>
                            <motion.span className="w-8 h-8 rounded-lg bg-[rgba(251,191,36,0.1)] flex items-center justify-center text-sm" animate={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 3, repeat: Infinity }}>🏅</motion.span>
                            Awards
                        </h3>
                        <div className="space-y-4 mb-6">
                            {awards.map((a, i) => (
                                <motion.div key={a.title} initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 + i * 0.1, type: "spring" }} whileHover={{ x: 5 }} className="flex items-start gap-3 group cursor-default">
                                    <motion.span className="text-lg shrink-0 mt-0.5" whileHover={{ scale: 1.3, rotate: 15 }}>{a.icon}</motion.span>
                                    <span className="text-slate-600 text-sm group-hover:text-slate-900 transition-colors duration-300">{a.title}</span>
                                </motion.div>
                            ))}
                        </div>
                        <div className="pt-5 border-t border-slate-100">
                            <h4 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2 uppercase tracking-wider">
                                <span className="w-6 h-6 rounded-md bg-[rgba(59,130,246,0.1)] flex items-center justify-center text-xs">📜</span>
                                Professional Certifications
                            </h4>
                            <div className="space-y-3">
                                {certifications.map((c, i) => (
                                    <motion.div key={c.title} initial={{ opacity: 0, x: -15 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.5 + i * 0.08, type: "spring" }} whileHover={{ x: 5 }} className="flex items-start gap-3 group cursor-default">
                                        <motion.span className="text-base shrink-0 mt-0.5" whileHover={{ scale: 1.2 }}>{c.icon}</motion.span>
                                        <span className="text-slate-600 text-sm group-hover:text-slate-900 transition-colors duration-300">{c.title}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Professional Bodies */}
                    <motion.div initial={{ opacity: 0, y: 25 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.35, type: "spring" }} whileHover={{ y: -5 }} className="glass-card p-6 sm:p-8 gradient-border">
                        <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2" style={{ fontFamily: "var(--font-heading)" }}>
                            <motion.span className="w-8 h-8 rounded-lg bg-[rgba(59,130,246,0.1)] flex items-center justify-center text-sm" animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}>🌐</motion.span>
                            Professional Bodies
                        </h3>
                        <div className="space-y-3">
                            {memberships.map((m, i) => (
                                <motion.div key={m.name} initial={{ opacity: 0, x: -15 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.4 + i * 0.06, type: "spring" }} whileHover={{ x: 4 }} className="flex items-center justify-between gap-2 py-2 border-b border-[rgba(255,255,255,0.04)] last:border-0 cursor-default group">
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm">{m.icon}</span>
                                        <span className="text-slate-900 text-sm font-semibold group-hover:text-[var(--color-electric-500)] transition-colors">{m.name}</span>
                                    </div>
                                    <span className="text-slate-500 text-xs text-right">{m.desc}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Key Responsibilities — full width */}
                    <motion.div initial={{ opacity: 0, y: 25 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.5, type: "spring" }} whileHover={{ y: -5 }} className="glass-card p-6 sm:p-8 gradient-border lg:col-span-2">
                        <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2" style={{ fontFamily: "var(--font-heading)" }}>
                            <motion.span className="w-8 h-8 rounded-lg bg-[rgba(20,184,166,0.1)] flex items-center justify-center text-sm" animate={{ rotate: [0, -8, 8, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }}>📋</motion.span>
                            Key Responsibilities
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                            {responsibilities.map((r, i) => (
                                <motion.div key={i} initial={{ opacity: 0, x: -15 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.55 + i * 0.06, type: "spring" }} whileHover={{ x: 5 }} className="flex items-start gap-3 group cursor-default">
                                    <span className="text-sm shrink-0 mt-0.5">{r.icon}</span>
                                    <span className="text-slate-600 text-sm group-hover:text-slate-900 transition-colors duration-300">{r.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
