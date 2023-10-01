"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const github_1 = require("../config/github");
const router = express_1.default.Router();
router.get("/fetch_repo", fetch_repo);
//API to fetch GITHUB repo
function fetch_repo() {
    console.log("Fetching GITBHUB repo");
    console.log("GITHUB Config : ", github_1.github_config);
}
;
module.exports = router;
