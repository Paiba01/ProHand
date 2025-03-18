"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateScope {
    constructor(id, description, name) {
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: id
        });
        Object.defineProperty(this, "description", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: description
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: name
        });
    }
    static with({ description, id, name }) {
        return new this(id, description, name);
    }
}
exports.default = CreateScope;
//# sourceMappingURL=create-scope.js.map