import React from 'react';
import { motion } from 'framer-motion';
import RevealSection from './RevealSection';
import { IconStar } from './Icons';

interface TestimonialCardProps {
    quote: string;
    author: string;
    role: string | null;
    rating: number;
}

const TestimonialCard = ({ quote, author, role, rating }: TestimonialCardProps) => (
    <motion.div 
        className="bg-white p-8 rounded-xl shadow-md border border-gray-100 flex flex-col h-full"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
    >
        <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
                <IconStar key={i} className={`w-4 h-4 ${i < rating ? 'fill-gold-500' : 'fill-gray-200 text-gray-200'}`} />
            ))}
        </div>
        <p className="text-gray-600 italic mb-6 flex-grow leading-relaxed">"{quote}"</p>
        <div className="mt-auto border-t border-gray-100 pt-4">
            <p className="font-bold text-navy-900">{author}</p>
            {role && <p className="text-xs text-gray-500 uppercase tracking-wide">{role}</p>}
        </div>
    </motion.div>
);

const Testimonials = () => {
    const reviews = [
        {
            quote: "After moving I have finally found a doctor! He met my needs and is thorough. Highly recommended.",
            author: "Patient",
            role: "Verified Review",
            rating: 5
        },
        {
            quote: "As usual, everyone is pleasant, professional and efficient. I recommend Dr. Syed to anyone looking for a good doctor with a wonderful staff.",
            author: "DP",
            role: "Long-term Patient",
            rating: 5
        },
        {
            quote: "Thorough and professional. He takes the time to listen and explains things clearly.",
            author: "Zocdoc User",
            role: "Verified Patient",
            rating: 5
        },
        {
            quote: "Dr. Syed prioritizes mutual respect and honesty. Excellent bedside manner.",
            author: "Google Reviewer",
            role: null,
            rating: 5
        }
    ];

    return (
        <RevealSection id="testimonials" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl text-navy-900 font-bold mb-4">Patient Stories</h2>
                    <p className="text-gray-600">See what our community has to say about their care.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reviews.map((review, idx) => (
                        <TestimonialCard key={idx} {...review} />
                    ))}
                </div>
            </div>
        </RevealSection>
    );
};

export default Testimonials;