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

//create user
import { CreateUserControler } from "./controllers/user/CreateUserController";
router.post("/users", new CreateUserControler().handle)

//list user
import { ListUserController } from "./controllers/user/ListUserController";
router.get("/users", new ListUserController().handle)

//delete user
import { DeleteUserController } from "./controllers/user/DeleteUserController";
router.delete("/users", new DeleteUserController().handle)

//update user 
import { UpdateUserController } from "./controllers/user/UpdateUserController";
router.put("/users/:id", new UpdateUserController().handle)

export default router;