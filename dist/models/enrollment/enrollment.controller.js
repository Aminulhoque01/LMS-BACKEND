"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enroll = void 0;
const enrollment_service_1 = require("./enrollment.service");
const enroll = async (req, res) => {
    const enrollment = await enrollment_service_1.enrollService.enrollCourse(req.user.id, req.body.courseId);
    res.json(enrollment);
};
exports.enroll = enroll;
