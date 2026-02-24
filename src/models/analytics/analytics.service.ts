import { prisma } from "../../config/prisma"

export const totalUsers = () => prisma.user.count()

export const totalCourses = () =>
  prisma.course.count({ where: { deletedAt: null } })

export const topCourses = () =>
  prisma.course.findMany({
    take: 5,
    orderBy: {
      enrollments: { _count: "desc" }
    },
    include: {
      _count: { select: { enrollments: true } }
    }
  })