
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-ivory/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold text-charcoal tracking-wider">
          Sophia & Jo
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/#collection" className="text-charcoal hover:text-gold transition-colors duration-300">The Collection</a>
          <a href="/#craft" className="text-charcoal hover:text-gold transition-colors duration-300">Our Craft</a>
          <a href="/#contact" className="text-charcoal hover:text-gold transition-colors duration-300">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;