"use client";

import { motion } from "framer-motion";

const socialLinks = [
    {
        href: "https://www.linkedin.com/in/dr-subash-ranjan-kabat-203782b4/",
        label: "LinkedIn",
        icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        href: "https://scholar.google.com/citations?user=E83xzwYAAAAJ&hl=en",
        label: "Google Scholar",
        icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 100 14 7 7 0 000-14z" />
            </svg>
        ),
    },
    {
        href: "https://orcid.org/my-orcid?orcid=0000-0003-3535-1815",
        label: "ORCID",
        icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 01-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-1.847-1.247-3.722-3.891-3.722h-2.428z" />
            </svg>
        ),
    },
    {
        href: "https://www.researchgate.net/profile/Dr-Subash-Kabat?ev=hdr_xprf",
        label: "ResearchGate",
        icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.586 0c-1.37 0-2.086.925-2.086 2.086 0 1.086.706 2.086 2.086 2.086 1.37 0 2.086-.925 2.086-2.086C21.672.925 20.956 0 19.586 0zM4.414 5C1.586 5 0 7.665 0 10.586c0 4.276 3.178 7.414 7.414 7.414 2.83 0 4.414-2.585 4.414-5.414 0-3.49-2.13-5.13-4.172-5.13-1.285 0-2.242.714-2.242.714s.375-2.13 2.571-2.13c.625 0 .938.375.938.938 0 .526-.125.89-.125.89h2.063s.313-1.063.313-1.813C11.174 4.014 9.938 5 7.414 5H4.414zm15.172.828v12.344h-2.086v-4.172h-2.086l-2.086 4.172H11.07l2.293-4.496c-1.214-.569-2.086-1.862-2.086-3.52 0-2.483 1.69-4.328 4.172-4.328h4.137zm-4.172 2.086c-1.214 0-2.086.871-2.086 2.086s.872 2.086 2.086 2.086h2.086V7.914h-2.086z" />
            </svg>
        ),
    },
    {
        href: "https://ieee-collabratec.ieee.org/app/p/SUBASHRANJANKabat430811",
        label: "IEEE",
        icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.2 1.6C1.4 1.6 0 3 0 4.8v14.4C0 21 1.4 22.4 3.2 22.4h17.6c1.8 0 3.2-1.4 3.2-3.2V4.8c0-1.8-1.4-3.2-3.2-3.2H3.2zm1.3 5.6h2.3v9.6H4.5V7.2zm4.1 0h6.8v2H10.9v1.8h3.9v1.8h-3.9v2h4.7v2H8.6V7.2zm8.5 0h6.8v2h-4.5v1.8h3.9v1.8h-3.9v2h4.7v2h-7V7.2z" />
            </svg>
        ),
    },
];

export default function Footer() {
    return (
        <footer className="relative pt-12 pb-8 px-6">
            {/* Animated gradient divider */}
            <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{
                    background:
                        "linear-gradient(90deg, transparent, var(--color-electric-500), var(--color-teal-500), var(--color-gold-400), var(--color-teal-500), var(--color-electric-500), transparent)",
                    backgroundSize: "200% 100%",
                    animation: "border-flow 4s linear infinite",
                }}
            />

            <div className="max-w-6xl mx-auto">
                {/* Social icons row */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center gap-3 mb-8"
                >
                    {socialLinks.map((link, i) => (
                        <motion.a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.06 }}
                            whileHover={{ scale: 1.2, y: -3 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-[var(--color-electric-500)] hover:border-blue-300 hover:bg-blue-50 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300"
                            title={link.label}
                        >
                            {link.icon}
                        </motion.a>
                    ))}
                </motion.div>

                {/* Bottom row */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-slate-500 text-sm"
                    >
                        © 2026 Dr. Subash Ranjan Kabat. All rights reserved.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-slate-500 text-xs flex items-center gap-1.5"
                    >
                        Built with
                        <span className="inline-flex items-center gap-1">
                            <span className="text-slate-900 font-medium">Next.js</span>
                            <span className="text-slate-300">•</span>
                            <span className="text-[var(--color-teal-500)] font-medium">Tailwind CSS</span>
                            <span className="text-slate-300">•</span>
                            <span className="text-[var(--color-electric-500)] font-medium">Framer Motion</span>
                        </span>
                    </motion.p>
                </div>
            </div>
        </footer>
    );
}
