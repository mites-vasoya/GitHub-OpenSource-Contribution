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
const fetch_repo_1 = require("../model/fetch_repo");
const dbconnection_1 = require("../library/dbconnection");
const github_func_1 = require("../model/github_func");
const router = express_1.default.Router();
router.get("/fetch_repo", fetch_repo);
//API to fetch GITHUB repo
function fetch_repo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const fetchRepo = new fetch_repo_1.FetchRepo();
            const result = yield fetchRepo.fetch_repo();
            const rate_limit = new github_func_1.GitHubFunc();
            const fetchRateLimit = rate_limit.get_rate_limit();
            const fetchData = yield dbconnection_1.pool.query("SELECT * FROM repository");
            console.log("Fetch Data : ", fetchRateLimit);
            res.json(result);
        }
        catch (error) {
            res.json(error.message);
        }
    });
}
module.exports = router;
