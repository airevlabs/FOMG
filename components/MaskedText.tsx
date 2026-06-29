import React from 'react';
import { motion } from 'framer-motion';

interface MaskedTextProps {
    text: string;
    className?: string;
    tag?: 'h1' | 'h2' | 'h3' | 'span';
    once?: boolean;
    align?: 'center' | 'left';
}

const MaskedText: React.FC<MaskedTextProps> = ({ text, className = '', tag = 'h2', once = true, align = 'center' }) => {
    const Tag = tag;
    const words = text.split(' ');

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1
            }
        }
    };

    const childVariants = {
        hidden: { y: '110%' },
        visible: {
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 18
            }
        }
    };

    return (
        <Tag className={className}>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once, amount: 0.4 }}
                className={`flex flex-wrap ${align === 'center' ? 'justify-center text-center mx-auto' : 'justify-start text-left'}`}
            >
                {words.map((word, index) => (
                    <span key={index} className="inline-block overflow-hidden mr-[0.25em] pb-[0.15em] -mb-[0.15em]">
                        <motion.span variants={childVariants} className="inline-block">
                            {word === '&' || word === '&amp;' ? '&' : word}
                        </motion.span>
                    </span>
                ))}
            </motion.div>
        </Tag>
    );
};

export default MaskedText;
