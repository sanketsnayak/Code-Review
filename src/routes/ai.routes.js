import express from "express"
import content from "../controllers/ai.controller.js";

const router=express.Router();

router.post('/get-review',content)


export default router