import { createUserUseCase } from '../src/use-case/createUserAccount.js';
import { searchUserAccountByEmailUseCase } from '../src/use-case/searchUserAccountByEmail.js'
import { removeUserAccountUseCase } from '../src/use-case/removeUserAccount.js'

createUserUseCase('layssa', 'layssa@gmail.com', 'layssa123')

const removeu = removeUserAccountUseCase('layssa@gmail.com')
console.log(removeu)

const encontrado = searchUserAccountByEmailUseCase('layssa@gmail.com')
console.log(encontrado)

const removeuNaoExistente = removeUserAccountUseCase('naoexiste@gmail.com')
console.log(removeuNaoExistente)