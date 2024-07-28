import { Request, Response } from "express";
import { AddUserService } from "../../services/user/AddUserService";

export class AddUserControler{

    async handle(req:Request,res:Response){
        
        const addUserService = new AddUserService();

        const user = await addUserService.execute()
          
        res.json(user)
    }

}