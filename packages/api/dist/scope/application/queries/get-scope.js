"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetScope {
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
exports.default = GetScope;
//# sourceMappingURL=get-scope.js.map