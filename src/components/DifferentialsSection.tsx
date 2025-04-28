
import React from 'react';

const DifferentialsSection = () => {
  const differentials = [
    {
      title: "Foco em Engenharia",
      description: "Expertise aplicada a projetos de construção civil, infraestrutura, indústria, mineração e geologia.",
      iconClass: "bg-blue-100"
    },
    {
      title: "Equipe Sênior",
      description: "Profissionais com mais de 12 anos de mercado em engenharia, design e desenvolvimento de software imersivo.",
      iconClass: "bg-purple-100"
    },
    {
      title: "Entrega Ágil",
      description: "Metodologia iterativa de desenvolvimento, com ciclos rápidos de feedback e validação técnica.",
      iconClass: "bg-green-100"
    },
    {
      title: "Integração Personalizada",
      description: "Soluções modulares que se adaptam ao seu ambiente tecnológico existente (BIM, CAD, IoT).",
      iconClass: "bg-amber-100"
    }
  ];

  return (
    <section id="diferenciais" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Diferenciais</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            O que nos destaca no mercado de tecnologia imersiva para engenharia
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="ar-overlay rounded-xl overflow-hidden relative">
            <div 
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-engverse-dark/90 to-engverse-purple/70" />
            </div>
            <div className="relative z-10 p-8 md:p-12 h-full">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">+12 anos</h3>
              <p className="text-lg text-gray-200 mb-4">
                de experiência combinada em engenharia e transformação digital
              </p>
              <div className="mt-auto pt-4 flex flex-wrap gap-3">
                {["Engenharia Civil", "Infraestrutura", "Indústria", "Mineração", "Geologia"].map((item) => (
                  <span 
                    key={item} 
                    className="inline-block bg-white/10 text-white text-sm px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {differentials.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 card-shadow flex flex-col">
                <div className={`${item.iconClass} w-12 h-12 rounded-lg mb-4 flex items-center justify-center`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-engverse-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-engverse-dark">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
