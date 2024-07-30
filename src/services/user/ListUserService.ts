import { UserRepository } from "../../repositories/ListUserRepositorie"


export class ListUserService{

  async  execute(){
    
    const userRepository = new UserRepository()

    const user = await userRepository.findAll()

    return user
    }

}