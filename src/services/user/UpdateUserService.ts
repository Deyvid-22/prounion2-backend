import { UpdateUserRepositorie } from "../../repositories/UpdateUserRepositorie";

interface UpdateProps{
  id:string;
  name:string;
  email:string;
  password:string
}

export class UpdateUserService {

  async execute({name,email,id,password}:UpdateProps) {

    const updateUserRepositorie = new UpdateUserRepositorie();

    const user = await updateUserRepositorie.update({name,email,id,password})
    
    return user
  }

}
