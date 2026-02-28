import React from 'react';

export const IconCaduceus = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 2L12 22" stroke="currentColor"/>
        <path d="M12 6C15 6 17 8 17 10C17 13 14 15 12 16" />
        <path d="M12 6C9 6 7 8 7 10C7 13 10 15 12 16" />
        <path d="M12 16C15 16 18 17 18 19" />
        <path d="M12 16C9 16 6 17 6 19" />
        <path d="M5 2L8 4" stroke="#D4AF37" strokeWidth="2"/>
        <path d="M19 2L16 4" stroke="#D4AF37" strokeWidth="2"/>
        <circle cx="12" cy="4" r="1" fill="#D4AF37" stroke="none"/>
    </svg>
);

export const IconStethoscope = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M4.8 2.3A.3.3 0 1 0 5.2 2a.3.3 0 0 0-.4.3Z"/>
        <path d="M19 14v1a6 6 0 0 1-12 0v-3"/>
        <path d="M7 12V7a5 5 0 0 1 10 0v5"/>
        <path d="M13 19h8"/>
        <path d="M5 2v2"/>
        <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0-4 0"/>
    </svg>
);

export const IconSleep = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M2 22h20"/>
        <path d="M2 12h20"/>
        <path d="M13 6h7"/>
        <path d="M16 3h4"/>
        <path d="M4 12v-3a4 4 0 0 1 4-4h2"/>
        <path d="M4 17v-5"/>
        <path d="M20 17v-5"/>
    </svg>
);

export const IconUltrasound = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M2 12h2.5L7 4l5 16l5-12l2.5 4H22"/>
        <rect x="3" y="3" width="18" height="18" rx="2" strokeOpacity="0.3"/>
    </svg>
);

export const IconStar = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="#D4AF37" stroke="#D4AF37" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={className}>
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