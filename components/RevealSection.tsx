import React from 'react';
import { motion } from 'framer-motion';

interface RevealSectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

const RevealSection = ({ children, className, id }: RevealSectionProps) => (
    <motion.section 
        id={id}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={className}
    >
        {children}
    </motion.section>
);

export default RevealSection;