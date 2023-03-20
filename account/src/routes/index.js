import usersRouter from "./usersRoutes.js";

const routes = (app) => {
    app.route('/').get((_req,res) => {
        res.status(200).send('Ecomm Project')
    });  // aqui é a requisição default

    app.use(
        usersRouter
    );
}

 // centraliza as rotas
 
export default routes