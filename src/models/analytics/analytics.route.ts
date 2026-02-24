import { Router } from "express"
import { dashboardStats } from "./analytics.controller"
 
import { Role } from "@prisma/client"
import { authenticate } from "../middlewares/auth.middleware"
import { authorize } from "../middlewares/role.middleware"

const analyticsRoutes = Router()

analyticsRoutes.get(
  "/dashboard",
  authenticate,
  authorize(Role.ADMIN, Role.SUPER_ADMIN),
  dashboardStats
)

export default analyticsRoutes