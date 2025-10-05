'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import ThemeToggle from '@/components/ThemeToggle'

export default function ConfiguracoesPage() {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    location: '',
  })

  const [apiConfig, setApiConfig] = useState({
    googleEnabled: false,
    outlookEnabled: false,
    icloudEnabled: false,
  })

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Perfil atualizado:', profile)
  }

  return (
    <div className="min-h-screen gradient-bg">
      <Header title="Configurações" />
      
      <div className="max-w-4xl mx-auto p-4 space-y-8">
        {/* Tema */}
        <div className="glass p-6 rounded-3xl animate-slide-up">
          <h2 className="text-2xl font-bold text-white mb-4 font-poppins">Aparência</h2>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white font-medium">Tema</p>
              <p className="text-text-secondary text-sm">Alterne entre modo claro e escuro</p>
            </div>
            <ThemeToggle />
          </div>
        </div>

        {/* Integrações de API */}
        <div className="glass p-6 rounded-3xl animate-slide-up">
          <h2 className="text-2xl font-bold text-white mb-4 font-poppins">Integrações de Calendário</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📅</span>
                <div>
                  <p className="text-white font-medium">Google Calendar API</p>
                  <p className="text-text-secondary text-sm">Sincronize com Google Calendar</p>
                </div>
              </div>
              <button
                onClick={() => setApiConfig({ ...apiConfig, googleEnabled: !apiConfig.googleEnabled })}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  apiConfig.googleEnabled
                    ? 'bg-accent-green text-white'
                    : 'bg-gray-600 text-gray-300'
                }`}
              >
                {apiConfig.googleEnabled ? 'Ativado' : 'Desativado'}
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📧</span>
                <div>
                  <p className="text-white font-medium">Outlook API</p>
                  <p className="text-text-secondary text-sm">Sincronize com Outlook Calendar</p>
                </div>
              </div>
              <button
                onClick={() => setApiConfig({ ...apiConfig, outlookEnabled: !apiConfig.outlookEnabled })}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  apiConfig.outlookEnabled
                    ? 'bg-accent-green text-white'
                    : 'bg-gray-600 text-gray-300'
                }`}
              >
                {apiConfig.outlookEnabled ? 'Ativado' : 'Desativado'}
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
              <div className="flex items-center gap-3">
                <span className="text-2xl">☁️</span>
                <div>
                  <p className="text-white font-medium">iCloud API</p>
                  <p className="text-text-secondary text-sm">Sincronize com iCloud Calendar</p>
                </div>
              </div>
              <button
                onClick={() => setApiConfig({ ...apiConfig, icloudEnabled: !apiConfig.icloudEnabled })}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  apiConfig.icloudEnabled
                    ? 'bg-accent-green text-white'
                    : 'bg-gray-600 text-gray-300'
                }`}
              >
                {apiConfig.icloudEnabled ? 'Ativado' : 'Desativado'}
              </button>
            </div>
          </div>
        </div>

        {/* Perfil do Usuário */}
        <div className="glass p-6 rounded-3xl animate-slide-up">
          <h2 className="text-2xl font-bold text-white mb-4 font-poppins">Perfil do Usuário</h2>
          <form onSubmit={handleProfileSubmit} className="space-y-4">
            <div>
              <label className="block text-white mb-2 font-medium">Nome</label>
              <input
                type="text"
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                className="input"
                placeholder="Seu nome completo"
              />
            </div>

            <div>
              <label className="block text-white mb-2 font-medium">Email</label>
              <input
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                className="input"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label className="block text-white mb-2 font-medium">Localização</label>
              <input
                type="text"
                value={profile.location}
                onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                className="input"
                placeholder="Cidade, Estado"
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              Salvar Alterações
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
