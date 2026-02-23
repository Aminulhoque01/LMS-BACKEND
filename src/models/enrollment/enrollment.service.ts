import { prisma } from "../../config/prisma"

export const enrollCourse = async (userId: string, courseId: string) => {
  return prisma.$transaction(async (tx) => {
    const existing = await tx.enrollment.findUnique({
      where: { userId_courseId: { userId, courseId } }
    })

    if (existing) throw new Error("Already enrolled")

    return tx.enrollment.create({
      data: { userId, courseId }
    })
  })
}

export const enrollService={
  enrollCourse
  
}