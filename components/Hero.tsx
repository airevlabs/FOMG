import React from 'react';
import { motion } from 'framer-motion';
import MaskedText from './MaskedText';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-[700px] lg:min-h-screen flex items-center pt-36 pb-20 lg:pt-48 lg:pb-36 bg-hero-pattern overflow-hidden">
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
                    {/* Left Column: Text Content */}
                    <div className="lg:col-span-5 max-w-xl order-2 lg:order-1 flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <MaskedText 
                                text="Expert Internal Medicine & Sleep Care in Downers Grove" 
                                className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 leading-[1.15] mb-6" 
                                tag="h1" 
                                align="left"
                            />
                            <p className="text-lg md:text-xl text-navy-800 mb-3 font-semibold">
                                Fairview Ogden Medical Group: Board Certified Primary Care Physicians and Onsite Sleep Lab Services with Over 80 Years of Combined Medical Expertise
                            </p>
                            <p className="text-base md:text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
                                Looking for comprehensive adult and geriatric medicine near you? Our clinical team provides expert care for everything from common colds and acute infections to complex chronic diseases, diagnostic sleep studies, and onsite imaging, including Echocardiograms, Doppler tests, and pelvic ultrasounds, ensuring complete wellness care under one roof.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4">
                                <motion.a 
                                    href="https://livewell.aah.org/chart/openscheduling/standalone?id=85929"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -3 }}
                                    className="bg-gold-500 text-white px-8 py-4 rounded shadow-lg hover:bg-gold-600 hover:shadow-gold-500/20 transition-all font-semibold text-center flex items-center justify-center gap-2"
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

                    {/* Right Column: Doctor Image (Sized to match text, rounded and faded from left) */}
                    <div className="lg:col-span-7 w-full flex justify-end order-1 lg:order-2">
                        <motion.div 
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative w-full h-[450px] lg:h-full lg:min-h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white"
                        >
                            <img 
                                src="https://assets.cdn.filesafe.space/CkE5C5Zmu29G0YcduBpD/media/6a41cc4dc492ddc24ce633fc.png" 
                                alt="Doctors of Fairview Ogden Medical Group" 
                                className="w-full h-full object-cover object-top opacity-95 hover:opacity-100 transition-opacity duration-300" 
                            />
                            {/* Fade overlay: blends the left side of the image with the text column */}
                            <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/10 to-transparent pointer-events-none w-1/2"></div>
                            {/* Subtle dark vignette at the bottom for depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/5 via-transparent to-transparent pointer-events-none"></div>
                        </motion.div>
                    </div>
                </div>
            </div>
            {/* Decorative Background Element */}
            <div className="absolute right-0 bottom-0 w-1/3 h-1/2 bg-gradient-to-t from-blue-50/30 to-transparent opacity-50 pointer-events-none z-0"></div>
        </section>
    );
};

export default Hero;