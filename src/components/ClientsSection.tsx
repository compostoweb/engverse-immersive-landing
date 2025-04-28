import React from 'react';
import { Check } from "lucide-react";
const ClientsSection = () => {
  const clientTypes = [{
    type: "Engenharia Civil",
    icon: <span className="inline-flex items-center justify-center bg-orange-500 "><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg></span>
  }, {
    type: "Integradores de Sistemas",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
  }, {
    type: "Indústrias de Base",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
  }, {
    type: "Mineração",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
  }, {
    type: "Geologia",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
  }, {
    type: "Utilities",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
  }];
  const benefits = ["Precisão, Segurança e Produtividade nos seus projetos", "Equipe técnica multidisciplinar especializada", "Suporte para questões críticas", "Customização completa para seus fluxos de trabalho"];
  return <section id="clientes" className="py-24 bg-[#0F172A]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm mb-4 border border-white/10">
            <span className="text-sm font-medium text-gray-300">Quem Atendemos</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Setores de atuação</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-left">
            Empresas que buscam elevar padrões de qualidade, segurança e eficiência
            por meio de experiências digitais imersivas.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
          {clientTypes.map((client, index) => <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-5 hover:border-white/20 hover:bg-white/10 transition-all text-center cursor-pointer">
              <div className="w-12 h-12 mx-auto bg-gradient-to-br from-engverse-blue/20 to-engverse-purple/20 rounded-xl flex items-center justify-center mb-4">
                <div className="text-white">
                  {client.icon}
                </div>
              </div>
              <h3 className="text-sm font-medium text-white">{client.type}</h3>
            </div>)}
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Soluções completas para seus desafios de engenharia</h3>
            <p className="text-gray-400 mb-8">
              Nossa plataforma de tecnologias imersivas foi projetada especificamente para atender às necessidades 
              complexas de empresas de engenharia e setores industriais.
            </p>
            
            <div className="grid gap-4">
              {benefits.map((benefit, index) => <div key={index} className="flex items-center gap-3">
                  <div className="bg-engverse-orange/20 rounded-full p-1">
                    <Check className="h-4 w-4 text-engverse-orange" />
                  </div>
                  <span className="text-gray-300 text-sm">{benefit}</span>
                </div>)}
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-engverse-blue/20 to-engverse-purple/20 rounded-2xl p-8 border border-white/10">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Pronto para transformar seu projeto?</h3>
              <p className="text-gray-300 mb-8">
                Descubra como nossas tecnologias imersivas podem elevar o padrão 
                dos seus projetos de engenharia.
              </p>
              <a href="#contato" className="inline-block px-6 py-3 bg-gradient-to-r from-engverse-orange to-engverse-orange rounded-full text-white font-medium hover:shadow-lg hover:shadow-engverse-blue/20 transition-all">
                Fale com Especialistas
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ClientsSection;