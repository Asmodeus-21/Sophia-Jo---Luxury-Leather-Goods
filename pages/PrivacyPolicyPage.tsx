
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
                <p className="text-sm text-gray-500">Last Updated: {new Date().toLocaleDateString()}</p>

                <p>Sophia & Jo retail, Inc. ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>

                <h2>Collection of Your Information</h2>
                <p>We may collect personal information from you in a variety of ways, including when you register on the site, place an order, subscribe to our newsletter, or fill out a form. This may include your name, email address, mailing address, phone number, and credit card information.</p>

                <h2>Use of Your Information</h2>
                <p>Having accurate information permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you to:</p>
                <ul>
                    <li>Create and manage your account.</li>
                    <li>Process your transactions and send you related information, including purchase confirmations and invoices.</li>
                    <li>Email you with updates, newsletters, and promotional materials.</li>
                    <li>Send you text messages for order updates, marketing, and other communications you have consented to receive.</li>
                </ul>

                <h2>Disclosure of Your Information</h2>
                <p>We do not sell, trade, or rent your personally identifiable information to others. We may share information with trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.</p>

                <h2 className="font-bold text-xl">SMS Privacy Policy</h2>
                <p className="font-semibold italic">"No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties."</p>

                <h2>Security of Your Information</h2>
                <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.</p>

                <h2>Your Rights (GDPR/CCPA)</h2>
                <p>Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your data. To exercise these rights, please contact us at the email address provided in our footer.</p>

                <Link to="/" className="text-gold hover:underline mt-8 block no-underline">&larr; Back to Home</Link>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
