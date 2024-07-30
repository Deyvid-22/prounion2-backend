import { DeleteUserRepositorie } from "../../repositories/DeleteUserRepositorie";

export class DeleteUserService{

 async execute({id}:{id:string}){

        if(!id) throw new Error("Prencha o campo email!")

        const deleteUserRepositorie = new DeleteUserRepositorie();

        const user = await deleteUserRepositorie.delete({id})

        return user;
    }
}
