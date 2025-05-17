import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/prisma/prismaClient';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || user.password !== password) {
      return NextResponse.json({ error: 'Usuário ou senha inválidos' }, { status: 401 });
    }

    return NextResponse.json({ message: 'Login bem-sucedido', user }, { status: 200 });
  } catch (error) {
    console.error('Erro ao realizar login:', error);
    return NextResponse.json({ error: 'Erro ao realizar login' }, { status: 500 });
  }
}