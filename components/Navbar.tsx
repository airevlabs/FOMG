import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconCaduceus, IconMenu, IconClose } from './Icons';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    const navLinks = [
        { name: 'Home', id: 'home' },
        { name: 'Meet Dr. Syed', id: 'about' },
        { name: 'Services', id: 'services' },
        { name: 'Testimonials', id: 'testimonials' },
        { name: 'FAQs', id: 'faq' },
        { name: 'Contact', id: 'contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-5'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <button onClick={() => scrollToSection('home')} className="flex items-center gap-3 group">
                    <div className="w-12 h-12 bg-navy-800 rounded-full flex items-center justify-center text-gold-500 transition-transform group-hover:scale-110">
                        <IconCaduceus className="w-8 h-8" />
                    </div>
                    <div className="text-left">
                        <h1 className="font-serif text-2xl font-bold text-navy-800 leading-tight">Fairview Ogden</h1>
                        <p className="text-xs tracking-widest uppercase text-gold-600 font-semibold">Medical Group</p>
                    </div>
                </button>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <button 
                            key={link.name} 
                            onClick={() => scrollToSection(link.id)}
                            className="text-navy-900 text-sm font-medium hover:text-gold-600 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-gold-500 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                        >
                            {link.name}
                        </button>
                    ))}
                    <motion.a 
                        href="https://livewell.aah.org/chart/openscheduling/standalone?id=85929"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gold-500 text-white px-6 py-2.5 rounded shadow-lg hover:bg-gold-600 hover:shadow-xl transition-all font-medium text-sm tracking-wide"
                    >
                        Book Appointment
                    </motion.a>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="lg:hidden text-navy-800"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <IconClose className="w-6 h-6" /> : <IconMenu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <button 
                                    key={link.name} 
                                    onClick={() => scrollToSection(link.id)}
                                    className="text-navy-900 text-lg font-medium border-b border-gray-50 pb-2 text-left"
                                >
                                    {link.name}
                                </button>
                            ))}
                            <a 
                                href="https://livewell.aah.org/chart/openscheduling/standalone?id=85929"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gold-500 text-white text-center py-3 rounded mt-2 font-medium"
                            >
                                Book Appointment
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;