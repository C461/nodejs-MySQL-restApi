import { Router } from "express";

import { getDataBase } from '../Controllers/index.controller.js'
const router = Router();

router.get("/ping", getDataBase );

export default router;
