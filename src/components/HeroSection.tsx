import React from 'react';
import { cn } from "@/lib/utils";

const HeroSection = () => {
  return <section className="pt-32 pb-20 md:pt-40 md:pb-32 hero-gradient overflow-hidden relative">
    {/* Background image with overlay */}
    <div className="absolute inset-0 z-0" style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1605810230434-7631ac76ec81")',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="absolute inset-0 bg-gradient-to-r from-engverse-dark/95 to-engverse-dark/80" />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Transformando a Engenharia com Tecnologias Imersivas
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg mx-auto md:mx-0">Soluções de Realidade Aumentada, Virtual e Mista que elevam segurança, produtividade e precisão em projetos de engenharia.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#contato" className="button-primary">
              Solicitar Demonstração
            </a>
            <a href="#serviços" className="button-secondary">
              Nossos Serviços
            </a>
          </div>
        </div>
        
        <div className={cn("hidden md:block relative", "before:absolute before:inset-0 before:bg-gradient-to-r before:from-engverse-blue/30 before:to-engverse-purple/30 before:rounded-lg before:z-10", "after:absolute after:w-40 after:h-40 after:bg-engverse-purple/20 after:rounded-full after:blur-3xl after:top-1/4 after:-right-20 after:z-0")}>
          <div className="relative z-20 animate-float">
            <div className="bg-white/10 backdrop-blur-sm p-2 rounded-lg border border-white/20 mb-4">
              <div className="grid grid-cols-2 gap-2">
                {[1, 2].map(index => <div key={index} className="aspect-video bg-gradient-to-br from-engverse-blue/30 to-engverse-purple/30 rounded-md flex items-center justify-center">
                  <div className="w-full h-full flex items-center justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1617839906018-cdd2bf1f9307"
                      alt="3D VR Headset"
                      className="w-16 h-16 object-cover rounded-md"
                    />
                  </div>
                </div>)}
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-2 rounded-lg border border-white/20 relative">
              <div className="relative aspect-[4/3] bg-gradient-to-br from-engverse-dark to-engverse-purple/60 rounded-md overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-3 p-4 w-full">
                    {[...Array(9)].map((_, index) => <div key={index} className={cn("h-12 rounded-md bg-white/10", index % 3 === 0 && "bg-engverse-blue/30", index % 4 === 0 && "bg-engverse-purple/30")} />)}
                  </div>
                </div>
                
                <div className="absolute bottom-2 right-2 bg-white/20 backdrop-blur-sm rounded-full p-1 px-3">
                  <span className="text-white text-xs">AR/VR View</span>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-engverse-blue/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 right-12 w-16 h-16 bg-engverse-purple/30 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Background decorative elements */}
    <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-engverse-blue/5 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-engverse-purple/5 rounded-full blur-2xl"></div>
  </section>;
};

export default HeroSection;
