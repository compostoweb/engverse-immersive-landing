
import React from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

interface ContactFormSubmitButtonProps {
  isSubmitting: boolean;
}

const ContactFormSubmitButton = ({ isSubmitting }: ContactFormSubmitButtonProps) => {
  return (
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
  );
};

export default ContactFormSubmitButton;
