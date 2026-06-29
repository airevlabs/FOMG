import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconChevronDown, IconCheck, IconUltrasound } from './Icons';
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

const OnsiteUltrasound = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    useEffect(() => {
        // Dynamic Meta and Title Configuration for SEO
        document.title = "Onsite Ultrasound Scanning & Echocardiograms in Downers Grove, IL | Fairview Ogden Medical Group";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Convenient onsite diagnostic ultrasound imaging in Downers Grove. Echocardiograms, Carotid Doppler, Abdomen, Pelvic, and Aortic Aneurysm screenings at Fairview Ogden Medical Group.");
        }

        // Schema.org MedicalBusiness & Specialty Structured Data for Google & LLMs/AEO
        const schemaData = {
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": "Onsite Diagnostic Ultrasound Scanning",
            "description": "Onsite non-invasive diagnostic ultrasound scans and echocardiograms at Fairview Ogden Medical Group.",
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
                "Echocardiogram cardiac imaging",
                "Carotid Artery Doppler vascular scan",
                "Abdominal diagnostic ultrasound",
                "Thyroid and Pelvic scanning",
                "Abdominal Aortic Aneurysm screening"
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

        const scriptId = "ultrasound-jsonld";
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

    const scanCategories = [
        {
            title: "Echocardiogram (Cardiac)",
            details: "An ultrasound of the heart that creates moving pictures of the chambers, valves, walls, and blood flow. Used to diagnose murmurs, evaluate heart failure, and monitor cardiac health.",
            prep: "No special preparation required."
        },
        {
            title: "Carotid Artery Doppler (Vascular)",
            details: "A specialized scan evaluating the two main carotid arteries in the neck. It measures blood flow velocity and checks for blockages or plaque buildup, crucial for stroke prevention.",
            prep: "Wear a loose, open-neck collar shirt."
        },
        {
            title: "Abdominal Scan (Visceral)",
            details: "Detailed diagnostic imaging of internal organs including the liver, gallbladder, spleen, pancreas, and kidneys. Evaluates gallstones, fatty liver disease, and kidney stones.",
            prep: "Fast (no food or drink except water) for 8 hours prior to scanning."
        },
        {
            title: "Thyroid & Pelvic Scans (Small Parts & Soft Tissue)",
            details: "High-resolution evaluations of the thyroid gland to identify nodules, and pelvic imaging to screen reproductive organs for cysts, structures, or anomalies.",
            prep: "Thyroid: No prep. Pelvic: Fasting or full bladder may be requested depending on clinical order."
        },
        {
            title: "Abdominal Aortic Aneurysm Screening",
            details: "A quick, non-invasive scan to measure the width of the abdominal aorta, critical for detecting silent vascular swellings or aneurysm risks in high-risk patients.",
            prep: "Fast (no food or drink except water) for 6-8 hours prior to scanning."
        }
    ];

    const benefits = [
        {
            title: "Radiation-Free & Safe",
            desc: "Ultrasound uses high-frequency sound waves, not ionizing radiation (unlike X-Rays or CT scans), making it completely safe and repeatable."
        },
        {
            title: "Convenient & Integrated",
            desc: "Undergo your diagnostic imaging inside our office. No need to schedule separate hospital visits, coordinate parking, or manage transfer of records."
        },
        {
            title: "Painless & Non-Invasive",
            desc: "The procedure is completely painless. A warm water-based gel is applied to the skin and a smooth probe (transducer) is guided over the area."
        },
        {
            title: "Coordinated Physician Review",
            desc: "Our board-certified internal medicine physicians review the ultrasound reports directly, leading to faster treatment decisions and follow-ups."
        }
    ];

    const faqs = [
        {
            q: "What is a diagnostic ultrasound scanning procedure?",
            a: "A diagnostic ultrasound, also called sonography, is an imaging method that uses high-frequency sound waves to produce real-time images of the inside of your body. A transducer probe sends sound waves into the tissues, which bounce back and are processed by a computer to create detailed visual representations of organs, vessels, and blood flow."
        },
        {
            q: "How should I prepare for my ultrasound scan?",
            a: "Preparation depends on the type of ultrasound. For abdominal and aortic aneurysm scans, you must fast (no food or drinks, except water) for 8 hours prior to prevent gas from obscuring the organs. For pelvic scans, you may be asked to drink 32 ounces of water 1 hour beforehand to fill your bladder. Thyroid, carotid, and echocardiograms require no preparation."
        },
        {
            q: "How long does the scan take, and when will I get results?",
            a: "Most onsite ultrasound scans take between 30 and 45 minutes to complete. The images are sent to a board-certified radiologist or cardiologist for formal interpretation. The final diagnostic report is typically available in our office within 3 to 5 business days, and your doctor will review it with you."
        },
        {
            q: "Do I need a doctor's order for an onsite ultrasound?",
            a: "Yes, all medical ultrasound scans require a clinical order from a licensed healthcare practitioner. We perform ultrasounds for our established primary care patients, and we also accept external referral orders from outside specialists and doctors."
        }
    ];

    return (
        <section className="min-h-screen pt-36 md:pt-44 pb-24 bg-neutral-50 text-navy-900">
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
                    <div className="p-8 md:p-12 relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white">
                        {/* Sonic wave animation effect */}
                        <div className="absolute -bottom-24 -right-24 w-96 h-96 border border-white/5 rounded-full flex items-center justify-center">
                            <div className="w-80 h-80 border border-white/5 rounded-full flex items-center justify-center animate-[ping_3s_infinite]">
                                <div className="w-64 h-64 border border-white/10 rounded-full"></div>
                            </div>
                        </div>

                        <div className="relative z-10 max-w-3xl">
                            <div className="flex items-center gap-3 text-gold-400 mb-2">
                                <IconUltrasound className="w-6 h-6" />
                                <span className="font-semibold tracking-wider text-sm uppercase">Diagnostic Imaging</span>
                            </div>
                            <MaskedText 
                                text="Onsite Ultrasound" 
                                className="font-serif text-4.5xl md:text-5xl font-bold mt-2 mb-4 text-white" 
                                tag="h1" 
                            />
                            <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
                                Professional, radiation-free diagnostic imaging conducted directly inside our clinic for your convenience and comprehensive care.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Core Overview and Benefits */}
                <div className="grid lg:grid-cols-3 gap-12 mb-16">
                    <div className="lg:col-span-2">
                        <h2 className="font-serif text-3xl font-bold text-navy-900 mb-6 border-b-2 border-gold-500/30 pb-3">
                            State-of-the-Art Diagnostics
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Clinical imaging is one of the most powerful tools in preventative and diagnostic medicine. By offering high-resolution diagnostic ultrasound imaging onsite, we eliminate the need for our patients to schedule separate hospital visits or coordinate record transfers. 
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            Using advanced transducer technology, our qualified clinical team captures clear, real-time images of internal structures. These scans help evaluate cardiac valves, arterial plaque, abdominal organs, thyroid nodules, and more, allowing our internists to design precise, rapid therapeutic pathways.
                        </p>

                        <h3 className="font-serif text-2xl font-bold text-navy-900 mb-6">Key Diagnostics Performed Onsite</h3>
                        <div className="space-y-4">
                            {scanCategories.map((scan, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <h4 className="font-serif text-lg font-semibold text-navy-800 mb-2">{scan.title}</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-3">{scan.details}</p>
                                    <span className="text-xs text-gold-600 font-semibold bg-gold-50/50 px-2.5 py-1 rounded border border-gold-100">
                                        Preparation: {scan.prep}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar info */}
                    <div className="space-y-8">
                        <div className="bg-navy-900 text-white rounded-2xl p-6 shadow-md border border-navy-800">
                            <h3 className="font-serif text-xl font-bold text-white mb-4">Patient Benefits</h3>
                            <div className="space-y-6">
                                {benefits.map((benefit, idx) => (
                                    <div key={idx} className="flex gap-3">
                                        <div className="text-gold-500 shrink-0 mt-0.5">
                                            <IconCheck className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-sm text-white">{benefit.title}</h4>
                                            <p className="text-gray-400 text-xs mt-1 leading-relaxed">{benefit.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 border-t border-navy-800 pt-6">
                                <a 
                                    href="tel:6309684790" 
                                    className="block text-center bg-gold-500 hover:bg-gold-600 text-white font-semibold py-3 rounded-lg transition-colors text-sm uppercase tracking-wide"
                                >
                                    Call for Appointments
                                </a>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                            <h3 className="font-serif text-xl font-bold text-navy-900 mb-3">Accredited Testing</h3>
                            <p className="text-gray-600 text-xs leading-relaxed">
                                Our diagnostic ultrasound services follow strict medical protocols set by clinical ultrasound governing boards. Our equipment is calibrated to provide crisp imaging, ensuring diagnostic precision.
                            </p>
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
                    <h3 className="font-serif text-2xl font-bold mb-3">Diagnostic Ultrasound Referrals</h3>
                    <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto mb-6">
                        We accept ultrasound orders from external clinical providers. Contact our clinic to send your order and secure a slot.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a 
                            href="tel:6309684790" 
                            className="bg-gold-500 hover:bg-gold-600 text-white font-semibold px-6 py-3 rounded-lg shadow transition-colors text-sm uppercase tracking-wide"
                        >
                            Call (630) 968-4790
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

export default OnsiteUltrasound;
