import React from 'react';
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
const HeroSection = () => {
  return <section className="relative min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B] overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-engverse-purple/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-engverse-blue/20 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-engverse-orange/20 rounded-full filter blur-2xl"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Content container */}
      <div className="container mx-auto px-4 pt-32 lg:pt-40 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 pb-16">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6 border border-white/10">
              <span className="h-2 w-2 rounded-full bg-engverse-orange animate-pulse"></span>
              <span className="text-sm font-medium text-white/80">Tecnologias do futuro, hoje</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Transforme sua <span className="bg-clip-text text-transparent bg-gradient-to-r from-engverse-orange via-engverse-blue to-engverse-white">engenharia</span> com tecnologias imersivas
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Soluções avançadas de Realidade Virtual, Aumentada e Mista que elevam seus projetos para um novo patamar de inovação, segurança e produtividade.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contato" className="group px-6 py-3 bg-gradient-to-r from-engverse-orange to-engverse-blue rounded-full text-white font-medium flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-engverse-blue/20">
                Agendar demonstração
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a href="#serviços" className="px-6 py-3 border border-white/20 bg-white/5 backdrop-blur-sm rounded-full text-white flex items-center justify-center hover:bg-white/10 transition-all">
                Explorar soluções
              </a>
            </div>
          </div>

          {/* Right content - 3D visual area */}
          <div className="flex-1 mt-12 lg:mt-0 max-w-xl mx-auto lg:mx-0">
            <div className="relative">
              {/* Main display area */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src="/lovable-uploads/372b6de2-e2e2-4bc2-b5a1-3056c3b00f8b.jpg" alt="VR Engineering Visualization" className="w-full h-full object-cover transform transition-transform duration-10000 hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>

                {/* Overlay content */}
                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="h-2 w-2 rounded-full bg-engverse-orange animate-pulse"></span>
                    <span className="text-sm font-medium">Visualização em tempo real</span>
                  </div>
                  <h3 className="text-xl font-bold">Projetos em Realidade Virtual</h3>
                </div>

                {/* VR Icon overlay */}
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md rounded-full p-3">
                  <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 16H11V14H13V16ZM13 12H11V8H13V12ZM17 4H7V6H17V4ZM19 6H21V18H19V20H5V18H3V6H5V4H19V6ZM19 16H17V18H7V16H5V8H7V6H17V8H19V16Z" fill="currentColor" />
                  </svg>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -left-8 top-1/4 bg-white/10 backdrop-blur-md p-3 rounded-lg border border-white/10 shadow-xl animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-engverse-blue/30 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-white">Segurança</div>
                    <div className="text-xs text-white/60">+40% eficácia</div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 bottom-1/4 bg-white/10 backdrop-blur-md p-3 rounded-lg border border-white/10 shadow-xl animate-float" style={{
              animationDelay: '1.5s'
            }}>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-engverse-purple/30 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-white">Produtividade</div>
                    <div className="text-xs text-white/60">+60% eficiência</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12 mt-8 border-t border-white/10">
          {[{
          value: '+70%',
          label: 'Produtividade'
        }, {
          value: '-35%',
          label: 'Erros de Projeto'
        }, {
          value: '+80%',
          label: 'Retenção de Informação'
        }, {
          value: '+120',
          label: 'Projetos Entregues'
        }].map((stat, index) => <div key={index} className="text-center">
              <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-engverse-orange to-engverse-blue">{stat.value}</p>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </div>)}
        </div>
      </div>
      
      {/* Bottom decorative divider */}
      <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-engverse-orange via-engverse-blue to-engverse-purple"></div>
    </section>;
};
export default HeroSection;