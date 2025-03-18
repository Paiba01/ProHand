"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const domain_1 = require("../../../shared/domain");
class InvalidUserEmail extends domain_1.Exception {
    static causeIsBlank() {
        return domain_1.Exception.with('User email cannot be blank');
    }
    static causeInvalidFormat() {
        return domain_1.Exception.with('Email format is wrong!');
    }
}
exports.default = InvalidUserEmail;
//# sourceMappingURL=invalid-email.js.map