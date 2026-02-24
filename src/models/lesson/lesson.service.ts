import { prisma } from "../../config/prisma"

export const createLesson = async (data: any) => {
  return prisma.lesson.create({
    data
  })
}

export const getCourseLessons = async (courseId: string) => {
  return prisma.lesson.findMany({
    where: { courseId },
    orderBy: { order: "asc" }
  })
}

export const markLessonComplete = async (
  lessonId: string,
  enrollmentId: string
) => {
  return prisma.lessonCompletion.create({
    data: {
      lessonId,
      enrollmentId
    }
  })
}