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
                                src="https://assets.cdn.filesafe.space/CkE5C5Zmu29G0YcduBpD/media/69c67b473204cc11562de55c.jpeg" 
                                alt="Dr. Abdul-Bari Syed, DO" 
                                className="w-full h-auto object-cover bg-gray-100"
                                loading="lazy"
                            />
                        </motion.div>
                    </div>

                    {/* Content Side */}
                    <motion.div style={{ y, opacity }}>
                        <h2 className="font-serif text-4xl text-navy-900 font-bold mb-6">Meet Dr. Abdul-Bari Syed, DO</h2>
                        <div className="w-16 h-1 bg-gold-500 mb-8"></div>
                        
                        <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                            Dr. Abdul-Bari Syed, DO, is a board-certified internal medicine physician and hospitalist with nearly two decades of experience caring for adult patients. He completed his medical degree at Des Moines University College of Osteopathic Medicine and went on to finish his internal medicine residency at the University of Illinois College of Medicine in Chicago.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                            Before medical school, Dr. Syed earned a Bachelor of Arts in Psychology from Benedictine University, giving him a strong foundation in understanding the emotional and behavioral side of health. Since 2010, he has worked primarily as an internal medicine hospitalist, leading the care of hospitalized patients and collaborating closely with multidisciplinary teams across several Wisconsin hospitals.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                            Dr. Syed is known for his calm, thorough approach and his commitment to evidence-based medicine. His clinical experience spans acute inpatient care, post-acute and rehabilitation settings, and hospice care, allowing him to guide patients and families through both routine admissions and complex, serious illnesses with clarity and compassion. He values clear communication, shared decision-making, and treating every patient with dignity and respect, and he is excited to bring this level of attentive, hospital-grade medical expertise to patients in a community clinic setting.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                            <div className="flex items-start gap-3">
                                <div className="bg-navy-50 p-2 rounded text-navy-800 mt-1">
                                    <IconCaduceus className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-navy-900">Nearly Two Decades</h4>
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