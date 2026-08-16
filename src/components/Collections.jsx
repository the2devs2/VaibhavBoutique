import React from 'react';

const collections = [
  {
    title: "Women's Suits",
    desc: "Elegant and comfortable suits tailored to perfection for any occasion.",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4a9bf2?q=80&w=800&auto=format&fit=crop",
    fallback: "https://picsum.photos/seed/womensuit/600/800"
  },
  {
    title: "Designer Wear",
    desc: "Exclusive designer pieces crafted with intricate details and premium fabrics.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    fallback: "https://picsum.photos/seed/designerwear/600/800"
  },
  {
    title: "Custom Tailoring",
    desc: "Bespoke tailoring services to bring your unique style vision to life.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop",
    fallback: "https://picsum.photos/seed/tailoring/600/800"
  }
];

const Collections = () => {
  return (
    <section id="collections" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl text-vb-dark mb-4">Our Collections</h2>
          <div className="w-16 h-1 bg-vb-gold mx-auto"></div>
          <p className="mt-6 text-gray-500 max-w-2xl mx-auto">
            Experience the perfect blend of tradition and modern fashion with our handpicked collections and tailoring services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {collections.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6 aspect-[3/4]">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  onError={(e) => { e.target.onerror = null; e.target.src = item.fallback; }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="text-center">
                <h3 className="font-playfair text-2xl text-vb-dark mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
