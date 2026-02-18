"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
  {
    q: "Funciona para homens e mulheres?",
    a: "Sim. O método foi estruturado para qualquer pessoa que queira reduzir gordura corporal.",
  },
  {
    q: "Preciso fazer dieta restrita?",
    a: "Não. O protocolo foca em estratégia prática e sustentável.",
  },
  {
    q: "Preciso treinar pesado?",
    a: "Não. As orientações são adaptáveis à sua rotina.",
  },
  {
    q: "Em quanto tempo vejo resultados?",
    a: "Muitas pessoas relatam mudanças nas primeiras semanas quando aplicam corretamente.",
  },
  {
    q: "Serve para iniciantes?",
    a: "Sim. O material foi feito para quem está começando do zero.",
  },
  {
    q: "Recebo acesso imediato?",
    a: "Sim. O acesso é liberado logo após a confirmação.",
  },
  {
    q: "E se eu não conseguir aplicar?",
    a: "O passo a passo é simples e guiado para facilitar execução.",
  },
]

export function Faq() {
  return (
    <section className="border-t border-border px-4 py-12 md:py-16">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-8 text-center text-xl font-bold text-foreground md:mb-10 md:text-2xl">
          Perguntas Frequentes
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-sm font-medium text-foreground md:text-base">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
