
import React from 'react';
import { Mail, Phone, MapPin } from "lucide-react";

interface ContactOptionProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  link?: string;
}

const ContactOption = ({ icon, title, value, link }: ContactOptionProps) => {
  if (link) {
    return (
      <a 
        href={link} 
        className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:bg-white/10 hover:border-white/20 transition-all text-center"
      >
        <div className="w-12 h-12 mx-auto bg-gradient-to-br from-engverse-blue/20 to-engverse-purple/20 rounded-full flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
        <p className="text-gray-400">{value}</p>
      </a>
    );
  }

  return (
    <div 
      className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 text-center"
    >
      <div className="w-12 h-12 mx-auto bg-gradient-to-br from-engverse-blue/20 to-engverse-purple/20 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
      <p className="text-gray-400">{value}</p>
    </div>
  );
};

const ContactInfo = () => {
  const contactOptions = [
    {
      icon: <Mail className="h-5 w-5 text-engverse-orange" />,
      title: "Email",
      value: "comercial@engverse.com.br",
      link: "mailto:comercial@engverse.com.br"
    }, 
    {
      icon: <Phone className="h-5 w-5 text-engverse-blue" />,
      title: "Telefone",
      value: "+55 (31) 98365-4721",
      link: "tel:+5531983654721"
    }, 
    {
      icon: <MapPin className="h-5 w-5 text-engverse-purple" />,
      title: "Endereço",
      value: "Belo Horizonte, MG - Brasil",
      link: undefined
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8 mb-12">
      {contactOptions.map((option, index) => (
        <ContactOption 
          key={index} 
          icon={option.icon} 
          title={option.title} 
          value={option.value} 
          link={option.link}
        />
      ))}
    </div>
  );
};

export default ContactInfo;
