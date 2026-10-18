import React from 'react';
import { motion } from 'framer-motion';
import { IconCheck, IconCaduceus } from './Icons';
import MaskedText from './MaskedText';
import TiltCard from './TiltCard';

interface DoctorCardData {
    name: string;
    degree: string;
    title: string;
    specialty: string;
    img: string;
    experience: string;
    certification: string;
    affiliations: string;
    bioUrl: string;
    shortBio: string;
    highlights: string[];
}

const DoctorCard: React.FC<{ doc: DoctorCardData }> = ({ doc }) => {
    return (
        <TiltCard className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-gold-500 group flex flex-col h-full">
            {/* Small Profile Pic of Face with Gold Border */}
            <div className="relative w-28 h-28 mx-auto mb-6 shrink-0">
                <div className="w-full h-full rounded-full p-1 bg-white border-2 border-gold-500 shadow-md overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    <img 
                        src={doc.img} 
                        alt={doc.name} 
                        className="w-full h-full object-cover object-top rounded-full"
                        loading="lazy"
                    />
                </div>
                <div className="absolute -bottom-2 -right-1 bg-navy-800 text-gold-400 p-1.5 rounded-full shadow-sm" title="Board Certified Internist">
                    <IconCaduceus className="w-4 h-4" />
                </div>
            </div>

            {/* Doctor Name and Credentials */}
            <div className="text-center mb-4">
                <h3 className="font-serif text-2xl font-bold text-navy-900 mb-1 group-hover:text-gold-600 transition-colors">
                    {doc.name}
                </h3>
                <p className="text-gold-600 font-semibold text-xs uppercase tracking-wider mb-1">
                    {doc.specialty}
                </p>
                <p className="text-gray-500 text-xs font-medium">
                    {doc.experience} Experience &bull; {doc.certification}
                </p>
            </div>

            {/* Concise Bio Paragraph */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow text-center">
                {doc.shortBio}
            </p>

            {/* Key Clinical Focus */}
            <ul className="space-y-2 mb-6 pt-4 border-t border-gray-100 text-xs text-gray-600">
                {doc.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                        <IconCheck className="w-4 h-4 text-gold-500 shrink-0" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>

            {/* Read More Link to Full Bio Page */}
            <a 
                href={doc.bioUrl} 
                className="text-navy-800 font-semibold text-sm uppercase tracking-wider hover:text-gold-600 flex items-center justify-center gap-2 group-hover:gap-3 transition-all mt-auto pt-4 border-t border-gray-100"
            >
                Read Full Bio <span>&rarr;</span>
            </a>
        </TiltCard>
    );
};

const About = () => {
    const doctors: DoctorCardData[] = [
        {
            name: "Dr. Zainulabuddin Syed",
            degree: "MD",
            title: "Internal Medicine Physician",
            specialty: "Adult Primary Care & Chronic Disease",
            img: "https://assets.cdn.filesafe.space/CkE5C5Zmu29G0YcduBpD/media/6a430d2f15c172b5cfec88b1.jpeg",
            experience: "20+ Years",
            certification: "Board Certified (ABIM)",
            affiliations: "Advocate Good Samaritan & AdventHealth Hinsdale",
            bioUrl: "https://fairviewogdenmed.com/dr-zainulabuddin",
            shortBio: "Dedicated internal medicine specialist with 20+ years of clinical practice in Downers Grove. Known for his compassionate, patient-centered approach to preventative care, comprehensive wellness physicals, and complex chronic disease management.",
            highlights: [
                "Gandhi Medical College & Advocate Christ Residency",
                "Fluent in English, Urdu, and Hindi",
                "Preventative Health & Cardiovascular Screening"
            ]
        },
        {
            name: "Dr. Abdul-Bari Syed",
            degree: "DO",
            title: "Internal Medicine & Hospitalist",
            specialty: "Inpatient Medicine & Sleep Disorders",
            img: "https://assets.cdn.filesafe.space/CkE5C5Zmu29G0YcduBpD/media/6ad4b6dbcd7225ed37c84146.jpeg",
            experience: "Nearly 20 Years",
            certification: "Board Certified (ABIM)",
            affiliations: "Hospitalist & Clinical Sleep Lab Director",
            bioUrl: "https://fairviewogdenmed.com/dr-abdul-bari",
            shortBio: "Board-certified internist, veteran hospitalist, and clinical director of our onsite sleep laboratory. Bringing nearly two decades of inpatient medical experience to deliver hospital-grade diagnostics and advanced sleep apnea therapies.",
            highlights: [
                "Des Moines Univ. & Univ. of Illinois Chicago Residency",
                "Director of Onsite Polysomnography Sleep Lab",
                "Complex Acute Care & Evidence-Based Medicine"
            ]
        },
        {
            name: "Dr. Ravikiran N. Tamragouri",
            degree: "MD, FACP",
            title: "Internal Medicine Specialist",
            specialty: "Geriatric Healthcare & Chronic Conditions",
            img: "https://assets.cdn.filesafe.space/CkE5C5Zmu29G0YcduBpD/media/6ad4b6db989628c77a5a6a58.jpeg",
            experience: "Decades of Care",
            certification: "Board Certified & Fellow (FACP)",
            affiliations: "Advocate Good Samaritan & AdventHealth Hinsdale",
            bioUrl: "https://fairviewogdenmed.com/dr-ravikiran",
            shortBio: "Distinguished board-certified internist and Fellow of the American College of Physicians with decades of dedicated service. Specializes in adult primary care, geriatric medicine, and complex chronic multi-system condition management.",
            highlights: [
                "Bangalore Medical College & Grant Hospital Residency",
                "Fellow of the American College of Physicians (FACP)",
                "Geriatric Evaluations & Polypharmacy Review"
            ]
        }
    ];

    return (
        <section id="about" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-gold-600 font-semibold tracking-wider text-sm uppercase">Medical Leadership</span>
                    <MaskedText text="Meet Our Board-Certified Physicians" className="font-serif text-4xl text-navy-900 font-bold mt-2 mb-4" tag="h2" />
                    <p className="text-gray-600">
                        Over 80 years of combined clinical excellence providing patient-first internal medicine, sleep diagnostics, and adult primary care in Downers Grove.
                    </p>
                </div>

                {/* 3 Physician Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {doctors.map((doc, index) => (
                        <DoctorCard key={index} doc={doc} />
                    ))}
                </div>

                {/* Bottom Trust Badge Row */}
                <div className="mt-16 pt-8 border-t border-gray-100 flex flex-wrap items-center justify-center gap-8 text-center text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                        <img 
                            src="https://assets.cdn.filesafe.space/CkE5C5Zmu29G0YcduBpD/media/6a58652e1a0f048050839d15.png" 
                            alt="American Board of Internal Medicine Certified" 
                            className="h-10 w-auto object-contain"
                        />
                        <span className="font-medium text-navy-900">American Board of Internal Medicine</span>
                    </div>
                    <span>&bull;</span>
                    <span className="font-medium text-navy-900">Advocate Aurora Health LiveWell Partner</span>
                    <span>&bull;</span>
                    <span className="font-medium text-navy-900">Hospital Affiliations: Good Samaritan & AdventHealth</span>
                </div>
            </div>
        </section>
    );
};

export default About;