"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const auth_route_1 = __importDefault(require("./models/auth/auth.route"));
const course_route_1 = __importDefault(require("./models/course/course.route"));
const category_route_1 = __importDefault(require("./models/category/category.route"));
const enrollment_route_1 = __importDefault(require("./models/enrollment/enrollment.route"));
const analytics_route_1 = __importDefault(require("./models/analytics/analytics.route"));
const lesson_route_1 = __importDefault(require("./models/lesson/lesson.route"));
dotenv_1.default.config();
const app = (0, express_1.default)();
/*
|--------------------------------------------------------------------------
| Middlewares
|--------------------------------------------------------------------------
*/
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
/*
|--------------------------------------------------------------------------
| Rate Limiter
|--------------------------------------------------------------------------
*/
app.use((0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    max: 50,
    message: "Too many requests, please try again later"
}));
/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
*/
app.get("/", (_req, res) => {
    res.json({
        success: true,
        message: "🚀 LMS API Running"
    });
});
app.use("/auth", auth_route_1.default);
app.use("/category", category_route_1.default);
app.use("/course", course_route_1.default);
app.use("/enroll", enrollment_route_1.default);
app.use("/analytics", analytics_route_1.default);
app.use("/lesson", lesson_route_1.default);
/*
|--------------------------------------------------------------------------
| Global Error Handler
|--------------------------------------------------------------------------
*/
app.use((err, _req, res, _next) => {
    console.error(err);
    res.status(500).json({
        success: false,
        message: "Internal Server Error"
    });
});
/*
|--------------------------------------------------------------------------
| Start Server
|--------------------------------------------------------------------------
*/
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
