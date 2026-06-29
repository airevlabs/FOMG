import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { IconCaduceus, IconMenu, IconClose } from './Icons';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (link: { name: string, id: string }) => {
        setIsOpen(false);
        if (link.id === 'faq') {
            navigate('/faq');
        } else if (link.id === 'contact') {
            navigate('/contact');
        } else {
            if (location.pathname !== '/') {
                navigate('/');
                setTimeout(() => {
                    if (link.id === 'home') {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                        const element = document.getElementById(link.id);
                        if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                        }
                    }
                }, 150);
            } else {
                if (link.id === 'home') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                    const element = document.getElementById(link.id);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            }
        }
    };

    const navLinks = [
        { name: 'Home', id: 'home' },
        { name: 'Services', id: 'services' },
        { name: 'Meet the Team', id: 'about' },
        { name: 'Testimonials', id: 'testimonials' },
        { name: 'FAQs', id: 'faq' },
        { name: 'Contact', id: 'contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-5'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <button onClick={() => handleNavClick({ name: 'Home', id: 'home' })} className="flex items-center group py-1">
                    <img 
                        src="https://assets.cdn.filesafe.space/CkE5C5Zmu29G0YcduBpD/media/6a41cc4dc408020f971b8ee0.png" 
                        alt="Fairview Ogden Medical Group Logo" 
                        className="h-[70px] md:h-[90px] w-auto object-contain transition-transform group-hover:scale-105"
                    />
                </button>
 
                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <button 
                            key={link.name} 
                            onClick={() => handleNavClick(link)}
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
                    className="lg:hidden text-navy-800 p-3 -mr-3 focus:outline-none focus:ring-2 focus:ring-gold-500 rounded-lg transition-colors"
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
                                    onClick={() => handleNavClick(link)}
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