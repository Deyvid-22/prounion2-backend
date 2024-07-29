import { DeleteUserService } from "../../services/user/DeleteUserService";
import { Request, Response } from "express";

export class DeleteUserController{

  async  handle(req:Request,res:Response){

        const { email } = req.body as {email:string} 

        const deleteUserService = new DeleteUserService()

        const user = await deleteUserService.execute({email})
        
        res.json(user)
    }

}