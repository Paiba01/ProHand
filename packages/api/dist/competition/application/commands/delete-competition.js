"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCompetition = void 0;
class DeleteCompetition {
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
exports.DeleteCompetition = DeleteCompetition;
//# sourceMappingURL=delete-competition.js.map