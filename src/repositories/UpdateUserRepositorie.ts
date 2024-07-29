
import { Query } from "../database";

interface UpdateProps{
    id:string;
    name:string;
    email:string;
    password:string
}
  
export class UpdateUserRepositorie {

    async update({ id, name, email,password }:UpdateProps) {
     
        const sql = `UPDATE users SET name = ?, email = ? WHERE id = ?`;

        const params = [name, email, id, password];

        const user = await Query(sql, params);

        return user;
    }
}
