
import React from 'react';
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";

import ContactFormHeader from './ContactFormHeader';
import ContactFormInputs from './ContactFormInputs';
import ContactFormSubmitButton from './ContactFormSubmitButton';
import { saveLeadToDatabase, sendLeadEmail, FormValues } from './ContactFormService';

const formSchema = z.object({
  name: z.string().min(3, { message: "Nome deve ter pelo menos 3 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  company: z.string().min(2, { message: "Empresa deve ter pelo menos 2 caracteres" }),
  phone: z.string().min(14, { message: "Telefone inválido" }),
  interest: z.string(),
  message: z.string().optional(),
});

const ContactForm = () => {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      interest: "Modelagem e Simulação 3D",
      message: "",
    },
  });
  
  const isSubmitting = form.formState.isSubmitting;

  const formatPhoneNumber = (value: string) => {
    const numericValue = value.replace(/\D/g, '');
    if (numericValue.length <= 11) {
      let formattedValue = numericValue;
      if (numericValue.length > 2) {
        formattedValue = `(${numericValue.slice(0, 2)}) ${numericValue.slice(2)}`;
      }
      if (numericValue.length > 7) {
        formattedValue = `(${numericValue.slice(0, 2)}) ${numericValue.slice(2, 7)}-${numericValue.slice(7)}`;
      }
      return formattedValue;
    }
    return value;
  };

  const onSubmit = async (data: FormValues) => {
    console.log("Formulário enviado:", data);
    
    try {
      // Primeiro salva no banco de dados
      const dbResult = await saveLeadToDatabase(data);
      
      // Se salvar falhar, mostra um erro
      if (!dbResult.success) {
        console.error("Erro ao salvar no banco de dados:", dbResult.error);
        toast({
          title: "Erro ao enviar mensagem",
          description: "Houve um problema ao salvar seus dados. Por favor, tente novamente mais tarde.",
          variant: "destructive"
        });
        return;
      }
      
      console.log("Dados salvos, enviando e-mail...");
      
      // Então tenta enviar o e-mail
      const emailResult = await sendLeadEmail(data);
      
      if (!emailResult.success) {
        console.warn("Falha ao enviar email, mas dados foram salvos no banco:", emailResult.error);
        toast({
          title: "Mensagem recebida!",
          description: "Seus dados foram salvos, mas pode haver um atraso na resposta por e-mail. Entraremos em contato em breve.",
          variant: "default"
        });
      } else {
        console.log("E-mail enviado com sucesso:", emailResult.data);
        toast({
          title: "Mensagem enviada!",
          description: "Obrigado por entrar em contato. Retornaremos em breve."
        });
      }
      
      form.reset();
    } catch (err) {
      console.error("Erro ao processar envio:", err);
      toast({
        title: "Erro ao enviar mensagem",
        description: "Houve um problema ao enviar sua mensagem. Tente novamente mais tarde.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
      <div className="grid md:grid-cols-2">
        <ContactFormHeader />
        
        <div className="p-8 md:p-12">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <ContactFormInputs form={form} formatPhoneNumber={formatPhoneNumber} />
              <ContactFormSubmitButton isSubmitting={isSubmitting} />
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
