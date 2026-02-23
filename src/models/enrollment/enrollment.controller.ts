import { enrollService } from "./enrollment.service"

 

export const enroll = async (req: any, res: any) => {
  const enrollment = await enrollService.enrollCourse(
    req.user.id,
    req.body.courseId
  )
  res.json(enrollment)
}