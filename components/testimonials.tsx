import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Mariana S.",
    text: "Eu já tinha tentado de tudo. Foi a primeira vez que consegui seguir até o fim.",
  },
  {
    name: "Carlos R.",
    text: "Simples, direto e funciona. Comecei a ver diferença na primeira semana.",
  },
  {
    name: "Juliana P.",
    text: "Minha autoestima mudou junto com o meu corpo.",
  },
  {
    name: "Rafael T.",
    text: "Não é complicado — isso fez toda a diferença.",
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4 fill-primary text-primary"
        />
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="border-t border-border px-4 py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-center text-xl font-bold text-foreground md:mb-10 md:text-2xl">
          O que pessoas estão dizendo
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-xl border border-border bg-card p-5"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-semibold text-foreground">
                  {t.name}
                </span>
                <Stars />
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {`"${t.text}"`}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
