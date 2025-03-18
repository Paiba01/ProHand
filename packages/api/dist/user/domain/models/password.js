"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const neverthrow_1 = require("neverthrow");
const domain_1 = require("../../../shared/domain");
const invalid_password_1 = require("../exceptions/invalid-password");
class UserPassword extends domain_1.ValueObject {
    constructor(value) {
        super(value);
    }
    static fromString(value) {
        const isBlank = !value.trim();
        if (isBlank)
            return (0, neverthrow_1.err)(invalid_password_1.default.causeIsBlank());
        return (0, neverthrow_1.ok)(new this(value));
    }
}
exports.default = UserPassword;
//# sourceMappingURL=password.js.map