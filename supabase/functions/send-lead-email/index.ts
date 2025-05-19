
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { SmtpClient } from "https://deno.land/x/smtp@v0.7.0/mod.ts";

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
    
    // Verificar credenciais SMTP
    const smtpUsername = Deno.env.get('SMTP_USERNAME');
    const smtpPassword = Deno.env.get('SMTP_PASSWORD');
    
    if (!smtpUsername || !smtpPassword) {
      throw new Error("Credenciais SMTP não configuradas");
    }
    
    // Configure SMTP client
    const client = new SmtpClient();
    
    try {
      console.log("Conectando ao servidor SMTP...");
      await client.connect({
        hostname: "smtp.hostinger.com",
        port: 587,
        username: smtpUsername,
        password: smtpPassword,
        tls: true,
      });
      
      console.log("Conexão SMTP estabelecida");
      
      // Format message content
      const formattedMessage = `
        Nome: ${name}
        Email: ${email}
        Empresa: ${company}
        Telefone: ${phone}
        Interesse: ${interest}
        Mensagem: ${message || "Não informada"}
      `;
      
      console.log("Enviando e-mail...");
      
      // Send email
      const sendResult = await client.send({
        from: "comercial@engverse.com.br",
        to: "comercial@engverse.com.br",
        subject: `Novo Lead - ${company}`,
        content: formattedMessage,
      });
      
      console.log("Resultado do envio:", sendResult);
      
      await client.close();
      
      console.log("Email enviado com sucesso para comercial@engverse.com.br");
      
      return new Response(JSON.stringify({ success: true }), {
        headers: { "Content-Type": "application/json", ...corsHeaders },
        status: 200,
      });
    } catch (smtpError) {
      console.error("Erro de SMTP:", smtpError);
      
      // Tentar fechar o cliente SMTP em caso de erro
      try {
        await client.close();
      } catch (closeError) {
        console.error("Erro ao fechar cliente SMTP:", closeError);
      }
      
      throw new Error(`Erro de SMTP: ${smtpError.message}`);
    }
    
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { "Content-Type": "application/json", ...corsHeaders },
      status: 500,
    });
  }
};

serve(handler);
