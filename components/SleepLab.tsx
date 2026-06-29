import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconChevronDown, IconCheck, IconSleep } from './Icons';
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
        document.title = "Onsite Sleep Lab & Sleep Studies in Downers Grove, IL | Fairview Ogden Medical Group";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Diagnose and treat Sleep Apnea, Insomnia, Narcolepsy, and Restless Leg Syndrome at our modern onsite Sleep Lab in Downers Grove, IL. Accredited diagnostics and sleep medicine.");
        }

        // Schema.org MedicalBusiness & Specialty Structured Data for Google & LLMs/AEO
        const schemaData = {
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": "Onsite Sleep Lab & Sleep Studies",
            "description": "Onsite clinical sleep diagnostics and sleep apnea therapies at Fairview Ogden Medical Group.",
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
                "Polysomnography overnight study",
                "Sleep apnea diagnosis and CPAP titration",
                "Restless Leg Syndrome diagnosis",
                "Narcolepsy evaluation",
                "Home sleep testing options"
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

    const timelineSteps = [
        {
            time: "8:30 PM – Arrival",
            title: "Check-In & Orientation",
            desc: "You will arrive at our comfortable Downers Grove clinic and be shown to your private, hotel-like sleep room. Our sleep technologist will review the procedure and answer any questions."
        },
        {
            time: "9:15 PM – Setup",
            title: "Non-Invasive Sensor Placement",
            desc: "The technologist will place small, painless sensors on your scalp, face, chest, and legs. These sensors measure brain waves, heart rate, oxygen levels, and breathing patterns without restricting movement."
        },
        {
            time: "10:00 PM – Lights Out",
            title: "Comfortable Rest",
            desc: "You can read, watch TV, or go straight to sleep in our quiet, temperature-controlled environment. The sensors are long enough to let you turn and sleep in your preferred position naturally."
        },
        {
            time: "6:00 AM – Departure",
            title: "Morning Discharge",
            desc: "Our technologist will gently wake you up and remove the sensors. You can clean up and leave immediately, or proceed with your daily schedule. Results are analyzed by our specialists in 3-5 days."
        }
    ];

    const conditions = [
        {
            title: "Obstructive Sleep Apnea (OSA)",
            desc: "Frequent breathing pauses during sleep caused by upper airway collapse, leading to loud snoring, fatigue, and systemic cardiovascular strain."
        },
        {
            title: "Insomnia & Sleep Schedule Issues",
            desc: "Trouble falling asleep, staying asleep, or having non-restorative sleep, often analyzed alongside clinical circadian rhythms."
        },
        {
            title: "Restless Legs Syndrome (RLS)",
            desc: "Irresistible urges to move the legs while resting, causing disruptive twitching, movements, and frequent micro-arousals during the night."
        },
        {
            title: "Narcolepsy & Hypersomnolence",
            desc: "Excessive daytime sleepiness and sudden, uncontrollable sleep attacks, evaluated using overnight sleep studies and daytime nap studies."
        }
    ];

    const faqs = [
        {
            q: "What is an overnight sleep study (polysomnography)?",
            a: "A polysomnography is an overnight, non-invasive diagnostic test that records your physiological parameters during sleep. It tracks your brain activity (EEG), eye movements (EOG), muscle activity (EMG), heart rate (ECG), breathing patterns, oxygen saturation, and body position to identify sleep disorders."
        },
        {
            q: "How do I know if I need a sleep study?",
            a: "Common warning signs include chronic loud snoring, gasping or choking for air during sleep, waking up with a morning headache or dry mouth, daytime drowsiness, difficulty falling asleep, or persistent creeping sensations in your legs when trying to rest."
        },
        {
            q: "Are the sleep study rooms comfortable?",
            a: "Yes, our onsite Sleep Lab is designed to feel like a high-end hotel room rather than a clinical environment. Each private suite features a comfortable full-size bed, high-quality linens, flat-screen television, individual temperature control, and a peaceful, sound-dampened atmosphere."
        },
        {
            q: "Do I need a referral, and is it covered by insurance?",
            a: "Most medical insurances, including Medicare, cover sleep studies (polysomnography) when clinically indicated. Some policies require prior authorization or a referral from your primary care physician. Our administrative staff will assist in verifying your benefits and obtaining clearances."
        }
    ];

    return (
        <section className="min-h-screen pt-36 md:pt-44 pb-24 bg-neutral-50 text-navy-900">
            <div className="container mx-auto px-6 max-w-5xl">
                {/* Back Button */}
                <div className="mb-8">
                    <a 
                        href="#/" 
                        className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-gold-600 transition-colors uppercase tracking-wider"
                    >
                        <span>&larr;</span> Back to Services
                    </a>
                </div>

                {/* Twilight Banner */}
                <div className="bg-navy-900 rounded-2xl shadow-xl overflow-hidden mb-12">
                    <div className="p-8 md:p-12 relative z-10 max-w-3xl text-white">
                        <div className="flex items-center gap-3 text-gold-400 mb-2">
                            <IconSleep className="w-6 h-6" />
                            <span className="font-semibold tracking-wider text-sm uppercase">Diagnostic Specialties</span>
                        </div>
                        <MaskedText 
                            text="Sleep Laboratory" 
                            className="font-serif text-4.5xl md:text-5xl font-bold mt-2 mb-4 text-white" 
                            tag="h1" 
                        />
                        <p className="text-white text-lg md:text-xl leading-relaxed">
                            Professional onsite diagnostic sleep studies (polysomnography) to restore healthy sleep and protect your long-term cardiovascular health.
                        </p>
                    </div>
                </div>

                {/* Clinical Focus and Conditions */}
                <div className="grid lg:grid-cols-3 gap-12 mb-16">
                    <div className="lg:col-span-2">
                        <h2 className="font-serif text-3xl font-bold text-navy-900 mb-6 border-b-2 border-gold-500/30 pb-3">
                            Clinical Sleep Diagnostics
                        </h2>
                        <p className="text-gray-800 text-lg leading-relaxed mb-6">
                            Quality sleep is a fundamental pillar of health. Sleep disorders like Obstructive Sleep Apnea do more than cause fatigue; if left untreated, they significantly increase risks of high blood pressure, heart attacks, stroke, and type-2 diabetes. Our onsite Sleep Lab provides comprehensive, clinical-grade testing in a quiet and relaxing setting.
                        </p>
                        <p className="text-gray-800 text-lg leading-relaxed mb-8">
                            Our team of board-certified internal medicine physicians work closely with registered sleep technologists to diagnose the root cause of your sleep issues. We evaluate your physiology and create custom therapeutic plans, including CPAP titration, lifestyle counseling, and medication management.
                        </p>

                        <h3 className="font-serif text-2xl font-bold text-navy-900 mb-6">Common Sleep Disorders Evaluated</h3>
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            {conditions.map((cond, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
                                    <h4 className="font-serif text-lg font-semibold text-gold-600 mb-2">{cond.title}</h4>
                                    <p className="text-gray-800 text-sm leading-relaxed">{cond.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar info */}
                    <div className="space-y-8">
                        <div className="bg-navy-900 text-white rounded-2xl p-6 shadow-md border border-navy-800">
                            <h3 className="font-serif text-xl font-bold text-white mb-4">Patient Comforts</h3>
                            <ul className="space-y-4 text-sm text-gray-200">
                                <li className="flex items-start gap-3">
                                    <IconCheck className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                                    <span>Private, noise-dampened hotel-style suites.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <IconCheck className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                                    <span>Standard flat-screen TV and high-speed Wi-Fi.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <IconCheck className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                                    <span>Adjustable climate control for absolute comfort.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <IconCheck className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                                    <span>Ground-floor, accessible private entrance.</span>
                                </li>
                            </ul>
                            <div className="mt-8 border-t border-navy-800 pt-6">
                                <a 
                                    href="tel:6309684790" 
                                    className="block text-center bg-gold-500 hover:bg-gold-600 text-white font-semibold py-3 rounded-lg transition-colors text-sm uppercase tracking-wide"
                                >
                                    Call for Inquiries
                                </a>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md">
                            <h3 className="font-serif text-xl font-bold text-navy-900 mb-3">Sleep Lab Location</h3>
                            <p className="text-gray-800 text-xs leading-relaxed mb-4">
                                Our diagnostic lab is located directly inside our main building in Downers Grove, allowing you to undergo testing and see your doctor in the same convenient location.
                            </p>
                            <span className="text-xs text-gold-600 font-semibold">4121 Fairview Ave Ste L1, Downers Grove, IL</span>
                        </div>
                    </div>
                </div>

                {/* Timeline section: "A Night in the Sleep Lab" */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <span className="text-gold-600 font-semibold tracking-wider text-xs uppercase">Step-by-Step Experience</span>
                        <h2 className="font-serif text-3xl font-bold text-navy-900 mt-1">A Night in the Sleep Lab</h2>
                        <p className="text-gray-800 max-w-xl mx-auto mt-2 text-sm">
                            We work hard to make your sleep study as seamless and relaxed as possible. Here is what an example schedule will look like:
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {timelineSteps.map((step, index) => (
                            <div key={index} className="bg-navy-900 border border-navy-800 p-6 rounded-xl relative hover:border-gold-500/30 transition-all hover:shadow-xl">
                                <span className="absolute top-4 right-4 text-xs font-semibold bg-navy-800 text-gold-400 px-2.5 py-1 rounded-full border border-navy-700">
                                    {step.time.split(" – ")[0]}
                                </span>
                                <h3 className="font-serif text-lg font-semibold text-white mt-4 mb-2">{step.title}</h3>
                                <p className="text-gray-300 text-xs leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
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
                    <h3 className="font-serif text-2xl font-bold mb-3">Do You Struggle with Chronic Fatigue or Snoring?</h3>
                    <p className="text-gray-200 text-sm md:text-base max-w-xl mx-auto mb-6">
                        Speak with our clinical team about ordering a diagnostic sleep study. We can coordinate with your insurance for testing.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a 
                            href="tel:6309684790" 
                            className="bg-gold-500 hover:bg-gold-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-colors text-sm uppercase tracking-wide text-center"
                        >
                            Schedule Consultation
                        </a>
                        <a 
                            href="#/contact" 
                            className="bg-white/10 text-white border border-white/20 font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all text-sm uppercase tracking-wide text-center"
                        >
                            Contact Details
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SleepLab;
