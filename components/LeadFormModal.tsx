
import React, { useState, FormEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeadFormModal: React.FC<LeadFormModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const canSubmit = email && phone && isChecked;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (canSubmit) {
      console.log({ name, email, phone });
      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
      }, 3000);
    }
  };

  useEffect(() => {
    if (!isOpen) {
      // Reset form on close
      setName('');
      setEmail('');
      setPhone('');
      setIsChecked(false);
      setIsSubmitted(false);
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-ivory rounded-lg shadow-2xl p-8 md:p-12 w-full max-w-lg relative" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-charcoal/50 hover:text-charcoal transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {isSubmitted ? (
          <div className="text-center">
            <h2 className="font-serif text-3xl text-charcoal">Thank You!</h2>
            <p className="mt-4 text-charcoal/80">Welcome to the Inner Circle. Keep an eye on your inbox and messages for exclusive updates.</p>
          </div>
        ) : (
          <>
            <div className="text-center">
              <h2 className="font-serif text-3xl text-charcoal">Join Our Inner Circle</h2>
              <p className="mt-2 text-charcoal/80">Be the first to know about new collections, exclusive events, and private sales.</p>
            </div>
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name (Optional)"
                  className="w-full px-4 py-3 border border-charcoal/20 focus:ring-gold focus:border-gold transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email (Required)"
                  className="w-full px-4 py-3 border border-charcoal/20 focus:ring-gold focus:border-gold transition-colors"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">Phone Number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone Number (Required)"
                  className="w-full px-4 py-3 border border-charcoal/20 focus:ring-gold focus:border-gold transition-colors"
                />
              </div>

              <div className="text-[10px] leading-tight text-charcoal/60">
                By clicking 'Submit,' I agree to receive recurring automated marketing and informational text messages (e.g., order updates and cart reminders) from Sophia & Jo retail, Inc at the number provided. Consent is not a condition of any purchase. Reply STOP to cancel, HELP for help. Message & data rates may apply. View our <Link to="/privacy-policy" className="underline hover:text-gold">Privacy Policy</Link> and <Link to="/terms-of-service" className="underline hover:text-gold">Terms of Service</Link>.
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    required
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    className="focus:ring-gold h-4 w-4 text-gold border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="consent" className="font-medium text-charcoal/80">I provide my express written consent to receive SMS communications.*</label>
                </div>
              </div>

              <button
                type="submit"
                disabled={!canSubmit}
                className="w-full bg-charcoal text-ivory font-semibold py-3 px-8 hover:bg-charcoal/90 transition-all duration-300 disabled:bg-charcoal/40 disabled:cursor-not-allowed"
              >
                Submit
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default LeadFormModal;
