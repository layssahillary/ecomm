import express from "express"; // importando o express
import CategoriesController from "../controllers/categoriesController.js";

const router = express.Router();

router
    .get("/categorias/:id", CategoriesController.listarCategoriasPorId)
    .get("/categorias", CategoriesController.listarCategorias)
    .post("/categorias", CategoriesController.cadastrarCategorias)


export default router;
