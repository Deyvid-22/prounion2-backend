import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import cors from "cors";
import router from "./router";


const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        res.status(403).json({ error: err.message });
    } else {
        res.status(500).json({ error: "Erro interno do servidor" });
    }
});

export default app;
