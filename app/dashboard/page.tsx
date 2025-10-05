'use client'

import Header from '@/components/Header'
import ChartCard from '@/components/ChartCard'
import StatsCard from '@/components/StatsCard'

export default function DashboardPage() {
  const statsData = [
    { label: 'Total de Agendamentos', value: '156', icon: '📅', color: 'bg-primary' },
    { label: 'Cancelamentos', value: '12', icon: '❌', color: 'bg-red-500' },
    { label: 'Confirmações', value: '144', icon: '✅', color: 'bg-accent-green' },
    { label: 'Taxa de Sucesso', value: '92%', icon: '📊', color: 'bg-accent-yellow' },
  ]

  const monthlyData = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [
      {
        label: 'Agendamentos',
        data: [12, 19, 15, 25, 22, 30],
        backgroundColor: 'rgba(99, 102, 241, 0.5)',
        borderColor: 'rgba(99, 102, 241, 1)',
        borderWidth: 2,
      },
    ],
  }

  const serviceData = {
    labels: ['Consultas', 'Cortes', 'Tratamentos', 'Outros'],
    datasets: [
      {
        data: [45, 30, 15, 10],
        backgroundColor: [
          'rgba(99, 102, 241, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(250, 204, 21, 0.8)',
          'rgba(148, 163, 184, 0.8)',
        ],
        borderWidth: 0,
      },
    ],
  }

  return (
    <div className="min-h-screen gradient-bg">
      <Header title="Dashboard de Análise" />
      
      <div className="max-w-7xl mx-auto p-4">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statsData.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ChartCard
            title="Agendamentos por Mês"
            type="bar"
            data={monthlyData}
          />
          <ChartCard
            title="Distribuição por Tipo de Serviço"
            type="pie"
            data={serviceData}
          />
        </div>
      </div>
    </div>
  )
}
