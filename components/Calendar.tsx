'use client'

import { Calendar as BigCalendar, dateFnsLocalizer } from 'react-big-calendar'
import { format, parse, startOfWeek, getDay } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { useState } from 'react'

const locales = {
  'pt-BR': ptBR,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

export default function Calendar() {
  const [events, setEvents] = useState([
    {
      title: 'Consulta Exemplo',
      start: new Date(2025, 9, 10, 10, 0),
      end: new Date(2025, 9, 10, 11, 0),
    },
  ])

  return (
    <div className="h-[500px] bg-white dark:bg-gray-900 rounded-lg p-4">
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        culture="pt-BR"
        messages={{
          next: 'Próximo',
          previous: 'Anterior',
          today: 'Hoje',
          month: 'Mês',
          week: 'Semana',
          day: 'Dia',
          agenda: 'Agenda',
          date: 'Data',
          time: 'Hora',
          event: 'Evento',
        }}
      />
    </div>
  )
}
