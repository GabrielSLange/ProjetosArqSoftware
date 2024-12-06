import express from 'express';
import {
   getUsers,
   createUser,
   updateUser,
   deleteUser,
} from './controllers/usuariosController';
import { atualizarLivro, criarLivro, deletarLivro, obterLivros } from './controllers/livroController';

const app = express();

app.use(express.json());

// Rotas para Users
app.get('/users', getUsers);          // Listar todos os usuários
app.post('/users', createUser);       // Criar um novo usuário
app.put('/users/:id', updateUser);    // Atualizar um usuário por ID
app.delete('/users/:id', deleteUser); // Deletar um usuário por ID

app.get('/livros', obterLivros)
app.post('/livros', criarLivro)
app.put('/livros/:id', atualizarLivro)
app.delete('/livros/:id', deletarLivro)


// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
