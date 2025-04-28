import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { Phone } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    phone: '',
    interest: 'Modelagem e Simulação 3D'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      const numericValue = value.replace(/\D/g, '');
      
      if (numericValue.length <= 11) {
        let formattedValue = numericValue;
        if (numericValue.length > 2) {
          formattedValue = `(${numericValue.slice(0, 2)}) ${numericValue.slice(2)}`;
        }
        if (numericValue.length > 7) {
          formattedValue = `(${numericValue.slice(0, 2)}) ${numericValue.slice(2, 7)}-${numericValue.slice(7)}`;
        }
        
        setFormData(prev => ({
          ...prev,
          [name]: formattedValue
        }));
        return;
      }
      return;
    }

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado por entrar em contato. Retornaremos em breve."
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        phone: '',
        interest: 'Modelagem e Simulação 3D'
      });
    }, 1500);
  };

  return (
    <section id="contato" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Entre em contato</h2>
            <p className="text-lg text-gray-600 mb-8">
              Pronto para transformar seus projetos de engenharia com tecnologias imersivas? Fale com nossos especialistas.
            </p>
            
            <div className="grid gap-6">
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-engverse-light rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-engverse-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <a href="mailto:contato@engverse.com.br" className="text-engverse-blue hover:underline">comercial@engverse.com.br</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-engverse-light rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-engverse-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Telefone</h3>
                  <a href="tel:+551199999999" className="text-engverse-purple hover:underline">+55 (11) 9999-9999</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-semibold mb-6">Solicite uma demonstração</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome completo</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-engverse-blue focus:border-transparent" required />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email profissional</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-engverse-blue focus:border-transparent" required />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Empresa</label>
                  <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-engverse-blue focus:border-transparent" required />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone com DDD</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="(XX) XXXXX-XXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-engverse-blue focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">Área de interesse</label>
                  <select id="interest" name="interest" value={formData.interest} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-engverse-blue focus:border-transparent">
                    <option>Modelagem e Simulação 3D</option>
                    <option>Treinamento e Capacitação</option>
                    <option>Suporte Remoto & Assistência Técnica</option>
                    <option>Visualização de Infraestrutura</option>
                    <option>Outras soluções</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-engverse-blue focus:border-transparent"></textarea>
                </div>
                
                <div>
                  <button type="submit" disabled={isSubmitting} className={cn("w-full button-primary", isSubmitting && "opacity-70 cursor-not-allowed")}>
                    {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
