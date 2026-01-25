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
      answer: "O investimento varia de acordo com a complexidade do projeto. Landing pages simples começam em R$ 2.500, enquanto projetos mais robustos podem chegar a R$ 10.000 ou mais. Fazemos orçamentos personalizados após entender suas necessidades.",
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
    <section id="faq" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(217_91%_60%/0.08)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Perguntas <span className="gradient-text">frequentes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
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
                className="px-6 rounded-xl bg-card/50 border border-border backdrop-blur-sm data-[state=open]:border-primary/50 transition-all"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
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
