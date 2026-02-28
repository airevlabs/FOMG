import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
    return (
        <div className="antialiased selection:bg-gold-500 selection:text-white">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Services />
                <Testimonials />
                <FAQ />
                <Contact />
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    );
};

export default App;