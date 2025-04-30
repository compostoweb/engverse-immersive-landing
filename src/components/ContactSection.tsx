
import React from 'react';
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(3, { message: "Nome deve ter pelo menos 3 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  company: z.string().min(2, { message: "Empresa deve ter pelo menos 2 caracteres" }),
  phone: z.string().min(14, { message: "Telefone inválido" }),
  interest: z.string(),
  message: z.string().optional(),
});

const ContactSection = () => {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
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

  const sendEmail = async (data: z.infer<typeof formSchema>) => {
    try {
      // In a real implementation, you would use an email service API here
      // This is a simulation of sending the email
      console.log("Sending email to: comercial@engverse.com.br");
      console.log("Form data:", data);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Email sent successfully
      return true;
    } catch (error) {
      console.error("Error sending email:", error);
      return false;
    }
  };

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const success = await sendEmail(data);
    
    if (success) {
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado por entrar em contato. Retornaremos em breve."
      });
      form.reset();
    } else {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Houve um problema ao enviar sua mensagem. Tente novamente mais tarde.",
        variant: "destructive"
      });
    }
  };

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
    <section id="contato" className="py-24 bg-[#151E2C]">
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
          {contactOptions.map((option, index) => (
            option.link ? (
              <a 
                key={index} 
                href={option.link} 
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:bg-white/10 hover:border-white/20 transition-all text-center"
              >
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-engverse-blue/20 to-engverse-purple/20 rounded-full flex items-center justify-center mb-4">
                  {option.icon}
                </div>
                <h3 className="text-lg font-medium text-white mb-2">{option.title}</h3>
                <p className="text-gray-400">{option.value}</p>
              </a>
            ) : (
              <div 
                key={index} 
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 text-center"
              >
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-engverse-blue/20 to-engverse-purple/20 rounded-full flex items-center justify-center mb-4">
                  {option.icon}
                </div>
                <h3 className="text-lg font-medium text-white mb-2">{option.title}</h3>
                <p className="text-gray-400">{option.value}</p>
              </div>
            )
          ))}
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
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300">Nome completo</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Seu nome" 
                              className="bg-white/10 border-white/10 text-white placeholder:text-gray-500 focus:border-engverse-blue/50"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300">Email profissional</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="seu@email.com" 
                              className="bg-white/10 border-white/10 text-white placeholder:text-gray-500 focus:border-engverse-blue/50"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300">Empresa</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Nome da empresa" 
                              className="bg-white/10 border-white/10 text-white placeholder:text-gray-500 focus:border-engverse-blue/50"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300">Telefone</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="(XX) XXXXX-XXXX" 
                              className="bg-white/10 border-white/10 text-white placeholder:text-gray-500 focus:border-engverse-blue/50"
                              {...field}
                              onChange={(e) => {
                                field.onChange(formatPhoneNumber(e.target.value));
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="interest"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Área de interesse</FormLabel>
                        <FormControl>
                          <select 
                            className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:border-engverse-blue/50 focus:outline-none focus:ring-1 focus:ring-engverse-blue/50"
                            {...field}
                          >
                            <option value="Modelagem e Simulação 3D">Modelagem e Simulação 3D</option>
                            <option value="Treinamento e Capacitação">Treinamento e Capacitação</option>
                            <option value="Suporte Remoto & Assistência">Suporte Remoto & Assistência</option>
                            <option value="Visualização de Infraestrutura">Visualização de Infraestrutura</option>
                            <option value="Outras soluções">Outras soluções</option>
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Mensagem</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Descreva sua necessidade..." 
                            rows={4}
                            className="bg-white/10 border-white/10 text-white placeholder:text-gray-500 focus:border-engverse-blue/50"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={cn(
                      "w-full px-6 py-3 bg-gradient-to-r from-engverse-orange to-engverse-orange rounded-lg text-white font-medium hover:shadow-lg transition-all", 
                      isSubmitting && "opacity-70 cursor-not-allowed"
                    )}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
