
import { Query } from "../database";

export class DeleteUserRepositorie {

    async  delete({id}:{id:string}){

        const sql = `DELETE FROM users WHERE id = '${id}'`;
 
           const user = await Query(sql);

           return user;
    }
}

