
import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import WhySection from '../components/WhySection';
import LeadFormModal from '../components/LeadFormModal';

const HomePage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Auto-open modal after a delay, but only once per session
    useEffect(() => {
        const hasModalBeenShown = sessionStorage.getItem('sophiaJoModalShown');
        if (!hasModalBeenShown) {
            const timer = setTimeout(() => {
                setIsModalOpen(true);
                sessionStorage.setItem('sophiaJoModalShown', 'true');
            }, 5000); // 5-second delay
            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <>
            <Hero onCTAClick={() => setIsModalOpen(true)} />
            <ProductShowcase />
            <WhySection />
            <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default HomePage;
