
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-ivory/80 py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="font-serif text-xl mb-2 text-ivory">Sophia & Jo retail, Inc</h3>
          <p className="text-sm">132 Talmage Rd</p>
          <p className="text-sm">Ukiah, CA 95482</p>
          <p className="text-sm mt-2">
            <a href="mailto:support@sophiajoretail.in" className="hover:text-gold transition-colors">support@sophiajoretail.in</a>
          </p>
        </div>
        <div>
          <h3 className="font-serif text-xl mb-2 text-ivory">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="/#collection" className="hover:text-gold transition-colors text-sm">The Collection</a></li>
            <li><a href="/#craft" className="hover:text-gold transition-colors text-sm">Our Craft</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-serif text-xl mb-2 text-ivory">Legal</h3>
          <ul className="space-y-1">
            <li><Link to="/privacy-policy" className="hover:text-gold transition-colors text-sm">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service" className="hover:text-gold transition-colors text-sm">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-ivory/60 text-xs mt-10 border-t border-ivory/20 pt-6">
        &copy; {new Date().getFullYear()} Sophia & Jo retail, Inc. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
