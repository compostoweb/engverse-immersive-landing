import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Send } from "lucide-react";
const ContactSection = () => {
  const {
    toast
  } = useToast();
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
    const {
      name,
      value
    } = e.target;
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
  const contactOptions = [{
    icon: <Mail className="h-5 w-5 text-engverse-orange" />,
    title: "Email",
    value: "comercial@engverse.com.br",
    link: "mailto:comercial@engverse.com.br"
  }, {
    icon: <Phone className="h-5 w-5 text-engverse-blue" />,
    title: "Telefone",
    value: "+55 (31) 98365-4721",
    link: "tel:+5531983654721"
  }, {
    icon: <MapPin className="h-5 w-5 text-engverse-purple" />,
    title: "Endereço",
    value: "Belo Horizonte, MG - Brasil",
    
  }];
  return <section id="contato" className="py-24 bg-[#151E2C]">
      <div className="container mx-auto px-4">
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
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactOptions.map((option, index) => <a key={index} href={option.link} className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:bg-white/10 hover:border-white/20 transition-all text-center">
              <div className="w-12 h-12 mx-auto bg-gradient-to-br from-engverse-blue/20 to-engverse-purple/20 rounded-full flex items-center justify-center mb-4">
                {option.icon}
              </div>
              <h3 className="text-lg font-medium text-white mb-2">{option.title}</h3>
              <p className="text-gray-400">{option.value}</p>
            </a>)}
        </div>
        
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
          <div className="grid md:grid-cols-2">
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
            
            <div className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Nome completo</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-gray-500 focus:border-engverse-blue/50 focus:outline-none focus:ring-1 focus:ring-engverse-blue/50" placeholder="Seu nome" required />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email profissional</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-gray-500 focus:border-engverse-blue/50 focus:outline-none focus:ring-1 focus:ring-engverse-blue/50" placeholder="seu@email.com" required />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">Empresa</label>
                    <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-gray-500 focus:border-engverse-blue/50 focus:outline-none focus:ring-1 focus:ring-engverse-blue/50" placeholder="Nome da empresa" required />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Telefone</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-gray-500 focus:border-engverse-blue/50 focus:outline-none focus:ring-1 focus:ring-engverse-blue/50" placeholder="(XX) XXXXX-XXXX" required />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-300 mb-2">Área de interesse</label>
                  <select id="interest" name="interest" value={formData.interest} onChange={handleChange} className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:border-engverse-blue/50 focus:outline-none focus:ring-1 focus:ring-engverse-blue/50">
                    <option value="Modelagem e Simulação 3D">Modelagem e Simulação 3D</option>
                    <option value="Treinamento e Capacitação">Treinamento e Capacitação</option>
                    <option value="Suporte Remoto & Assistência">Suporte Remoto & Assistência</option>
                    <option value="Visualização de Infraestrutura">Visualização de Infraestrutura</option>
                    <option value="Outras soluções">Outras soluções</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Mensagem</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-gray-500 focus:border-engverse-blue/50 focus:outline-none focus:ring-1 focus:ring-engverse-blue/50" placeholder="Descreva sua necessidade..."></textarea>
                </div>
                
                <button type="submit" disabled={isSubmitting} className={cn("flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-engverse-orange to-engverse-orange rounded-lg text-white font-medium hover:shadow-lg transition-all", isSubmitting && "opacity-70 cursor-not-allowed")}>
                  {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;