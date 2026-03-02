"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorGlow() {
    const [position, setPosition] = useState({ x: -200, y: -200 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Only show on devices with a fine pointer (no touch)
        const mediaQuery = window.matchMedia("(pointer: fine)");
        if (!mediaQuery.matches) return;

        setIsVisible(true);

        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseLeave = () => {
            setPosition({ x: -200, y: -200 });
        };

        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <motion.div
            className="fixed pointer-events-none z-[90]"
            animate={{
                x: position.x - 200,
                y: position.y - 200,
            }}
            transition={{
                type: "spring",
                damping: 25,
                stiffness: 150,
                mass: 0.5,
            }}
            style={{
                width: 400,
                height: 400,
                borderRadius: "50%",
                background:
                    "radial-gradient(circle, rgba(59,130,246,0.12) 0%, rgba(20,184,166,0.06) 40%, transparent 70%)",
            }}
        />
    );
}
