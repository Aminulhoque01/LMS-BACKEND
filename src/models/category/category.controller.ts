import { Request, Response } from "express"
import { categoryService } from "./category.service"
 

export const createCategory = async (req: Request, res: Response) => {
  try {
    const { name } = req.body

    const category = await categoryService.createCategory(name)

    res.status(201).json({
      success: true,
      data: category
    })
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message
    })
  }
}

export const getAllCategories = async (_: Request, res: Response) => {
  const categories = await categoryService.getAllCategories()

  res.json({
    success: true,
    data: categories
  })
}

export const categoryController={
 createCategory,
 getAllCategories,
 
}