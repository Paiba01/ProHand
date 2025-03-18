"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMatch = void 0;
class GetMatch {
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
exports.GetMatch = GetMatch;
//# sourceMappingURL=get-match.js.map