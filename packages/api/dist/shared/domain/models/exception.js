"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Exception extends Error {
    constructor(message) {
        super(message);
    }
    static with(message) {
        return new this(message);
    }
}
exports.default = Exception;
//# sourceMappingURL=exception.js.map