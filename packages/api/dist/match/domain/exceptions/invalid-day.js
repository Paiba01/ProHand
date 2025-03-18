"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidDay = void 0;
const domain_1 = require("../../../shared/domain");
class InvalidDay extends domain_1.Exception {
    static causeIsNotInteger() {
        return domain_1.Exception.with('The day must be an integer number');
    }
}
exports.InvalidDay = InvalidDay;
//# sourceMappingURL=invalid-day.js.map