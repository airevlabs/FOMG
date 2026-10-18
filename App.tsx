import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import InternalMedicine from './components/InternalMedicine';
import SleepLab from './components/SleepLab';
import OnsiteUltrasound from './components/OnsiteUltrasound';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export const BUILD_ID = "20261018-0902";
// Helper component to scroll to top on route navigation
const ScrollToTopOnNavigate = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
        console.log('FOMG Build: 20261018.1');
    }, [pathname]);
    return null;
};

// Helper component for direct deep-links to homepage sections
const SectionRedirect = ({ sectionId }: { sectionId: string }) => {
    useEffect(() => {
        const attemptScroll = (retries = 8) => {
            const el = document.getElementById(sectionId);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            } else if (retries > 0) {
                setTimeout(() => attemptScroll(retries - 1), 120);
            }
        };
        setTimeout(() => attemptScroll(8), 100);
    }, [sectionId]);
    return <Home />;
};

const App = () => {
    return (
        <Router>
            <ScrollToTopOnNavigate />
            <div className="antialiased selection:bg-gold-500 selection:text-white">
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/services" element={<SectionRedirect sectionId="services" />} />
                        <Route path="services" element={<SectionRedirect sectionId="services" />} />
                        <Route path="/about" element={<SectionRedirect sectionId="about" />} />
                        <Route path="about" element={<SectionRedirect sectionId="about" />} />
                        <Route path="/physicians" element={<SectionRedirect sectionId="about" />} />
                        <Route path="physicians" element={<SectionRedirect sectionId="about" />} />
                        <Route path="/testimonials" element={<SectionRedirect sectionId="testimonials" />} />
                        <Route path="testimonials" element={<SectionRedirect sectionId="testimonials" />} />
                        <Route path="/faq" element={<FAQ />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/internal-medicine" element={<InternalMedicine />} />
                        <Route path="/sleep-lab" element={<SleepLab />} />
                        <Route path="/onsite-ultrasound" element={<OnsiteUltrasound />} />
                        <Route path="/services/internal-medicine" element={<InternalMedicine />} />
                        <Route path="/services/sleep-lab" element={<SleepLab />} />
                        <Route path="/services/onsite-ultrasound" element={<OnsiteUltrasound />} />
                        <Route path="*" element={<Home />} />
                    </Routes>
                </main>
                <Footer />
                <ScrollToTop />
            </div>
        </Router>
    );
};

export default App;