import { insertUserAddressUseCase } from "../src/use-case/insertUserAddress.js";

const endereco = {
    logradouro: 'rua sla',
    numero: 1,
    complemento: 'nada',
    bairro: 'jardim',
    cep: '22233',
    cidade: 'sao paulo',
    uf: 'SP'
};

console.log(insertUserAddressUseCase('layssa@email.com',endereco));