"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseService = exports.softDeleteCourse = exports.getAllCourses = exports.createCourse = void 0;
const prisma_1 = require("../../config/prisma");
const createCourse = async (data, instructorId) => {
    return prisma_1.prisma.course.create({
        data: { ...data, instructorId }
    });
};
exports.createCourse = createCourse;
const getAllCourses = async () => {
    return prisma_1.prisma.course.findMany({
        where: { deletedAt: null }
    });
};
exports.getAllCourses = getAllCourses;
const softDeleteCourse = async (id) => {
    return prisma_1.prisma.course.update({
        where: { id },
        data: { deletedAt: new Date() }
    });
};
exports.softDeleteCourse = softDeleteCourse;
exports.CourseService = {
    createCourse: exports.createCourse,
    getAllCourses: exports.getAllCourses,
    softDeleteCourse: exports.softDeleteCourse
};
