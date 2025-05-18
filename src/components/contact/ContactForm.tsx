
import React from 'react';
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

const formSchema = z.object({
  name: z.string().min(3, { message: "Nome deve ter pelo menos 3 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  company: z.string().min(2, { message: "Empresa deve ter pelo menos 2 caracteres" }),
  phone: z.string().min(14, { message: "Telefone inválido" }),
  interest: z.string(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

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

  const saveLeadToDatabase = async (data: FormValues) => {
    try {
      const { error } = await supabase
        .from('leads')
        .insert([
          { 
            name: data.name,
            email: data.email,
            company: data.company,
            phone: data.phone,
            interest: data.interest,
            message: data.message || null
          }
        ]);
      
      if (error) {
        console.error("Error saving lead:", error);
        return false;
      }
      
      return true;
    } catch (error) {
      console.error("Exception while saving lead:", error);
      return false;
    }
  };

  const sendLeadEmail = async (data: FormValues) => {
    try {
      const { error } = await supabase.functions.invoke('send-lead-email', {
        body: {
          name: data.name,
          email: data.email,
          company: data.company,
          phone: data.phone,
          interest: data.interest,
          message: data.message || "",
        }
      });
      
      if (error) {
        console.error("Error sending email:", error);
        return false;
      }
      
      return true;
    } catch (error) {
      console.error("Exception while sending email:", error);
      return false;
    }
  };

  const onSubmit = async (data: FormValues) => {
    // First save to database
    const dbSuccess = await saveLeadToDatabase(data);
    
    // Then try to send email
    let emailSuccess = false;
    if (dbSuccess) {
      emailSuccess = await sendLeadEmail(data);
    }
    
    if (dbSuccess) {
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

    if (!emailSuccess && dbSuccess) {
      console.error("Falha ao enviar email, mas dados foram salvos no banco.");
    }
  };

  return (
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
                    <Select 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="bg-white/10 border-white/10 text-white focus:border-engverse-blue/50">
                          <SelectValue placeholder="Selecione uma área de interesse" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-[#1F2A3C] text-white border-white/10">
                        <SelectItem value="Modelagem e Simulação 3D" className="focus:bg-white/10 focus:text-white">Modelagem e Simulação 3D</SelectItem>
                        <SelectItem value="Treinamento e Capacitação" className="focus:bg-white/10 focus:text-white">Treinamento e Capacitação</SelectItem>
                        <SelectItem value="Suporte Remoto & Assistência" className="focus:bg-white/10 focus:text-white">Suporte Remoto & Assistência</SelectItem>
                        <SelectItem value="Visualização de Infraestrutura" className="focus:bg-white/10 focus:text-white">Visualização de Infraestrutura</SelectItem>
                        <SelectItem value="Outras soluções" className="focus:bg-white/10 focus:text-white">Outras soluções</SelectItem>
                      </SelectContent>
                    </Select>
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
                <Send className="h-4 w-4 ml-2" />
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
