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

export async function GET() {
  try {
    const vestidos = await prisma.roupas.findMany();
    return NextResponse.json(vestidos);
  } catch (error) {
    console.error('Erro ao buscar vestidos:', error);
    return NextResponse.json({ error: 'Erro ao buscar vestidos' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const { id } = await request.json();

  try {
    await prisma.roupas.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Vestido deletado com sucesso' });
  } catch (error) {
    console.error('Erro ao deletar vestido:', error);
    return NextResponse.json({ error: 'Erro ao deletar vestido' }, { status: 500 });
  }
}


export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const body = await request.json();
  const id = Number(params.id);

  try {
    const vestido = await prisma.roupas.update({
      where: { id },
      data: body,
    });

    return NextResponse.json(vestido);
  } catch (error) {
    console.error('Erro ao atualizar vestido:', error);
    return NextResponse.json({ error: 'Erro ao atualizar vestido' }, { status: 500 });
  }
}