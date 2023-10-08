"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.octokit = void 0;
const octokit_1 = require("octokit");
exports.octokit = new octokit_1.Octokit({
    auth: process.env.GITHUB_TOKEN,
});
