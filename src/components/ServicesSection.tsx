import React from 'react';
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
  accentColor: string;
}
const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  imageUrl,
  accentColor
}) => <div className="group relative overflow-hidden bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500">
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
    background: `linear-gradient(to right, ${accentColor}10, transparent)`
  }}></div>
    
    <div className="p-6 relative z-10 h-full flex flex-col">
      <div className={`h-12 w-12 rounded-xl flex items-center justify-center mb-5`} style={{
      background: `${accentColor}20`
    }}>
        {icon}
      </div>
      
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400 text-sm flex-grow">{description}</p>
      
      <div className="mt-6 pt-4 border-t border-white/10">
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">01 Serviço</span> 
          <a href="#contato" className="text-sm font-medium text-white flex items-center gap-1 group-hover:underline">
            Saiba mais
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>;
const ServicesSection = () => {
  const services = [{
    title: "Modelagem e Simulação 3D",
    description: "Ambientes virtuais para prototipagem, testes e validação de projetos sem desperdício de recursos.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-engverse-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
        </svg>,
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    accentColor: "#FF6B2B"
  }, {
    title: "Treinamento e Capacitação",
    description: "Plataformas imersivas para capacitar equipes de campo em procedimentos técnicos com redução de riscos.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-engverse-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>,
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    accentColor: "#0046BE"
  }, {
    title: "Suporte Remoto & Assistência",
    description: "Ferramentas de RA/RM que permitem especialistas orientarem equipes em tempo real, otimizando custos e tempo.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-engverse-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>,
    imageUrl: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    accentColor: "#8B5CF6"
  }, {
    title: "Visualização de Infraestrutura",
    description: "Sobreposição de modelos digitais em canteiros e plantas para inspeções e planejamento eficientes.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-engverse-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>,
    imageUrl: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b",
    accentColor: "#FF6B2B"
  }];
  return <section id="serviços" className="py-24 bg-[#0F172A]">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm mb-4 border border-white/10">
            <span className="text-sm font-medium text-gray-300">Soluções Imersivas</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Tecnologias para engenharia do futuro</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-left">
            Experimente o poder transformador das tecnologias imersivas aplicadas 
            aos desafios complexos da engenharia moderna.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} imageUrl={service.imageUrl} accentColor={service.accentColor} />)}
        </div>
      </div>
    </section>;
};
export default ServicesSection;