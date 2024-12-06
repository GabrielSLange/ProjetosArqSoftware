import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const obterLivros = async (req: Request, res: Response) => {
   try {
      const livros = await prisma.livro.findMany();
      res.json(livros);
   } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar livros.' });
   }
};


export const criarLivro = async (req: Request, res: Response) => {
   const { id, titulo, autor, anoPublicacao, genero } = req.body;

   try {
      const novoLivro = await prisma.livro.create({
         data: { id, titulo, autor, anoPublicacao, genero },
      });
      res.status(201).json(novoLivro.id);
   } catch (error) {
      res.status(500).json({ error: 'Erro ao criar o livro.' });
   }
};

export const atualizarLivro = async (req: Request, res: Response) => {
   const { id } = req.params;
   const { titulo, autor, anoPublicacao, genero } = req.body;

   try {
      const livroAtualizado = await prisma.livro.update({
         where: { id: Number(id) },
         data: { titulo, autor, anoPublicacao, genero },
      });
      res.json(livroAtualizado);
   } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar o livro.' });
   }
};


export const deletarLivro = async (req: Request, res: Response) => {
   const { id } = req.params;

   try {
      await prisma.livro.delete({
         where: { id: Number(id) },
      });
      res.status(204).send();
   } catch (error) {
      res.status(500).json({ error: 'Erro ao remover livro.' });
   }
};