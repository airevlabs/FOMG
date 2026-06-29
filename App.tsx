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

// Helper component to scroll to top on route navigation
const ScrollToTopOnNavigate = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
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
                        <Route path="/faq" element={<FAQ />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/services/internal-medicine" element={<InternalMedicine />} />
                        <Route path="/services/sleep-lab" element={<SleepLab />} />
                        <Route path="/services/onsite-ultrasound" element={<OnsiteUltrasound />} />
                    </Routes>
                </main>
                <Footer />
                <ScrollToTop />
            </div>
        </Router>
    );
};

export default App;