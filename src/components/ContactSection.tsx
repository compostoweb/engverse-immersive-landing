
import React from 'react';
import ContactHeader from './contact/ContactHeader';
import ContactInfo from './contact/ContactInfo';
import ContactForm from './contact/ContactForm';

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 bg-[#151E2C]">
      <div className="container mx-auto px-4">
        <ContactHeader />
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
