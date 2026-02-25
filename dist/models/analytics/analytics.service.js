"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.topCourses = exports.totalCourses = exports.totalUsers = void 0;
const prisma_1 = require("../../config/prisma");
const totalUsers = () => prisma_1.prisma.user.count();
exports.totalUsers = totalUsers;
const totalCourses = () => prisma_1.prisma.course.count({ where: { deletedAt: null } });
exports.totalCourses = totalCourses;
const topCourses = () => prisma_1.prisma.course.findMany({
    take: 5,
    orderBy: {
        enrollments: { _count: "desc" }
    },
    include: {
        _count: { select: { enrollments: true } }
    }
});
exports.topCourses = topCourses;
