"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const domain_1 = require("../../../shared/domain");
class ScopeDescription extends domain_1.ValueObject {
    constructor(value) {
        super(value);
    }
    static fromString(value) {
        return new this(value);
    }
}
exports.default = ScopeDescription;
//# sourceMappingURL=description.js.map