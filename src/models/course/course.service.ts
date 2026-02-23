import { prisma } from "../../config/prisma"

 

export const createCourse = async (data: any, instructorId: string) => {
  return prisma.course.create({
    data: { ...data, instructorId }
  })
}

export const getAllCourses = async () => {
  return prisma.course.findMany({
    where: { deletedAt: null }
  })
}

export const softDeleteCourse = async (id: string) => {
  return prisma.course.update({
    where: { id },
    data: { deletedAt: new Date() }
  })
}

export const CourseService={
   createCourse,
   getAllCourses,
   softDeleteCourse

}