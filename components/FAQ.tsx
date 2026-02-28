import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RevealSection from './RevealSection';
import { IconChevronDown } from './Icons';

interface AccordionItemProps {
    question: string;
    answer: string | React.ReactNode;
    isOpen: boolean;
    onClick: () => void;
}

const AccordionItem = ({ question, answer, isOpen, onClick }: AccordionItemProps) => {
    return (
        <div className="border-b border-gray-200 last:border-0">
            <button 
                className="w-full flex justify-between items-center py-6 text-left focus:outline-none"
                onClick={onClick}
                aria-expanded={isOpen}
            >
                <span className="font-serif text-lg font-medium text-navy-900 pr-8">{question}</span>
                <motion.div 
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gold-500"
                >
                    <IconChevronDown className="w-6 h-6" />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="text-gray-600 pb-6 leading-relaxed">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqs = [
        {
            q: "What conditions do you treat in Internal Medicine?",
            a: "We treat a wide range of conditions including common colds, infections, travel-related health issues, chronic disease management, and preventative care for adults and geriatrics."
        },
        {
            q: "How does the Sleep Lab diagnose disorders?",
            a: "Our Sleep Lab conducts comprehensive overnight studies to diagnose conditions like Sleep Apnea, Narcolepsy, and Restless Leg Syndrome. We use state-of-the-art monitoring equipment in a comfortable setting."
        },
        {
            q: "What ultrasounds are available onsite?",
            a: "We offer convenient onsite imaging including abdominal scans (liver, kidney, pancreas), Echocardiograms, Carotid Artery Dopplers, thyroid scans, and pelvic ultrasounds."
        },
        {
            q: "What is your fax number?",
            a: "(630) 968-8755"
        },
        {
            q: "What insurances are accepted?",
            a: (
                <div>
                    <p className="mb-4">We accept a wide range of insurance plans, including:</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 list-disc pl-5">
                        <li>Aetna</li>
                        <li>Anthem Blue Cross Blue Shield</li>
                        <li>Blue Cross Blue Shield of Illinois</li>
                        <li>Blue Shield of Illinois</li>
                        <li>Caterpillar</li>
                        <li>Cigna</li>
                        <li>Consolidated Health Plans</li>
                        <li>Highmark Blue Shield</li>
                        <li>Humana</li>
                        <li>Independence Blue Cross</li>
                        <li>Medicare</li>
                        <li>Memorial Hermann</li>
                        <li>MultiPlan</li>
                        <li>POMCO</li>
                        <li>UnitedHealthOne</li>
                        <li>UnitedHealthcare</li>
                    </ul>
                    <p>
                        <a href="#contact" className="text-gold-600 hover:text-navy-900 font-semibold underline decoration-gold-600 underline-offset-4 transition-all">Contact us</a> if your plan is not listed.
                    </p>
                </div>
            )
        },
        {
            q: "Do you accept new patients?",
            a: "Yes, Dr. Syed is currently accepting new patients. You can book an appointment easily by clicking the 'Book Appointment' button on our website or calling our office."
        },
        {
            q: "Where is your office located?",
            a: "We are located at 4121 Fairview Ave, Downers Grove, IL 60515. There is ample parking available."
        },
        {
            q: "What ages do you treat?",
            a: "Fairview Ogden Medical Group specializes in Internal Medicine, primarily treating adults and geriatric patients."
        }
    ];

    return (
        <RevealSection id="faq" className="py-24 bg-neutral-50">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="font-serif text-4xl text-navy-900 font-bold mb-4">Frequently Asked Questions</h2>
                </div>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                    {faqs.map((faq, idx) => (
                        <AccordionItem 
                            key={idx} 
                            question={faq.q} 
                            answer={faq.a} 
                            isOpen={activeIndex === idx} 
                            onClick={() => setActiveIndex(activeIndex === idx ? null : idx)} 
                        />
                    ))}
                </div>
            </div>
        </RevealSection>
    );
};

export default FAQ;