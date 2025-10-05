'use client'

interface StatsCardProps {
  label: string
  value: string
  icon: string
  color: string
}

export default function StatsCard({ label, value, icon, color }: StatsCardProps) {
  return (
    <div className="glass p-6 rounded-2xl hover-glow animate-slide-up">
      <div className="flex items-center justify-between mb-4">
        <div className={`text-4xl p-3 rounded-xl ${color}`}>
          {icon}
        </div>
      </div>
      <h3 className="text-3xl font-bold text-white mb-2 font-poppins">{value}</h3>
      <p className="text-text-secondary font-medium">{label}</p>
    </div>
  )
}
