import express from "express";
import {
  createArticle,
  deleteArticle,
  getAllArticles,
  updateArticle,
} from "../controllers/articleConroller";

const router = express.Router();

router.get("/list", getAllArticles);
router.post("/create", createArticle);
router.put("/update/:id", updateArticle);
router.delete("/delete/:id", deleteArticle);

export default router;
