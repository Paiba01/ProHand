"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const domain_1 = require("../../../shared/domain");
class InvalidUserName extends domain_1.Exception {
    static causeIsBlank() {
        return domain_1.Exception.with('User name cannot be blank');
    }
}
exports.default = InvalidUserName;
//# sourceMappingURL=invalid-name.js.map