import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

// GET: Listar todos os usuários
export const getUsers = async (req: Request, res: Response) => {
   try {
      const users = await prisma.user.findMany();
      res.json(users);
   } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar usuários.' });
   }
};

// POST: Criar um novo usuário
export const createUser = async (req: Request, res: Response) => {
   const { name, email } = req.body;

   try {
      const newUser = await prisma.user.create({
         data: { name, email },
      });
      res.status(201).json(newUser);
   } catch (error) {
      res.status(500).json({ error: 'Erro ao criar usuário.' });
   }
};

// PUT: Atualizar um usuário por ID
export const updateUser = async (req: Request, res: Response) => {
   const { id } = req.params;
   const { name, email } = req.body;

   try {
      const updatedUser = await prisma.user.update({
         where: { id: Number(id) },
         data: { name, email },
      });
      res.json(updatedUser);
   } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar usuário.' });
   }
};

// DELETE: Remover um usuário por ID
export const deleteUser = async (req: Request, res: Response) => {
   const { id } = req.params;

   try {
      await prisma.user.delete({
         where: { id: Number(id) },
      });
      res.status(204).send();
   } catch (error) {
      res.status(500).json({ error: 'Erro ao remover usuário.' });
   }
};
