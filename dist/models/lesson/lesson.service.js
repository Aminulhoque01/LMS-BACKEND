"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lessonService = exports.markLessonComplete = exports.getCourseLessons = exports.createLesson = void 0;
const prisma_1 = require("../../config/prisma");
const createLesson = async (data) => {
    return prisma_1.prisma.lesson.create({
        data
    });
};
exports.createLesson = createLesson;
const getCourseLessons = async (courseId) => {
    return prisma_1.prisma.lesson.findMany({
        where: { courseId },
        orderBy: { order: "asc" }
    });
};
exports.getCourseLessons = getCourseLessons;
const markLessonComplete = async (lessonId, enrollmentId) => {
    return prisma_1.prisma.lessonCompletion.create({
        data: {
            lessonId,
            enrollmentId
        }
    });
};
exports.markLessonComplete = markLessonComplete;
exports.lessonService = {
    createLesson: exports.createLesson,
    getCourseLessons: exports.getCourseLessons,
    markLessonComplete: exports.markLessonComplete
};
