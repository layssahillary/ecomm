import { accounts } from "./createUserAccount.js";
import { searchUserAccountByEmailUseCase } from "./searchUserAccountByEmail.js";

export function changeUserNameUseCase(email,newName) {

    const user = searchUserAccountByEmailUseCase(email);

    if(!user){
        return false
    } 
    const userIndex = accounts.indexOf(user); // pegando posição do usuario no array de accounts e guardando no userIndex

    accounts[userIndex].name = newName; // acessando valor da chave name e trocando para newName

    return true
} 

changeUserNameUseCase('layssa@email.com','lay');