import { Router } from "express";
//import for book
import { getAllBook,getBooksBySemester } from "../controllers/book.controller.js";

//import for syllabus
import { getAllSyllabus,getSyllabusBySemester } from "../controllers/syllabus.controller.js";

//import for impques
import { getAllImpques,getImpquesBySemester } from "../controllers/impques.controller.js";

//import for oldpaper
import { getAllOldpaper,getOldpaperBySemester } from "../controllers/oldpaper.controller.js";

//import for papersolution
import { getAllPapersolution,getPapersolutionBySemester } from "../controllers/papersolution.controller.js";

const router =  Router();

//for book
router.route("/getAllBooks").get(getAllBook)
router.route("/getBooksBySemester/:semesterId").get(getBooksBySemester)

//for syllabus
router.route("/getAllSyllabus").get(getAllSyllabus)
router.route("/getSyllabusBySemester/:semesterId").get(getSyllabusBySemester)

//for impques
router.route("/getAllImpques").get(getAllImpques)
router.route("/getImpquesBySemester/:semesterId").get(getImpquesBySemester)

//for oldpaper
router.route("/getAllOldpaper").get(getAllOldpaper)
router.route("/getOldpaperBySemester/:semesterId").get(getOldpaperBySemester)

//for papersolution
router.route("/getAllPapersolution").get(getAllPapersolution)
router.route("/getPapersolutionBySemester/:semesterId").get(getPapersolutionBySemester)

export default router