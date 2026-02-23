import { Router } from "express"
import * as controller from "./auth.controller"

const AuthRouter = Router()

AuthRouter.post("/register", controller.register)
AuthRouter.post("/login", controller.login)

export default AuthRouter