"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const questions = [
  {
    id: 1,
    question: "Quantos quilos você gostaria de perder?",
    options: ["3–5 kg", "6–10 kg", "11–20 kg", "Mais de 20 kg"],
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
];

interface QuizProps {
  onComplete: () => void;
}

export function Quiz({ onComplete }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];

  function handleSelect(option: string) {
    if (isTransitioning) return;
    setSelectedOption(option);
    setIsTransitioning(true);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
        setSelectedOption(null);
        setIsTransitioning(false);
      } else {
        setShowResult(true);
      }
    }, 600);
  }

  if (showResult) {
    return (
      <section className="flex min-h-svh items-center justify-center bg-background px-4">
        <div className="w-full max-w-lg text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle2 className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-foreground">
            Resultado pronto!
          </h2>
          <p className="mb-8 text-muted-foreground leading-relaxed">
            Encontramos o caminho mais rapido para sua transformacao. Assista ao
            video agora.
          </p>
          <button
            onClick={onComplete}
            className="group inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:brightness-110 active:scale-[0.98]"
          >
            Ver Metodo Agora
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="flex min-h-svh items-center justify-center bg-background px-4">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
            Quiz Rapido
          </p>
          <h1 className="text-balance text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Descubra em 60 segundos por que voce ainda nao conseguiu emagrecer
          </h1>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Responda e veja o metodo mais indicado para acelerar sua
            transformacao
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
            <span>
              Pergunta {currentQuestion + 1} de {questions.length}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div
          key={question.id}
          className="animate-in fade-in slide-in-from-right-4 duration-300"
        >
          <h2 className="mb-5 text-lg font-semibold text-foreground">
            {question.question}
          </h2>

          <div className="flex flex-col gap-3">
            {question.options.map((option) => (
              <button
                key={option}
                onClick={() => handleSelect(option)}
                disabled={isTransitioning}
                className={cn(
                  "flex items-center gap-3 rounded-lg border px-5 py-4 text-left text-sm font-medium transition-all duration-200",
                  selectedOption === option
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border bg-card text-card-foreground hover:border-primary/40 hover:bg-primary/5"
                )}
              >
                <span
                  className={cn(
                    "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-all",
                    selectedOption === option
                      ? "border-primary bg-primary"
                      : "border-muted-foreground/30"
                  )}
                >
                  {selectedOption === option && (
                    <span className="h-2 w-2 rounded-full bg-primary-foreground" />
                  )}
                </span>
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
