import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/prisma/prismaClient';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const nome = searchParams.get('nome');

  try {
    const vestidos = await prisma.roupas.findMany({
      where: {
        nome: {
          contains: nome ?? '',
        },
      },
    });

    return NextResponse.json(vestidos);
  } catch (error) {
    console.error('Erro ao buscar vestidos por nome:', error);
    return NextResponse.json({ error: 'Erro no servidor' }, { status: 500 });
  }
}