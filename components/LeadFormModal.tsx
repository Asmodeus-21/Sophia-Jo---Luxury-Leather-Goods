
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeadFormModal: React.FC<LeadFormModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      // Reset form on close
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
            <div className="text-center mb-6">
              <h2 className="font-serif text-3xl text-charcoal">Join Our Inner Circle</h2>
              <p className="mt-2 text-charcoal/80">Be the first to know about new collections, exclusive events, and private sales.</p>
            </div>
            <div style={{ minHeight: '598px' }}>
              <iframe
                src="https://link.openaria.app/widget/form/ib13SCNVO7qvddcp7qMF"
                style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px', minHeight: '598px' }}
                id="inline-ib13SCNVO7qvddcp7qMF-modal"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="A2P Form"
                data-height="598"
                data-layout-iframe-id="inline-ib13SCNVO7qvddcp7qMF-modal"
                data-form-id="ib13SCNVO7qvddcp7qMF"
                title="A2P Form"
              />
            </div>
            <script src="https://link.openaria.app/js/form_embed.js"></script>
          </>
        )}
      </div>
    </div>
  );
};

export default LeadFormModal;
