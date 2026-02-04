
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
                <p className="text-sm text-gray-500">Effective Date: January 1, 2026</p>

                <p>Please read these Terms of Service ("Terms") carefully before using the website operated by Sophia & Jo retail, Inc ("us," "we," or "our"). Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms.</p>

                <h2 className="font-bold text-xl mt-8">SMS Messaging Terms & Compliance</h2>
                <div className="space-y-4">
                    <p><strong>1. Program Description:</strong> We send recurring automated marketing and informational text messages (e.g., appointment reminders, promotional offers for purses and belts, and order updates) to customers who have booked an appointment with Sophia & Jo retail, Inc through our website at <a href="https://www.sophiajoretail.in/" className="text-gold hover:underline">https://www.sophiajoretail.in/</a>, or via our scheduling forms, and have explicitly opted in.</p>

                    <p><strong>2. Cancellation Instructions:</strong> You can cancel the SMS service at any time. Simply text "STOP" to <strong>+1 707-801-0124</strong>. After you send the SMS message "STOP" to us, we will send you an SMS message to confirm that you have been unsubscribed.</p>

                    <p><strong>3. Support Information:</strong> If you are experiencing issues with the messaging program, you can reply with the keyword "HELP" for more assistance, or you can get help directly at <a href="mailto:support@sophiajoretail.in" className="text-gold hover:underline">support@sophiajoretail.in</a> or call <strong>+1 707-463-1320</strong>.</p>

                    <p><strong>4. Carrier Liability:</strong> Carriers are not liable for delayed or undelivered messages.</p>

                    <p><strong>5. Message & Data Rates:</strong> Message and data rates may apply for any messages sent to you from us and to us from you. Message frequency varies based on your service usage and appointment schedule.</p>

                    <p><strong>6. Age Restriction:</strong> You must be 18 years or older to participate in our SMS program.</p>

                    <p><strong>7. Privacy Policy:</strong> For privacy-related inquiries, please refer to our Privacy Policy at: <Link to="/privacy-policy" className="text-gold hover:underline">https://www.sophiajoretail.in/privacy-policy</Link>.</p>
                </div>

                <h2 className="mt-10">General Terms</h2>
                <p>This website is owned and operated by Sophia & Jo retail, Inc. By using the Site, you agree to be bound by these Terms of Service.</p>

                <h3 className="text-lg font-bold mt-6">Intellectual Property Rights</h3>
                <p>All materials available on the Site are the property of Sophia & Jo retail, Inc and are protected by copyright and trademark laws.</p>

                <h3 className="text-lg font-bold mt-6">Disclaimers</h3>
                <p>The information, products, and services offered on or through the Site are provided "as is" and without warranties of any kind.</p>

                <h3 className="text-lg font-bold mt-6">Governing Law</h3>
                <p>These Terms of Service shall be governed by and construed in accordance with the laws of the State of California.</p>

                <h3 className="text-lg font-bold mt-10">Contact Us</h3>
                <ul className="list-none pl-0">
                    <li><strong>Company:</strong> Sophia & Jo retail, Inc</li>
                    <li><strong>Phone:</strong> +1 707-463-1320</li>
                    <li><strong>Email:</strong> <a href="mailto:support@sophiajoretail.in" className="text-gold hover:underline">support@sophiajoretail.in</a></li>
                    <li><strong>Website:</strong> <a href="https://www.sophiajoretail.in" className="text-gold hover:underline">https://www.sophiajoretail.in/</a></li>
                </ul>

                <Link to="/" className="text-gold hover:underline mt-12 block no-underline">&larr; Back to Home</Link>
            </div>
        </div>
    );
};

export default TermsOfServicePage;
