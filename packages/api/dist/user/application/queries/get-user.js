"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUser = void 0;
class GetUser {
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
exports.GetUser = GetUser;
//# sourceMappingURL=get-user.js.map