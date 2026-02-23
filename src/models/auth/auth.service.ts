import { prisma } from "../../config/prisma"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const registerUser = async (data: any) => {
  const hashed = await bcrypt.hash(data.password, 10)

  return prisma.user.create({
    data: { ...data, password: hashed }
  })
}

export const loginUser = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) throw new Error("Invalid credentials")

  const match = await bcrypt.compare(password, user.password)
  if (!match) throw new Error("Invalid credentials")

  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET!,
    { expiresIn: "1d" }
  )

  return { token }
}

export const AuthService={
  registerUser,
  loginUser,
}