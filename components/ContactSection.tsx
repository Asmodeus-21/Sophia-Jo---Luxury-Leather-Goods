
import React from 'react';
import { Link } from 'react-router-dom';

const ContactSection: React.FC = () => {
    React.useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            // Check if message is from GoHighLevel
            if (event.origin.includes('link.openaria.app') || event.origin.includes('ghl')) {
                // Typical GHL submission event
                if (event.data === 'form_submitted' || (event.data && event.data.type === 'form_submitted')) {
                    window.location.href = '/'; // Redirect to home or same site
                }
            }
        };

        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, []);

    return (
        <section id="contact" className="py-24 bg-ivory">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col md:flex-row border border-charcoal/5">
                    {/* Left Info Panel */}
                    <div className="md:w-5/12 bg-charcoal text-ivory p-10 md:p-12 flex flex-col justify-center relative overflow-hidden">
                        {/* Decorative element */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -mr-16 -mt-16"></div>

                        <h2 className="font-serif text-3xl md:text-5xl font-bold mb-8 tracking-tight">Get in Touch</h2>
                        <div className="w-12 h-[2px] bg-gold mb-8"></div>

                        <p className="text-ivory/70 mb-10 text-lg font-light leading-relaxed">
                            Whether you seek a bespoke creation or wish to inquire about our curated collection, our artisans are at your service.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4 group">
                                <span className="text-gold text-xl mt-1 opacity-80 group-hover:opacity-100 transition-opacity">📍</span>
                                <div className="flex flex-col">
                                    <span className="text-xs uppercase tracking-widest text-gold/60 mb-1">Our Atelier</span>
                                    <span className="font-light">132 Talmage Rd, Ukiah, CA 95482</span>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4 group">
                                <span className="text-gold text-xl mt-1 opacity-80 group-hover:opacity-100 transition-opacity">✉️</span>
                                <div className="flex flex-col">
                                    <span className="text-xs uppercase tracking-widest text-gold/60 mb-1">Inquiries</span>
                                    <a href="mailto:support@sophiajoretail.in" className="hover:text-gold transition-colors underline decoration-gold/30 underline-offset-4">support@sophiajoretail.in</a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4 group">
                                <span className="text-gold text-xl mt-1 opacity-80 group-hover:opacity-100 transition-opacity">📞</span>
                                <div className="flex flex-col">
                                    <span className="text-xs uppercase tracking-widest text-gold/60 mb-1">Concierge</span>
                                    <span className="font-light">+1 (707) 463-1320</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Form Area */}
                    <div className="md:w-7/12 p-8 md:p-10 bg-white flex flex-col justify-center">
                        <div className="mb-6">
                            <h3 className="font-serif text-2xl text-charcoal mb-2">Send an Inquiry</h3>
                            <p className="text-sm text-charcoal/50">Fields marked with an asterisk are required.</p>
                        </div>
                        <div style={{ width: '100%', height: '750px', position: 'relative' }}>
                            <iframe
                                src="https://link.openaria.app/widget/form/ib13SCNVO7qvddcp7qMF"
                                style={{ width: '100%', height: '100%', border: 'none' }}
                                id="inline-ib13SCNVO7qvddcp7qMF"
                                data-layout="{'id':'INLINE'}"
                                data-trigger-type="alwaysShow"
                                data-trigger-value=""
                                data-activation-type="alwaysActivated"
                                data-activation-value=""
                                data-deactivation-type="neverDeactivate"
                                data-deactivation-value=""
                                data-form-name="A2P Form"
                                data-height="750"
                                data-layout-iframe-id="inline-ib13SCNVO7qvddcp7qMF"
                                data-form-id="ib13SCNVO7qvddcp7qMF"
                                title="A2P Form"
                            />
                        </div>
                        <div className="mt-4 text-[10px] text-charcoal/40 text-center leading-relaxed max-w-sm mx-auto">
                            By submitting this form, you agree to our{' '}
                            <Link to="/terms-of-service" className="underline hover:text-gold transition-colors">Terms of Service</Link>
                            {' '}and{' '}
                            <Link to="/privacy-policy" className="underline hover:text-gold transition-colors">Privacy Policy</Link>.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
