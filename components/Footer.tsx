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

    const footerLinks = [
        { name: 'Services', id: 'services' },
        { name: 'Meet the Team', id: 'about' },
        { name: 'FAQs', id: 'faq' },
        { name: 'Contact', id: 'contact' },
    ];

    return (
        <footer className="bg-white text-navy-900 border-t border-gray-100 py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center">
                        <img 
                            src="https://assets.cdn.filesafe.space/CkE5C5Zmu29G0YcduBpD/media/6a41cc4dc408020f971b8ee0.png" 
                            alt="Fairview Ogden Medical Group Logo" 
                            className="h-[80px] w-auto object-contain"
                        />
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                        {footerLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => handleNavClick(link.id)}
                                className="text-gray-600 hover:text-gold-600 text-sm font-medium transition-colors focus:outline-none"
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>

                    <div className="text-gray-500 text-sm text-center md:text-right">
                        <p>&copy; {new Date().getFullYear()} Fairview Ogden Medical Group. All rights reserved.</p>
                        <p className="text-sm mt-1 font-medium">
                            Designed by <a href="https://airevlabs.com" target="_blank" rel="noopener noreferrer" className="text-navy-600 hover:text-gold-600 transition-colors">AI REV LABS</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;