import React from 'react';
const Footer = () => {
  return <footer className="bg-[#0B111E] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8 pb-12 border-b border-white/10">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-white rounded-xl px-[10px]">
                <img src="/lovable-uploads/310b9c80-f68f-437a-aa08-3bc041e5d8f1.png" alt="EngVerse Logo" className="h-16 w-auto object-contain" />
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 max-w-md">
              Transformando o setor de engenharia através de tecnologias imersivas 
              que elevam a qualidade, segurança e eficiência dos projetos.
            </p>
            <div className="flex space-x-4">
              {["linkedin", "twitter", "facebook", "instagram"].map(social => {})}
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Soluções</h3>
            <ul className="space-y-3">
              {["Modelagem e Simulação 3D", "Treinamento e Capacitação", "Suporte Remoto", "Visualização de Infraestrutura"].map(item => <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                    {item}
                  </a>
                </li>)}
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Setores</h3>
            <ul className="space-y-3">
              {["Engenharia Civil", "Indústria de Base", "Mineração", "Geologia", "Infraestrutura"].map(item => <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                    {item}
                  </a>
                </li>)}
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-engverse-blue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-400 text-sm">Belo Horizonte, MG - Brasil</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-engverse-blue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-400 text-sm">comercial@engverse.com.br</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-engverse-blue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-400 text-sm">+55 (31) 98365-4721</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row center-between items-center gap-4">
          <p className="text-gray-500 text-sm center-between">
            &copy; {new Date().getFullYear()} EngVerse. Todos os direitos reservados.
          </p>
        
        </div>
      </div>
    </footer>;
};
export default Footer;