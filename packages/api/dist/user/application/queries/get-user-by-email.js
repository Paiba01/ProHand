"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserByEmail = void 0;
class GetUserByEmail {
    constructor(email) {
        Object.defineProperty(this, "email", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: email
        });
    }
    static with({ email }) {
        return new this(email);
    }
}
exports.GetUserByEmail = GetUserByEmail;
//# sourceMappingURL=get-user-by-email.js.map