import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { IconCaduceus, IconStethoscope } from './Icons';

interface DoctorData {
    name: string;
    img: string;
    experience: string;
    certification: string;
    certificationDesc: string;
    bio: string[];
    imgStyle?: React.CSSProperties;
}

const ProfileBlock: React.FC<{ reverse: boolean, doc: DoctorData }> = ({ reverse, doc }) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "center 70%"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [150, 0]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

    const imageElement = (
        <div className="relative lg:w-[75%] lg:mx-auto">
            <motion.div 
                style={{ y, opacity }}
                className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-gold-500"
            >
                <img 
                    src={doc.img}
                    alt={doc.name} 
                    className="w-full h-auto object-cover bg-gray-100"
                    style={doc.imgStyle}
                    loading="lazy"
                />
            </motion.div>
        </div>
    );

    const contentElement = (
        <motion.div style={{ y, opacity }}>
            <h2 className="font-serif text-4xl text-navy-900 font-bold mb-6">{doc.name}</h2>
            <div className="w-16 h-1 bg-gold-500 mb-8"></div>
            
            {doc.bio.map((paragraph, i) => (
                <p key={i} className="text-gray-600 leading-relaxed mb-6 text-lg">
                    {paragraph}
                </p>
            ))}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start gap-3">
                    <div className="bg-navy-50 p-2 rounded text-navy-800 mt-1">
                        <IconCaduceus className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-navy-900">{doc.experience}</h4>
                        <p className="text-sm text-gray-500">Medical Experience</p>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                    <div className="bg-navy-50 p-2 rounded text-navy-800 mt-1">
                        <IconStethoscope className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-navy-900">{doc.certification}</h4>
                        <p className="text-sm text-gray-500">{doc.certificationDesc}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );

    return (
        <div ref={sectionRef} className="grid lg:grid-cols-2 gap-16 items-center">
            {reverse ? (
                <>
                    <div className="order-2 lg:order-1">{contentElement}</div>
                    <div className="order-1 lg:order-2">{imageElement}</div>
                </>
            ) : (
                <>
                    <div className="order-1 lg:order-1">{imageElement}</div>
                    <div className="order-2 lg:order-2">{contentElement}</div>
                </>
            )}
        </div>
    );
};

const About = () => {
    const doctors: DoctorData[] = [
        {
            name: "Dr. Zainulabuddin Syed, MD",
            img: "https://assets.cdn.filesafe.space/CkE5C5Zmu29G0YcduBpD/media/69ca297a9ae175fe8b80d716.png",
            experience: "20+ Years",
            certification: "Board Certified",
            certificationDesc: "Internal Medicine",
            bio: [
                "Dr. Zainulabuddin Syed, MD, is an experienced internal medicine physician in Downers Grove, Illinois, known for providing comprehensive care for adults and older adults. He graduated from Gandhi Medical College, Osmania University, completed his residency training at Advocate Christ Medical Center, and is board certified in Internal Medicine by the American Board of Internal Medicine.",
                "Dr. Syed has built his practice around thoughtful, patient-centered care. He speaks English, Urdu, and Hindi, and he is committed to creating a relationship with each patient based on mutual respect, honesty, and open communication.",
                "At Fairview Ogden Medical Group, Dr. Syed cares for patients with a wide range of medical needs, from preventive care and routine visits to more complex internal medicine concerns. Patients describe him as kind, knowledgeable, and thorough, and he works closely with his friendly staff to make each visit as comfortable and efficient as possible.",
                "He is affiliated with Advocate Good Samaritan Hospital, AMITA Health Adventist Medical Center Hinsdale, Elmhurst Memorial Hospital, and AMITA Health Adventist Medical Center GlenOaks, and continues to serve the Downers Grove community with a strong focus on quality, compassion, and long-term health."
            ]
        },
        {
            name: "Dr. Abdul-Bari Syed, DO",
            img: "https://assets.cdn.filesafe.space/CkE5C5Zmu29G0YcduBpD/media/69ca1877be0ea363d497a13d.png",
            experience: "Nearly Two Decades",
            certification: "Board Certified",
            certificationDesc: "Internal Medicine",
            bio: [
                "Dr. Abdul-Bari Syed, DO, is a board-certified internal medicine physician and hospitalist with nearly two decades of experience caring for adult patients. He completed his medical degree at Des Moines University College of Osteopathic Medicine and went on to finish his internal medicine residency at the University of Illinois College of Medicine in Chicago.",
                "Before medical school, Dr. Syed earned a Bachelor of Arts in Psychology from Benedictine University, giving him a strong foundation in understanding the emotional and behavioral side of health. Since 2010, he has worked primarily as an internal medicine hospitalist, leading the care of hospitalized patients and collaborating closely with multidisciplinary teams across several Wisconsin hospitals.",
                "Dr. Syed is known for his calm, thorough approach and his commitment to evidence-based medicine. His clinical experience spans acute inpatient care, post-acute and rehabilitation settings, and hospice care, allowing him to guide patients and families through both routine admissions and complex, serious illnesses with clarity and compassion. He values clear communication, shared decision-making, and treating every patient with dignity and respect, and he is excited to bring this level of attentive, hospital-grade medical expertise to patients in a community clinic setting."
            ]
        }
    ];

    return (
        <section id="about" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-24">
                    <h2 className="font-serif text-5xl text-navy-900 font-bold mb-6">About Us</h2>
                    <div className="w-24 h-1.5 bg-gold-500 mx-auto rounded-full"></div>
                </div>
                <div className="flex flex-col gap-y-32">
                    {doctors.map((doc, index) => (
                        <ProfileBlock key={index} doc={doc} reverse={index % 2 !== 0} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;