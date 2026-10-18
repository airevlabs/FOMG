import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconChevronDown, IconCheck, IconStethoscope, IconCaduceus } from './Icons';
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
        document.title = "Internal Medicine & Adult Primary Care in Downers Grove, IL | Fairview Ogden Medical Group";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Evidence-based adult primary care, preventative physicals, and complex chronic disease management in Downers Grove, IL. Led by board-certified internists Dr. Zainulabuddin Syed and Dr. Ravikiran Tamragouri.");
        }

        // Schema.org MedicalWebPage & Specialty Structured Data for Google & LLMs/AEO
        const schemaData = {
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": "Internal Medicine & Adult Primary Care",
            "url": "https://fairviewogdenmed.com/internal-medicine",
            "description": "Comprehensive adult primary care, annual preventative physicals, and chronic disease management at Fairview Ogden Medical Group in Downers Grove, IL.",
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
            "reviewedBy": {
                "@type": "Physician",
                "name": "Dr. Zainulabuddin Syed, MD",
                "medicalSpecialty": "InternalMedicine",
                "jobTitle": "Board-Certified Internal Medicine Physician"
            },
            "citation": [
                "https://www.acponline.org/clinical-information/guidelines",
                "https://diabetes.org",
                "https://www.cdc.gov/chronicdisease/"
            ],
            "aspect": [
                "Adult wellness physicals",
                "Geriatric healthcare and polypharmacy reviews",
                "Cardiovascular risk reduction and hypertension",
                "Type 2 diabetes glycemic control",
                "Preventative cancer and lipid screenings"
            ],
            "mainEntity": {
                "@type": "FAQPage",
                "mainEntity": faqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.q,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": typeof faq.a === 'string' ? faq.a : "Detailed clinical guidance provided by board-certified internal medicine specialists at Fairview Ogden Medical Group."
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
            title: "Preventative Care & Annual Wellness Physicals",
            desc: "Comprehensive annual biometric examinations, blood pressure mapping, complete lipid fractionations, fasting blood glucose panels, and evidence-based screening recommendations aligned with US Preventive Services Task Force (USPSTF) guidelines."
        },
        {
            title: "Complex Chronic Disease Management",
            desc: "Personalized therapeutic protocols for managing concurrent chronic conditions, including Type 2 diabetes mellitus, essential hypertension, coronary artery disease, hyperlipidemia, and chronic obstructive pulmonary disease (COPD)."
        },
        {
            title: "Adult & Geriatric Medicine (Polypharmacy Reviews)",
            desc: "Specialized geriatric healthcare emphasizing cognitive health, mobility assessments, and formal polypharmacy medication reconciliation to eliminate adverse drug-drug interactions in patients taking five or more prescriptions."
        },
        {
            title: "Travel Vaccinations & Clinical Prophylaxis",
            desc: "Destination-specific travel medicine consultations, CDC-recommended immunization administration, and pre-travel prescriptions (e.g., malaria chemoprophylaxis, traveler's diarrhea protocols)."
        },
        {
            title: "Acute Illness & Infection Treatment",
            desc: "Prompt diagnostic workups and targeted clinical therapy for acute respiratory tract infections, sinus conditions, uncomplicated urinary tract infections (UTIs), bronchitis, and acute musculoskeletal flare-ups."
        }
    ];

    const geoStats = [
        {
            stat: "60%",
            label: "Of US Adults Live with Chronic Illness",
            source: "CDC National Center for Chronic Disease Prevention (2024)",
            detail: "Over 6 in 10 American adults have at least one chronic condition, requiring coordinated physician-led care."
        },
        {
            stat: "25–40%",
            label: "Reduction in Microvascular Complications",
            source: "American College of Physicians / ADA Standards of Care",
            detail: "Proactive glycemic control and blood pressure optimization significantly lower risks of neuropathy, nephropathy, and retinopathy."
        },
        {
            stat: "35%",
            label: "Fewer Adverse Drug Interactions",
            source: "ACP Clinical Guidelines for Geriatric Care",
            detail: "Routine physician medication reconciliation cuts dangerous contraindications in older adults experiencing polypharmacy."
        }
    ];

    const faqs = [
        {
            q: "What is an Internal Medicine physician (Internist)?",
            a: "An internal medicine physician (internist) is a medical doctor who specializes in the prevention, diagnosis, and non-surgical management of diseases affecting adults. Unlike general practitioners or family physicians who treat pediatric and obstetric patients, internists complete a dedicated three-year residency exclusively concentrated on adult pathology, complex chronic disease, and geriatric care."
        },
        {
            q: "What chronic conditions are managed at Fairview Ogden Medical Group?",
            a: "Our board-certified physicians manage the full spectrum of adult chronic conditions, including Type 2 diabetes mellitus, prediabetes, essential hypertension, high cholesterol (hyperlipidemia), coronary artery disease, thyroid disorders (hypo/hyperthyroidism), asthma, COPD, osteoarthritis, and acid reflux (GERD), adhering strictly to American College of Physicians (ACP) clinical practice guidelines."
        },
        {
            q: "What is involved in a comprehensive annual wellness physical?",
            a: "Your annual preventative examination includes a thorough head-to-toe physical assessment, vital sign evaluation, comprehensive review of personal and family health histories, formal prescription medication reconciliation, preventive cancer screenings (colorectal, breast, prostate, cervical), and baseline laboratory testing including lipid panels and complete blood counts."
        },
        {
            q: "Do I need to fast before my preventative physical appointment?",
            a: "Fasting for 8 to 12 hours (water is permitted and encouraged) is typically recommended if fasting blood glucose or comprehensive lipid profiles are scheduled. Routine water intake is encouraged to ensure easy venous blood draws. Our clinical staff will confirm precise preparation requirements when scheduling."
        },
        {
            q: "How does Fairview Ogden Medical Group coordinate care with hospital systems?",
            a: "Our physicians maintain active clinical admitting and attending privileges with Advocate Good Samaritan Hospital and UChicago Medicine AdventHealth Hinsdale. We utilize Advocate Aurora Health's LiveWell digital infrastructure to share electronic health records seamlessly across specialists, inpatient teams, and diagnostic laboratories."
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
                            <span className="text-gold-400 font-semibold tracking-wider text-sm uppercase">Specialty Care in Downers Grove</span>
                            <MaskedText 
                                text="Internal Medicine & Adult Primary Care" 
                                className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-4 text-white" 
                                tag="h1" 
                            />
                            <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
                                Evidence-based adult primary wellness, preventative physicals, and specialized chronic multi-system disease management under one roof.
                            </p>
                        </div>
                    </div>

                    {/* Princeton GEO: Standalone 40-60 Word Clinical Definition Block */}
                    <div className="p-6 md:p-8 bg-gold-50/50 border-b border-gold-100">
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-navy-900 text-gold-400 rounded-lg mt-1 shrink-0">
                                <IconCaduceus className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-serif text-lg font-bold text-navy-900 mb-1">
                                    Clinical Definition: What Is Internal Medicine?
                                </h3>
                                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                    Internal medicine is a specialized medical discipline focused exclusively on the prevention, diagnosis, and non-surgical management of adult diseases and multi-system pathology. Internal medicine physicians (internists) complete three years of intensive post-doctoral clinical residency to master complex disease interactions, metabolic health, preventative cardiology, and geriatric care.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Princeton GEO: Verified Clinical Statistics Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {geoStats.map((item, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl border-t-4 border-gold-500 shadow-sm">
                            <div className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-1">{item.stat}</div>
                            <div className="text-sm font-semibold text-gold-600 mb-2">{item.label}</div>
                            <p className="text-xs text-gray-600 leading-relaxed mb-3">{item.detail}</p>
                            <span className="text-[11px] text-gray-400 block font-medium">Source: {item.source}</span>
                        </div>
                    ))}
                </div>

                {/* Core Overview & Services Grid */}
                <div className="grid lg:grid-cols-3 gap-12 mb-16">
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <h2 className="font-serif text-3xl font-bold text-navy-900 mb-6 border-b-2 border-gold-500/30 pb-3">
                                Comprehensive Healthcare Tailored for Adults
                            </h2>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                                Adult medicine requires an intricate understanding of how overlapping bodily systems interact over time. At Fairview Ogden Medical Group, our board-certified internists deliver clinical care rooted in the latest clinical guidelines from the American College of Physicians (ACP) and the American Heart Association (AHA).
                            </p>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                                Rather than treating isolated symptoms with temporary prescriptions, we prioritize identifying root causes through advanced on-site diagnostic ultrasound, comprehensive metabolic testing, and specialized sleep studies.
                            </p>
                        </div>

                        {/* Princeton GEO: Expert Physician Quote */}
                        <div className="bg-navy-900 text-white rounded-2xl p-8 shadow-md border-l-4 border-gold-500 relative">
                            <div className="text-gold-400 text-4xl font-serif leading-none mb-2">&ldquo;</div>
                            <blockquote className="font-serif italic text-base md:text-lg text-gray-200 mb-4 leading-relaxed">
                                Primary care in internal medicine is not merely about managing symptoms as they emerge; it is about proactive, systemic surveillance. By integrating routine cardiovascular risk stratifications, detailed metabolic blood panels, and personalized lifestyle medicine, we prevent complications before they require emergency hospitalization.
                            </blockquote>
                            <div className="flex items-center gap-3">
                                <div>
                                    <div className="font-bold text-white text-sm">Dr. Zainulabuddin Syed, MD</div>
                                    <div className="text-xs text-gold-400">Board-Certified Internal Medicine Physician, Fairview Ogden Medical Group</div>
                                </div>
                            </div>
                        </div>

                        {/* Core Clinical Offerings */}
                        <div className="space-y-6 pt-4">
                            <h3 className="font-serif text-2xl font-bold text-navy-900">Core Clinical Focus Areas</h3>
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
                                        <h4 className="font-serif text-xl font-semibold text-navy-900 mb-2">{service.title}</h4>
                                        <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Princeton GEO: Authoritative Medical Citations */}
                        <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm text-xs text-gray-500">
                            <h4 className="font-bold text-navy-900 text-sm mb-2">Authoritative Medical References & Clinical Standards</h4>
                            <p className="mb-2">Our practice adheres strictly to peer-reviewed clinical protocols established by leading national health authorities:</p>
                            <ul className="space-y-1 list-disc pl-4 text-navy-700">
                                <li><a href="https://www.acponline.org/clinical-information/guidelines" target="_blank" rel="noopener noreferrer" className="hover:underline">American College of Physicians (ACP) — Clinical Practice Guidelines</a></li>
                                <li><a href="https://diabetes.org" target="_blank" rel="noopener noreferrer" className="hover:underline">American Diabetes Association (ADA) — Standards of Medical Care in Diabetes</a></li>
                                <li><a href="https://www.cdc.gov/chronicdisease/" target="_blank" rel="noopener noreferrer" className="hover:underline">Centers for Disease Control and Prevention (CDC) — Chronic Disease Indicators</a></li>
                            </ul>
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
                                <li>• Please bring a current list of all prescriptions, over-the-counter supplements, and dosages.</li>
                                <li>• Arrive 15 minutes before your scheduled appointment for preliminary vital signs.</li>
                                <li>• Check with your insurance provider regarding specialist referral and co-pay guidelines.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* LLM & Search Answer-Engine Optimization (FAQ Accordion) */}
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8 max-w-4xl mx-auto mb-12">
                    <div className="text-center mb-8">
                        <span className="text-gold-600 font-semibold text-xs uppercase tracking-wider">Patient Questions & Guidance</span>
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
                        Take control of your wellness. Book your next preventative physical or chronic disease consultation online using our scheduling portal.
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

export default InternalMedicine;
