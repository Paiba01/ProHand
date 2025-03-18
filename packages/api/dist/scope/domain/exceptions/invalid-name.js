"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const domain_1 = require("../../../shared/domain");
class InvalidScopeName extends domain_1.Exception {
    static causeIsBlank() {
        return domain_1.Exception.with('Scope name cannot be blank');
    }
}
exports.default = InvalidScopeName;
//# sourceMappingURL=invalid-name.js.map