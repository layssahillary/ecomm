import express from "express"; // importando o express
import CategoriesController from "../controllers/categoriesController.js";

const router = express.Router();

router
    .get("/categorias/:id", CategoriesController.listCategoryById)
    .get("/categorias", CategoriesController.listAllCategories)
    .post("/categorias", CategoriesController.createCategory)


export default router;
