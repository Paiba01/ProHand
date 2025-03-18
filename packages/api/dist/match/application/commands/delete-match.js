"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteMatch = void 0;
class DeleteMatch {
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
exports.DeleteMatch = DeleteMatch;
//# sourceMappingURL=delete-match.js.map