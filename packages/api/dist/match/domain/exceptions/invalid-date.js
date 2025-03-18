"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidDate = void 0;
const domain_1 = require("../../../shared/domain");
class InvalidDate extends domain_1.Exception {
    static causeIsPast() {
        return domain_1.Exception.with('Match date can not be a past date');
    }
}
exports.InvalidDate = InvalidDate;
//# sourceMappingURL=invalid-date.js.map