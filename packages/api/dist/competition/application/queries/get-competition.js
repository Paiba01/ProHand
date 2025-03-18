"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCompetition = void 0;
class GetCompetition {
    constructor(id) {
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: id
        });
    }
    static with({ id }) {
        return new this(id);
    }
}
exports.GetCompetition = GetCompetition;
//# sourceMappingURL=get-competition.js.map