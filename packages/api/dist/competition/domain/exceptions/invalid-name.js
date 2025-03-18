"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidName = void 0;
const domain_1 = require("../../../shared/domain");
class InvalidName extends domain_1.Exception {
    static causeIsBlank() {
        return domain_1.Exception.with('Name of competition cannot be blank');
    }
}
exports.InvalidName = InvalidName;
//# sourceMappingURL=invalid-name.js.map