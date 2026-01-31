
import React from 'react';

interface HeroProps {
  onCTAClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCTAClick }) => {
  return (
    <div className="relative h-[70vh] min-h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1591348278462-13a1a3f2acd7?q=80&w=1887&auto=format&fit=crop')" }}>
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-ivory px-4">
        <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight">Timeless Elegance, Handcrafted for You.</h1>
        <p className="mt-4 max-w-xl text-lg md:text-xl">Discover the artistry of Sophia & Jo, where every piece is a testament to enduring style and impeccable craftsmanship.</p>
        <div className="mt-8 space-x-4">
            <a href="#collection" className="bg-ivory text-charcoal font-semibold py-3 px-8 hover:bg-opacity-90 transition-all duration-300">
                Explore The Collection
            </a>
            <button onClick={onCTAClick} className="bg-gold text-white font-semibold py-3 px-8 hover:bg-opacity-90 transition-all duration-300">
                Join Inner Circle
            </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
