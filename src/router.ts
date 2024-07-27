// Backend (Node.js com Express):

// Crie uma API RESTful com as seguintes rotas:
// GET /users: Retorna todos os usuários;
// POST /users: Adiciona um novo usuário;
// PUT /users/:id: Atualiza um usuário existente;
// DELETE /users/:id: Remove um usuário;
// Utilize um banco de dados relacional (PostgreSQL ou MySQL) para armazenar os dados dos usuários;
// Inclua um esquema básico para o usuário com campos como id, nome, email, e senha. (Utilize uma estratégia segura para armazenamento de senha);
// Não utilize ORMs (como Prisma, TypeORM, etc), o objetivo aqui é sabermos como está seu nível de conhecimento em bancos de dados relacionais.

import { Router } from "express";


const router = Router();

router.get("/",()=>{
    throw new Error("laaaaaaa");
})

export default router;