import { Router } from "express";
import { uploadBook } from "../controllers/book.controller.js";
import { uploadSyllabus } from "../controllers/syllabus.controller.js";
import { uploadImpques } from "../controllers/impques.controller.js";
import { uploadOldpaper } from "../controllers/oldpaper.controller.js";
import { uploadPapersolution } from "../controllers/papersolution.controller.js";

const router =  Router();

router.route("/books").post(uploadBook)
router.route("/syllabus").post(uploadSyllabus)
router.route("/impques").post(uploadImpques)
router.route("/oldpaper").post(uploadOldpaper)
router.route("/papersolution").post(uploadPapersolution)

export default router