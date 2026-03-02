"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 z-[100] h-[3px] origin-left"
            style={{
                scaleX,
                background:
                    "linear-gradient(90deg, var(--color-electric-500), var(--color-teal-500), var(--color-gold-500))",
                boxShadow:
                    "0 0 10px rgba(59,130,246,0.5), 0 0 20px rgba(59,130,246,0.2)",
            }}
        />
    );
}
