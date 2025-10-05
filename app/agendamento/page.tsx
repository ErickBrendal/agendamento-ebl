'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Calendar from '@/components/Calendar'

export default function AgendamentoPage() {
  const [formData, setFormData] = useState({
    dateTime: '',
    serviceType: '',
    notes: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Agendamento criado:', formData)
    // Aqui você pode adicionar a lógica para salvar o agendamento
  }

  const handleAddToCalendar = (service: string) => {
    const urls = {
      outlook: 'https://outlook.live.com/calendar/',
      google: 'https://calendar.google.com/',
      icloud: 'https://www.icloud.com/calendar/',
    }
    
    window.open(urls[service as keyof typeof urls], '_blank')
  }

  return (
    <div className="min-h-screen gradient-bg">
      <Header title="Agendamento" />
      
      <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Calendário */}
        <div className="glass p-6 rounded-3xl animate-slide-up">
          <h2 className="text-2xl font-bold text-white mb-4 font-poppins">Calendário</h2>
          <Calendar />
        </div>

        {/* Formulário */}
        <div className="glass p-6 rounded-3xl animate-slide-up">
          <h2 className="text-2xl font-bold text-white mb-4 font-poppins">Novo Agendamento</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-white mb-2 font-medium">Data/Hora</label>
              <input
                type="datetime-local"
                value={formData.dateTime}
                onChange={(e) => setFormData({ ...formData, dateTime: e.target.value })}
                className="input"
                required
              />
            </div>

            <div>
              <label className="block text-white mb-2 font-medium">Tipo de Serviço</label>
              <input
                type="text"
                value={formData.serviceType}
                onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                className="input"
                placeholder="Ex: Consulta, Corte de cabelo..."
                required
              />
            </div>

            <div>
              <label className="block text-white mb-2 font-medium">Notas</label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="input min-h-[100px]"
                placeholder="Informações adicionais..."
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              Criar Agendamento
            </button>
          </form>

          <div className="mt-6 space-y-3">
            <p className="text-white font-medium mb-2">Adicionar ao calendário:</p>
            <button
              onClick={() => handleAddToCalendar('outlook')}
              className="btn-secondary w-full"
            >
              📧 Outlook
            </button>
            <button
              onClick={() => handleAddToCalendar('google')}
              className="btn-secondary w-full"
            >
              📅 Google Calendar
            </button>
            <button
              onClick={() => handleAddToCalendar('icloud')}
              className="btn-secondary w-full"
            >
              ☁️ iCloud
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
