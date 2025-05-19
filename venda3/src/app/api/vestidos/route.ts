import { NextApiRequest, NextApiResponse } from "next";  
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {

    try{
        const {nome, descricao, preco, tamanho, cor, imagemUrl } = req.body;

        if(!nome || !descricao || !preco || !tamanho || !cor || !imagemUrl) {
            return res.status(400).json({error: 'Todos os campos são obrigatórios.'});
        }

        const vestido = await prisma.roupas.create({
            data: {
                nome,
                descricao,
                preco,
                tamanho,    
                cor, 
                imagemUrl,
            },       
    });

    res.status(201).json({ message: 'Vestido cadastrado com sucesso!', vestido });
    } catch (error) {
      console.error('Erro ao cadastrar vestido:', error);
      res.status(500).json({ error: 'Erro interno do servidor.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
   
}
