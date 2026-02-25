"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryService = exports.deleteCategory = exports.getCategoryById = exports.getAllCategories = exports.createCategory = void 0;
const prisma_1 = require("../../config/prisma");
const createCategory = async (name) => {
    return prisma_1.prisma.category.create({
        data: { name }
    });
};
exports.createCategory = createCategory;
const getAllCategories = async () => {
    return prisma_1.prisma.category.findMany();
};
exports.getAllCategories = getAllCategories;
const getCategoryById = async (id) => {
    return prisma_1.prisma.category.findUnique({
        where: { id },
        include: { courses: true }
    });
};
exports.getCategoryById = getCategoryById;
const deleteCategory = async (id) => {
    return prisma_1.prisma.category.delete({
        where: { id }
    });
};
exports.deleteCategory = deleteCategory;
exports.categoryService = {
    createCategory: exports.createCategory,
    getAllCategories: exports.getAllCategories,
    getCategoryById: exports.getCategoryById,
    deleteCategory: exports.deleteCategory
};
