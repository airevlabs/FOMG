import React, { useEffect } from 'react';
import Hero from './Hero';
import Services from './Services';
import About from './About';
import Testimonials from './Testimonials';

const Home = () => {
    useEffect(() => {
        // Handle scroll to section if hash exists in URL
        const rawHash = window.location.hash;
        const cleanHash = rawHash.replace(/^#\/?/, '');
        if (cleanHash === 'services' || cleanHash === 'about' || cleanHash === 'testimonials') {
            setTimeout(() => {
                const element = document.getElementById(cleanHash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 200);
        }
    }, []);

    return (
        <>
            <Hero />
            <Services />
            <About />
            <Testimonials />
        </>
    );
};

export default Home;
