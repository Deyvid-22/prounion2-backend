import { Query } from "../database";

export class UserRepository {

  async findAll() {

    const sql = "SELECT * FROM users;";
    
    const User = await Query(sql);

    return User;
  }
}
