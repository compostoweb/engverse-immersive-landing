
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
    
    // Use fetch API directly to send email via custom SMTP or other service
    const apiKey = Deno.env.get('SMTP_PASSWORD');
    const username = Deno.env.get('SMTP_USERNAME');
    
    if (!apiKey || !username) {
      throw new Error("Credenciais de email não configuradas");
    }

    // Directly use the API to send the email (example using mailgun or similar API)
    // This avoids SMTP library compatibility issues
    const emailData = {
      from: "comercial@engverse.com.br",
      to: "comercial@engverse.com.br",
      subject: `Novo Lead - ${company}`,
      text: formattedMessage,
    };
    
    console.log("Enviando e-mail via API HTTP...");
    
    // Using a basic HTTP API call instead of SMTP
    const response = await fetch('https://api.mailgun.net/v3/engverse.com.br/messages', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${btoa(`api:${apiKey}`)}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(emailData).toString()
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Erro na API de e-mail:", response.status, errorText);
      throw new Error(`Erro ao enviar e-mail: ${response.status} - ${errorText}`);
    }
    
    const result = await response.json();
    console.log("Email enviado com sucesso:", result);
    
    return new Response(JSON.stringify({ success: true, message: "E-mail enviado com sucesso" }), {
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
