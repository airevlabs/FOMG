import React from 'react';
import { IconCaduceus } from './Icons';

const Footer = () => {
    return (
        <footer className="bg-white text-navy-900 border-t border-gray-100 py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-navy-800 rounded-full flex items-center justify-center text-gold-500">
                            <IconCaduceus className="w-6 h-6" />
                        </div>
                        <div>
                            <h5 className="font-serif font-bold text-lg text-navy-800">Fairview Ogden</h5>
                            <p className="text-[10px] text-gold-600 tracking-widest uppercase font-semibold">Medical Group</p>
                        </div>
                    </div>
                    <p className="text-gray-500 text-sm text-center md:text-right">
                        &copy; {new Date().getFullYear()} Fairview Ogden Medical Group. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;