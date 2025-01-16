import { Router } from "express"

import { getUser } from "./controller/userController.js"

const router = Router()

app.get("/user", getUser)

export default router;