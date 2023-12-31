"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.SERVER_PORT || 9999;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const github_route = require("./controller/github_api_fetch");
app.use('/', github_route);
app.listen(PORT, () => {
    console.log("Server is running : ", PORT);
});
