import { Request, Response, NextFunction} from "express";

import { Query } from "../../database";

import { compare } from "bcryptjs"

export async function verify(req:Request,res:Response,next:NextFunction){
   
   
       const { password } = req.body
       const { id } = req.params

       
       if(!password){
            throw new Error("preencha os campos necessários");
          }
          
          const sql = "SELECT password FROM users WHERE id = ?;";
          
          const result = await Query(sql, [id]);
          
          const senha = result[0].password

          const decript = await compare(password,senha)

          console.log(decript)

       if(!decript){
            throw new Error("Dados incorretos");
          }
            
          console.log("dados corretos")
          next()
}
