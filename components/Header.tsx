'use client'

import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

interface HeaderProps {
  title?: string
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className="w-full max-w-7xl mx-auto p-4 mb-8">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white font-poppins hover:text-primary transition-colors">
          📅 Agendamento
        </Link>
        
        <nav className="flex items-center gap-6">
          <Link href="/agendamento" className="text-white hover:text-primary transition-colors font-medium">
            Agendamento
          </Link>
          <Link href="/dashboard" className="text-white hover:text-primary transition-colors font-medium">
            Dashboard
          </Link>
          <Link href="/configuracoes" className="text-white hover:text-primary transition-colors font-medium">
            Configurações
          </Link>
          <ThemeToggle />
        </nav>
      </div>
      
      {title && (
        <h2 className="text-center text-3xl font-bold text-white mt-8 font-poppins">
          {title}
        </h2>
      )}
    </header>
  )
}
