import { ChevronDown } from "lucide-react";
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
    <section 
      id="faq" 
      className="py-24 relative overflow-hidden" 
      style={{ background: '#0B0B0B' }}
      aria-labelledby="faq-heading"
    >
      {/* Subtle orange glow accents - no filter:blur for performance */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div 
          className="absolute top-[30%] right-[10%] w-[350px] h-[350px]"
          style={{
            background: 'radial-gradient(circle, hsl(30 100% 50% / 0.06) 0%, hsl(30 100% 50% / 0.01) 40%, transparent 70%)',
          }}
        />
        <div 
          className="absolute bottom-[20%] left-[5%] w-[300px] h-[300px]"
          style={{
            background: 'radial-gradient(circle, hsl(25 90% 50% / 0.08) 0%, hsl(25 90% 50% / 0.02) 40%, transparent 70%)',
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <header className="text-center mb-16">
          <span 
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium tracking-widest uppercase mb-4"
            style={{
              background: 'hsl(30 70% 50% / 0.1)',
              color: 'hsl(30 85% 65%)', /* Improved contrast */
              border: '1px solid hsl(30 60% 50% / 0.2)',
            }}
          >
            FAQ
          </span>
          <h2 
            id="faq-heading"
            className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-white"
          >
            Perguntas{' '}
            <span 
              style={{
                background: 'linear-gradient(135deg, hsl(30 95% 55%) 0%, hsl(35 100% 60%) 50%, hsl(25 90% 50%) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              frequentes
            </span>
          </h2>
          <p style={{ color: 'hsl(0 0% 70%)' }} className="max-w-2xl mx-auto text-lg">
            Tire suas dúvidas sobre nossos serviços e processo de trabalho.
          </p>
        </header>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="px-6 rounded-xl overflow-hidden"
                style={{
                  background: 'hsl(0 0% 6%)',
                  border: '1px solid hsl(0 0% 18%)', /* Improved border contrast */
                }}
              >
                <AccordionTrigger className="text-left text-white hover:text-orange-400 hover:no-underline py-6 text-lg group">
                  <span className="flex-1">{faq.question}</span>
                  <ChevronDown 
                    className="h-5 w-5 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" 
                    style={{ color: 'hsl(30 80% 55%)' }}
                    aria-hidden="true"
                  />
                </AccordionTrigger>
                <AccordionContent 
                  className="pb-6 leading-relaxed"
                  style={{ color: 'hsl(0 0% 75%)' }} /* Improved contrast from 60% */
                >
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
