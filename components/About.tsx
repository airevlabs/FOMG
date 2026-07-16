import React from 'react';
import { motion } from 'framer-motion';
import { IconCaduceus } from './Icons';
import MaskedText from './MaskedText';
import TiltCard from './TiltCard';

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
    const imageElement = (
        <div className="relative lg:w-[75%] lg:mx-auto">
            <TiltCard className="rounded-2xl overflow-hidden shadow-2xl border-4 border-gold-500 bg-white">
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                >
                    <img 
                        src={doc.img}
                        alt={doc.name} 
                        className="w-full h-auto object-cover bg-gray-100"
                        style={doc.imgStyle}
                        loading="lazy"
                    />
                </motion.div>
            </TiltCard>
        </div>
    );

    const contentElement = (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                <MaskedText text={doc.name} className="font-serif text-4xl text-navy-900 font-bold" tag="h2" align="left" />
                <img 
                    src="https://assets.cdn.filesafe.space/CkE5C5Zmu29G0YcduBpD/media/6a58652e1a0f048050839d15.png" 
                    alt="American Board of Internal Medicine Certified" 
                    title="American Board of Internal Medicine Certified"
                    className="h-24 w-auto object-contain self-start sm:self-center"
                />
            </div>
            <div className="w-40 h-1 bg-gold-500 mb-8"></div>
            
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
            </div>
        </motion.div>
    );

    return (
        <div className="grid lg:grid-cols-2 gap-16 items-center">
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
            name: "Dr. Zainulabuddin Syed",
            img: "https://assets.cdn.filesafe.space/CkE5C5Zmu29G0YcduBpD/media/6a430d2f15c172b5cfec88b1.jpeg",
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
            name: "Dr. Abdul-Bari Syed",
            img: "https://assets.cdn.filesafe.space/CkE5C5Zmu29G0YcduBpD/media/6a58652e524a3ec4c6ff688c.jpeg",
            experience: "Nearly Two Decades",
            certification: "Board Certified",
            certificationDesc: "Internal Medicine",
            bio: [
                "Dr. Abdul-Bari Syed, DO, is a board-certified internal medicine physician and hospitalist with nearly two decades of experience caring for adult patients. He completed his medical degree at Des Moines University College of Osteopathic Medicine and went on to finish his internal medicine residency at the University of Illinois College of Medicine in Chicago.",
                "Before medical school, Dr. Syed earned a Bachelor of Arts in Psychology from Benedictine University, giving him a strong foundation in understanding the emotional and behavioral side of health. Since 2010, he has worked primarily as an internal medicine hospitalist, leading the care of hospitalized patients and collaborating closely with multidisciplinary teams across several Wisconsin hospitals.",
                "Dr. Syed is known for his calm, thorough approach and his commitment to evidence-based medicine. His clinical experience spans acute inpatient care, post-acute and rehabilitation settings, and hospice care, allowing him to guide patients and families through both routine admissions and complex, serious illnesses with clarity and compassion. He values clear communication, shared decision-making, and treating every patient with dignity and respect, and he is excited to bring this level of attentive, hospital-grade medical expertise to patients in a community clinic setting."
            ]
        },
        {
            name: "Dr. Ravikiran N. Tamragouri",
            img: "https://assets.cdn.filesafe.space/CkE5C5Zmu29G0YcduBpD/media/6a4200b8c492ddc24cea57cc.jpeg",
            experience: "Decades of Care",
            certification: "Board Certified",
            certificationDesc: "Internal Medicine",
            bio: [
                "Dr. Ravikiran N. Tamragouri, MD, FACP, is an experienced board-certified internal medicine physician and a Fellow of the American College of Physicians with decades of dedicated service. He graduated from Bangalore Medical College and completed his internal medicine residency training at Grant Hospital, establishing a strong foundation in evidence-based medicine and patient-focused primary care.",
                "With a robust clinical focus on general adult medicine and geriatrics, Dr. Tamragouri specializes in managing chronic conditions and preventative health. He is recognized for his clinical thoroughness, treating complex conditions ranging from dementia and cellulitis to digestive health, while offering key procedural screenings to support long-term wellness.",
                "Dr. Tamragouri is affiliated with premier hospitals in the Chicago area, including Advocate Good Samaritan Hospital and UChicago Medicine AdventHealth Hinsdale. He is dedicated to forming partnerships with patients and families at Fairview Ogden Medical Group based on mutual respect, clear communication, and comprehensive clinical excellence."
            ]
        }
    ];

    return (
        <section id="about" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-24">
                    <MaskedText text="Meet the Team" className="font-serif text-4xl text-navy-900 font-bold mb-4" tag="h2" />
                    <p className="text-gray-600">Our dedicated board-certified physicians serving the Downers Grove community.</p>
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