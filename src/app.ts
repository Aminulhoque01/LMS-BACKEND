import express from "express"
import cors from "cors"
import morgan from "morgan"
import rateLimit from "express-rate-limit"
 

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
  })
)

app.get("/", (_, res) => {
  res.send("LMS API Running")
})
 

export default app