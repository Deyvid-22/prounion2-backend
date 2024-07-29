
import { Query } from "../database";

export class DeleteUserRepositorie {

    async  delete({email}:{email:string}){

           const sql = `DELETE FROM users WHERE email = '${email}`;
           
           const user = await Query(sql);

           return user;
    }

}

