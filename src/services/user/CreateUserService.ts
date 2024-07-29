import { CreateUserRepositories } from "../../repositories/CreateUserRepositorie";

import { Query } from "../../database";

interface CreateProps {
  name: string;
  email: string;
  password: string;
}

export class CreateUserService {
  
  async execute({ name, email, password }: CreateProps) {
    
    
    if (!name || !email || !password) throw new Error("Preencha todos os campos!")
  
      
    const Verify = async () => {
        
        try {
          const sql = `SELECT COUNT(*) AS count FROM users WHERE email = '${email}';`
          const verify = await Query(sql);
          const Count = verify[0].count;
          
          if (Count > 0) return {sucess:false, message: "usuário já existente!" }
    
          const creatUserRepositories = new CreateUserRepositories()

          const user = creatUserRepositories.create({
            name,
            email,
            password
          })
    
         return user;

      } catch {
        return {message:"error no servidor"}
      }
    }
    return Verify();
  }
}


