import express from "express"; // importando o express
import CategoriesController from "../controllers/categoriesController.js";

const router = express.Router();

router.get("/categorias", CategoriesController.listarCategorias)

export default router;
