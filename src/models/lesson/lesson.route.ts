import { Router } from "express"
import * as controller from "./lesson.controller"
 
import { Role } from "@prisma/client"
import { authenticate } from "../middlewares/auth.middleware"
import { authorize } from "../middlewares/role.middleware"

const router = Router()

router.post(
  "/",
  authenticate,
  authorize(Role.INSTRUCTOR),
  controller.create
)

router.get(
  "/course/:courseId",
  authenticate,
  controller.getCourseLessons
)

router.post(
  "/complete",
  authenticate,
  controller.completeLesson
)

export default router