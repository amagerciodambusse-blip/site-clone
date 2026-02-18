"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const questions = [
  {
    id: 1,
    question: "Quantos quilos você gostaria de perder?",
    options: ["3-5 kg", "6-10 kg", "11-20 kg", "Mais de 20 kg"],
  },
  {
    id: 2,
    question: "Qual é sua maior dificuldade hoje?",
    options: [
      "Não consigo manter dieta",
      "Falta de motivação",
      "Ansiedade / compulsão",
      "Não sei o método certo",
    ],
  },
  {
    id: 3,
    question: "Você já tentou emagrecer antes?",
    options: [
      "Sim, várias vezes",
      "Sim, poucas vezes",
      "Nunca tentei sério",
      "Começo e paro",
    ],
  },
  {
    id: 4,
    question: "Como sua forma física afeta sua autoestima?",
    options: [
      "Afeta muito",
      "Afeta bastante",
      "Um pouco",
      "Quero melhorar mesmo assim",
    ],
  },
  {
    id: 5,
    question:
      "Se existisse um método simples para acelerar seu emagrecimento, você aplicaria?",
    options: [
      "Sim, imediatamente",
      "Sim, se for prático",
      "Talvez",
      "Quero ver provas primeiro",
    ],
  },
]

interface QuizProps {
  onComplete: () => void
}

export function Quiz({ onComplete }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const progress = ((currentQuestion + 1) / questions.length) * 100
  const question = questions[currentQuestion]

  function handleSelect(option: string) {
    if (isTransitioning) return
    setSelectedOption(option)
    setIsTransitioning(true)

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1)
        setSelectedOption(null)
        setIsTransitioning(false)
      } else {
        onComplete()
      }
    }, 600)
  }

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="mb-3 text-2xl font-bold leading-tight text-foreground md:text-3xl text-balance">
            Descubra em 60 segundos por que você ainda não conseguiu emagrecer
          </h1>
          <p className="text-sm text-muted-foreground md:text-base">
            Responda e veja o método mais indicado para acelerar sua
            transformação
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground">
              Pergunta {currentQuestion + 1} de {questions.length}
            </span>
            <span className="text-xs font-medium text-primary">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full bg-primary transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div
          className={cn(
            "transition-all duration-300",
            isTransitioning ? "translate-y-2 opacity-0" : "translate-y-0 opacity-100"
          )}
        >
          <h2 className="mb-6 text-lg font-semibold text-foreground text-balance">
            {question.question}
          </h2>

          <div className="flex flex-col gap-3">
            {question.options.map((option) => (
              <button
                key={option}
                onClick={() => handleSelect(option)}
                disabled={isTransitioning}
                className={cn(
                  "w-full rounded-xl border-2 px-5 py-4 text-left text-sm font-medium transition-all duration-200 md:text-base",
                  selectedOption === option
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border bg-card text-card-foreground hover:border-primary/50 hover:bg-card/80"
                )}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
