import React from 'react';
import { motion } from 'framer-motion';

export const IconCaduceus = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 2L12 22" stroke="currentColor"/>
        <path d="M12 6C15 6 17 8 17 10C17 13 14 15 12 16" />
        <path d="M12 6C9 6 7 8 7 10C7 13 10 15 12 16" />
        <path d="M12 16C15 16 18 17 18 19" />
        <path d="M12 16C9 16 6 17 6 19" />
        <path d="M5 2L8 4" stroke="#348984" strokeWidth="2"/>
        <path d="M19 2L16 4" stroke="#348984" strokeWidth="2"/>
        <circle cx="12" cy="4" r="1" fill="#348984" stroke="none"/>
    </svg>
);

export const IconStethoscope = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <motion.g
            animate={{ scale: [1, 1.04, 1], opacity: [0.12, 1, 0.12] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            style={{ transformOrigin: "12px 12px" }}
        >
            <path d="M5 3v2c0 2.2 1.8 4 4 4h6c2.2 0 4-1.8 4-4V3" />
            <path d="M4 3h2" />
            <path d="M18 3h2" />
            <path d="M12 9v3" />
            {/* Heart shaped stethoscope loop */}
            <path d="M12 12c-2 0-4 1.5-4 3.5s2.5 4.5 4 4.5 4-2.5 4-4.5-2-3.5-4-3.5Z" />
            <circle cx="12" cy="15.5" r="1.5" fill="currentColor" />
        </motion.g>
    </svg>
);

export const IconSleep = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        {/* Serene Crescent Moon */}
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
        {/* Twinkling Star 1 (Larger four-pointed sparkle star in front) */}
        <motion.path 
            d="M 17 3 Q 17 6 20 6 Q 17 6 17 9 Q 17 6 14 6 Q 17 6 17 3 Z" 
            fill="currentColor" 
            stroke="none"
            animate={{ opacity: [0.1, 1, 0.1], scale: [0.75, 1.2, 0.75] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
            style={{ transformOrigin: "17px 6px" }}
        />
        {/* Twinkling Star 2 (Larger four-pointed sparkle star overlapping/in front of crescent body) */}
        <motion.path 
            d="M 13 10 Q 13 13 16 13 Q 13 13 13 16 Q 13 13 10 13 Q 13 13 13 10 Z" 
            fill="currentColor" 
            stroke="none"
            animate={{ opacity: [0.05, 0.9, 0.05], scale: [0.65, 1.1, 0.65] }}
            transition={{ repeat: Infinity, duration: 2.6, delay: 0.5, ease: "easeInOut" }}
            style={{ transformOrigin: "13px 13px" }}
        />
        {/* Floating sleep waves (Zzz) */}
        <motion.path 
            d="M8 8h2.5l-2.5 2.5h2.5" 
            stroke="currentColor" 
            strokeWidth="0.8"
            animate={{ y: [0, -2, -4], x: [0, 1.5, 3], opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 3.2, delay: 0.2, ease: "linear" }}
        />
        <motion.path 
            d="M6 12h1.8l-1.8 1.8h1.8" 
            stroke="currentColor" 
            strokeWidth="0.6"
            animate={{ y: [0, -1.5, -3], x: [0, -1, -2], opacity: [0, 0.8, 0] }}
            transition={{ repeat: Infinity, duration: 3.2, delay: 1.8, ease: "linear" }}
        />
    </svg>
);

export const IconUltrasound = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        {/* Ultrasound Transducer Probe pointing to bottom left */}
        <path d="m14 3 7 7-3 3-7-7 3-3Z" />
        <path d="M16 5l1.5 1.5" />
        <path d="m11 6-7 7" strokeOpacity="0.4" />
        <path d="m14.5 12.5 1 1" />
        
        {/* Ultrasonic sonar waves radiating from transducer head */}
        <motion.path 
            d="M9 13.5c-1.2 1.2-1.2 3.2 0 4.4" 
            stroke="currentColor"
            animate={{ opacity: [0.2, 1, 0.2], scale: [0.95, 1.05, 0.95] }}
            transition={{ repeat: Infinity, duration: 2.5, delay: 0, ease: "easeInOut" }}
            style={{ transformOrigin: "11.2px 11.2px" }}
        />
        <motion.path 
            d="M6.5 11c-2.4 2.4-2.4 6.4 0 8.8" 
            stroke="currentColor"
            animate={{ opacity: [0.1, 0.8, 0.1], scale: [0.95, 1.05, 0.95] }}
            transition={{ repeat: Infinity, duration: 2.5, delay: 0.8, ease: "easeInOut" }}
            style={{ transformOrigin: "11.2px 11.2px" }}
        />
        <motion.path 
            d="M4 8.5C0 12.5 0 19 4 23" 
            stroke="currentColor"
            animate={{ opacity: [0.05, 0.6, 0.05], scale: [0.95, 1.05, 0.95] }}
            transition={{ repeat: Infinity, duration: 2.5, delay: 1.6, ease: "easeInOut" }}
            style={{ transformOrigin: "11.2px 11.2px" }}
        />
    </svg>
);

export const IconStar = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
);

export const IconCheck = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

export const IconMenu = ({ className }: { className?: string }) => (
     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="4" x2="20" y1="12" y2="12"/>
        <line x1="4" x2="20" y1="6" y2="6"/>
        <line x1="4" x2="20" y1="18" y2="18"/>
    </svg>
);

export const IconClose = ({ className }: { className?: string }) => (
     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M18 6 6 18"/>
        <path d="m6 6 12 12"/>
    </svg>
);

export const IconChevronDown = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="m6 9 6 6 6-6"/>
    </svg>
);

export const IconPhone = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.03 12.03 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
);

export const IconMapPin = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
        <circle cx="12" cy="10" r="3"/>
    </svg>
);

export const IconArrowUp = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 19V5"/>
        <path d="m5 12 7-7 7 7"/>
    </svg>
);