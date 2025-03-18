"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ValueObject {
    constructor(value) {
        Object.defineProperty(this, "value", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: value
        });
    }
    static equals(a, b) {
        return a.constructor.name === b.constructor.name && a.value === b.value;
    }
}
exports.default = ValueObject;
//# sourceMappingURL=value-object.js.map