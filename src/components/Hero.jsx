import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1583391733958-d25e07fac04f?q=80&w=2000&auto=format&fit=crop" 
          alt="Luxury Indian Ethnic Wear" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
        <h3 className="text-vb-gold-light text-sm md:text-base uppercase tracking-[0.3em] mb-4">Welcome to</h3>
        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-6 drop-shadow-lg">
          Vaibhav Boutique
        </h1>
        <p className="text-gray-200 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto leading-relaxed">
          Discover the true essence of Indian elegance. Expert tailoring and premium designer wear in the heart of Indore.
        </p>
        <a 
          href="#collections" 
          className="inline-block bg-vb-gold hover:bg-white hover:text-vb-dark text-white px-8 py-4 text-sm uppercase tracking-widest transition-all duration-300"
        >
          Explore Collection
        </a>
      </div>
    </section>
  );
};

export default Hero;
