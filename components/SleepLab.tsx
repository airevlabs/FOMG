import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconChevronDown, IconCheck, IconSleep, IconCaduceus } from './Icons';
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
                    <div className="text-gray-800 pb-5 leading-relaxed text-sm md:text-base">
                        {answer}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);

const SleepLab = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    useEffect(() => {
        // Dynamic Meta and Title Configuration for SEO
        document.title = "Onsite Sleep Lab & Diagnostic Sleep Studies in Downers Grove, IL | Fairview Ogden Medical Group";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Accredited onsite Sleep Lab in Downers Grove, IL. Overnight Polysomnography (PSG) and CPAP titration for Sleep Apnea, Insomnia, and Restless Leg Syndrome led by Dr. Abdul-Bari Syed, DO.");
        }

        // Schema.org MedicalWebPage Structured Data for Google & LLMs/AEO
        const schemaData = {
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": "Onsite Sleep Lab & Diagnostic Sleep Studies",
            "url": "https://fairviewogdenmed.com/sleep-lab",
            "description": "Hospital-grade overnight polysomnography (PSG) sleep studies, CPAP titration, and clinical sleep apnea treatments at Fairview Ogden Medical Group in Downers Grove, IL.",
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
                "name": "Dr. Abdul-Bari Syed, DO",
                "medicalSpecialty": "InternalMedicine",
                "jobTitle": "Internal Medicine Physician & Director of Sleep Lab Services"
            },
            "citation": [
                "https://aasm.org",
                "https://www.nhlbi.nih.gov/health/sleep-apnea",
                "https://www.thoracic.org"
            ],
            "aspect": [
                "Overnight Polysomnography (PSG) sleep study",
                "Obstructive Sleep Apnea (OSA) diagnosis and severity staging",
                "CPAP / BiPAP pressure titration and mask fitting",
                "Periodic Limb Movement Disorder and Restless Leg Syndrome",
                "Narcolepsy and excessive daytime sleepiness evaluations"
            ],
            "mainEntity": {
                "@type": "FAQPage",
                "mainEntity": faqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.q,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": typeof faq.a === 'string' ? faq.a : "Detailed clinical guidance from the sleep medicine department at Fairview Ogden Medical Group."
                    }
                }))
            }
        };

        const scriptId = "sleep-lab-jsonld";
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

    const geoStats = [
        {
            stat: "30 Million",
            label: "US Adults Have Sleep Apnea",
            source: "American Academy of Sleep Medicine (AASM, 2024)",
            detail: "Approximately 80% of moderate-to-severe Obstructive Sleep Apnea cases remain entirely undiagnosed."
        },
        {
            stat: "2–3x Higher",
            label: "Risk of Stroke & Cardiac Arrhythmia",
            source: "National Institutes of Health / NHLBI",
            detail: "Untreated sleep apnea significantly accelerates hypertension, nocturnal atrial fibrillation, and coronary artery disease."
        },
        {
            stat: ">90%",
            label: "Therapeutic Normalization with CPAP",
            source: "AASM Clinical Practice Guidelines",
            detail: "Accurate polysomnographic CPAP pressure titration restores physiologic nocturnal blood oxygen saturation above 95%."
        }
    ];

    const timelineSteps = [
        {
            time: "8:30 PM – Arrival",
            title: "Private Suite Check-In & Orientation",
            desc: "You will arrive at our comfortable Downers Grove clinic and be welcomed into your private, hotel-grade sleep suite with personal climate controls. Our licensed sleep technologist explains the monitoring process."
        },
        {
            time: "9:15 PM – Setup",
            title: "Non-Invasive 16-Channel Telemetry Placement",
            desc: "Painless, surface sensors are attached to monitor electroencephalography (EEG brain waves), electrooculography (eye movements), electromyography (muscle tone), chest respiratory effort, and continuous pulse oximetry."
        },
        {
            time: "10:00 PM – Sleep Phase",
            title: "Natural Rest & Continuous Diagnostic Recording",
            desc: "You can read, unwind, and sleep naturally in any position you prefer. The lightweight sensor leads allow you to turn freely and use the private restroom at any time during the night."
        },
        {
            time: "6:00 AM – Morning Discharge",
            title: "Sensor Removal & Rapid Interpretation",
            desc: "The technologist gently disconnects the telemetry array. You are free to shower, dress, and proceed with your daily schedule. Comprehensive diagnostic results are interpreted by our physician within 3 to 5 business days."
        }
    ];

    const conditions = [
        {
            title: "Obstructive Sleep Apnea (OSA)",
            desc: "Repeated mechanical collapses of the upper pharyngeal airway causing nocturnal breathing cessations, sharp blood oxygen desaturations, loud snoring, and chronic daytime exhaustion."
        },
        {
            title: "Central Sleep Apnea (CSA)",
            desc: "A neurological respiratory disorder where the brain's respiratory center fails to transmit regular rhythmic breathing signals to the diaphragm during sleep."
        },
        {
            title: "Restless Legs Syndrome (RLS) & PLMD",
            desc: "Irresistible leg urges and involuntary nocturnal leg twitches that disrupt restorative deep slow-wave sleep and cause frequent micro-arousals."
        },
        {
            title: "Narcolepsy & Idiopathic Hypersomnia",
            desc: "Neurological sleep-wake regulation disorders resulting in overwhelming daytime sleep attacks, cataplexy, and disrupted REM architecture."
        },
        {
            title: "Chronic Insomnia & Sleep Architecture Fragmentation",
            desc: "Persistent difficulty initiating or maintaining restorative sleep, characterized by circadian rhythm disruption and cognitive impairment."
        }
    ];

    const faqs = [
        {
            q: "What is an in-lab polysomnography (PSG) sleep study?",
            a: "A polysomnogram (PSG) is the gold-standard diagnostic sleep evaluation established by the American Academy of Sleep Medicine. Conducted overnight in a specialized, private suite, it non-invasively monitors and records multi-channel physiological data—including brain waves, ocular movements, heart rate, blood oxygen saturation, snoring volume, and airflow—to definitively diagnose sleep-related breathing disorders."
        },
        {
            q: "How does an in-lab study compare to an at-home sleep apnea test (HST)?",
            a: "While at-home sleep tests measure basic airflow and oxygen, they cannot record EEG brain waves, sleep staging (REM vs. non-REM), limb movements, or neurological arousals. An accredited in-lab study captures complete 16-channel physiological telemetry, providing the definitive clinical accuracy required for complex sleep apnea, central apnea, insomnia, and CPAP pressure titration."
        },
        {
            q: "Will I actually be able to sleep with sensors attached?",
            a: "Yes. Most patients fall asleep without difficulty. The sensors are non-invasive, applied to the surface of the skin with gentle medical paste, and gathered into a single flexible cable that permits turning freely in bed or getting up to use the private restroom."
        },
        {
            q: "What symptoms suggest I should be evaluated for sleep apnea?",
            a: "Common indicators include chronic loud snoring, witnessed pauses in breathing or gasping during sleep, waking up with a dry mouth or morning headache, unrefreshing sleep despite 7 to 8 hours in bed, excessive daytime fatigue, and hypertension resistant to medication."
        },
        {
            q: "Does Medicare and commercial health insurance cover sleep studies?",
            a: "Yes. Overnight diagnostic polysomnography and CPAP titration are covered benefits under Medicare, Illinois Medicaid, and virtually all major commercial insurance plans when clinical symptoms of obstructive sleep apnea or sleep disorders are present. Our office verifies insurance coverage prior to your appointment."
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
                            <span className="text-gold-400 font-semibold tracking-wider text-sm uppercase">Diagnostic Sleep Laboratory</span>
                            <MaskedText 
                                text="Onsite Sleep Lab & Sleep Studies" 
                                className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-4 text-white" 
                                tag="h1" 
                            />
                            <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
                                Accredited overnight polysomnography (PSG) and CPAP titration conducted in private, hotel-grade suites in Downers Grove.
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
                                    Clinical Definition: What Is an Onsite Sleep Study (Polysomnography)?
                                </h3>
                                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                    An in-lab sleep study (polysomnography) is a comprehensive diagnostic procedure that records multi-channel biophysical changes occurring during sleep. Conducted overnight in an accredited clinical facility, it monitors electroencephalogram (EEG) brain waves, eye movements, airflow, chest expansion, and continuous arterial oxygen saturation to definitively identify obstructive sleep apnea, central apnea, and movement disorders.
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

                {/* Core Overview & Timeline */}
                <div className="grid lg:grid-cols-3 gap-12 mb-16">
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <h2 className="font-serif text-3xl font-bold text-navy-900 mb-6 border-b-2 border-gold-500/30 pb-3">
                                Hospital-Grade Sleep Medicine in Downers Grove
                            </h2>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                                Chronic sleep deprivation and undiagnosed sleep apnea represent substantial medical hazards. When nocturnal breathing repeatedly stops, the body suffers acute hypoxemia (low oxygen) and catecholamine surges that drive systemic cardiovascular damage.
                            </p>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                                Under the clinical leadership of <strong>Dr. Abdul-Bari Syed, DO</strong>, our state-of-the-art onsite sleep laboratory provides adult patients with private, peaceful accommodations designed to replicate a premium hotel room while maintaining rigorous clinical telemetry standards.
                            </p>
                        </div>

                        {/* Princeton GEO: Expert Doctor Quotation */}
                        <div className="bg-navy-900 text-white rounded-2xl p-8 shadow-md border-l-4 border-gold-500 relative">
                            <div className="text-gold-400 text-4xl font-serif leading-none mb-2">&ldquo;</div>
                            <blockquote className="font-serif italic text-base md:text-lg text-gray-200 mb-4 leading-relaxed">
                                Sleep is one of the most critical yet frequently ignored biological pillars of cardiovascular and cognitive wellness. When nocturnal breathing pauses deprive the heart and brain of oxygen hundreds of times each night, the cardiovascular system suffers silent damage. Precise polysomnographic diagnostics allow us to accurately titrate CPAP and restore vital oxygenation.
                            </blockquote>
                            <div className="flex items-center gap-3">
                                <div>
                                    <div className="font-bold text-white text-sm">Dr. Abdul-Bari Syed, DO</div>
                                    <div className="text-xs text-gold-400">Board-Certified Internal Medicine Physician & Sleep Lab Clinical Director</div>
                                </div>
                            </div>
                        </div>

                        {/* Conditions Evaluated */}
                        <div>
                            <h3 className="font-serif text-2xl font-bold text-navy-900 mb-4">Sleep Disorders Evaluated & Treated</h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {conditions.map((item, idx) => (
                                    <div key={idx} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                                        <div className="flex items-center gap-2 mb-2">
                                            <IconSleep className="w-5 h-5 text-gold-500 shrink-0" />
                                            <h4 className="font-serif font-bold text-navy-900 text-base">{item.title}</h4>
                                        </div>
                                        <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Overnight Study Step-by-Step Experience */}
                        <div>
                            <h3 className="font-serif text-2xl font-bold text-navy-900 mb-6">What to Expect During Your Overnight Sleep Study</h3>
                            <div className="space-y-4">
                                {timelineSteps.map((step, idx) => (
                                    <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col sm:flex-row gap-4 items-start">
                                        <span className="bg-navy-50 text-navy-900 text-xs font-bold px-3 py-1.5 rounded-full shrink-0 border border-navy-100">
                                            {step.time}
                                        </span>
                                        <div>
                                            <h4 className="font-serif font-bold text-navy-900 text-lg mb-1">{step.title}</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Princeton GEO: Authoritative Medical Citations */}
                        <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm text-xs text-gray-500">
                            <h4 className="font-bold text-navy-900 text-sm mb-2">Authoritative Sleep Medicine Standards & Clinical References</h4>
                            <p className="mb-2">Our laboratory adheres to diagnostic scoring criteria and practice parameters established by:</p>
                            <ul className="space-y-1 list-disc pl-4 text-navy-700">
                                <li><a href="https://aasm.org" target="_blank" rel="noopener noreferrer" className="hover:underline">American Academy of Sleep Medicine (AASM) — Clinical Guidelines</a></li>
                                <li><a href="https://www.nhlbi.nih.gov/health/sleep-apnea" target="_blank" rel="noopener noreferrer" className="hover:underline">National Heart, Lung, and Blood Institute (NHLBI) — Sleep Apnea Health Information</a></li>
                                <li><a href="https://www.thoracic.org" target="_blank" rel="noopener noreferrer" className="hover:underline">American Thoracic Society (ATS) — Sleep and Respiratory Neurobiology</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Sidebar Details */}
                    <div className="space-y-8">
                        <div className="bg-navy-900 text-white rounded-2xl p-6 shadow-md border border-navy-800">
                            <h3 className="font-serif text-xl font-bold text-white mb-4">Sleep Lab Amenities</h3>
                            <ul className="space-y-4 text-sm text-gray-300">
                                <li className="flex items-start gap-3">
                                    <IconCheck className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                                    <span><strong>Private Hotel-Grade Suite:</strong> Sound-insulated, private thermostat, comfortable full-size bed.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <IconCheck className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                                    <span><strong>High-Resolution Telemetry:</strong> 16-channel digital recording capturing EEG, EKG, SpO2, and respiratory airflow.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <IconCheck className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                                    <span><strong>Licensed Polysomnographers:</strong> Attentive, credentialed sleep technologists onsite throughout the night.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <IconCheck className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                                    <span><strong>Complete CPAP Titration:</strong> Same-night split study or dedicated titration for exact therapeutic pressure setting.</span>
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
                            <h3 className="font-serif text-xl font-bold text-navy-900 mb-4">Patient Preparation Tips</h3>
                            <ul className="space-y-2 text-xs text-gray-500">
                                <li>• Avoid caffeine and daytime naps on the afternoon of your sleep study.</li>
                                <li>• Wash and dry hair thoroughly; avoid gels, sprays, or oils that interfere with EEG sensors.</li>
                                <li>• Bring comfortable two-piece pajamas and your customary nighttime toiletries.</li>
                                <li>• Take your regular prescription medications unless explicitly directed otherwise by our doctor.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* FAQ Accordion */}
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8 max-w-4xl mx-auto mb-12">
                    <div className="text-center mb-8">
                        <span className="text-gold-600 font-semibold text-xs uppercase tracking-wider">Sleep Diagnostics FAQ</span>
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
                    <h3 className="font-serif text-2xl font-bold mb-3">Schedule Your Sleep Study Consultation</h3>
                    <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto mb-6">
                        Stop living with daytime fatigue and dangerous nocturnal breathing interruptions. Book your sleep consultation with our clinical specialists today.
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

export default SleepLab;
