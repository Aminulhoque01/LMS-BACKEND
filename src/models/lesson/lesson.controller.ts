import { Request, Response } from "express"
import * as service from "./lesson.service"

export const create = async (req: Request, res: Response) => {
  const lesson = await service.createLesson(req.body)
  res.status(201).json(lesson)
}

export const getCourseLessons = async (
  req: Request,
  res: Response
) => {
  const lessons = await service.getCourseLessons(
    req.params.courseId as string
  )

  res.json(lessons)
}

export const completeLesson = async (
  req: any,
  res: Response
) => {
  const result = await service.markLessonComplete(
    req.body.lessonId,
    req.body.enrollmentId
  )

  res.json(result)
}

export const lessonController ={
  create,
  getCourseLessons,
  completeLesson
}