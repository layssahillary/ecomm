import { getAccounts } from './createUserAccount.js' // importando a lista de accounts

export function searchUserAccountByEmailUseCase(email) {

   return getAccounts().find(account => account.email == email); // procura a conta que tem o email da função

}