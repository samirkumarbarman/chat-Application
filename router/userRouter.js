import express, { application } from "express"

const router =express.Router()

app.get("/user", userController)

export default router;