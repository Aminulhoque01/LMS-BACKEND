import { Request, Response } from "express"
import * as service from "./analytics.service"

export const dashboardStats = async (
  _: Request,
  res: Response
) => {
  const [users, courses, topCourses] = await Promise.all([
    service.totalUsers(),
    service.totalCourses(),
    service.topCourses()
  ])

  res.json({
    users,
    courses,
    topCourses
  })
}