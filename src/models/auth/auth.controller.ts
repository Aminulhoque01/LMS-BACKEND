import { AuthService } from "./auth.service"

 

export const register = async (req: any, res: any) => {
  const user = await AuthService.registerUser(req.body)
  res.json(user)
}

export const login = async (req: any, res: any) => {
  const result = await AuthService.loginUser(
    req.body.email,
    req.body.password
  )
  res.json(result)
}