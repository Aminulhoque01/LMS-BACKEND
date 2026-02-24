import { Router } from "express"
 
import { Role } from "@prisma/client"
import { authenticate } from "../middlewares/auth.middleware"
import { authorize } from "../middlewares/role.middleware"
import { lessonController } from "./lesson.controller"

const LessonRouter = Router()

LessonRouter.post(
  "/",
  authenticate,
  authorize("INSTRUCTOR"),
  lessonController.create
)

LessonRouter.get(
  "/course/:courseId",
  authenticate,
  lessonController.getCourseLessons
)

LessonRouter.post(
  "/complete",
  authenticate,
  lessonController.completeLesson
)

export default LessonRouter