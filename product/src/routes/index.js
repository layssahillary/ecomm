import categoriesRouter from "./categoriesRoutes.js";

const routes = (app) => {
    app.route('/').get((_req,res) => {
        res.status(200).send('Ecomm Project')
    });  // aqui é a requisição default

    app.use(
        categoriesRouter
    );
}

 // centraliza as rotas
 
export default routes