
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
    
    await client.connectTLS({
      hostname: "smtp.hostinger.com",
      port: 465,
      username: "comercial@engverse.com.br",
      password: Deno.env.get("SMTP_PASSWORD") || "EngVerse2025#",
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
    
    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json", ...corsHeaders },
      status: 200,
    });
    
  } catch (error) {
    console.error("Email sending error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { "Content-Type": "application/json", ...corsHeaders },
      status: 500,
    });
  }
};

serve(handler);
