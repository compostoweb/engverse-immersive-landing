
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white/90 shadow-md backdrop-blur-sm py-3" : "bg-transparent py-5"
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex flex-col items-start">
          <img 
            src="/lovable-uploads/805a1499-44cd-4465-95cb-dbbcd33868c1.png" 
            alt="EngVerse Logo" 
            className="h-12 object-contain"
          />
          <span className="text-engverse-blue text-sm font-medium">Construindo Novas Dimensões</span>
        </a>
        
        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-engverse-dark focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          {["Serviços", "Diferenciais", "Clientes", "Contato"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="font-medium text-engverse-blue hover:text-engverse-orange transition duration-300"
            >
              {item}
            </a>
          ))}
        </div>
        
        {/* Mobile menu */}
        <div className={cn(
          "absolute top-full left-0 right-0 bg-white shadow-lg md:hidden transition-transform duration-300 origin-top",
          isMobileMenuOpen ? "scale-y-100" : "scale-y-0"
        )}>
          <div className="flex flex-col space-y-4 py-4 px-4">
            {["Serviços", "Diferenciais", "Clientes", "Contato"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="font-medium text-engverse-blue hover:text-engverse-orange px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
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
