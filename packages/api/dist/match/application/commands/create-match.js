"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMatch = void 0;
class CreateMatch {
    constructor(id, local, visitor, day) {
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: id
        });
        Object.defineProperty(this, "local", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: local
        });
        Object.defineProperty(this, "visitor", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: visitor
        });
        Object.defineProperty(this, "day", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: day
        });
    }
    static with({ id, local, visitor, day }) {
        return new this(id, local, visitor, day);
    }
}
exports.CreateMatch = CreateMatch;
//# sourceMappingURL=create-match.js.map