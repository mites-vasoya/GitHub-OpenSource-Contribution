"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Functions = void 0;
class Functions {
    constructor() {
        this.response = (status_code, data, message) => {
            return {
                status_code,
                data,
                message
            };
        };
    }
}
exports.Functions = Functions;
