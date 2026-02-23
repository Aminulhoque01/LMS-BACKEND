import { Router } from "express"
import { categoryController } from "./category.controller"
 

const CategoryRouter = Router()

CategoryRouter.post("/", categoryController.createCategory)
CategoryRouter.get("/", categoryController.getAllCategories)

export default CategoryRouter