import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Mail, Phone, ArrowRight } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contato" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(270_70%_60%/0.1)_0%,transparent_60%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Contato
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Vamos criar sua <span className="gradient-text">landing page?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Preencha o formulário abaixo ou entre em contato diretamente. Respondemos em até 24 horas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="p-8 rounded-2xl bg-card/50 border border-border backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-6 text-foreground">
              Solicite seu orçamento
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Input
                  name="name"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-background/50 border-border focus:border-primary h-12"
                  required
                />
              </div>
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Seu e-mail"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-background/50 border-border focus:border-primary h-12"
                  required
                />
              </div>
              <div>
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Seu WhatsApp"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-background/50 border-border focus:border-primary h-12"
                  required
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Conte-nos sobre seu projeto..."
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-background/50 border-border focus:border-primary min-h-[120px] resize-none"
                  required
                />
              </div>
              <Button variant="hero" size="lg" className="w-full">
                Enviar mensagem
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Ou fale diretamente conosco
              </h3>
              <p className="text-muted-foreground">
                Prefere conversar diretamente? Entre em contato por um dos canais abaixo.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl bg-card/50 border border-border hover:border-green-500/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                  <MessageCircle className="text-green-500" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-foreground">WhatsApp</div>
                  <div className="text-sm text-muted-foreground">(11) 99999-9999</div>
                </div>
              </a>

              <a
                href="mailto:contato@digitalpro.com.br"
                className="flex items-center gap-4 p-5 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-foreground">E-mail</div>
                  <div className="text-sm text-muted-foreground">contato@digitalpro.com.br</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 rounded-xl bg-card/50 border border-border">
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <Phone className="text-secondary" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Telefone</div>
                  <div className="text-sm text-muted-foreground">(11) 3333-3333</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
