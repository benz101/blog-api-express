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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// No overload matches this call.
//   The last overload gave the following error.
//     Argument of type '(req: Request, res: Response) => Promise<express.Response<any, Record<string, any>>>' is not assignable to parameter of type 'Application<Record<string, any>>'
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.status(200).json({ success: true, message: 'Success get data', data: [] });
}));
// No overload matches this call.The last overload gave the following error.
// router.get("/", getAllArticles); // No overload matches this call.The last overload gave the following error.
// router.put("/:id", validateArticle, updateArticle); // No overload matches this call.The last overload gave the following error.
// router.delete("/:id", deleteArticle); // No overload matches this call.The last overload gave the following error.
exports.default = router;
