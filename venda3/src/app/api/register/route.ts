import { NextRequest } from 'next/server';
import prisma from '@/app/prisma/prismaClient';

export async function POST(req: NextRequest) {
 
   const { name, email, password } = await req.json();

    const newUser = await prisma.user.create({
      data: { name, email, password },
    });

    return new Response(JSON.stringify(newUser), {
      status: 201,
    });
  }

