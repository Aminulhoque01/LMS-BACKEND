import { Router } from "express"
import * as controller from "./lesson.controller"
 
import { Role } from "@prisma/client"
import { authenticate } from "../middlewares/auth.middleware"
import { authorize } from "../middlewares/role.middleware"

const LessonRouter = Router()

LessonRouter.post(
  "/",
  authenticate,
  authorize(Role.INSTRUCTOR),
  controller.create
)

LessonRouter.get(
  "/course/:courseId",
  authenticate,
  controller.getCourseLessons
)

LessonRouter.post(
  "/complete",
  authenticate,
  controller.completeLesson
)

export default LessonRouter