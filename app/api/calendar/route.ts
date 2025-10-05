import { NextResponse } from 'next/server'

export async function GET() {
  // Exemplo de rota API para integração com calendários
  return NextResponse.json({
    message: 'API de calendário funcionando',
    calendars: ['Google', 'Outlook', 'iCloud'],
  })
}

export async function POST(request: Request) {
  const body = await request.json()
  
  // Aqui você implementaria a lógica para adicionar eventos aos calendários
  console.log('Novo evento:', body)
  
  return NextResponse.json({
    success: true,
    message: 'Evento adicionado com sucesso',
    data: body,
  })
}
