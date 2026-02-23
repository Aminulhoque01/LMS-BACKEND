import   { CourseService } from "./course.service"

export const create = async (req: any, res: any) => {
  const course = await CourseService.createCourse(req.body, req.user.id)
  res.json(course)
}

export const getAll = async (_: any, res: any) => {
  const courses = await CourseService.getAllCourses()
  res.json(courses)
}

export const remove = async (req: any, res: any) => {
  await CourseService.softDeleteCourse(req.params.id)
  res.json({ message: "Course archived" })
}