"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Day = void 0;
const neverthrow_1 = require("neverthrow");
const domain_1 = require("../../../shared/domain");
const invalid_day_1 = require("../exceptions/invalid-day");
class Day extends domain_1.ValueObject {
    constructor(value) {
        super(value);
    }
    static fromNumber(value) {
        if (!Number.isInteger(value)) {
            return (0, neverthrow_1.err)(invalid_day_1.InvalidDay.causeIsNotInteger());
        }
        return (0, neverthrow_1.ok)(new this(value));
    }
}
exports.Day = Day;
//# sourceMappingURL=day.js.map