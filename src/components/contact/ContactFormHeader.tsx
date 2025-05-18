
import React from 'react';

const ContactFormHeader = () => {
  return (
    <div className="p-8 md:p-12 bg-gradient-to-br from-engverse-blue/20 to-engverse-purple/20">
      <h3 className="text-2xl font-bold text-white mb-6">Solicite uma demonstração</h3>
      <p className="text-gray-300 mb-6">
        Nossa equipe de especialistas vai entrar em contato para entender suas
        necessidades e apresentar as melhores soluções para o seu negócio.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
          <h4 className="text-lg font-medium text-white mb-1">98%</h4>
          <p className="text-xs text-gray-400">Satisfação dos clientes</p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
          <h4 className="text-lg font-medium text-white mb-1">24h</h4>
          <p className="text-xs text-gray-400">Tempo médio de resposta</p>
        </div>
      </div>
    </div>
  );
};

export default ContactFormHeader;
