import React, { useEffect } from 'react';
import Hero from './Hero';
import Services from './Services';
import About from './About';
import Testimonials from './Testimonials';

const Home = () => {
    useEffect(() => {
        const checkAndScroll = () => {
            const rawHash = window.location.hash || '';
            const searchParams = new URLSearchParams(window.location.search);
            const sectionParam = searchParams.get('section');
            
            let targetId = '';
            if (sectionParam) {
                targetId = sectionParam === 'physicians' ? 'about' : sectionParam;
            } else if (rawHash) {
                const clean = rawHash.replace(/^[#/]+/, '');
                if (clean === 'services' || clean === 'about' || clean === 'physicians' || clean === 'testimonials') {
                    targetId = clean === 'physicians' ? 'about' : clean;
                }
            }

            if (targetId) {
                const attemptScroll = (retries = 8) => {
                    const el = document.getElementById(targetId);
                    if (el) {
                        el.scrollIntoView({ behavior: 'smooth' });
                    } else if (retries > 0) {
                        setTimeout(() => attemptScroll(retries - 1), 120);
                    }
                };
                setTimeout(() => attemptScroll(8), 100);
            }
        };

        checkAndScroll();
        window.addEventListener('hashchange', checkAndScroll);
        return () => window.removeEventListener('hashchange', checkAndScroll);
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
