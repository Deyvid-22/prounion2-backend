import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import cors from "cors";
import router from "./router";

// no tsconfig desative a opção "strict" para false,  

const app = express();

app.use(cors()); // habilita o acesso
app.use(express.json()); // configura para usar formato json
app.use(router); // chama o roteamento

//configurção de error
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        res.status(403).json({ error: err.message });
    } else {
        res.status(500).json({ error: "Erro interno do servidor" });
    }
});

export default app;
