import { Query } from "../database";

export class UserRepository {

  async findAll() {

    const sql = "SELECT id, name, email FROM users;";
    const user = await Query(sql);
     
    return user;
  }
}
