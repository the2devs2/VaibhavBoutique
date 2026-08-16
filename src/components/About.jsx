import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1596455607563-ad6193f76b17?q=80&w=800&auto=format&fit=crop" 
                alt="About Vaibhav Boutique" 
                className="w-full h-auto object-cover rounded-sm shadow-xl"
              />
              <div className="absolute -bottom-10 -right-10 bg-white p-8 shadow-lg hidden md:block">
                <p className="font-playfair text-4xl text-vb-gold mb-2">10+</p>
                <p className="text-sm tracking-wider uppercase text-gray-500">Years of<br/>Excellence</p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
            <h3 className="text-vb-gold text-sm uppercase tracking-[0.2em] mb-4">Our Legacy</h3>
            <h2 className="font-playfair text-4xl md:text-5xl text-vb-dark mb-6">Redefining Elegance in Indore</h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              Located in the heart of Indore at Rambagh Square, Vaibhav Boutique has been a symbol of exquisite craftsmanship and timeless fashion. We specialize in premium women's suits, bespoke tailoring, and exclusive designer wear.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our commitment to quality, attention to detail, and personalized service ensures that every piece we create is a masterpiece that perfectly complements your style.
            </p>
            <a href="#contact" className="inline-block border border-vb-dark text-vb-dark hover:bg-vb-dark hover:text-white px-8 py-3 text-sm uppercase tracking-widest transition-colors duration-300">
              Visit Our Boutique
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
