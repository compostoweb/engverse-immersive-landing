
import { supabase } from "@/integrations/supabase/client";

export interface FormValues {
  name: string;
  email: string;
  company: string;
  phone: string;
  interest: string;
  message?: string;
}

export const saveLeadToDatabase = async (data: FormValues) => {
  try {
    console.log("Tentando salvar lead:", data);
    const { error, data: insertedData } = await supabase
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
      ])
      .select();
    
    if (error) {
      console.error("Erro ao salvar lead:", error);
      return { success: false, error };
    }
    
    console.log("Lead salvo com sucesso:", insertedData);
    return { success: true, data: insertedData };
  } catch (error) {
    console.error("Exceção ao salvar lead:", error);
    return { success: false, error };
  }
};

export const sendLeadEmail = async (data: FormValues) => {
  try {
    console.log("Enviando e-mail para:", data.email);
    const { data: response, error } = await supabase.functions.invoke('send-lead-email', {
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
      console.error("Erro ao chamar função de envio de e-mail:", error);
      return { success: false, error };
    }
    
    console.log("Resposta da função de e-mail:", response);
    return { success: true, data: response };
  } catch (error) {
    console.error("Exceção ao enviar e-mail:", error);
    return { success: false, error };
  }
};
