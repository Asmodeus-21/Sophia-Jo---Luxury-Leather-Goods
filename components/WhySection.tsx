
import React from 'react';

const WhySection: React.FC = () => {
  return (
    <section id="craft" className="py-20 bg-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <img src="/assets/craft.png" alt="Craftsmanship" className="w-full object-cover aspect-[4/3]" />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="font-serif text-4xl md:text-5xl font-bold">The Sophia & Jo Standard</h2>
          <p className="mt-6 text-lg text-charcoal/80">
            Our commitment to quality is uncompromising. We partner with family-owned tanneries in Italy and France, sourcing only the finest, ethically-raised leathers. Every stitch, every cut, and every polish is performed by the hands of master artisans who share our passion for creating something truly exceptional.
          </p>
          <p className="mt-4 text-lg text-charcoal/80">
            This is not fast fashion. This is heritage in the making—a conscious choice for those who value longevity, beauty, and the story behind the piece they carry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
