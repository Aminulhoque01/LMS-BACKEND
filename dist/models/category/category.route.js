"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_controller_1 = require("./category.controller");
const CategoryRouter = (0, express_1.Router)();
CategoryRouter.post("/", category_controller_1.categoryController.createCategory);
CategoryRouter.get("/", category_controller_1.categoryController.getAllCategories);
exports.default = CategoryRouter;
