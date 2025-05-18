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
    const { name, email, company, phone, interest, message }: EmailRequest = await req.json();
    
    // Configure SMTP client
    const client = new SmtpClient();
    
    try {
      await client.connect({
        hostname: "smtp.hostinger.com",
        port: 465,
        username: Deno.env.get('SMTP_USERNAME'),
        password: Deno.env.get('SMTP_PASSWORD'),
        ssl: true,
      });
      
      // Format message content
      const formattedMessage = `
        Nome: ${name}
        Email: ${email}
        Empresa: ${company}
        Telefone: ${phone}
        Interesse: ${interest}
        Mensagem: ${message || "Não informada"}
      `;
      
      // Send email
      await client.send({
        from: "comercial@engverse.com.br",
        to: "comercial@engverse.com.br",
        subject: `Novo Lead - ${company}`,
        content: formattedMessage,
      });
      
      await client.close();
      
      console.log("Email enviado com sucesso para comercial@engverse.com.br");
      
      return new Response(JSON.stringify({ success: true }), {
        headers: { "Content-Type": "application/json", ...corsHeaders },
        status: 200,
      });
    } catch (smtpError) {
      console.error("Erro de SMTP:", smtpError);
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
