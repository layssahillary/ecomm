import { accounts } from "./createUserAccount.js";
import { searchUserAccountByEmailUseCase } from "./searchUserAccountByEmail.js";

export function insertUserAddressUseCase(email,payload){
    const user = searchUserAccountByEmailUseCase(email);
    if(!user){
        return 'Usuário não encontrado'
    }
    const userIndex = accounts.indexOf(user);
    accounts[userIndex].endereco = payload;
    return user;
};