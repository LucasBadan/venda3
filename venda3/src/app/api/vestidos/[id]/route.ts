import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/prisma/prismaClient';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = parseInt(params.id);
    const vestido = await prisma.roupas.findUnique({ where: { id } });

    if (!vestido) {
      return NextResponse.json({ error: 'Vestido não encontrado' }, { status: 404 });
    }

    return NextResponse.json(vestido);
  } catch (error) {
    console.error('Erro ao buscar vestido:', error);
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = parseInt(params.id);
    const body = await request.json();
    const { nome, descricao, preco, tamanho, cor, imagemUrl } = body;

    const vestidoAtualizado = await prisma.roupas.update({
      where: { id },
      data: {
        nome,
        descricao,
        preco: parseFloat(preco),
        tamanho,
        cor,
        imagemUrl,
      },
    });

    return NextResponse.json(vestidoAtualizado);
  } catch (error: unknown) {
  if (error instanceof Error) {
    console.error('Erro ao atualizar vestido:', error.message);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  console.error('Erro ao atualizar vestido (desconhecido):', error);
  return NextResponse.json(
    { error: 'Erro interno ao atualizar vestido' },
    { status: 500 }
  );
}
}
