
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeadFormModal: React.FC<LeadFormModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin.includes('link.openaria.app') || event.origin.includes('ghl')) {
        if (event.data === 'form_submitted' || (event.data && event.data.type === 'form_submitted')) {
          window.location.href = '/';
        }
      }
    };

    window.addEventListener('message', handleMessage);

    if (!isOpen) {
      // Reset form on close
      setIsSubmitted(false);
    }

    return () => window.removeEventListener('message', handleMessage);
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm transition-opacity duration-300" onClick={onClose}>
      <div className="bg-ivory rounded-none shadow-2xl p-0 w-full max-w-[500px] relative overflow-hidden" onClick={e => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-charcoal/50 hover:text-charcoal transition-all duration-200 z-10 p-2 hover:bg-charcoal/5 rounded-full"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8 md:p-10">
          {isSubmitted ? (
            <div className="text-center py-20">
              <h2 className="font-serif text-3xl text-charcoal">Thank You</h2>
              <div className="w-12 h-[1px] bg-gold mx-auto my-6"></div>
              <p className="text-charcoal/80 font-light tracking-wide">Welcome to the Inner Circle. We look forward to sharing our world with you.</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h2 className="font-serif text-3xl text-charcoal uppercase tracking-widest">The Inner Circle</h2>
                <div className="w-10 h-[1px] bg-gold mx-auto mt-4 mb-2"></div>
                <p className="text-xs text-charcoal/60 uppercase tracking-tighter">Exclusive access & updates</p>
              </div>
              <div style={{ width: '100%', height: '750px', position: 'relative' }}>
                <iframe
                  src="https://link.openaria.app/widget/form/ib13SCNVO7qvddcp7qMF"
                  style={{ width: '100%', height: '750px', border: 'none' }}
                  id="inline-ib13SCNVO7qvddcp7qMF-modal"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="A2P Form"
                  data-height="750"
                  data-layout-iframe-id="inline-ib13SCNVO7qvddcp7qMF-modal"
                  data-form-id="ib13SCNVO7qvddcp7qMF"
                  title="A2P Form"
                />
              </div>
              <div className="mt-4 text-[10px] text-charcoal/40 text-center leading-relaxed">
                By submitting this form, you agree to our{' '}
                <Link to="/terms-of-service" className="underline hover:text-gold transition-colors">Terms of Service</Link>
                {' '}and{' '}
                <Link to="/privacy-policy" className="underline hover:text-gold transition-colors">Privacy Policy</Link>.
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadFormModal;
