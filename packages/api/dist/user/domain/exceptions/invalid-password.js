"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const domain_1 = require("../../../shared/domain");
class InvalidUserPassword extends domain_1.Exception {
    static causeIsBlank() {
        return domain_1.Exception.with('User password cannot be blank');
    }
}
exports.default = InvalidUserPassword;
//# sourceMappingURL=invalid-password.js.map