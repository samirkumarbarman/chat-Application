import { Router } from "express"

import { getInbox } from "./controller/inboxController.js"

const router = Router()

app.get("/inbox", getInbox)

export default router;
