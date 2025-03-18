"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exception_1 = require("../models/exception");
class InvalidId extends exception_1.default {
    static causeIsBlank() {
        return exception_1.default.with('Id cannot be blank');
    }
    static causeTheFormatIsNotValid(value) {
        return exception_1.default.with(`${value} has not a valid uuid format`);
    }
}
exports.default = InvalidId;
//# sourceMappingURL=invalid-id.js.map