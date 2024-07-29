import {Query} from "../database";
 import bcrypt from "bcryptjs";

 
interface CreateProps {
  name: string;
  email: string;
  password: string;
}

export class CreateUserRepositories {

  async create({name, email, password}:CreateProps){
    
    password = await bcrypt.hash(password,10)

    const sql = `INSERT INTO users.users (name, email,password) VALUES ('${name}', '${email}', '${password}');`
    const user =  Query(sql)

     return user;
    }

}

