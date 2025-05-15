import { NextRequest } from 'next/server';
import prisma from '@/app/prisma/prismaClient';

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();

    const newUser = await prisma.user.create({
      data: { name, email, password },
    });

    return new Response(JSON.stringify(newUser), {
      status: 201,
    });
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    return new Response('Erro ao criar usuário', { status: 500 });
  }
}