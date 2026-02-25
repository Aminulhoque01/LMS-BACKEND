"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const analytics_controller_1 = require("./analytics.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const role_middleware_1 = require("../middlewares/role.middleware");
const analyticsRoutes = (0, express_1.Router)();
analyticsRoutes.get("/dashboard", auth_middleware_1.authenticate, (0, role_middleware_1.authorize)("ADMIN", "SUPER_ADMIN"), analytics_controller_1.dashboardStats);
exports.default = analyticsRoutes;
