"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryController = exports.getAllCategories = exports.createCategory = void 0;
const category_service_1 = require("./category.service");
const createCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const category = await category_service_1.categoryService.createCategory(name);
        res.status(201).json({
            success: true,
            data: category
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};
exports.createCategory = createCategory;
const getAllCategories = async (_, res) => {
    const categories = await category_service_1.categoryService.getAllCategories();
    res.json({
        success: true,
        data: categories
    });
};
exports.getAllCategories = getAllCategories;
exports.categoryController = {
    createCategory: exports.createCategory,
    getAllCategories: exports.getAllCategories,
};
