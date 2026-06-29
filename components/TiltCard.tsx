import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
}

const TiltCard: React.FC<TiltCardProps> = ({ children, className = '' }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Spring physics configuration for lag-free responsiveness
    const springSetting = { stiffness: 150, damping: 18 };
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), springSetting);
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), springSetting);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        // Skip computations on touchscreens (coarse pointers) for performance
        if (window.matchMedia("(pointer: coarse)").matches) return;

        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left - width / 2;
        const mouseY = e.clientY - rect.top - height / 2;

        x.set(mouseX / width);
        y.set(mouseY / height);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
                perspective: '1000px',
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={className}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.98 }}
        >
            <div style={{ transform: 'translateZ(25px)', transformStyle: 'preserve-3d' }}>
                {children}
            </div>
        </motion.div>
    );
};

export default TiltCard;
