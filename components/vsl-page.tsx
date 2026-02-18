"use client"

import { useEffect, useRef, useState } from "react"
import { Testimonials } from "@/components/testimonials"
import { Faq } from "@/components/faq"

export function VslPage() {
  const [visible, setVisible] = useState(false)
  const scriptLoaded = useRef(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (scriptLoaded.current) return
    scriptLoaded.current = true

    const s = document.createElement("script")
    s.src =
      "https://scripts.converteai.net/26fb0a46-ecd4-452b-9fd2-8d954917a3ef/players/6994743abd1092d42defa996/v4/player.js"
    s.async = true
    document.head.appendChild(s)

    return () => {
      if (s.parentNode) {
        s.parentNode.removeChild(s)
      }
    }
  }, [])

  return (
    <div
      className={`min-h-dvh transition-all duration-700 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* VSL Section */}
      <section className="flex flex-col items-center px-4 pb-12 pt-10 md:pb-16 md:pt-14">
        <div className="w-full max-w-3xl text-center">
          <h1 className="mb-4 text-2xl font-bold leading-tight text-foreground md:text-4xl text-balance">
            O método simples que está ajudando pessoas comuns a reduzir gordura e
            recuperar a autoestima em poucas semanas
          </h1>

          <p className="mb-8 text-sm text-muted-foreground md:mb-10 md:text-lg text-pretty">
            Sem dietas impossíveis, sem treinos extremos — apenas um protocolo
            prático que você pode começar hoje
          </p>

          {/* Vturb Video Embed */}
          <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-card">
            <div
              dangerouslySetInnerHTML={{
                __html: `<vturb-smartplayer id="vid-6994743abd1092d42defa996" style="display: block; margin: 0 auto; width: 100%;"></vturb-smartplayer>`,
              }}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <Faq />

      {/* Footer */}
      <footer className="border-t border-border px-4 py-8 text-center">
        <p className="text-xs text-muted-foreground">
          Este produto não garante a obtenção de resultados. Qualquer referência
          ao desempenho de uma estratégia não deve ser interpretada como uma
          garantia de resultados.
        </p>
      </footer>
    </div>
  )
}
