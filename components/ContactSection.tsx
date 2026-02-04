
import React from 'react';
import { Link } from 'react-router-dom';

const ContactSection: React.FC = () => {
    return (
        <section id="contact" className="py-20 bg-ivory">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto bg-white shadow-xl overflow-hidden flex flex-col md:flex-row">
                    <div className="md:w-1/2 bg-charcoal text-ivory p-12 flex flex-col justify-center">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
                        <p className="text-ivory/80 mb-8">
                            Whether you have a question about our collection, a custom request, or simply want to learn more about our process, our team is here to assist you.
                        </p>
                        <div className="space-y-4">
                            <p className="flex items-center space-x-3">
                                <span className="text-gold">📍</span>
                                <span>132 Talmage Rd, Ukiah, CA 95482</span>
                            </p>
                            <p className="flex items-center space-x-3">
                                <span className="text-gold">✉️</span>
                                <a href="mailto:support@sophiajoretail.in" className="hover:text-gold transition-colors underline decoration-gold/30">support@sophiajoretail.in</a>
                            </p>
                            <p className="flex items-center space-x-3">
                                <span className="text-gold">📞</span>
                                <span>+1 (707) 463-1320</span>
                            </p>
                        </div>
                    </div>
                    <div className="md:w-1/2 bg-white flex items-center justify-center">
                        <div style={{ width: '100%', height: '598px', position: 'relative' }}>
                            <iframe
                                src="https://link.openaria.app/widget/form/ib13SCNVO7qvddcp7qMF"
                                style={{ width: '100%', height: '598px', border: 'none' }}
                                id="inline-ib13SCNVO7qvddcp7qMF"
                                data-layout="{'id':'INLINE'}"
                                data-trigger-type="alwaysShow"
                                data-trigger-value=""
                                data-activation-type="alwaysActivated"
                                data-activation-value=""
                                data-deactivation-type="neverDeactivate"
                                data-deactivation-value=""
                                data-form-name="A2P Form"
                                data-height="598"
                                data-layout-iframe-id="inline-ib13SCNVO7qvddcp7qMF"
                                data-form-id="ib13SCNVO7qvddcp7qMF"
                                title="A2P Form"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
