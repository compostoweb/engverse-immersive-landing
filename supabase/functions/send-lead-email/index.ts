
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
  name: string;
  email: string;
  company: string;
  phone: string;
  interest: string;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Iniciando processamento de e-mail");
    const { name, email, company, phone, interest, message }: EmailRequest = await req.json();
    
    console.log("Dados recebidos:", { name, email, company, phone, interest });
    
    // Format message content
    const formattedMessage = `
      Nome: ${name}
      Email: ${email}
      Empresa: ${company}
      Telefone: ${phone}
      Interesse: ${interest}
      Mensagem: ${message || "Não informada"}
    `;
    
    // Use Resend API key
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    
    if (!resendApiKey) {
      throw new Error("Credenciais da API Resend não configuradas");
    }

    console.log("Enviando e-mail via Resend API...");
    
    // Using Resend API
    const emailData = {
      from: "Engverse Site <no-reply@engverse.com.br>",
      to: ["comercial@engverse.com.br"],
      reply_to: ${email},
      subject: `Novo Lead - ${company}`,
      text: formattedMessage,
    };
    
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData)
    });
    
    const responseData = await response.json();
    
    if (!response.ok) {
      console.error("Erro na API de e-mail:", response.status, responseData);
      throw new Error(`Erro ao enviar e-mail: ${response.status} - ${JSON.stringify(responseData)}`);
    }
    
    console.log("Email enviado com sucesso:", responseData);
    
    return new Response(JSON.stringify({ success: true, message: "E-mail enviado com sucesso", data: responseData }), {
      headers: { "Content-Type": "application/json", ...corsHeaders },
      status: 200,
    });
    
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { "Content-Type": "application/json", ...corsHeaders },
      status: 500,
    });
  }
};

serve(handler);
