
import React from 'react';
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(3, { message: "Nome deve ter pelo menos 3 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  company: z.string().min(2, { message: "Empresa deve ter pelo menos 2 caracteres" }),
  phone: z.string().min(14, { message: "Telefone inválido" }),
  interest: z.string(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface ContactFormInputsProps {
  form: UseFormReturn<FormValues>;
  formatPhoneNumber: (value: string) => string;
}

const ContactFormInputs = ({ form, formatPhoneNumber }: ContactFormInputsProps) => {
  return (
    <>
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
    </>
  );
};

export default ContactFormInputs;
