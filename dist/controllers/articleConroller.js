"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateArticle = exports.deleteArticle = exports.updateArticle = exports.getAllArticles = exports.createArticle = void 0;
const Article_1 = require("../models/Article");
const express_validator_1 = require("express-validator");
// Validation rules
const validateArticle = [
    (0, express_validator_1.body)("title").notEmpty().withMessage("Title is required"),
    (0, express_validator_1.body)("content").notEmpty().withMessage("Content is required"),
];
exports.validateArticle = validateArticle;
const createArticle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
    // }
    // const { title, content } = req.body;
    // const article = await Article.create({ title, content });
    // return res.status(201).json(article);
});
exports.createArticle = createArticle;
const getAllArticles = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const articles = yield Article_1.Article.findAll();
    return res.status(200).json(articles);
});
exports.getAllArticles = getAllArticles;
const updateArticle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { title, content } = req.body;
    const article = yield Article_1.Article.findByPk(id);
    if (!article) {
        return res.status(404).json({ message: "Article not found" });
    }
    article.title = title || article.title;
    article.content = content || article.content;
    yield article.save();
    return res.status(200).json(article);
});
exports.updateArticle = updateArticle;
const deleteArticle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const article = yield Article_1.Article.findByPk(id);
    if (!article) {
        return res.status(404).json({ message: "Article not found" });
    }
    yield article.destroy();
    return res.status(204).send();
});
exports.deleteArticle = deleteArticle;
