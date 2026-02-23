import { Router } from "express"
import { enroll } from "./enrollment.controller"
import { authenticate } from "../middlewares/auth.middleware"
import { authorize } from "../middlewares/role.middleware"
 

const EnrollRouter = Router()

EnrollRouter.post("/", authenticate, authorize("STUDENT"), enroll)

export default EnrollRouter