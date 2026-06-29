import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import RevealSection from './RevealSection';
import { IconMapPin, IconPhone } from './Icons';
import MaskedText from './MaskedText';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
    
    useEffect(() => {
        // Set dynamic title and description for SEO/LLMs
        document.title = "Contact Us | Fairview Ogden Medical Group";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Contact Fairview Ogden Medical Group in Downers Grove, IL. Call (630) 968-4790, submit a message, find driving directions, or check our weekly clinic hours.");
        }
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Thank you, ${formState.name}. Your message has been sent. We will contact you shortly.`);
        setFormState({ name: '', email: '', phone: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    return (
        <section className="min-h-screen pt-36 md:pt-44 pb-24 bg-neutral-50">
            <div className="container mx-auto px-6 max-w-6xl">
                {/* Header Banner */}
                <div className="text-center mb-12">
                    <span className="text-gold-600 font-semibold tracking-wider text-sm uppercase">Get In Touch</span>
                    <MaskedText text="Contact Our Clinic" className="font-serif text-4.5xl text-navy-900 font-bold mt-2 mb-4" tag="h1" />
                    <p className="text-gray-600 text-lg max-w-xl mx-auto">
                        Have questions or ready to schedule your consultation? Reach out to us via phone, visit our clinic, or submit the contact form below.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    
                    {/* Left Column: Contact details & Map */}
                    <div className="lg:col-span-5 bg-navy-900 text-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                        
                        <h2 className="font-serif text-2xl font-bold mb-6 text-white">Office Information</h2>
                        
                        <div className="space-y-6 mb-8 relative z-10">
                            <a 
                                href="https://maps.google.com/?q=4121+Fairview+Ave,+Downers+Grove,+IL+60515" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-start gap-4 group hover:bg-white/5 p-3 rounded-xl transition-colors"
                            >
                                <div className="bg-white/10 p-3 rounded text-gold-500 group-hover:bg-gold-500 group-hover:text-white transition-colors shrink-0">
                                    <IconMapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-base">Visit Our Clinic</h4>
                                    <p className="text-gray-300 text-sm mt-1 leading-relaxed group-hover:text-white transition-colors">
                                        4121 Fairview Ave Ste L1<br/>Downers Grove, IL 60515
                                    </p>
                                </div>
                            </a>

                            <a 
                                href="tel:6309684790"
                                className="flex items-start gap-4 group hover:bg-white/5 p-3 rounded-xl transition-colors"
                            >
                                <div className="bg-white/10 p-3 rounded text-gold-500 group-hover:bg-gold-500 group-hover:text-white transition-colors shrink-0">
                                    <IconPhone className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-base">Call Our Reception</h4>
                                    <p className="text-gray-300 text-sm mt-1 group-hover:text-white transition-colors">(630) 968-4790</p>
                                </div>
                            </a>
                            
                            {/* Fax & Portal Details */}
                            <div className="flex items-start gap-4 p-3 rounded-xl">
                                <div className="bg-white/10 p-3 rounded text-gold-500 shrink-0">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                                        <polyline points="4 7 4 4 20 4 20 7"/>
                                        <rect x="2" y="7" width="20" height="10" rx="2" ry="2"/>
                                        <line x1="6" y1="11" x2="6" y2="11"/>
                                        <rect x="6" y="14" width="12" height="6"/>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-base">Medical Office Fax</h4>
                                    <p className="text-gray-300 text-sm mt-1">(630) 968-8755</p>
                                </div>
                            </div>
                        </div>

                        {/* Clinic Weekly Hours */}
                        <div className="border-t border-white/10 pt-6 mb-8">
                            <h3 className="font-serif text-lg font-bold mb-4 text-white">Clinic Hours</h3>
                            <div className="space-y-2 text-sm text-gray-300">
                                <div className="flex justify-between">
                                    <span>Monday</span>
                                    <span className="font-semibold text-white">10:00 AM - 4:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Tuesday</span>
                                    <span className="font-semibold text-white">10:00 AM - 2:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Wednesday</span>
                                    <span className="text-gray-400 font-medium">Closed</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Thursday</span>
                                    <span className="font-semibold text-white">10:00 AM - 2:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Friday</span>
                                    <span className="text-gray-400 font-medium">Closed</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Saturday</span>
                                    <span className="font-semibold text-white">10:00 AM - 1:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sunday</span>
                                    <span className="text-gray-400 font-medium">Closed</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Static Embedded Map */}
                        <div className="w-full h-56 rounded-xl overflow-hidden shadow-md border border-white/10 relative z-10">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.602263452445!2d-87.9791448!3d41.7729606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e4f6209555555%3A0xc3124359218e2467!2s4121%20Fairview%20Ave%2C%20Downers%20Grove%2C%20IL%2060515!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus" 
                                width="100%" 
                                height="100%" 
                                style={{ border: 0 }} 
                                allowFullScreen={true} 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Fairview Ogden Medical Group Downers Grove Map"
                            ></iframe>
                        </div>
                    </div>

                    {/* Right Column: Contact form */}
                    <div className="lg:col-span-7 bg-white text-navy-900 p-8 md:p-10 rounded-2xl shadow-md border border-gray-100">
                        <MaskedText text="Send an Inquiry" className="font-serif text-2xl font-bold mb-4 text-navy-900" tag="h2" align="left" />
                        <p className="text-gray-500 mb-8 text-sm md:text-base leading-relaxed">
                            Have general questions or need help with a booking? Use this secure contact form to contact our administrative team. We respond to online inquiries within 24 business hours.
                        </p>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold mb-1 text-gray-700">Full Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    required
                                    value={formState.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/10 outline-none transition-all placeholder:text-gray-400 font-medium"
                                    placeholder="Enter your name"
                                />
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold mb-1 text-gray-700">Email Address</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        required
                                        value={formState.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/10 outline-none transition-all placeholder:text-gray-400 font-medium"
                                        placeholder="yourname@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-semibold mb-1 text-gray-700">Phone Number</label>
                                    <input 
                                        type="tel" 
                                        id="phone" 
                                        name="phone" 
                                        required
                                        value={formState.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/10 outline-none transition-all placeholder:text-gray-400 font-medium"
                                        placeholder="(630) 968-4790"
                                    />
                                </div>
                            </div>
                            
                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold mb-1 text-gray-700">Message</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    rows={5}
                                    required
                                    value={formState.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/10 outline-none transition-all placeholder:text-gray-400 font-medium leading-relaxed"
                                    placeholder="Briefly describe how we can assist you (please avoid submitting highly sensitive clinical details via general web forms)..."
                                ></textarea>
                            </div>
                            
                            <motion.button 
                                type="submit"
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                className="w-full bg-gold-500 text-white font-bold py-4 rounded-lg shadow hover:bg-gold-600 transition-colors uppercase tracking-wider text-sm font-semibold"
                            >
                                Submit Message
                            </motion.button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;