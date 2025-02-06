"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const articleRoutes_1 = __importDefault(require("./routes/articleRoutes"));
const database_1 = require("./config/database");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/articles", articleRoutes_1.default);
const PORT = process.env.PORT || 5000;
(0, database_1.connectDB)().then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
exports.default = app;
