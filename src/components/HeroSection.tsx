
import React from 'react';
import { cn } from "@/lib/utils";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-engverse-dark via-engverse-dark/95 to-engverse-purple/30">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-engverse-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-engverse-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-32 lg:pt-40">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-engverse-purple/30 bg-engverse-purple/10 backdrop-blur-sm">
              <span className="text-sm font-medium text-engverse-purple">Inovação em Engenharia</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-[1.1]">
              Tecnologias Imersivas para{' '}
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-engverse-blue to-engverse-purple bg-clip-text text-transparent">
                  Engenharia
                </span>
                <span className="absolute inset-x-0 bottom-0 h-3 bg-gradient-to-r from-engverse-blue/30 to-engverse-purple/30 blur-sm"></span>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
              Potencialize seus projetos com soluções avançadas de Realidade Virtual, 
              Aumentada e Mista para maior segurança e produtividade.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contato" className="button-primary">
                Solicitar Demonstração
              </a>
              <a href="#serviços" className="button-secondary">
                Nossos Serviços
              </a>
            </div>
          </div>

          {/* Right Content - 3D Visualization Area */}
          <div className="flex-1 w-full max-w-xl">
            <div className="relative">
              {/* Main display area */}
              <div className="relative bg-gradient-to-br from-engverse-dark/80 to-engverse-purple/20 rounded-2xl border border-white/10 backdrop-blur-sm p-6 shadow-2xl">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/372b6de2-e2e2-4bc2-b5a1-3056c3b00f8b.jpg"
                    alt="VR Engineering Visualization"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Floating cards */}
                <div className="absolute -left-8 top-1/4 bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20 shadow-xl animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-engverse-blue/30"></div>
                    <div>
                      <div className="h-2 w-20 bg-white/20 rounded-full"></div>
                      <div className="h-2 w-16 bg-white/10 rounded-full mt-2"></div>
                    </div>
                  </div>
                </div>

                <div className="absolute -right-8 bottom-1/4 bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-engverse-purple/30"></div>
                    <div>
                      <div className="h-2 w-20 bg-white/20 rounded-full"></div>
                      <div className="h-2 w-16 bg-white/10 rounded-full mt-2"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background glow effects */}
              <div className="absolute -inset-4 bg-gradient-to-r from-engverse-blue/20 to-engverse-purple/20 rounded-3xl blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative gradient */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-engverse-purple/50 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
