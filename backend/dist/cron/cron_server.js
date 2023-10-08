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
exports.cron_function = void 0;
const fetch_repo_1 = require("../model/fetch_repo");
const cron_function = () => __awaiter(void 0, void 0, void 0, function* () {
    const fetchRepo = new fetch_repo_1.FetchRepo();
    const result = yield fetchRepo.fetch_repo();
    console.log("CRON FUNCTION IS RUNNING : ", result);
});
exports.cron_function = cron_function;
