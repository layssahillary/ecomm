import { getAccounts } from './createUserAccount.js' // importa a função com a lista de accounts

export function removeUserAccountUseCase(email) {

    const accounts = getAccounts();
    const accountIndex = accounts
        .findIndex(account => account.email === email);
    if (accountIndex >= 0) {
        accounts.splice(accountIndex, 1);
        return true;
    }
    return false;
} 