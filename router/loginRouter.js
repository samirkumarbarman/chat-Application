import express, { application } from "express"

import { getlogin } from "../controller/loginController";

const router =express.Router()

app.get('/', getlogin)

export default router;