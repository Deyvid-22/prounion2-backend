import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

export class CreateUserControler{

    async handle(req:Request,res:Response){
        
        const {name, email, password} = req.body as {name:string, email: string,password:string};
    

        const createUserService = new CreateUserService();

        const user = await createUserService.execute( { name,email, password })
     
        res.json(user)
    }

}