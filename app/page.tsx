'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'

export default function Home() {
  const router = useRouter()
  const [selectedBusiness, setSelectedBusiness] = useState('')

  const businessOptions = [
    'Escritório Administrativo',
    'Consultório Médico',
    'Barbearia',
    'Estúdio de Beleza',
  ]

  const handleContinue = () => {
    if (selectedBusiness) {
      router.push('/agendamento')
    }
  }

  return (
    <div className="min-h-screen gradient-bg flex flex-col items-center justify-center p-4">
      <Header title="Configurar Meu Negócio" />
      
      <div className="glass p-8 md:p-12 rounded-3xl max-w-2xl w-full animate-slide-up">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white font-poppins">
          Bem-vindo ao Sistema de Agendamento
        </h1>
        <p className="text-center text-text-secondary mb-8 text-lg">
          Selecione o tipo do seu negócio para começar
        </p>

        <div className="space-y-4 mb-8">
          {businessOptions.map((option) => (
            <button
              key={option}
              onClick={() => setSelectedBusiness(option)}
              className={`w-full p-4 rounded-xl text-left font-medium transition-all duration-300 ${
                selectedBusiness === option
                  ? 'bg-primary text-white hover-glow'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        <button
          onClick={handleContinue}
          disabled={!selectedBusiness}
          className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
            selectedBusiness
              ? 'bg-accent-green text-white hover-glow cursor-pointer'
              : 'bg-gray-600 text-gray-400 cursor-not-allowed'
          }`}
        >
          Continuar →
        </button>
      </div>
    </div>
  )
}
