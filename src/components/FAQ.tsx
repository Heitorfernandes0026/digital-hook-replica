import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Quanto tempo leva para entregar uma landing page?",
      answer: "Em média, entregamos landing pages completas em 7 dias úteis. Projetos mais complexos, como sites com múltiplas páginas, podem levar de 14 a 21 dias. Sempre definimos prazos claros no início do projeto.",
    },
    {
      question: "Qual o investimento para uma landing page?",
      answer: "O investimento varia de acordo com a complexidade do projeto. Landing pages simples começam em R$ 2.500, enquanto projetos mais robustos podem chegar a R$ 10.000 ou mais. Elaboramos orçamentos personalizados após entender suas necessidades.",
    },
    {
      question: "Vocês fazem manutenção e atualizações?",
      answer: "Sim! Oferecemos planos de manutenção mensal que incluem atualizações de conteúdo, correções técnicas e pequenos ajustes. Também realizamos atualizações pontuais sob demanda.",
    },
    {
      question: "A página ficará hospedada onde?",
      answer: "Trabalhamos com servidores de alta performance para garantir velocidade e estabilidade. Podemos hospedar em nossa infraestrutura ou na sua, conforme sua preferência.",
    },
    {
      question: "Vocês integram com outras ferramentas?",
      answer: "Sim, fazemos integração com as principais ferramentas do mercado: Google Analytics, Facebook Pixel, RD Station, Mailchimp, ActiveCampaign, WhatsApp Business API, sistemas de pagamento e muito mais.",
    },
    {
      question: "E se eu não gostar do resultado?",
      answer: "Trabalhamos com rodadas de revisão para garantir sua satisfação. Se após as revisões você ainda não estiver satisfeito, oferecemos garantia de 30 dias com reembolso integral.",
    },
  ];

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-1/4 left-1/4 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,hsl(217_91%_60%/0.08)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-secondary/10 to-transparent rounded-full blur-[80px] animate-flow-3" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Perguntas <span className="gradient-text">frequentes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Tire suas dúvidas sobre nossos serviços e processo de trabalho.
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="px-6 rounded-xl glass border border-border/50 data-[state=open]:border-primary/50 data-[state=open]:shadow-[0_0_30px_hsl(var(--primary)/0.1)] transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-6 text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
