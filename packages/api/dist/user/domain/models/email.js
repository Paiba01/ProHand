"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const neverthrow_1 = require("neverthrow");
const domain_1 = require("../../../shared/domain");
const invalid_email_1 = require("../exceptions/invalid-email");
class UserEmail extends domain_1.ValueObject {
    constructor(value) {
        super(value);
    }
    static fromString(value) {
        if (!value.trim()) {
            return (0, neverthrow_1.err)(invalid_email_1.default.causeIsBlank());
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            return (0, neverthrow_1.err)(invalid_email_1.default.causeInvalidFormat());
        }
        return (0, neverthrow_1.ok)(new this(value));
    }
}
exports.default = UserEmail;
//# sourceMappingURL=email.js.map