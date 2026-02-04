
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicyPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white py-16">
            <div className="container mx-auto px-6 max-w-4xl prose lg:prose-lg">
                <h1 className="font-serif text-4xl">Privacy Policy</h1>
                <p className="text-sm text-gray-500">Effective Date: February 4, 2026</p>

                <p>Sophia & Jo retail, Inc ("we," "us," or "our") is committed to protecting your privacy. This policy explains how we handle your data when you visit <a href="https://www.sophiajoretail.in/" className="text-gold hover:underline">https://www.sophiajoretail.in/</a>.</p>

                <h2 className="font-bold text-xl mt-8">1. What Information is Collected</h2>
                <p>We collect personal information that you voluntarily provide to us when you express interest in our products or services. This includes:</p>
                <ul>
                    <li><strong>Personal Identifiers:</strong> Name, email address, phone number, and physical address.</li>
                    <li><strong>Commercial Information:</strong> Payment details and purchase history for luxury accessories (purses and belts).</li>
                    <li><strong>Interaction Data:</strong> Records of customer support inquiries, appointment preferences, and feedback.</li>
                    <li><strong>Technical Data:</strong> IP address, browser type, and website usage patterns collected via cookies.</li>
                </ul>

                <h2>2. How User Data is Used</h2>
                <p>We use your data to provide, operate, and maintain our services, including:</p>
                <ul>
                    <li>Processing transactions and managing your account.</li>
                    <li>Sending transactional appointment reminders and scheduling updates.</li>
                    <li>Providing customer support and improving website functionality.</li>
                    <li>Delivering promotional materials and marketing alerts (only with your explicit consent).</li>
                </ul>

                <h2>3. SMS Messaging & A2P Compliance</h2>
                <p>By opting into our SMS messaging services, you agree to receive text messages related to our services.</p>
                <ul>
                    <li><strong>Explicit Opt-In:</strong> You will only receive messages if you have explicitly opted in via our website forms. Our forms use separate, optional, and un-checked checkboxes for marketing and transactional messages.</li>
                    <li><strong>Opt-Out:</strong> You can cancel SMS notifications at any time by replying "STOP". You will receive one final confirmation message, and no further messages will be sent.</li>
                    <li><strong>Help:</strong> Reply "HELP" for assistance or email <a href="mailto:support@sophiajoretail.in" className="text-gold hover:underline">support@sophiajoretail.in</a>.</li>
                    <li><strong>Frequency:</strong> Message frequency varies based on your interactions and appointment schedule.</li>
                    <li><strong>Rates:</strong> Standard message and data rates may apply. Carriers are not liable for delayed or undelivered messages.</li>
                </ul>

                <h2>4. Cookie & Tracking Practices</h2>
                <p>We use cookies and similar technologies to analyze site traffic and user behavior, remember your preferences, and measure the effectiveness of our services. You can manage or disable cookies through your browser settings, though this may limit certain website features.</p>

                <h2>5. Data Security and Handling</h2>
                <p>We implement strict security measures to safeguard your personal information:</p>
                <ul>
                    <li><strong>Encryption:</strong> Sensitive data is encrypted during transit and at rest.</li>
                    <li><strong>Access Control:</strong> Only authorized personnel and contractually obligated service providers have access to your private data.</li>
                    <li><strong>Retention:</strong> We store your data only as long as necessary to provide our services and comply with legal obligations.</li>
                </ul>

                <h2>6. User Rights</h2>
                <p>You have the right to access, update, or request the deletion of your personal data; withdraw your consent for future communication; and lodge a complaint with a supervisory authority if you believe your rights have been violated. To exercise these rights, email us at <a href="mailto:support@sophiajoretail.in" className="text-gold hover:underline">support@sophiajoretail.in</a>.</p>

                <h2>7. Mobile Info Sharing Statement</h2>
                <p className="font-semibold italic">"No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. Information sharing to subcontractors in support services, such as customer service, is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties."</p>

                <h2 className="mt-10">Contact Us</h2>
                <p>If you have questions about this Privacy Policy, please contact us:</p>
                <ul className="list-none pl-0">
                    <li><strong>Sophia & Jo retail, Inc</strong></li>
                    <li><strong>Address:</strong> 132 Talmage Rd, Ukiah, CA 95482</li>
                    <li><strong>Email:</strong> <a href="mailto:support@sophiajoretail.in" className="text-gold hover:underline">support@sophiajoretail.in</a></li>
                    <li><strong>Phone:</strong> +1 707-463-1320</li>
                    <li><strong>Website:</strong> <a href="https://www.sophiajoretail.in" className="text-gold hover:underline">https://www.sophiajoretail.in/</a></li>
                </ul>

                <Link to="/" className="text-gold hover:underline mt-12 block no-underline">&larr; Back to Home</Link>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
