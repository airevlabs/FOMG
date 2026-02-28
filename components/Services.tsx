import React from 'react';
import { motion } from 'framer-motion';
import RevealSection from './RevealSection';
import { IconStethoscope, IconSleep, IconUltrasound, IconCheck } from './Icons';

interface ServiceCardProps {
    icon: React.ElementType;
    title: string;
    items: string[];
}

const ServiceCard = ({ icon: Icon, title, items }: ServiceCardProps) => (
    <motion.div 
        whileHover={{ y: -10 }}
        className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-gold-500 group"
    >
        <div className="w-16 h-16 bg-navy-50 rounded-full flex items-center justify-center text-navy-800 mb-6 group-hover:bg-navy-800 group-hover:text-gold-500 transition-colors">
            <Icon className="w-8 h-8" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-navy-900 mb-4">{title}</h3>
        <ul className="space-y-3 mb-6">
            {items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-600">
                    <IconCheck className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                    <span className="text-sm leading-snug">{item}</span>
                </li>
            ))}
        </ul>
        <a href="#contact" className="text-navy-800 font-semibold text-sm uppercase tracking-wider hover:text-gold-600 flex items-center gap-2 group-hover:gap-3 transition-all">
            Book Consultation <span>&rarr;</span>
        </a>
    </motion.div>
);

const Services = () => {
    const servicesData = [
        {
            icon: IconStethoscope,
            title: "Internal Medicine",
            items: [
                "Preventative Care & Physicals",
                "Complex Disease Management",
                "Travel Vaccinations & Prescriptions",
                "Common Cold & Infections",
                "Adult & Geriatric Medicine"
            ]
        },
        {
            icon: IconSleep,
            title: "Sleep Lab",
            items: [
                "Complex Sleep Apnea Treatment",
                "Insomnia & Restless Leg Syndrome",
                "Narcolepsy Diagnosis",
                "Sleep Terrors & Disorders",
                "Comprehensive Sleep Studies"
            ]
        },
        {
            icon: IconUltrasound,
            title: "Onsite Ultrasound",
            items: [
                "Abdomen (Liver, Kidney, Pancreas)",
                "Echocardiogram (EKG)",
                "Carotid Artery Doppler",
                "Thyroid & Pelvic Scans",
                "Aortic Aneurysm Screening"
            ]
        }
    ];

    return (
        <RevealSection id="services" className="py-24 bg-neutral-50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-gold-600 font-semibold tracking-wider text-sm uppercase">Comprehensive Care</span>
                    <h2 className="font-serif text-4xl text-navy-900 font-bold mt-2 mb-4">Our Medical Services</h2>
                    <p className="text-gray-600">From routine checkups to specialized diagnostic imaging and sleep medicine, we provide thorough care under one roof.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, idx) => (
                        <ServiceCard key={idx} {...service} />
                    ))}
                </div>
            </div>
        </RevealSection>
    );
};

export default Services;