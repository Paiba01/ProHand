"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DeleteScope {
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
exports.default = DeleteScope;
//# sourceMappingURL=delete-scope.js.map