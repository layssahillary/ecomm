import { accountsWithAddress } from './mockAccounts.js' 

export function searchUserByStates(uf) {

    return accountsWithAddress.filter(user => user.endereco.uf === uf); 
 }
 
