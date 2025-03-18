"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const neverthrow_1 = require("neverthrow");
const uuid_1 = require("../../uuid");
const invalid_id_1 = require("../exceptions/invalid-id");
const value_object_1 = require("./value-object");
class Id extends value_object_1.default {
    constructor(value) {
        super(value);
    }
    static fromString(value) {
        const isBlank = !value.toString().trim();
        if (isBlank)
            return (0, neverthrow_1.err)(invalid_id_1.default.causeIsBlank());
        const isValid = uuid_1.default.validate(value);
        if (!isValid)
            return (0, neverthrow_1.err)(invalid_id_1.default.causeTheFormatIsNotValid(value));
        return (0, neverthrow_1.ok)(new this(value));
    }
}
exports.default = Id;
//# sourceMappingURL=id.js.map