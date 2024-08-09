import { Router } from "express";
import { uploadBook } from "../controllers/book.controller.js";

const router =  Router();

router.route("/upload").post(uploadBook)

export default router