import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { IconCaduceus, IconStethoscope } from './Icons';

const About = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        // Adjusted offsets: 
        // Starts when top of section hits bottom of viewport ("start end")
        // Ends when center of section hits 60% down the viewport ("center 60%")
        // This makes the reveal complete "earlier" (less scrolling required) than "center center"
        offset: ["start end", "center 60%"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [150, 0]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section ref={sectionRef} id="about" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image Side */}
                    <div className="relative lg:w-[60%] lg:mx-auto">
                        <motion.div 
                            style={{ y, opacity }}
                            className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-gold-500"
                        >
                            <img 
                                src="https://storage.googleapis.com/msgsndr/yOZCxFbRfglrxiIQQquF/media/698026371f68d1ab00ebdff4.png" 
                                alt="Dr. Zainulabuddin Syed, MD" 
                                className="w-full h-auto object-cover bg-gray-100"
                                loading="lazy"
                            />
                        </motion.div>
                    </div>

                    {/* Content Side */}
                    <motion.div style={{ y, opacity }}>
                        <h2 className="font-serif text-4xl text-navy-900 font-bold mb-6">Meet Dr. Zainulabuddin Syed, MD</h2>
                        <div className="w-16 h-1 bg-gold-500 mb-8"></div>
                        
                        <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                            Dr. Zainulabuddin Syed is a Board-Certified Internist with over 20 years of experience. He graduated from Gandhi Medical College Osmania University and completed his residencies at Advocate Christ Medical Center.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                            Affiliated with AMITA Health Adventist Medical Center Hinsdale, Elmhurst Memorial Hospital, AMITA Health Adventist Medical Center GlenOaks, and Advocate Good Samaritan Hospital, he prioritizes mutual respect, honesty, and open communication with every patient. He is fluent in English, Urdu, Hindi, and Arabic.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                            <div className="flex items-start gap-3">
                                <div className="bg-navy-50 p-2 rounded text-navy-800 mt-1">
                                    <IconCaduceus className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-navy-900">20+ Years</h4>
                                    <p className="text-sm text-gray-500">Medical Experience</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="bg-navy-50 p-2 rounded text-navy-800 mt-1">
                                    <IconStethoscope className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-navy-900">Board Certified</h4>
                                    <p className="text-sm text-gray-500">Internal Medicine</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;