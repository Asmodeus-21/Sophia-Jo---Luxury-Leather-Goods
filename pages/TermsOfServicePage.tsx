
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
                <p className="text-sm text-gray-500">Effective Date: February 4, 2026</p>

                <p>Welcome to Sophia & Jo retail, Inc. Please read these Terms of Service ("Terms") carefully. By accessing or using our website at <a href="https://www.sophiajoretail.in/" className="text-gold hover:underline">https://www.sophiajoretail.in/</a> (the "Site"), you agree to be bound by these Terms, our Privacy Policy, and any additional terms that may apply to specific services.</p>

                <h2 className="font-bold text-xl mt-8">SMS Messaging Terms & Compliance</h2>
                <p>To ensure transparency and compliance with TCPA and CTIA guidelines, the following terms apply to our SMS program:</p>
                <div className="space-y-4">
                    <p><strong>Program Description:</strong> This program sends recurring automated messages, including appointment confirmations, reminders, rescheduling updates, and customer support communications to customers who have booked via our website or scheduling forms and have explicitly opted in.</p>

                    <p><strong>Cancellation Instructions:</strong> You can cancel the SMS service at any time. Simply text "STOP" to the number that sent you the message. We will send a final confirmation SMS to verify your unsubscribe status. To rejoin, sign up as you did initially.</p>

                    <p><strong>Support Information:</strong> For issues, reply with the keyword "HELP" or contact us directly at <a href="mailto:support@sophiajoretail.in" className="text-gold hover:underline">support@sophiajoretail.in</a> or <strong>+1 707-463-1320</strong>.</p>

                    <p><strong>Carrier Liability:</strong> Carriers (including major U.S. carriers like AT&T, Verizon, and T-Mobile) are not liable for delayed or undelivered messages.</p>

                    <p><strong>Message & Data Rates:</strong> Message and data rates may apply for any messages sent to you from us and to us from you. Message frequency varies based on your service usage and appointment schedule.</p>

                    <p><strong>Supported Carriers:</strong> Our program works with all major U.S. wireless carriers and most regional carriers.</p>

                    <p><strong>Age Restriction:</strong> You must be 18 years or older to participate in our SMS program.</p>

                    <p><strong>Privacy Policy:</strong> For details on how we handle your data, visit: <Link to="/privacy-policy" className="text-gold hover:underline">https://www.sophiajoretail.in/privacy-policy</Link>.</p>
                </div>

                <h2 className="mt-10">Intellectual Property Rights</h2>
                <p>This Site and all materials (images, text, logos, luxury accessory designs) are the property of Sophia & Jo retail, Inc and are protected by copyright and trademark laws.</p>
                <ul>
                    <li><strong>Limited License:</strong> You may print one copy of individual pages for personal, non-commercial use only.</li>
                    <li><strong>Prohibitions:</strong> You may not modify, copy, republish, or distribute any material from this Site without explicit authorization.</li>
                </ul>

                <h2 className="mt-10">Your License to Us</h2>
                <p>By submitting comments, photos, or feedback to us via the Site or social media, you grant us a royalty-free, perpetual, worldwide license to use, modify, and display such material for our business purposes.</p>

                <h2 className="mt-10">Disclaimers & Indemnification</h2>
                <ul>
                    <li><strong>"As Is" Basis:</strong> The information and products on this Site are provided without warranties of any kind.</li>
                    <li><strong>Third Parties:</strong> We are not responsible for the quality or reliability of third-party vendors linked through our Site.</li>
                    <li><strong>Indemnity:</strong> You agree to hold harmless Sophia & Jo retail, Inc and its officers from any claims arising out of your breach of these Terms.</li>
                </ul>

                <h2 className="mt-10">Registration & Passwords</h2>
                <p>To access certain features, you may need to create an account. You are responsible for maintaining the confidentiality of your login credentials. Notify us immediately at <a href="mailto:support@sophiajoretail.in" className="text-gold hover:underline">support@sophiajoretail.in</a> if you suspect unauthorized access.</p>

                <h2 className="mt-10">Termination & Governing Law</h2>
                <p>We reserve the right to terminate your access to the Site for conduct we deem unlawful or in violation of these Terms. These Terms are governed by and construed in accordance with the laws of the State of California. Any disputes shall be resolved through binding arbitration in that jurisdiction.</p>

                <h2 className="mt-10">Contact Us</h2>
                <ul className="list-none pl-0">
                    <li><strong>Sophia & Jo retail, Inc</strong></li>
                    <li><strong>Address:</strong> 132 Talmage Rd, Ukiah, CA 95482</li>
                    <li><strong>Phone:</strong> +1 707-463-1320</li>
                    <li><strong>Email:</strong> <a href="mailto:support@sophiajoretail.in" className="text-gold hover:underline">support@sophiajoretail.in</a></li>
                    <li><strong>Website:</strong> <a href="https://www.sophiajoretail.in" className="text-gold hover:underline">https://www.sophiajoretail.in/</a></li>
                </ul>

                <p className="mt-6 italic text-sm">By using our website and services, you consent to these Terms of Service.</p>

                <Link to="/" className="text-gold hover:underline mt-12 block no-underline">&larr; Back to Home</Link>
            </div>
        </div>
    );
};

export default TermsOfServicePage;
