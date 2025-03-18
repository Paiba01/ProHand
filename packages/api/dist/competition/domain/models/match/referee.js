"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const neverthrow_1 = require("neverthrow");
const domain_1 = require("../../../../shared/domain");
const uuid_1 = require("../../../../shared/uuid");
class Referee extends domain_1.ValueObject {
    constructor(value) {
        super(value);
    }
    static fromString(value) {
        const isBlank = !value.toString().trim();
        if (isBlank)
            return (0, neverthrow_1.err)(domain_1.InvalidId.causeIsBlank());
        const isValid = uuid_1.default.validate(value);
        if (!isValid)
            return (0, neverthrow_1.err)(domain_1.InvalidId.causeTheFormatIsNotValid(value));
        return (0, neverthrow_1.ok)(new this(value));
    }
}
exports.default = Referee;
//# sourceMappingURL=referee.js.map