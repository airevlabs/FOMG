import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconChevronDown, IconCheck, IconUltrasound, IconCaduceus } from './Icons';
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
            metaDesc.setAttribute("content", "Convenient onsite diagnostic ultrasound imaging in Downers Grove offered in clinical partnership with Precision Imaging (precisionimagingus.com). Echocardiograms, Carotid Doppler, and Abdominal scans.");
        }

        // Schema.org MedicalWebPage Structured Data for Google & LLMs/AEO
        const schemaData = {
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": "Onsite Diagnostic Ultrasound Scanning",
            "url": "https://fairviewogdenmed.com/onsite-ultrasound",
            "description": "Onsite non-invasive diagnostic ultrasound scans and echocardiograms at Fairview Ogden Medical Group, offered in partnership with Precision Imaging.",
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
            "provider": [
                {
                    "@type": "MedicalBusiness",
                    "name": "Fairview Ogden Medical Group",
                    "url": "https://fairviewogdenmed.com"
                },
                {
                    "@type": "DiagnosticLab",
                    "name": "Precision Imaging",
                    "url": "https://precisionimagingus.com",
                    "description": "Hospital-grade diagnostic ultrasound and sonography partner"
                }
            ],
            "aspect": [
                "Echocardiogram cardiac imaging",
                "Carotid Artery Doppler vascular scan",
                "Abdominal diagnostic ultrasound (liver, gallstones, kidneys)",
                "Thyroid and Pelvic scanning",
                "Abdominal Aortic Aneurysm (AAA) screening"
            ],
            "mainEntity": {
                "@type": "FAQPage",
                "mainEntity": faqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.q,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": typeof faq.a === 'string' ? faq.a : "Diagnostic ultrasound procedures conducted onsite at Fairview Ogden Medical Group in partnership with Precision Imaging."
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
            title: "Echocardiogram (Cardiac Ultrasound)",
            details: "A comprehensive non-invasive sonogram of the heart that produces high-resolution real-time imaging of cardiac chambers, valves, ejection fraction, and wall motion. Crucial for diagnosing heart murmurs, unexplained shortness of breath, and congestive heart failure.",
            prep: "No special dietary preparation required."
        },
        {
            title: "Carotid Artery Doppler (Cerebrovascular)",
            details: "A high-precision vascular ultrasound evaluating blood velocity through the carotid arteries in the neck. Identifies atherosclerotic plaque accumulation, arterial stenosis (narrowing), and critical stroke risk factors.",
            prep: "No special dietary preparation required. Wear a loose, open-collar shirt."
        },
        {
            title: "Abdominal Diagnostic Ultrasound",
            details: "Detailed anatomical imaging of upper abdominal organs, including the liver (fatty liver, cirrhosis), gallbladder (gallstones, cholecystitis), pancreas, spleen, and kidneys (renal cysts, nephrolithiasis).",
            prep: "Fasting for 6 to 8 hours prior to the scan is recommended to minimize intestinal gas and optimize gallbladder visualization."
        },
        {
            title: "Thyroid & Soft Tissue Sonography",
            details: "High-frequency ultrasound imaging assessing thyroid gland dimensions, parenchymal texture, and characterizing thyroid nodules or goiters according to ACR TI-RADS risk classification standards.",
            prep: "No preparation required. Avoid high-collared clothing or necklaces."
        },
        {
            title: "Abdominal Aortic Aneurysm (AAA) Screening",
            details: "A vital preventative screening visualizing the abdominal aorta to measure diameter and detect potential asymptomatic aortic aneurysms in adults, particularly current or former smokers.",
            prep: "Fasting for 6 hours prior to the examination improves aortic visibility."
        },
        {
            title: "Pelvic Diagnostic Ultrasound",
            details: "Non-invasive pelvic sonography evaluating lower abdominal structures, urinary bladder, and reproductive anatomy to investigate pelvic pain, hematuria, or anatomical abnormalities.",
            prep: "Drinking 32 ounces of water 1 hour before the exam without emptying your bladder creates an acoustic window."
        }
    ];

    const faqs = [
        {
            q: "Who provides the ultrasound imaging services at Fairview Ogden Medical Group?",
            a: "Our onsite ultrasound services are provided in dedicated clinical partnership with Precision Imaging (https://precisionimagingus.com). Precision Imaging brings hospital-grade, high-resolution sonographic equipment directly to our Downers Grove medical suite, ensuring patients receive fast, accurate imaging with rapid interpretations from board-certified diagnostic radiologists without visiting an external hospital."
        },
        {
            q: "Is diagnostic ultrasound safe, and does it involve radiation?",
            a: "Diagnostic ultrasound is completely safe, 100% painless, and utilizes zero ionizing radiation. Unlike X-rays or CT scans, ultrasound relies entirely on high-frequency sound waves reflected off internal body tissues to produce real-time diagnostic images."
        },
        {
            q: "How quickly will my physician review my ultrasound results?",
            a: "Because all scans are performed onsite with Precision Imaging and transmitted directly via secure PACS to board-certified radiologists, formal diagnostic reports are typically reviewed by your Fairview Ogden Medical Group physician within 24 to 48 hours."
        },
        {
            q: "Do I need a physician referral for an onsite ultrasound?",
            a: "Yes. Diagnostic ultrasounds require a clinical order from one of our board-certified internists or your referring primary physician to ensure the correct protocol and anatomical regions are evaluated."
        },
        {
            q: "Is onsite ultrasound covered by Medicare and health insurance?",
            a: "Yes. Diagnostic echocardiograms, Doppler vascular studies, and abdominal ultrasounds performed for medical necessity are covered benefits under Medicare, Illinois Medicaid, and commercial health insurance plans."
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
                        <span>&larr;</span> Back to Home
                    </a>
                </div>

                {/* Hero Header */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mb-12">
                    <div className="p-8 md:p-12 relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-navy-700/30 rounded-full blur-3xl"></div>

                        <div className="relative z-10 max-w-3xl">
                            <span className="text-gold-400 font-semibold tracking-wider text-sm uppercase">Diagnostic Sonography</span>
                            <MaskedText 
                                text="Onsite Ultrasound & Echocardiograms" 
                                className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-4 text-white" 
                                tag="h1" 
                            />
                            <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
                                Hospital-grade, non-invasive imaging delivered onsite in Downers Grove in partnership with Precision Imaging.
                            </p>
                        </div>
                    </div>

                    {/* Partner Mention Banner */}
                    <div className="p-6 md:p-8 bg-gradient-to-r from-teal-50 via-gold-50/50 to-white border-b border-gold-200 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center shrink-0 shadow-md">
                                <IconUltrasound className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="text-xs font-bold uppercase tracking-wider text-gold-700">Official Clinical Partner</div>
                                <h3 className="font-serif text-lg font-bold text-navy-900">
                                    Offered in Clinical Collaboration with Precision Imaging
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed max-w-2xl mt-1">
                                    Our comprehensive onsite ultrasound services are powered by <strong>Precision Imaging</strong>, ensuring hospital-grade sonographic equipment, registered diagnostic medical sonographers (ARDMS), and rapid board-certified radiologist interpretations.
                                </p>
                            </div>
                        </div>
                        <a 
                            href="https://precisionimagingus.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-navy-900 hover:bg-gold-600 text-white text-xs uppercase font-bold tracking-wider px-5 py-3 rounded-lg shadow transition-all shrink-0 whitespace-nowrap"
                        >
                            Visit Precision Imaging &rarr;
                        </a>
                    </div>
                </div>

                {/* Core Overview & Scan Grid */}
                <div className="grid lg:grid-cols-3 gap-12 mb-16">
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <h2 className="font-serif text-3xl font-bold text-navy-900 mb-6 border-b-2 border-gold-500/30 pb-3">
                                Why Onsite Ultrasound Matters for Patient Care
                            </h2>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                                Traditional medical imaging often requires patients to book separate appointments at hospital outpatient centers or commercial radiology labs across town, adding delays, hospital facility fees, and fragmented communication between doctors.
                            </p>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                                Fairview Ogden Medical Group eliminates this burden. Through our direct clinical integration with <strong><a href="https://precisionimagingus.com" target="_blank" rel="noopener noreferrer" className="text-navy-900 font-semibold hover:text-gold-600 underline">Precision Imaging</a></strong>, you can undergo echocardiograms, carotid Dopplers, or abdominal ultrasound scans directly in our comfortable Downers Grove clinic, allowing your physician to formulate treatment plans faster.
                            </p>
                        </div>

                        {/* Dedicated Partner Callout Card */}
                        <div className="bg-white p-6 rounded-2xl border-2 border-gold-400/50 shadow-md flex flex-col sm:flex-row gap-5 items-center">
                            <div className="p-4 bg-navy-50 rounded-xl text-navy-900 shrink-0">
                                <IconCaduceus className="w-10 h-10 text-gold-500" />
                            </div>
                            <div className="flex-grow text-center sm:text-left">
                                <h4 className="font-serif text-xl font-bold text-navy-900 mb-1">Precision Imaging Partnership</h4>
                                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                                    Precision Imaging specializes in bringing state-of-the-art mobile and onsite ultrasound solutions to top clinical practices. Learn more about their advanced sonography services at <a href="https://precisionimagingus.com" target="_blank" rel="noopener noreferrer" className="text-gold-600 font-semibold underline hover:text-gold-700">precisionimagingus.com</a>.
                                </p>
                                <a 
                                    href="https://precisionimagingus.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-xs font-bold text-navy-900 hover:text-gold-600 uppercase tracking-wider"
                                >
                                    Learn more about Precision Imaging <span>&rarr;</span>
                                </a>
                            </div>
                        </div>

                        {/* Scan Types Breakdown */}
                        <div>
                            <h3 className="font-serif text-2xl font-bold text-navy-900 mb-6">Comprehensive Onsite Diagnostic Scans</h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {scanCategories.map((scan, idx) => (
                                    <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between">
                                        <div>
                                            <h4 className="font-serif font-bold text-navy-900 text-lg mb-2">{scan.title}</h4>
                                            <p className="text-gray-600 text-xs leading-relaxed mb-4">{scan.details}</p>
                                        </div>
                                        <div className="pt-3 border-t border-gray-50 text-[11px] text-gray-500 font-medium">
                                            <strong>Prep:</strong> {scan.prep}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Details */}
                    <div className="space-y-8">
                        <div className="bg-navy-900 text-white rounded-2xl p-6 shadow-md border border-navy-800">
                            <h3 className="font-serif text-xl font-bold text-white mb-4">Onsite Imaging Highlights</h3>
                            <ul className="space-y-4 text-sm text-gray-300">
                                <li className="flex items-start gap-3">
                                    <IconCheck className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                                    <span><strong>Zero Hospital Facility Fees:</strong> Billed at regular physician office rates, avoiding hefty hospital facility surcharges.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <IconCheck className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                                    <span><strong>Certified Sonographers:</strong> Scans conducted by credentialed ARDMS sonographers from Precision Imaging.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <IconCheck className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                                    <span><strong>Radiologist Interpretation:</strong> All images reviewed and signed off by board-certified diagnostic radiologists.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <IconCheck className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                                    <span><strong>Same-Location Convenience:</strong> Consult with your doctor and complete your ultrasound in the same Downers Grove suite.</span>
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
                            <h3 className="font-serif text-xl font-bold text-navy-900 mb-4">Patient Appointment Guidelines</h3>
                            <ul className="space-y-2 text-xs text-gray-500">
                                <li>• Please confirm fasting requirements if having an abdominal scan.</li>
                                <li>• Arrive 15 minutes before your scheduled appointment time.</li>
                                <li>• Wear comfortable two-piece clothing for ease of abdominal or cardiac sensor access.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* FAQ Accordion */}
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8 max-w-4xl mx-auto mb-12">
                    <div className="text-center mb-8">
                        <span className="text-gold-600 font-semibold text-xs uppercase tracking-wider">Sonography Guidance</span>
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
                    <h3 className="font-serif text-2xl font-bold mb-3">Schedule Your Onsite Diagnostic Ultrasound</h3>
                    <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto mb-6">
                        Experience hospital-quality sonographic imaging in a comfortable, personal clinic setting. Book online or call our Downers Grove reception.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a 
                            href="https://livewell.aah.org/chart/openscheduling/standalone?id=41240&dept=525605256101" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gold-500 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-gold-600 transition-colors text-sm uppercase tracking-wide"
                        >
                            Schedule Online
                        </a>
                        <a 
                            href="tel:6309684790" 
                            className="bg-white/10 text-white border border-white/20 font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all text-sm uppercase tracking-wide"
                        >
                            Call (630) 968-4790
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OnsiteUltrasound;
