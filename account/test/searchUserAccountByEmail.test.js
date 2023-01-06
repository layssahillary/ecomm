import { createUserUseCase } from '../src/use-case/createUserAccount.js';
import { searchUserAccountByEmailUseCase } from '../src/use-case/searchUserAccountByEmail.js'

createUserUseCase('layssa', 'layssa@gmail.com', 'layssa123');

const encontrado = searchUserAccountByEmailUseCase('layssa@gmail.com')
console.log(encontrado)

const naoExiste = searchUserAccountByEmailUseCase('naoexiste@gmail.com')
console.log(naoExiste)
if(typeof naoExiste === 'undefined') {
    console.log('Usuário não encontrado');
}