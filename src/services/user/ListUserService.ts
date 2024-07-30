import { UserRepository } from "../../repositories/ListUserRepositorie"

interface  CreateProps{
  name:string,
  email:string
  password:string;
}

export class ListUserService{

  async  execute(){
    
    const userRepository = new UserRepository()

    const user = await userRepository.findAll()

    return user
    }

}