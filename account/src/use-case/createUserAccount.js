export const accounts = [
  {
    id: 1,
    name: "usuario",
    email: "usuario@email.com",
    password: "54321",
    createdDate: "2023-01-06",
  },
  {
    id: 2,
    name: "layssa",
    email: "layssa@email.com",
    password: "12334",
    createdDate: "2023-01-06",
  },
]; // criando array vazio para as accounts

export function createUserUseCase(name, email, password) { //função createuser
  
  const user = {
    id: accounts.length + 1, // criando id (contando length)
    name: nome,
    email: email,
    password: senha,
    createdDate: new Date().toISOString().substring(0,10) // criar a data no formato 2022-10-23
  };

  accounts.push(user); // criando novo usuario com push

  return user; // retornando o usuario 

}


export function getAccounts() { // exportando uma função que retorna a lista accounts
  return accounts;
}