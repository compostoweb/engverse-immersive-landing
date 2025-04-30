import React from 'react';
const DifferentialsSection = () => {
  const differentials = [{
    title: "Foco em Engenharia",
    description: "Expertise aplicada a projetos de construção civil, infraestrutura, indústria, mineração e geologia.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-white/60">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
  }, {
    title: "Equipe Sênior",
    description: "Profissionais com mais de 12 anos de mercado em engenharia, design e desenvolvimento de software imersivo.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-engverse-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
  }, {
    title: "Entrega Ágil",
    description: "Metodologia iterativa de desenvolvimento, com ciclos rápidos de feedback e validação técnica.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-engverse-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
  }, {
    title: "Integração Personalizada",
    description: "Soluções modulares que se adaptam ao seu ambiente tecnológico existente (BIM, CAD, IoT).",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-engverse-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
  }];
  return <section id="diferenciais" className="py-24 bg-[#151E2C]">
      <div className="container mx-auto px-4">
        <div className="mb-16 relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm mb-4 border border-white/10">
              <span className="text-sm font-medium text-gray-300">Por que Escolher EngVerse</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Nossos diferenciais</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              O que nos destaca no mercado de tecnologia imersiva para engenharia 
              e por que as maiores empresas confiam em nossas soluções.
            </p>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience column */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-engverse-blue/20 to-engverse-purple/20 rounded-2xl overflow-hidden relative border border-white/10 p-8 h-full">
              <div className="relative z-10 h-full flex flex-col">
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">+12 anos</h3>
                <div>
                  <p className="text-xl text-white mb-8 font-medium">
                    de experiência combinada em engenharia e transformação digital
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["Engenharia Civil", "Infraestrutura", "Indústria", "Mineração", "Geologia"].map(item => <span key={item} className="inline-block bg-white/10 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full hover:bg-white/20 transition-colors">
                        {item}
                      </span>)}
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-engverse-blue/30 rounded-full filter blur-3xl -z-10"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-engverse-purple/30 rounded-full filter blur-3xl -z-10"></div>
              </div>
            </div>
          </div>
          
          {/* Differentials grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {differentials.map((item, index) => <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:border-white/20 transition-all">
                  <div className="bg-white/10 w-12 h-12 rounded-xl mb-5 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default DifferentialsSection;