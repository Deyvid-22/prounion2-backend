import { Request, Response } from "express";
import { UpdateUserService } from "../../services/user/UpdateUserService"

export class UpdateUserController{

 async handle(req:Request,res:Response){
    
    
       const { id } = req.params  as {id:string}
  
       const { name, email,password } = req.body as {name:string,email:string,password:string} 

       const updateUserService = new UpdateUserService();

       const user = await updateUserService.execute({name,email,id,password});

       return res.json(user)
    }

}