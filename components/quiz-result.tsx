"use client"

import { useEffect, useState } from "react"
import { CheckCircle2 } from "lucide-react"

interface QuizResultProps {
  onContinue: () => void
}

export function QuizResult({ onContinue }: QuizResultProps) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center px-4 py-8">
      <div
        className={`flex max-w-md flex-col items-center text-center transition-all duration-700 ${
          show ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle2 className="h-10 w-10 text-primary" />
        </div>

        <h2 className="mb-3 text-2xl font-bold text-foreground md:text-3xl text-balance">
          Resultado pronto!
        </h2>

        <p className="mb-8 text-muted-foreground text-pretty">
          Encontramos o caminho mais rápido para sua transformação. Assista ao
          vídeo agora.
        </p>

        <button
          onClick={onContinue}
          className="w-full rounded-xl bg-primary px-8 py-4 text-base font-bold text-primary-foreground transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
        >
          Ver Método Agora
        </button>
      </div>
    </div>
  )
}
