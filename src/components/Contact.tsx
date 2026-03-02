"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const contactInfo = [
    {
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
        ),
        label: "Phone",
        value: "+91 9556089043 / 7008564002",
        href: "tel:+919556089043",
    },
    {
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        label: "Email",
        value: "subashkabat198@gmail.com",
        href: "mailto:subashkabat198@gmail.com",
    },
    {
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        label: "Address",
        value: "3139, Adarsh Vihar, Lane-2, Patia, Bhubaneswar, Odisha-751024",
        href: null,
    },
    {
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
        label: "Institution",
        value: "Radhakrishna Institute of Technology & Engineering (RITE), Bhubaneswar",
        href: null,
    },
];

export default function Contact() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="contact" className="py-24 sm:py-32 px-6 relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(59,130,246,0.2)] to-transparent" />

            {/* Background decoration */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[var(--color-electric-300)] rounded-full blur-[200px] opacity-[0.05] pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-[var(--color-electric-500)] text-sm font-semibold tracking-widest uppercase mb-4 block">
                        Get in Touch
                    </span>
                    <h2 className="section-heading gradient-text">Contact Me</h2>
                    <p className="section-subheading mx-auto mt-4">
                        Open to academic collaborations, research partnerships, and speaking opportunities.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 gap-5">
                    {contactInfo.map((item, i) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                        >
                            {item.href ? (
                                <a
                                    href={item.href}
                                    className="glass-card p-4 sm:p-6 flex items-start gap-4 group block"
                                >
                                    <span className="shrink-0 w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[var(--color-electric-500)] group-hover:bg-blue-100 transition-colors">
                                        {item.icon}
                                    </span>
                                    <div>
                                        <p className="text-slate-500 text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-1 mt-0.5">{item.label}</p>
                                        <p className="text-slate-900 text-sm group-hover:text-[var(--color-electric-500)] transition-colors break-all">
                                            {item.value}
                                        </p>
                                    </div>
                                </a>
                            ) : (
                                <div className="glass-card p-4 sm:p-6 flex items-start gap-4">
                                    <span className="shrink-0 w-10 h-10 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center text-[var(--color-teal-500)]">
                                        {item.icon}
                                    </span>
                                    <div>
                                        <p className="text-slate-500 text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-1 mt-0.5">{item.label}</p>
                                        <p className="text-slate-700 text-sm">{item.value}</p>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Research Profiles */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="mt-10"
                >
                    <h3 className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-5">Research Profiles</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { name: "LinkedIn", href: "https://www.linkedin.com/in/dr-subash-ranjan-kabat-203782b4/", id: "Dr. Subash Ranjan Kabat", color: "rgba(10,102,194,", icon: "💼" },
                            { name: "Google Scholar", href: "https://scholar.google.com/citations?user=E83xzwYAAAAJ&hl=en", id: "Citation Profile", color: "rgba(66,133,244,", icon: "🎓" },
                            { name: "ORCID", href: "https://orcid.org/my-orcid?orcid=0000-0003-3535-1815", id: "0000-0003-3535-1815", color: "rgba(166,206,57,", icon: "🔗" },
                            { name: "Scopus", href: "https://www.scopus.com/authid/detail.uri?authorId=57222732793", id: "Author ID: 57222732793", color: "rgba(232,119,34,", icon: "📊" },
                            { name: "ResearchGate", href: "https://www.researchgate.net/profile/Dr-Subash-Kabat?ev=hdr_xprf", id: "Dr-Subash-Kabat", color: "rgba(0,204,187,", icon: "🔬" },
                            { name: "Vidwan", href: "https://vidwan.inflibnet.ac.in/profile/603959", id: "Profile ID: 603959", color: "rgba(138,43,226,", icon: "📚" },
                            { name: "IEEE Collabratec", href: "https://ieee-collabratec.ieee.org/app/p/SUBASHRANJANKabat430811", id: "IEEE Member Profile", color: "rgba(0,98,152,", icon: "⚡" },
                        ].map((profile, i) => (
                            <motion.a
                                key={profile.name}
                                href={profile.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.03, y: -3 }}
                                whileTap={{ scale: 0.97 }}
                                className="glass-card p-5 flex items-center gap-4 group gradient-border cursor-pointer"
                            >
                                <span className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-lg"
                                    style={{ background: `${profile.color}0.1)`, border: `1px solid ${profile.color}0.25)` }}
                                >
                                    {profile.icon}
                                </span>
                                <div className="min-w-0">
                                    <p className="text-slate-900 text-sm font-bold group-hover:text-[var(--color-electric-500)] transition-colors">{profile.name}</p>
                                    <p className="text-slate-500 text-xs truncate">{profile.id}</p>
                                </div>
                                <svg className="w-4 h-4 ml-auto text-slate-400 group-hover:text-slate-900 group-hover:translate-x-1 transition-all shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
