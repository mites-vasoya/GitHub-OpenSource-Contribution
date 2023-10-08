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
exports.FetchRepo = void 0;
const functions_1 = require("../library/functions");
const octokit_1 = require("../library/octokit");
class FetchRepo {
    constructor() {
        this.fetch_repo = () => __awaiter(this, void 0, void 0, function* () {
            const result = yield octokit_1.octokit.request("GET /users/mites-vasoya", {
                owner: "github",
                repo: "docs",
                per_page: 2,
            });
            const reponseObj = new functions_1.Functions();
            if (!result.length)
                return reponseObj.response(200, [], "No Repo Found");
            return reponseObj.response(200, result, "Repo fetched successsfully");
        });
    }
}
exports.FetchRepo = FetchRepo;
