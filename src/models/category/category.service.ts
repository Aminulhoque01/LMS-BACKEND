import { prisma } from "../../config/prisma"

export const createCategory = async (name: string) => {
  return prisma.category.create({
    data: { name }
  })
}

export const getAllCategories = async () => {
  return prisma.category.findMany()
}

export const getCategoryById = async (id: string) => {
  return prisma.category.findUnique({
    where: { id },
    include: { courses: true }
  })
}

export const deleteCategory = async (id: string) => {
  return prisma.category.delete({
    where: { id }
  })
}


export const categoryService={
  createCategory,
  getAllCategories,
  getCategoryById,
  deleteCategory
}