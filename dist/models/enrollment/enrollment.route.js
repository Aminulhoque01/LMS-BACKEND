"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const enrollment_controller_1 = require("./enrollment.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const role_middleware_1 = require("../middlewares/role.middleware");
const EnrollRouter = (0, express_1.Router)();
EnrollRouter.post("/", auth_middleware_1.authenticate, (0, role_middleware_1.authorize)("STUDENT"), enrollment_controller_1.enroll);
exports.default = EnrollRouter;
