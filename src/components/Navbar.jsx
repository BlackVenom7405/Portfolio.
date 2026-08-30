import React, { useState, useEffect } from 'react';
import MovingGradientButton from './originkit/ui/moving-gradient-button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll to make navbar more solid
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isOpen 
          ? 'bg-[#ff2a2a] py-4 shadow-xl'
          : isScrolled 
            ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4 shadow-lg' 
            : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Left Side: Logo/Name */}
        <div className="flex items-center">
          <a href="#hero" className="text-white text-xl md:text-2xl font-black tracking-tight flex items-center gap-2 group">
            <span className="w-3 h-3 rounded-full bg-[#ff2a2a] group-hover:scale-125 transition-transform duration-300"></span>
            <span>BHARATH<span className="text-[#ff2a2a]">.</span></span>
          </a>
        </div>

        {/* Center: Desktop Menu Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-white/80 hover:text-white font-medium text-sm tracking-wide relative group transition-colors duration-300 uppercase"
            >
              {link.name}
              {/* Smooth hover underline */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff2a2a] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Right Side: CTA Button with Moving Gradient */}
        <div className="hidden md:flex items-center gap-4">
          <MovingGradientButton
            label="Resume 📄"
            link="/Bharath_Gowda_D_Resume.pdf"
            newTab={true}
            download="Bharath_Gowda_D_Resume.pdf"
            padding="8px 22px"
            rounded={9999}
          />
        </div>

        {/* Mobile Hamburger Menu Icon */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none p-2"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 py-4 opacity-100 bg-[#ff2a2a] shadow-2xl' : 'max-h-0 opacity-0 bg-transparent'
        }`}
      >
        <div className="flex flex-col px-6 space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-black font-bold text-lg border-b border-white/20 pb-2 transition-colors uppercase"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 pb-2">
            <MovingGradientButton
              label="Download Resume 📄"
              link="/Bharath_Gowda_D_Resume.pdf"
              newTab={true}
              download="Bharath_Gowda_D_Resume.pdf"
              onClick={() => setIsOpen(false)}
              className="w-full"
              padding="10px 24px"
              rounded={9999}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
