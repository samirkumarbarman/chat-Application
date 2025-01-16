import { Router } from "express"

import { getlogin } from "../controller/loginController";

const router = Router()

app.get('/', getlogin)

export default router;