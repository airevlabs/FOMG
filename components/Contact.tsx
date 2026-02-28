import React, { useState } from 'react';
import { motion } from 'framer-motion';
import RevealSection from './RevealSection';
import { IconMapPin, IconPhone } from './Icons';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Thank you, ${formState.name}. Your message has been sent. We will contact you shortly.`);
        setFormState({ name: '', email: '', phone: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    return (
        <RevealSection id="contact" className="py-24 bg-navy-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16">
                    
                    {/* Info Side */}
                    <div>
                        <h2 className="font-serif text-4xl font-bold mb-6 text-white">Get in Touch</h2>
                        <p className="text-gray-300 mb-8 text-lg">
                            Ready to prioritize your health? Contact us today to schedule your appointment or ask any questions.
                        </p>

                        <div className="space-y-6 mb-10">
                            <a 
                                href="https://maps.google.com/?q=4121+Fairview+Ave,+Downers+Grove,+IL+60515" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-start gap-4 group hover:bg-white/5 p-3 rounded-lg transition-colors"
                            >
                                <div className="bg-white/10 p-3 rounded text-gold-500 group-hover:bg-gold-500 group-hover:text-white transition-colors">
                                    <IconMapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-lg">Visit Us</h4>
                                    <p className="text-gray-300 group-hover:text-white transition-colors">4121 Fairview Ave<br/>Downers Grove, IL 60515</p>
                                </div>
                            </a>
                            <a 
                                href="tel:6309684790"
                                className="flex items-start gap-4 group hover:bg-white/5 p-3 rounded-lg transition-colors"
                            >
                                <div className="bg-white/10 p-3 rounded text-gold-500 group-hover:bg-gold-500 group-hover:text-white transition-colors">
                                    <IconPhone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-lg">Call Us</h4>
                                    <p className="text-gray-300 group-hover:text-white transition-colors">(630) 968-4790</p>
                                </div>
                            </a>
                        </div>
                        
                        <div className="w-full h-64 rounded-xl overflow-hidden shadow-2xl border border-white/10">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.602263452445!2d-87.9791448!3d41.7729606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e4f6209555555%3A0xc3124359218e2467!2s4121%20Fairview%20Ave%2C%20Downers%20Grove%2C%20IL%2060515!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus" 
                                width="100%" 
                                height="100%" 
                                style={{ border: 0 }} 
                                allowFullScreen={true} 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Fairview Ogden Medical Group Location"
                            ></iframe>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="bg-white text-navy-900 p-8 md:p-10 rounded-2xl shadow-2xl">
                        <h3 className="font-serif text-2xl font-bold mb-6">Send a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold mb-1 text-gray-700">Full Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    required
                                    value={formState.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded border border-gray-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold mb-1 text-gray-700">Email Address</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        required
                                        value={formState.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded border border-gray-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all"
                                        placeholder="john@example.com"
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
                                        className="w-full px-4 py-3 rounded border border-gray-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all"
                                        placeholder="(630) 968-4790"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold mb-1 text-gray-700">Message</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    rows={4}
                                    required
                                    value={formState.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded border border-gray-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>
                            <motion.button 
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-gold-500 text-white font-bold py-4 rounded shadow-lg hover:bg-gold-600 transition-colors uppercase tracking-wide text-sm"
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </div>
                </div>
            </div>
        </RevealSection>
    );
};

export default Contact;