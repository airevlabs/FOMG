import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconChevronDown, IconClose } from './Icons';
import MaskedText from './MaskedText';

// Local Search Icon component
const IconSearch = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
);

interface AccordionItemProps {
    question: string;
    answer: string | React.ReactNode;
    isOpen: boolean;
    onClick: () => void;
}

const AccordionItem = ({ question, answer, isOpen, onClick }: AccordionItemProps) => {
    return (
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
};

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState<'all' | 'general' | 'clinical' | 'billing'>('all');

    const faqs = [
        // --- Category: General & Logistics ---
        {
            category: "general",
            q: "Where is your office located?",
            a: "We are located at 4121 Fairview Ave Ste L1, Downers Grove, IL 60515. Our clinic features free onsite parking directly adjacent to the building."
        },
        {
            category: "general",
            q: "What are the office hours for Fairview Ogden Medical Group?",
            a: "Our Downers Grove clinic hours are: Monday (10:00 AM - 4:00 PM), Tuesday (10:00 AM - 2:00 PM), Wednesday (Closed), Thursday (10:00 AM - 2:00 PM), Friday (Closed), Saturday (10:00 AM - 1:00 PM), and Sunday (Closed)."
        },
        {
            category: "general",
            q: "How do I schedule an appointment with one of the doctors?",
            a: (
                <span>
                    You can schedule an appointment by calling our office directly at <strong>(630) 968-4790</strong> or by using our convenient online booking portal via the "Book Appointment" link, which integrates directly with Advocate Aurora Health open scheduling.
                </span>
            )
        },
        {
            category: "general",
            q: "Do you accept new patients?",
            a: "Yes, Dr. Zainulabuddin Syed, Dr. Abdul-Bari Syed, and Dr. Ravikiran Tamragouri are currently accepting new patients. You can book an appointment easily by calling our Downers Grove clinic or scheduling online."
        },
        {
            category: "general",
            q: "Is parking available at the clinic, and is it accessible?",
            a: "Yes, our clinic features a dedicated, free private parking lot directly adjacent to the clinic entrance. The building is fully ground-level, wheelchair accessible, and offers designated accessible parking spaces."
        },
        {
            category: "general",
            q: "What languages does your staff speak?",
            a: "To serve our diverse Downers Grove and Chicago-area community, our team speaks multiple languages. In addition to English, our physicians and clinical staff are fluent in Urdu, Hindi, and Arabic."
        },
        {
            category: "general",
            q: "What is your fax number?",
            a: "Our medical office fax number is (630) 968-8755. Pharmacies, specialists, and medical facilities can send records directly here."
        },
        {
            category: "general",
            q: "How do I request a prescription refill?",
            a: "The fastest way to refill a prescription is to contact your pharmacy directly, and they will submit an electronic request to our team. You may also request refills by calling our clinic. Please allow 24 to 48 business hours for processing."
        },

        // --- Category: Clinical & Specialized Services ---
        {
            category: "clinical",
            q: "What conditions do you treat in Internal Medicine?",
            a: "As board-certified internists, we treat a comprehensive spectrum of adult conditions, including acute infections, colds, diabetes, hypertension, high cholesterol, respiratory issues, and complex, multi-system chronic diseases."
        },
        {
            category: "clinical",
            q: "What is an Internal Medicine physician (Internist)?",
            a: "An Internist is a doctor who specializes in adult medicine. Unlike family practitioners, internists undergo intensive residency training focused specifically on the prevention, diagnosis, and management of complex medical conditions and chronic illnesses in adults and geriatric patients."
        },
        {
            category: "clinical",
            q: "How does the Sleep Lab diagnose disorders?",
            a: "Our state-of-the-art onsite Sleep Lab conducts overnight sleep studies (polysomnography) to record brain activity, eye movements, heart rate, oxygen levels, and breathing patterns, helping diagnose Sleep Apnea, Insomnia, Narcolepsy, and Restless Leg Syndrome."
        },
        {
            category: "clinical",
            q: "What should I expect during a sleep study in the Sleep Lab?",
            a: "An overnight sleep study is non-invasive and painless. You will sleep in a comfortable, quiet, hotel-like private room. Our sleep technologist will apply soft sensors to monitor your breathing, movements, and sleep stages while you rest."
        },
        {
            category: "clinical",
            q: "What ultrasounds are available onsite?",
            a: "We offer advanced, diagnostic imaging onsite for patient convenience. This includes abdominal scans (liver, gall bladder, kidney, pancreas), Echocardiograms (ultrasound of the heart), Carotid Artery Dopplers, thyroid scans, pelvic ultrasounds, and Aortic Aneurysm screenings."
        },
        {
            category: "clinical",
            q: "What hospitals are your doctors affiliated with?",
            a: "Our physicians are affiliated with leading local hospitals, including Advocate Good Samaritan Hospital in Downers Grove, UChicago Medicine AdventHealth Hinsdale, Elmhurst Memorial Hospital, and AMITA Health Adventist Medical Center GlenOaks, facilitating seamless transition if inpatient care is ever needed."
        },
        {
            category: "clinical",
            q: "Do you offer telehealth or virtual visits?",
            a: "Yes, we provide secure, convenient telehealth video consultations for established patients for suitable clinical matters such as follow-up consultations, medication management, and reviewing lab results."
        },
        {
            category: "clinical",
            q: "How and when will I receive my lab or ultrasound results?",
            a: "Most lab test results and ultrasound reports are returned within 3 to 5 business days. Your physician will review them and message you through the patient portal, call you for urgent findings, or review them during your follow-up appointment."
        },
        {
            category: "clinical",
            q: "What ages do you treat?",
            a: "Fairview Ogden Medical Group specializes in Internal Medicine, focusing exclusively on the healthcare needs of adults, including young adults, middle-aged adults, and older geriatric patients."
        },

        // --- Category: Insurance, Billing & Policies ---
        {
            category: "billing",
            q: "What insurances are accepted?",
            a: (
                <div>
                    <p className="mb-4">We accept a wide range of insurance plans, including:</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 list-disc pl-5 text-sm">
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
                    <p className="text-sm">
                        Please call our billing department if your plan is not listed, as we frequently update our accepted networks.
                    </p>
                </div>
            )
        },
        {
            category: "billing",
            q: "What should I bring to my first appointment?",
            a: "For your first visit, please arrive 15 minutes early and bring your physical insurance card, a valid government-issued photo ID, a complete list of your current medications (including dosages), and copies of any relevant medical records or recent lab results."
        },
        {
            category: "billing",
            q: "Do I need a doctor's referral to schedule a sleep study or ultrasound?",
            a: "Referral and pre-authorization requirements depend on your specific insurance policy. While we provide direct referrals for our internal medicine patients, we also accept external referrals from other physicians. We recommend contacting your insurance carrier to verify coverage parameters beforehand."
        }
    ];

    // SEO / LLM optimization script injection on mount
    useEffect(() => {
        // Update document metadata
        document.title = "Frequently Asked Questions | Fairview Ogden Medical Group";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Browse frequently asked questions for Fairview Ogden Medical Group in Downers Grove, IL. Find details on clinic hours, doctor affiliations, insurance, sleep lab studies, and onsite ultrasounds.");
        }

        // Schema.org FAQPage structured data for Google & LLMs
        const schemaData = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => {
                let answerText = "";
                if (faq.q === "What insurances are accepted?") {
                    answerText = "We accept a wide range of insurance plans, including Aetna, Anthem Blue Cross Blue Shield, Blue Cross Blue Shield of Illinois, Blue Shield of Illinois, Caterpillar, Cigna, Consolidated Health Plans, Highmark Blue Shield, Humana, Independence Blue Cross, Medicare, Memorial Hermann, MultiPlan, POMCO, UnitedHealthOne, and UnitedHealthcare. Contact us if your plan is not listed.";
                } else if (faq.q === "How do I schedule an appointment with one of the doctors?") {
                    answerText = "You can schedule an appointment by calling our office directly at (630) 968-4790 or by using our convenient online booking portal via the 'Book Appointment' link, which integrates directly with Advocate Aurora Health open scheduling.";
                } else {
                    answerText = typeof faq.a === 'string' ? faq.a : "";
                }
                return {
                    "@type": "Question",
                    "name": faq.q,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": answerText
                    }
                };
            })
        };

        const scriptId = "faq-jsonld-schema";
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
            if (existingScript) {
                existingScript.remove();
            }
        };
    }, []);

    // Filter FAQs based on active tab and search query
    const filteredFaqs = faqs.filter(faq => {
        const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
        
        // Convert JSX node or string answer into queryable string
        let searchString = faq.q.toLowerCase();
        if (typeof faq.a === 'string') {
            searchString += " " + faq.a.toLowerCase();
        } else if (faq.q === "What insurances are accepted?") {
            searchString += " aetna anthem blue cross shield caterpillar cigna medicare humana unitedhealthcare";
        } else if (faq.q === "How do I schedule an appointment with one of the doctors?") {
            searchString += " book schedule online portal livewell phone number appointment";
        }
        
        const matchesSearch = searchString.includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const categories = [
        { id: 'all', name: 'All FAQs' },
        { id: 'general', name: 'General & Logistics' },
        { id: 'clinical', name: 'Clinical Services' },
        { id: 'billing', name: 'Insurance & Billing' }
    ] as const;

    return (
        <section className="min-h-screen pt-36 md:pt-44 pb-24 bg-neutral-50">
            {/* Header Banner */}
            <div className="container mx-auto px-6 max-w-5xl mb-12">
                <div className="text-center mb-8">
                    <span className="text-gold-600 font-semibold tracking-wider text-sm uppercase">Patient Help Center</span>
                    <MaskedText text="Frequently Asked Questions" className="font-serif text-4.5xl text-navy-900 font-bold mt-2 mb-4" tag="h1" />
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Have questions about our medical group? Search our comprehensive FAQs below or select a category to filter.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="relative max-w-xl mx-auto mb-10">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                        <IconSearch className="w-5 h-5" />
                    </div>
                    <input 
                        type="text"
                        placeholder="Search FAQs (e.g., sleep, parking, appointments)..."
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                            setActiveIndex(null); // Reset open states on search
                        }}
                        className="w-full pl-11 pr-11 py-4 bg-white rounded-xl shadow-sm border border-gray-200 outline-none focus:ring-2 focus:ring-gold-500/20 focus:border-gold-500 transition-all font-medium text-navy-900 placeholder:text-gray-400"
                    />
                    {searchQuery && (
                        <button 
                            onClick={() => setSearchQuery('')}
                            className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-navy-900 transition-colors"
                        >
                            <IconClose className="w-5 h-5" />
                        </button>
                    )}
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 border-b border-gray-200 pb-6">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => {
                                setActiveCategory(cat.id);
                                setActiveIndex(null); // Reset open states on category change
                            }}
                            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                                activeCategory === cat.id
                                    ? 'bg-navy-800 text-white shadow-md'
                                    : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-navy-900 border border-gray-200/60'
                            }`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* FAQ List Accordion */}
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8 max-w-4xl mx-auto">
                    <AnimatePresence mode="popLayout">
                        {filteredFaqs.length > 0 ? (
                            <motion.div 
                                layout
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="divide-y divide-gray-100"
                            >
                                {filteredFaqs.map((faq, idx) => {
                                    // Use absolute index in faqs array to prevent layout collision
                                    const absoluteIdx = faqs.findIndex(f => f.q === faq.q);
                                    return (
                                        <AccordionItem 
                                            key={faq.q} 
                                            question={faq.q} 
                                            answer={faq.a} 
                                            isOpen={activeIndex === absoluteIdx} 
                                            onClick={() => setActiveIndex(activeIndex === absoluteIdx ? null : absoluteIdx)} 
                                        />
                                    );
                                })}
                            </motion.div>
                        ) : (
                            <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="text-center py-12 text-gray-500"
                            >
                                <p className="text-lg font-semibold mb-2">No results found</p>
                                <p className="text-sm">We couldn't find any FAQs matching "{searchQuery}". Try using different keywords.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Footer Help Card */}
                <div className="mt-12 text-center bg-navy-900 rounded-2xl p-8 max-w-4xl mx-auto text-white shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                    <h3 className="font-serif text-2xl font-bold mb-3">Still have questions?</h3>
                    <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto mb-6">
                        If you couldn't find the answers you need, please don't hesitate to reach out. Our friendly office staff is here to assist you.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a 
                            href="#/contact" 
                            className="bg-gold-500 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-gold-600 transition-colors text-sm uppercase tracking-wide"
                        >
                            Contact Our Office
                        </a>
                        <a 
                            href="tel:6309684790" 
                            className="bg-white/10 text-white border border-white/20 font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all text-sm"
                        >
                            Call (630) 968-4790
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;