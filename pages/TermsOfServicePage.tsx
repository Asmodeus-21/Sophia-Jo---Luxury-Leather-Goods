
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const TermsOfServicePage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white py-16">
            <div className="container mx-auto px-6 max-w-4xl prose lg:prose-lg">
                <h1 className="font-serif text-4xl">Terms of Service</h1>
                <p className="text-sm text-gray-500">Last Updated: {new Date().toLocaleDateString()}</p>

                <p>Please read these Terms of Service ("Terms") carefully before using the website operated by Sophia & Jo retail, Inc. ("us," "we," or "our"). Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms.</p>

                <h2>Accounts</h2>
                <p>When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>

                <h2>Intellectual Property</h2>
                <p>The Service and its original content, features, and functionality are and will remain the exclusive property of Sophia & Jo retail, Inc. and its licensors.</p>

                <h2>Governing Law</h2>
                <p>These Terms shall be governed and construed in accordance with the laws of California, United States, without regard to its conflict of law provisions.</p>

                <h2 className="font-bold text-xl">SMS Terms</h2>
                <p>By providing your mobile number and opting in, you agree to receive text messages from Sophia & Jo retail, Inc. These messages may include appointment reminders and promotional offers for purses and belts, as well as cart reminders and order updates.</p>
                <ul>
                    <li><strong>Program Description:</strong> We send recurring automated marketing and informational text messages (e.g., appointment reminders, promotional offers for purses and belts, and order updates) to the mobile number provided.</li>
                    <li><strong>Opt-Out:</strong> You can cancel the SMS service at any time. Just text "STOP" to our number. After you send the SMS message "STOP" to us, we will send you an SMS message to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us.</li>
                    <li><strong>Help:</strong> If at any time you forget what keywords are supported, just text "HELP" for more information. After you send the SMS message "HELP" to us, we will respond with instructions on how to use our service as well as how to unsubscribe.</li>
                    <li><strong>Rates:</strong> Message and data rates may apply for any messages sent to you from us and to us from you. Message frequency varies. If you have any questions about your text plan or data plan, it is best to contact your wireless provider.</li>
                </ul>

                <h2>Changes</h2>
                <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.</p>

                <Link to="/" className="text-gold hover:underline mt-8 block no-underline">&larr; Back to Home</Link>
            </div>
        </div>
    );
};

export default TermsOfServicePage;
