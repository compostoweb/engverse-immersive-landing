
import React from 'react';

const ContactHeader = () => {
  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm mb-4 border border-white/10">
        <span className="text-sm font-medium text-gray-300">Contato</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Transforme seus projetos</h2>
      <p className="text-gray-400 max-w-3xl mx-auto text-left">
        Entre em contato para uma demonstração personalizada e descubra como podemos
        elevar seus projetos de engenharia ao próximo nível.
      </p>
    </div>
  );
};

export default ContactHeader;
