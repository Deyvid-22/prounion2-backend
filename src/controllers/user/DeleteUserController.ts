import { DeleteUserService } from "../../services/user/DeleteUserService";
import { Request, Response } from "express";

export class DeleteUserController{

  async  handle(req:Request,res:Response){
        
        const { id } = req.params as {id:string} 
       
        const deleteUserService = new DeleteUserService()

        const user = await deleteUserService.execute({id})
        
        res.json(user)
    }

}