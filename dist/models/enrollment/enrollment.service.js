"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enrollService = exports.enrollCourse = void 0;
const prisma_1 = require("../../config/prisma");
const enrollCourse = async (userId, courseId) => {
    return prisma_1.prisma.$transaction(async (tx) => {
        const existing = await tx.enrollment.findUnique({
            where: { userId_courseId: { userId, courseId } }
        });
        if (existing)
            throw new Error("Already enrolled");
        return tx.enrollment.create({
            data: { userId, courseId }
        });
    });
};
exports.enrollCourse = enrollCourse;
exports.enrollService = {
    enrollCourse: exports.enrollCourse
};
