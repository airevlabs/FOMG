import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconChevronDown, IconCheck, IconStethoscope } from './Icons';
import MaskedText from './MaskedText';

interface AccordionItemProps {
    question: string;
    answer: string | React.ReactNode;
    isOpen: boolean;
    onClick: () => void;
}

const AccordionItem = ({ question, answer, isOpen, onClick }: AccordionItemProps) => (
    <div className="border-b border-gray-100 last:border-0">
        <button 
            className="w-full flex justify-between items-center py-5 text-left focus:outline-none group"
            onClick={onClick}
            aria-expanded={isOpen}
        >
            <span className="font-serif text-lg font-semibold text-navy-900 pr-8 group-hover:text-gold-600 transition-colors">{question}</span>
            <motion.div 
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-gold-500 shrink-0"
            >
                <IconChevronDown className="w-5 h-5" />
            </motion.div>
        </button>
        <AnimatePresence initial={false}>
            {isOpen && (
                <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                >
                    <div className="text-gray-600 pb-5 leading-relaxed text-sm md:text-base">
                        {answer}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);

const InternalMedicine = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    useEffect(() => {
        // Dynamic Meta and Title Configuration for SEO
        document.title = "Internal Medicine Services in Downers Grove, IL | Fairview Ogden Medical Group";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Comprehensive adult primary care, preventative physicals, and complex chronic disease management in Downers Grove, IL. Schedule an appointment with our board-certified medical specialists.");
        }

        // Schema.org MedicalBusiness & Specialty Structured Data for Google & LLMs/AEO
        const schemaData = {
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": "Internal Medicine Services",
            "description": "Comprehensive adult primary care, preventative physicals, and chronic disease management at Fairview Ogden Medical Group.",
            "isPartOf": {
                "@type": "MedicalBusiness",
                "name": "Fairview Ogden Medical Group",
                "telephone": "(630) 968-4790",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "4121 Fairview Ave Ste L1",
                    "addressLocality": "Downers Grove",
                    "addressRegion": "IL",
                    "postalCode": "60515",
                    "addressCountry": "US"
                }
            },
            "aspect": [
                "Adult wellness visits",
                "Geriatric healthcare",
                "Preventative medicine screening",
                "Cardiovascular and diabetes management",
                "Acute infection treatments"
            ],
            "mainEntity": {
                "@type": "FAQPage",
                "mainEntity": faqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.q,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.a
                    }
                }))
            }
        };

        const scriptId = "internal-medicine-jsonld";
        let script = document.getElementById(scriptId) as HTMLScriptElement | null;
        if (!script) {
            script = document.createElement("script");
            script.id = scriptId;
            script.type = "application/ld+json";
            document.head.appendChild(script);
        }
        script.innerHTML = JSON.stringify(schemaData);

        return () => {
            const existingScript = document.getElementById(scriptId);
            if (existingScript) existingScript.remove();
        };
    }, []);

    const coreServices = [
        {
            title: "Preventative Care & Annual Physicals",
            desc: "Regular clinical checks, blood pressure monitoring, cholesterol screenings, and comprehensive lab panels designed to catch potential health risks early."
        },
        {
            title: "Complex Disease Management",
            desc: "Evidence-based clinical care models for managing overlapping chronic conditions such as Type 2 diabetes, chronic hypertension, coronary artery disease, and asthma."
        },
        {
            title: "Adult & Geriatric Medicine",
            desc: "Specialized geriatric evaluations focusing on mobility, polypharmacy review (medication safety), and maintaining cognitive health for older adults."
        },
        {
            title: "Travel Vaccinations & Prescriptions",
            desc: "Pre-travel health consultations, standard travel immunization administration, and destination-specific preventative prescriptions."
        },
        {
            title: "Common Infections & Acute Care",
            desc: "Prompt evaluations and targeted therapy for acute respiratory infections, urinary tract infections, sinus conditions, and other short-term illnesses."
        }
    ];

    const faqs = [
        {
            q: "What is an Internal Medicine physician (Internist)?",
            a: "An internist is a medical specialist who focuses on the prevention, diagnosis, and non-surgical treatment of adult diseases. Unlike family doctors who treat all ages, internists complete extensive clinical residency training concentrated entirely on the complex medical challenges of adults, from young adulthood through geriatric care."
        },
        {
            q: "What chronic conditions are managed at Fairview Ogden Medical Group?",
            a: "Our clinical team provides comprehensive management for a wide variety of chronic conditions. This includes cardiovascular health (high blood pressure and high cholesterol), metabolic diseases (type-2 diabetes, prediabetes, and thyroid disorders), respiratory illnesses (asthma and COPD), and gastrointestinal conditions, using modern evidence-based therapeutic guidelines."
        },
        {
            q: "What should I expect during my annual preventative physical?",
            a: "Your annual wellness visit is a proactive consultation that focuses on prevention. It includes a complete physical evaluation, review of personal and family medical history, assessment of vital signs, prescription medication reconciliation, screening for age-appropriate conditions, and customized advice on nutrition, exercise, and preventative diagnostic screenings."
        },
        {
            q: "Do I need to fast before my appointment?",
            a: "Fasting requirements depend on the specific lab tests ordered during your visit. For comprehensive physicals, fasting for 8 to 12 hours (water is permitted) is generally recommended for accurate lipid panels (cholesterol) and fasting blood glucose tests. Our office will confirm instructions when scheduling."
        }
    ];

    return (
        <section className="min-h-screen pt-36 md:pt-44 pb-24 bg-neutral-50">
            <div className="container mx-auto px-6 max-w-5xl">
                {/* Back Button */}
                <div className="mb-8">
                    <a 
                        href="#/" 
                        className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gold-600 transition-colors uppercase tracking-wider"
                    >
                        <span>&larr;</span> Back to Services
                    </a>
                </div>

                {/* Hero Header */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mb-12">
                    <div className="p-8 md:p-12 relative overflow-hidden bg-gradient-to-br from-navy-900 to-navy-800 text-white">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-navy-700/30 rounded-full blur-3xl"></div>

                        <div className="relative z-10 max-w-3xl">
                            <span className="text-gold-400 font-semibold tracking-wider text-sm uppercase">Medical Specialties</span>
                            <MaskedText 
                                text="Internal Medicine" 
                                className="font-serif text-4.5xl md:text-5xl font-bold mt-2 mb-4 text-white" 
                                tag="h1" 
                            />
                            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                                Complete primary care, diagnostic screening, and long-term health management designed specifically for adults and older adults.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Core Overview & Services Grid */}
                <div className="grid lg:grid-cols-3 gap-12 mb-16">
                    <div className="lg:col-span-2">
                        <h2 className="font-serif text-3xl font-bold text-navy-900 mb-6 border-b-2 border-gold-500/30 pb-3">
                            Comprehensive Adult Care
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Internal medicine forms the core of modern adult healthcare. Our clinic focuses on the prevention, detection, and comprehensive treatment of health issues in adults. By employing advanced diagnostic technologies and staying aligned with the latest clinical trials, our team of board-certified internal medicine physicians offers expert care that balances preventative medicine with specialized treatment.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            Whether you need support managing multiple complex health conditions or simply want to schedule a routine wellness checkup, we are committed to providing personalized attention and thorough clinical diagnostics.
                        </p>

                        <div className="space-y-6">
                            {coreServices.map((service, index) => (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex gap-4 hover:shadow-md transition-shadow"
                                >
                                    <div className="w-10 h-10 rounded-full bg-navy-50 text-navy-800 flex items-center justify-center shrink-0 mt-0.5">
                                        <IconStethoscope className="w-5 h-5 text-gold-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-xl font-semibold text-navy-900 mb-2">{service.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar details */}
                    <div className="space-y-8">
                        <div className="bg-navy-900 text-white rounded-2xl p-6 shadow-md border border-navy-800">
                            <h3 className="font-serif text-xl font-bold text-white mb-4">Clinic Information</h3>
                            <ul className="space-y-4 text-sm text-gray-300">
                                <li className="flex items-start gap-3">
                                    <IconCheck className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                                    <span><strong>Clinic Location:</strong> 4121 Fairview Ave Ste L1, Downers Grove, IL 60515</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <IconCheck className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                                    <span><strong>Office Hours:</strong> Mon: 10am-4pm | Tue & Thu: 10am-2pm | Sat: 10am-1pm (Wed, Fri, Sun Closed)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <IconCheck className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                                    <span><strong>Multi-lingual Care:</strong> Clinicians speak English, Urdu, and Hindi</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <IconCheck className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                                    <span><strong>Admitting Affiliations:</strong> Advocate Good Samaritan Hospital, UChicago Medicine AdventHealth Hinsdale, Elmhurst Memorial Hospital</span>
                                </li>
                            </ul>
                            <div className="mt-8 border-t border-navy-800 pt-6">
                                <a 
                                    href="tel:6309684790" 
                                    className="block text-center bg-gold-500 hover:bg-gold-600 text-white font-semibold py-3 rounded-lg transition-colors text-sm uppercase tracking-wide"
                                >
                                    Call (630) 968-4790
                                </a>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                            <h3 className="font-serif text-xl font-bold text-navy-900 mb-4">Patient Guidelines</h3>
                            <p className="text-gray-600 text-xs leading-relaxed mb-4">
                                Our medical practitioners emphasize shared decision-making. To ensure an efficient consultation:
                            </p>
                            <ul className="space-y-2 text-xs text-gray-500">
                                <li>• Please bring a current list of all prescriptions and dosages.</li>
                                <li>• Arrive 15 minutes before your scheduled appointment.</li>
                                <li>• Check with your insurance provider regarding referral and co-pay guidelines.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* LLM & Search Answer-Engine Optimization (FAQ Accordion) */}
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8 max-w-4xl mx-auto mb-12">
                    <div className="text-center mb-8">
                        <h2 className="font-serif text-2.5xl font-bold text-navy-900 mt-1">Frequently Answered Questions</h2>
                    </div>
                    <div className="divide-y divide-gray-100">
                        {faqs.map((faq, index) => (
                            <AccordionItem 
                                key={index}
                                question={faq.q}
                                answer={faq.a}
                                isOpen={activeIndex === index}
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                            />
                        ))}
                    </div>
                </div>

                {/* Booking Call to Action */}
                <div className="text-center bg-navy-900 rounded-2xl p-8 max-w-4xl mx-auto text-white shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                    <h3 className="font-serif text-2xl font-bold mb-3">Schedule Your Internal Medicine Consult</h3>
                    <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto mb-6">
                        Take control of your wellness. Book your next physical or chronic care follow-up appointment online using our scheduling portal.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a 
                            href="https://livewell.aah.org/chart/openscheduling/standalone?id=85929" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gold-500 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-gold-600 transition-colors text-sm uppercase tracking-wide"
                        >
                            Schedule Online
                        </a>
                        <a 
                            href="#/contact" 
                            className="bg-white/10 text-white border border-white/20 font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all text-sm uppercase tracking-wide"
                        >
                            Contact Details
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InternalMedicine;
