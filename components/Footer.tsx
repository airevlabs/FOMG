import React from 'react';
import { IconCaduceus } from './Icons';

const Footer = () => {
    return (
        <footer className="bg-white text-navy-900 border-t border-gray-100 py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center">
                        <img 
                            src="https://assets.cdn.filesafe.space/CkE5C5Zmu29G0YcduBpD/media/6a41cc4dc408020f971b8ee0.png" 
                            alt="Fairview Ogden Medical Group Logo" 
                            className="h-[100px] w-auto object-contain"
                        />
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