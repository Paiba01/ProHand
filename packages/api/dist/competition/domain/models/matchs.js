"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Matchs = void 0;
const neverthrow_1 = require("neverthrow");
const domain_1 = require("../../../shared/domain");
const invalid_matchs_1 = require("../exceptions/invalid-matchs");
class Matchs extends domain_1.ValueObject {
    constructor(value) {
        super(value);
    }
    static fromArray(value) {
        if (value.length === 0) {
            return (0, neverthrow_1.err)(invalid_matchs_1.InvalidMatchs.causeIsEmpty());
        }
        return (0, neverthrow_1.ok)(new this(value));
    }
    get matches() {
        return this.value;
    }
    get count() {
        return this.value.length;
    }
}
exports.Matchs = Matchs;
//# sourceMappingURL=matchs.js.map