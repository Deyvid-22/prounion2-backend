import { DeleteUserRepositorie } from "../../repositories/DeleteUserRepositorie";

export class DeleteUserService{

 async execute({email}:{email:string}){

        if(!email) throw new Error("Prencha o campo email!")

        const deleteUserRepositorie = new DeleteUserRepositorie();

        const user = await deleteUserRepositorie.delete({email})

        return user;
    }
}
