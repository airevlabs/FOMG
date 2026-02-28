import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const { scrollY } = useScroll();
    // Move right as user scrolls down [0px scroll -> 0px x], [500px scroll -> 800px x]
    const xMove = useTransform(scrollY, [0, 500], [0, 800]);
    // Fade out as user scrolls down
    const opacity = useTransform(scrollY, [0, 400], [1, 0]);

    const bgImage = "https://storage.googleapis.com/msgsndr/yOZCxFbRfglrxiIQQquF/media/698051be1f68d1593ff8315b.png";

    return (
        <section id="home" className="relative min-h-[650px] flex items-center pt-28 pb-12 bg-hero-pattern overflow-hidden">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
                <img 
                    src={bgImage} 
                    alt="" 
                    className="w-full h-full object-cover opacity-20 mix-blend-multiply" 
                />
            </div>

            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-white/95 via-white/80 to-white/10 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl">
                    <motion.div
                        style={{ x: xMove, opacity }}
                    >
                        <span className="inline-block py-1 px-3 border border-navy-800/20 rounded-full text-navy-800 text-xs font-semibold uppercase tracking-wider mb-6 bg-white/50 backdrop-blur-sm animate-pulse">
                            Trusted Medical Practice in Downers Grove
                        </span>
                        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-navy-900 leading-[1.1] mb-6">
                            Expert Internal Medicine <span className="text-gold-500">&amp;</span> Sleep Care
                        </h1>
                        <p className="text-xl text-gray-600 mb-2 font-medium">
                            Led by Dr. Zainulabuddin Syed, MD – 20+ Years of Trusted Care
                        </p>
                        <p className="text-lg text-gray-500 mb-8 max-w-xl leading-relaxed">
                            Providing compassionate care from common colds to complex conditions, sleep disorders, and onsite ultrasounds.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            <motion.a 
                                href="https://livewell.aah.org/chart/openscheduling/standalone?id=85929"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -3 }}
                                className="bg-navy-800 text-white px-8 py-4 rounded shadow-lg hover:bg-navy-700 hover:shadow-navy-800/20 transition-all font-semibold text-center flex items-center justify-center gap-2"
                            >
                                Book Appointment
                            </motion.a>
                            <motion.a 
                                href="#services"
                                whileHover={{ y: -3 }}
                                className="bg-white text-navy-800 border border-navy-200 px-8 py-4 rounded shadow-sm hover:shadow-md transition-all font-medium text-center"
                            >
                                View Services
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>
            {/* Decorative Background Element */}
            <div className="absolute right-0 bottom-0 w-1/3 h-1/2 bg-gradient-to-t from-blue-50 to-transparent opacity-50 pointer-events-none z-0"></div>
        </section>
    );
};

export default Hero;