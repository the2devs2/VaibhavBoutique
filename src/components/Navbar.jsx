import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#" className={`font-playfair text-2xl font-bold tracking-wider ${isScrolled ? 'text-vb-dark' : 'text-white'}`}>
              VAIBHAV
            </a>
            <span className={`block text-xs uppercase tracking-widest ${isScrolled ? 'text-vb-maroon' : 'text-vb-gold-light'}`}>Boutique</span>
          </div>
          <div className="hidden md:flex space-x-8">
            {['Home', 'Collections', 'About', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className={`text-sm uppercase tracking-wider font-medium transition-colors hover:text-vb-gold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
