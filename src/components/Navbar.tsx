import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);
  return <nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", isScrolled ? "bg-[#0F172A]/90 backdrop-blur-lg shadow-lg" : "bg-transparent")}>
      <div className="container mx-auto px-4 my-[15px]">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="flex items-center space-x-2">
            <div className="bg-white rounded-xl px-[10px]">
              <img src="/lovable-uploads/310b9c80-f68f-437a-aa08-3bc041e5d8f1.png" alt="EngVerse Logo" className="h-16 w-auto object-contain" />
            </div>
          </a>
          
          <div className="hidden md:flex items-center space-x-1">
            {["Serviços", "Diferenciais", "Setores"].map(item => <a key={item} href={`#${item === 'Setores' ? 'clientes' : item.toLowerCase()}`} className="px-4 py-2 text-gray-300 hover:text-white transition-colors">
                {item}
              </a>)}
            <a href="#contato" className="ml-4 px-5 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-colors">
              Contato
            </a>
          </div>
          
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-white focus:outline-none" aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {isMobileMenuOpen && <div className="fixed inset-0 bg-[#0F172A] md:hidden z-40">
          <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="Close menu">
            <X className="h-6 w-6" />
          </button>

          <div className="pt-24 pb-8 px-8">
            <div className="flex flex-col space-y-4">
              {["Serviços", "Diferenciais", "Segmentos"].map(item => <a key={item} href={`#${item === 'Segmentos' ? 'clientes' : item.toLowerCase()}`} className="py-3 text-lg text-white border-b border-white/10" onClick={() => setIsMobileMenuOpen(false)}>
                  {item}
                </a>)}
              <a href="#contato" className="py-3 text-lg text-white border-b border-white/10" onClick={() => setIsMobileMenuOpen(false)}>
                Contato
              </a>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex flex-col space-y-6">
                <div className="flex items-start space-x-3">
                  <div className="text-engverse-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-sm">Email</p>
                    <a href="mailto:comercial@engverse.com.br" className="text-gray-400 text-sm hover:text-white">comercial@engverse.com.br</a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="text-engverse-orange">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-sm">Telefone</p>
                    <a href="tel:+5531983654721" className="text-gray-400 text-sm hover:text-white">+55 (31) 98365-4721</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>}
    </nav>;
};
export default Navbar;