"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.getAll = exports.create = void 0;
const course_service_1 = require("./course.service");
const create = async (req, res) => {
    const course = await course_service_1.CourseService.createCourse(req.body, req.user.id);
    res.json(course);
};
exports.create = create;
const getAll = async (_, res) => {
    const courses = await course_service_1.CourseService.getAllCourses();
    res.json(courses);
};
exports.getAll = getAll;
const remove = async (req, res) => {
    await course_service_1.CourseService.softDeleteCourse(req.params.id);
    res.json({ message: "Course archived" });
};
exports.remove = remove;
