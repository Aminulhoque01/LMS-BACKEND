"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const auth_service_1 = require("./auth.service");
const register = async (req, res) => {
    const user = await auth_service_1.AuthService.registerUser(req.body);
    res.json(user);
};
exports.register = register;
const login = async (req, res) => {
    const result = await auth_service_1.AuthService.loginUser(req.body.email, req.body.password);
    res.json(result);
};
exports.login = login;
