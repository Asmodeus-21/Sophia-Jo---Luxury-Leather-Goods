
import React from 'react';
import type { Product } from '../types';

const products: Product[] = [
  {
    id: 1,
    name: 'The Verona Tote',
    description: 'An embodiment of classic design, the Verona is spacious enough for your essentials and elegant enough for any occasion.',
    materials: 'Full-grain Italian calfskin leather, solid brass hardware, and a supple suede lining.',
    imageUrl: '/assets/tote.png'
  },
  {
    id: 2,
    name: 'The Siena Crossbody',
    description: 'Perfect for the woman on the go, the Siena combines compact practicality with a refined, minimalist aesthetic.',
    materials: 'Pebbled French leather with a water-resistant finish and a hand-stitched adjustable strap.',
    imageUrl: '/assets/siena.png'
  },
  {
    id: 3,
    name: 'The Equestrian Belt',
    description: 'Inspired by traditional saddlery, this belt is a versatile statement piece that defines the waist with understated authority.',
    materials: 'Vegetable-tanned bridle leather, featuring a signature solid brass buckle forged in Florence.',
    imageUrl: '/assets/belt.png'
  },
  {
    id: 4,
    name: 'The Milano Clutch',
    description: 'A sophisticated evening companion, the Milano is structured yet delicate, with a detachable chain for versatility.',
    materials: 'Smooth Nappa leather, gold-plated clasp, and a silk-lined interior compartment.',
    imageUrl: '/assets/clutch.png'
  }
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="group">
      <div className="aspect-w-1 aspect-h-1 overflow-hidden">
        <img src={product.imageUrl} alt={product.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="mt-4 text-center">
        <h3 className="font-serif text-2xl text-charcoal">{product.name}</h3>
        <p className="mt-2 text-sm text-charcoal/80">{product.description}</p>
        <p className="mt-3 text-xs uppercase tracking-widest text-gold">{product.materials}</p>
      </div>
    </div>
  )
}

const ProductShowcase: React.FC = () => {
  return (
    <section id="collection" className="py-20 bg-ivory">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold">A Curated Collection</h2>
          <p className="mt-4 text-lg text-charcoal/70 max-w-2xl mx-auto">Each piece is thoughtfully designed and meticulously crafted to be a cherished part of your story.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {products.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;