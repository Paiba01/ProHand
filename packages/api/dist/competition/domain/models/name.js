"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Name = void 0;
const neverthrow_1 = require("neverthrow");
const domain_1 = require("../../../shared/domain");
const invalid_name_1 = require("../exceptions/invalid-name");
class Name extends domain_1.ValueObject {
    constructor(value) {
        super(value);
    }
    static fromString(value) {
        const isBlank = !value.trim();
        if (isBlank)
            return (0, neverthrow_1.err)(invalid_name_1.InvalidName.causeIsBlank());
        return (0, neverthrow_1.ok)(new this(value));
    }
}
exports.Name = Name;
//# sourceMappingURL=name.js.map