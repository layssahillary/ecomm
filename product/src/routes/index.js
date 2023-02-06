import express from "express";
import categoriesRouter from "./categoriesRoutes.js";

const routes = (app) => {
    app.route('/').get((req,res) => {
        res.status(200).send({titulo: "Ecomm-product"})
    });  // aqui é a requisição default

    app.use(
        express.json(),
        categoriesRouter
    )
}

 // centraliza as rotas
 
export default routes