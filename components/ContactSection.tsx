
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactSection: React.FC = () => {
    const [isChecked, setIsChecked] = useState(false);

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
                    <div className="md:w-1/2 p-12 bg-white">
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-sm font-medium text-charcoal mb-1">Full Name</label>
                                <input type="text" className="w-full border-b border-charcoal/20 py-2 focus:border-gold outline-none transition-colors px-1" placeholder="Jane Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-charcoal mb-1">Email Address</label>
                                <input type="email" className="w-full border-b border-charcoal/20 py-2 focus:border-gold outline-none transition-colors px-1" placeholder="jane@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-charcoal mb-1">Phone Number</label>
                                <input type="tel" className="w-full border-b border-charcoal/20 py-2 focus:border-gold outline-none transition-colors px-1" placeholder="+1 (707) 000-0000" required />
                            </div>
                            <div className="text-[10px] leading-tight text-charcoal/60 mt-2">
                                By providing your phone number, you agree to receive recurring automated marketing and informational text messages (e.g., order updates and cart reminders) from Sophia & Jo retail, Inc at the number provided. Consent is not a condition of any purchase. Reply STOP to cancel, HELP for help. Message & data rates may apply. View our <Link to="/privacy-policy" className="underline">Privacy Policy</Link> and <Link to="/terms-of-service" className="underline">Terms of Service</Link>.
                            </div>
                            <div className="flex items-start space-x-2 mt-4">
                                <input
                                    type="checkbox"
                                    id="contact-consent"
                                    checked={isChecked}
                                    onChange={(e) => setIsChecked(e.target.checked)}
                                    className="mt-1 h-4 w-4 text-gold border-gray-300 rounded focus:ring-gold"
                                    required
                                />
                                <label htmlFor="contact-consent" className="text-xs text-charcoal/80">
                                    I provide my express written consent to receive SMS communications.*
                                </label>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-charcoal mb-1">Message</label>
                                <textarea rows={2} className="w-full border border-charcoal/20 p-3 focus:border-gold outline-none transition-colors text-sm" placeholder="How can we help you?"></textarea>
                            </div>
                            <button
                                disabled={!isChecked}
                                className="w-full bg-gold text-white font-semibold py-3 hover:bg-gold/90 transition-colors shadow-lg shadow-gold/20 disabled:bg-gold/50 disabled:cursor-not-allowed"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
