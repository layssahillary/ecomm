import { createUserUseCase,accounts } from "../src/use-case/teste.js";

const user1 = createUserUseCase("layssa","layssa@email.com","12233");
const user2 = createUserUseCase("layssa2","layssa@email.com","12233");
const user3 = createUserUseCase("layssa3","layssa@email.com","12233");

console.log(accounts);