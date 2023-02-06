import categories from "../models/Categories.js";

class CategoriesController{
    static listarCategorias = (req,res) => {
        categories.find((err, categories) => {
            res.status(200).json(categories)
        })
    }
}

export default CategoriesController