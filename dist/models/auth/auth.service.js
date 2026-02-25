"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = exports.loginUser = exports.registerUser = void 0;
const prisma_1 = require("../../config/prisma");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const registerUser = async (data) => {
    const hashed = await bcrypt_1.default.hash(data.password, 10);
    return prisma_1.prisma.user.create({
        data: { ...data, password: hashed }
    });
};
exports.registerUser = registerUser;
const loginUser = async (email, password) => {
    const user = await prisma_1.prisma.user.findUnique({ where: { email } });
    if (!user)
        throw new Error("Invalid credentials");
    const match = await bcrypt_1.default.compare(password, user.password);
    if (!match)
        throw new Error("Invalid credentials");
    const token = jsonwebtoken_1.default.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1d" });
    return { token };
};
exports.loginUser = loginUser;
exports.AuthService = {
    registerUser: exports.registerUser,
    loginUser: exports.loginUser,
};
