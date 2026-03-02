"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const publications = [
    { title: "Fuzzy logic based fault current prediction in DFIG based wind turbine system", authors: "S. R. Kabat, C. K. Panigrahi, B. P. Ganthia", venue: "Materials Today: Proceedings", year: 2023, type: "journal" },
    { title: "Non-intrusive load monitoring technique using deep neural networks for energy disaggregation", authors: "S. R. Kabat, D. Jayashree, K. G. S. Venkatesan, H. B. Venkata", venue: "Materials Today: Proceedings", year: 2021, type: "journal" },
    { title: "Computationally Fast PSO Power System Stabilizer Design for Interconnected Multimachine Power System", authors: "S. R. Kabat, C. K. Panigrahi, A. Kumar", venue: "IEEE ICEES 2021", year: 2021, type: "conference" },
    { title: "Fuzzy Logic and SRF Controlled LVRT Enhancement in Wind Energy System using DVR", authors: "S. R. Kabat, C. K. Panigrahi", venue: "Turkish Journal of Computer and Mathematics Education", year: 2021, type: "journal" },
    { title: "Implementation and Analysis of Drive Train System in Type III Wind Turbines Using CFD", authors: "S. R. Kabat, C. K. Panigrahi, B. P. Ganthia, S. K. Barik, B. Nayak", venue: "Advances in Science and Technology Research Journal", year: 2022, type: "journal" },
    { title: "Cloud Based Electric Vehicle's Temperature Monitoring System Using IOT", authors: "S. V. N. Sreenivasu, T. S. Kumar, O. B. Hussain, A. R. Yeruva, S. R. Kabat, A. Chaturvedi", venue: "Cybernetics and Systems", year: 2023, type: "journal" },
    { title: "Power Quality and LVRT Enhancement using UPQC", authors: "S. Kabat, C. Panigrahi", venue: "ECS Transactions", year: 2022, type: "journal" },
    { title: "Improvement of LVRT Using PSS for Grid Connected DFIG Based WECS", authors: "S. R. Kabat, S. Pahadsingh, K. Jena", venue: "IEEE ICIDeA 2022", year: 2022, type: "conference" },
    { title: "Enhancing Smart Grid Security: Detecting Electricity Theft through Ensemble Deep Learning", authors: "S. C S, V. R, P. Mannam, L. Mounika, S. R. Kabat, J. P. Patra", venue: "IEEE ICCES 2023", year: 2023, type: "conference" },
    { title: "Energy Management Analysis of Residential Building Using ANN Techniques", authors: "L. K. Sahoo, M. Ray, S. Panda, S. R. Kabat, S. Dash", venue: "IJEEI", year: 2023, type: "journal" },
    { title: "A 3-Φ Switched-Capacitor-Based Multilevel Inverter with Reduced Voltage Stress", authors: "K. Jena, K. K. Gupta, D. Kumar, N. K. Dewangan, S. R. Kabat", venue: "Electrical Engineering (Springer)", year: 2023, type: "journal" },
    { title: "Optimal Scheduling of Renewable Sources Based Micro Grid Using Giant Trevally Optimizer", authors: "S. Bhol, N. C. Sahu, S. R. Kabat", venue: "Journal of Propulsion Technology", year: 2023, type: "journal" },
    { title: "Single-Stage Single-Phase 5-Level Switched-Capacitor Multilevel Inverter", authors: "K. Jena, K. K. Gupta, D. Kumar, S. R. Kabat", venue: "Iranian Journal of Science and Technology", year: 2024, type: "journal" },
    { title: "Energy Management In Hybrid PV-Wind-Battery Storage-Based Microgrid Using Droop Control", authors: "B. P. Ganthia, B. M. Praveen, S. R. Kabat et al.", venue: "J. Mech. Contin. Math. Sci.", year: 2024, type: "journal" },
    { title: "A High-Efficiency Seven-Level Inverter with Self-Balanced Switched-Capacitor Topology", authors: "S. R. Kabat et al.", venue: "J. Mech. Contin. Math. Sci.", year: 2025, type: "journal" },
    { title: "Harnessing Artificial Intelligence for Global Sustainability: A Cross-Sectoral Analysis", authors: "S. R. Kabat", venue: "Universal Journal of Advanced Studies", year: 2025, type: "journal" },
    { title: "Precision Farming and Smart Agriculture: Transforming Crop Production", authors: "S. R. Kabat", venue: "Agricultural Innovation and Sustainability Journal", year: 2025, type: "journal" },
    { title: "Renewable Energy in Agriculture: Exploring Solar and Bioenergy Solutions", authors: "S. R. Kabat", venue: "Agricultural Innovation and Sustainability Journal", year: 2025, type: "journal" },
];

export default function Publications() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const [showAll, setShowAll] = useState(false);
    const displayed = showAll ? publications : publications.slice(0, 6);

    return (
        <section id="publications" className="py-24 sm:py-32 px-6 relative section-aurora">
            {/* Background lights */}
            <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-[var(--color-electric-300)] rounded-full blur-[200px] opacity-[0.04] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-purple-300 rounded-full blur-[180px] opacity-[0.03] pointer-events-none" />

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
                        className="inline-block text-[var(--color-teal-500)] text-sm font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200"
                    >
                        ✦ Research
                    </motion.span>
                    <h2 className="section-heading shimmer-text">Publications</h2>
                    <p className="section-subheading mx-auto mt-4">
                        32+ papers published in <span className="text-[var(--color-electric-500)]">IEEE</span>,{" "}
                        <span className="text-[var(--color-teal-500)]">Elsevier</span>,{" "}
                        <span className="text-[var(--color-gold-500)]">Springer</span>, and other international journals & conferences.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-5">
                    {displayed.map((pub, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 25, scale: 0.95 }}
                            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 + (i % 6) * 0.08, type: "spring" }}
                            whileHover={{ scale: 1.02, y: -3 }}
                            className="glass-card p-6 group gradient-border"
                        >
                            <div className="flex items-start gap-4">
                                <motion.span
                                    whileHover={{ rotate: 10, scale: 1.1 }}
                                    className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold"
                                    style={{
                                        background: pub.type === "conference" ? "rgba(20,184,166,0.1)" : "rgba(59,130,246,0.1)",
                                        border: pub.type === "conference" ? "1px solid rgba(20,184,166,0.2)" : "1px solid rgba(59,130,246,0.2)",
                                        color: pub.type === "conference" ? "var(--color-teal-400)" : "var(--color-electric-400)",
                                    }}
                                >
                                    {i + 1}
                                </motion.span>
                                <div className="min-w-0">
                                    <h3 className="text-slate-900 text-[15px] font-semibold leading-snug mb-2 group-hover:text-[var(--color-electric-500)] transition-colors duration-300 line-clamp-2">
                                        {pub.title}
                                    </h3>
                                    <p className="text-slate-600 text-xs mb-1.5 line-clamp-1">{pub.authors}</p>
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <span className="text-[var(--color-teal-500)] text-xs font-medium">{pub.venue}</span>
                                        <span className="text-slate-300 text-xs">•</span>
                                        <span className="text-[var(--color-gold-500)] text-xs font-semibold">{pub.year}</span>
                                        <span
                                            className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full"
                                            style={{
                                                background: pub.type === "conference" ? "rgba(20,184,166,0.1)" : "rgba(59,130,246,0.08)",
                                                color: pub.type === "conference" ? "var(--color-teal-400)" : "var(--color-electric-400)",
                                                border: `1px solid ${pub.type === "conference" ? "rgba(20,184,166,0.2)" : "rgba(59,130,246,0.15)"}`,
                                            }}
                                        >
                                            {pub.type === "conference" ? "Conf" : "Journal"}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {publications.length > 6 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.8 }}
                        className="text-center mt-10"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => setShowAll(!showAll)}
                            className="px-8 py-3.5 rounded-xl text-sm font-semibold border border-slate-300 text-slate-800 hover:bg-slate-50 hover:border-slate-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all duration-300"
                        >
                            {showAll ? "Show Less ↑" : `Show All ${publications.length} Publications ↓`}
                        </motion.button>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
