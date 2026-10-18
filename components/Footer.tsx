import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavClick = (linkId: string) => {
        if (linkId === 'faq') {
            navigate('/faq');
        } else if (linkId === 'contact') {
            navigate('/contact');
        } else {
            if (location.pathname !== '/') {
                navigate('/');
                setTimeout(() => {
                    const element = document.getElementById(linkId);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 150);
            } else {
                const element = document.getElementById(linkId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    };

    return (
        <footer className="bg-white text-navy-900 border-t border-gray-100 pt-16 pb-12">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    {/* Brand Info */}
                    <div className="space-y-4">
                        <img 
                            src="https://assets.cdn.filesafe.space/CkE5C5Zmu29G0YcduBpD/media/6a41cc4dc408020f971b8ee0.png" 
                            alt="Fairview Ogden Medical Group Logo" 
                            className="h-[75px] w-auto object-contain"
                        />
                        <p className="text-gray-500 text-xs leading-relaxed">
                            Comprehensive adult primary care, overnight diagnostic sleep medicine, and onsite diagnostic ultrasound in Downers Grove, Illinois.
                        </p>
                        <div className="pt-2">
                            <a 
                                href="https://livewell.aah.org/chart/openscheduling/standalone?id=41240&dept=525605256101" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="inline-block bg-gold-500 hover:bg-gold-600 text-white text-xs font-semibold px-4 py-2 rounded transition-colors uppercase tracking-wider"
                            >
                                Book Appointment
                            </a>
                        </div>
                    </div>

                    {/* Specialty Services */}
                    <div>
                        <h4 className="font-serif text-base font-bold text-navy-900 mb-4 border-b border-gold-500/30 pb-2">Medical Services</h4>
                        <ul className="space-y-2.5 text-xs text-gray-600">
                            <li>
                                <a href="https://fairviewogdenmed.com/internal-medicine" className="hover:text-gold-600 transition-colors">
                                    Internal Medicine & Physicals
                                </a>
                            </li>
                            <li>
                                <a href="https://fairviewogdenmed.com/sleep-lab" className="hover:text-gold-600 transition-colors">
                                    Onsite Sleep Lab & Sleep Studies
                                </a>
                            </li>
                            <li>
                                <a href="https://fairviewogdenmed.com/onsite-ultrasound" className="hover:text-gold-600 transition-colors">
                                    Onsite Ultrasound (Precision Imaging)
                                </a>
                            </li>
                            <li>
                                <a href="https://precisionimagingus.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold-600 transition-colors text-gray-400">
                                    Partner: Precision Imaging &rarr;
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Board-Certified Physicians */}
                    <div>
                        <h4 className="font-serif text-base font-bold text-navy-900 mb-4 border-b border-gold-500/30 pb-2">Our Physicians</h4>
                        <ul className="space-y-2.5 text-xs text-gray-600">
                            <li>
                                <a href="https://fairviewogdenmed.com/dr-zainulabuddin" className="hover:text-gold-600 transition-colors">
                                    Dr. Zainulabuddin Syed, MD
                                </a>
                            </li>
                            <li>
                                <a href="https://fairviewogdenmed.com/dr-abdul-bari" className="hover:text-gold-600 transition-colors">
                                    Dr. Abdul-Bari Syed, DO
                                </a>
                            </li>
                            <li>
                                <a href="https://fairviewogdenmed.com/dr-ravikiran" className="hover:text-gold-600 transition-colors">
                                    Dr. Ravikiran Tamragouri, MD, FACP
                                </a>
                            </li>
                            <li>
                                <button onClick={() => handleNavClick('about')} className="text-gold-600 font-semibold hover:underline text-left">
                                    View All Doctor Cards &rarr;
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Clinic Contact & Hours */}
                    <div>
                        <h4 className="font-serif text-base font-bold text-navy-900 mb-4 border-b border-gold-500/30 pb-2">Clinic Information</h4>
                        <div className="space-y-2 text-xs text-gray-600">
                            <p><strong>Address:</strong> 4121 Fairview Ave Ste L1, Downers Grove, IL 60515</p>
                            <p><strong>Phone:</strong> <a href="tel:6309684790" className="text-navy-900 font-semibold hover:text-gold-600">(630) 968-4790</a></p>
                            <p><strong>Fax:</strong> (630) 968-8755</p>
                            <p><strong>Hours:</strong> Mon: 10am–4pm | Tue & Thu: 10am–2pm | Sat: 10am–1pm</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Fairview Ogden Medical Group. All rights reserved.</p>
                    <div className="flex gap-4">
                        <button onClick={() => handleNavClick('faq')} className="hover:text-gold-600 transition-colors">FAQs</button>
                        <span>&bull;</span>
                        <button onClick={() => handleNavClick('contact')} className="hover:text-gold-600 transition-colors">Contact</button>
                    </div>
                    <p>
                        Designed by <a href="https://airevlabs.com" target="_blank" rel="noopener noreferrer" className="text-navy-700 hover:text-gold-600 font-medium transition-colors">AI REV LABS</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;