
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
      console.error("Erro ao salvar lead:", error);
      return false;
    }
    
    return true;
  } catch (error) {
    console.error("Exceção ao salvar lead:", error);
    return false;
  }
};

export const sendLeadEmail = async (data: FormValues) => {
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
      console.error("Erro ao enviar e-mail:", error);
      return false;
    }
    
    return true;
  } catch (error) {
    console.error("Exceção ao enviar e-mail:", error);
    return false;
  }
};
