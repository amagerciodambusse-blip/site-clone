"use client"

import { useState } from "react"
import { Quiz } from "@/components/quiz"
import { QuizResult } from "@/components/quiz-result"
import { VslPage } from "@/components/vsl-page"

type Step = "quiz" | "result" | "vsl"

export default function Home() {
  const [step, setStep] = useState<Step>("quiz")

  return (
    <main className="min-h-dvh">
      {step === "quiz" && <Quiz onComplete={() => setStep("result")} />}
      {step === "result" && (
        <QuizResult onContinue={() => setStep("vsl")} />
      )}
      {step === "vsl" && <VslPage />}
    </main>
  )
}
