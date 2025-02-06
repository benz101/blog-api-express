import { Request, Response, NextFunction } from "express";
import { Article } from "../models/Article";


export const createArticle = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      res.status(403).json({
        success: false,
        message:
          !title && !content
            ? "Title and Content are required"
            : !title
            ? "Title is required"
            : "Content is required",
        data: null,
      });
      return;
    }

    if (!content) {
      res.status(403).json({
        success: false,
        message: "Content is required",
        data: null,
      });
      return;
    }

    const article = await Article.create({ title, content });

    res.status(200).json({
      success: true,
      message: "Create article is success",
      data: article,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Create article is error",
      data: null,
    });
  }
};

export const getAllArticles = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const articles = await Article.findAll();

    res.status(200).json({
      success: true,
      message: "Get article is success",
      data: articles,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Get article is error",
      data: null,
    });
  }
};

export const updateArticle = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    if (!title || !content) {
      res.status(403).json({
        success: false,
        message:
          !title && !content
            ? "Title and Content are required"
            : !title
            ? "Title is required"
            : "Content is required",
        data: null,
      });
      return;
    }


    const article = await Article.findByPk(id);

    if (article) {
      article.title = title;
      article.content = content;

      await article.save();

      res.status(200).json({
        success: true,
        message: "Update article is success",
        data: null,
      });
    } else {
      res.status(404).json({
        success: true,
        message: "Article is not found",
        data: null,
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Update article is error",
      data: null,
    });
  }
};

export const deleteArticle = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const article = await Article.findByPk(id);

    if (article) {
      await article.destroy();
      res.status(200).json({
        success: true,
        message: "Delete article is success",
        data: null,
      });
    } else {
      res.status(404).json({
        success: true,
        message: "Article is not found",
        data: null,
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Delete article is error",
      data: null,
    });
  }
};