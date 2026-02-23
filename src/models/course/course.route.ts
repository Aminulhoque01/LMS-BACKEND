import { Router } from "express"
import * as controller from "./course.controller"
import { authenticate } from "../middlewares/auth.middleware"
import { authorize } from "../middlewares/role.middleware"
 
const CourseRouter = Router()

CourseRouter.post("/", authenticate, authorize("INSTRUCTOR"), controller.create)
CourseRouter.get("/", controller.getAll)
CourseRouter.delete("/:id", authenticate, authorize("ADMIN", "SUPER_ADMIN"), controller.remove)

export default CourseRouter