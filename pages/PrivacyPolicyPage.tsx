
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
                <p className="text-sm text-gray-500">Last Updated: February 4, 2026</p>

                <p>Sophia & Jo retail, Inc ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at <a href="https://www.sophiajoretail.in/" className="text-gold hover:underline">https://www.sophiajoretail.in/</a>.</p>

                <h2 className="font-bold text-xl mt-8">SMS Privacy Policy (A2P Compliance)</h2>
                <p className="font-semibold italic">"No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. Information sharing to subcontractors in support services, such as customer service, is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties."</p>

                <h2>1. Information We Collect</h2>
                <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products.</p>
                <ul>
                    <li><strong>Personal Data:</strong> Name, email address, phone number, and physical address.</li>
                    <li><strong>Transaction Data:</strong> Payment information when you purchase luxury purses or designer belts.</li>
                    <li><strong>Opt-in Records:</strong> We maintain timestamped records of your consent for all communication channels, including SMS and email.</li>
                </ul>

                <h2>2. How We Use Your Information</h2>
                <p>We use your information to provide, operate, and maintain our services, including:</p>
                <ul>
                    <li>Processing your orders and luxury accessory purchases.</li>
                    <li>Sending transactional appointment reminders and scheduling updates.</li>
                    <li>Communicating with you about new collections and exclusive events (with your consent).</li>
                    <li>Ensuring security and fraud prevention.</li>
                </ul>

                <h2>3. SMS Messaging & Compliance</h2>
                <p>By opting into our SMS services, you agree to receive text messages related to your service requests and occasional marketing alerts.</p>
                <ul>
                    <li><strong>Opt-In:</strong> You will only receive messages if you have explicitly provided consent via our website forms.</li>
                    <li><strong>Opt-Out:</strong> You can cancel SMS notifications at any time by replying "STOP" to our messages. You will receive one final confirmation text.</li>
                    <li><strong>Support:</strong> Reply "HELP" for assistance or contact us directly at the email provided below.</li>
                    <li><strong>Rates:</strong> Standard message and data rates may apply. Carriers are not liable for delayed or undelivered messages.</li>
                </ul>

                <h2>4. Information Sharing & Security</h2>
                <p>We do not sell, rent, or trade your personal information. We only share data with service providers who assist in our operations (e.g., payment processors or SMS aggregators) solely to deliver the services you requested. We implement reasonable security measures, including encryption, to protect your data.</p>

                <h2>5. Your Rights</h2>
                <p>Depending on your location, you have the right to access, update, or delete your personal information. You may withdraw your consent for future communications at any time.</p>

                <h2>6. Contact Us</h2>
                <p>If you have questions about this policy, please contact us:</p>
                <ul className="list-none pl-0">
                    <li><strong>Company:</strong> Sophia & Jo retail, Inc</li>
                    <li><strong>Address:</strong> 132 Talmage Rd, Ukiah, CA 95482</li>
                    <li><strong>Email:</strong> <a href="mailto:support@sophiajoretail.in" className="text-gold hover:underline">support@sophiajoretail.in</a></li>
                    <li><strong>Phone:</strong> +1 707-463-1320</li>
                </ul>

                <Link to="/" className="text-gold hover:underline mt-12 block no-underline">&larr; Back to Home</Link>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
