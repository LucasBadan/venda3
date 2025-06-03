import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const vestidos = await prisma.roupas.findMany();
    return NextResponse.json(vestidos);
  } catch (error) {
    console.error('Erro ao buscar vestidos:', error);
    return NextResponse.json({ error: 'Erro ao buscar vestidos' }, { status: 500 });
  }
}


export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nome, descricao, preco, tamanho, cor, imagemUrl } = body;

    if (!nome || !descricao || !preco || !tamanho || !cor || !imagemUrl) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios.' },
        { status: 400 }
      );
    }

    const vestido = await prisma.roupas.create({
      data: { nome, descricao, preco:parseFloat(preco), tamanho, cor, imagemUrl },
    });

    return NextResponse.json({ message: 'Vestido cadastrado com sucesso!', vestido }, { status: 201 });
  } catch (error) {
    console.error('Erro ao cadastrar vestido:', error);
    return NextResponse.json({ error: 'Erro interno do servidor.' }, { status: 500 });
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
}
}

export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json();
    const { id } = body;

    await prisma.roupas.delete({ where: { id } });

    return NextResponse.json({ message: 'Vestido deletado com sucesso!' });
  } catch (error) {
    console.error('Erro ao deletar vestido:', error);
    return NextResponse.json({ error: 'Erro interno ao deletar vestido' }, { status: 500 });
  }
}
