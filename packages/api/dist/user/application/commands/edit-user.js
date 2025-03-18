"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditUser = void 0;
class EditUser {
    constructor(id, name, email, password, isActive, isAdmin) {
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: id
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: name
        });
        Object.defineProperty(this, "email", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: email
        });
        Object.defineProperty(this, "password", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: password
        });
        Object.defineProperty(this, "isActive", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: isActive
        });
        Object.defineProperty(this, "isAdmin", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: isAdmin
        });
    }
    static with({ id, name, email, password, isActive, isAdmin }) {
        return new this(id, name, email, password, isActive, isAdmin);
    }
}
exports.EditUser = EditUser;
//# sourceMappingURL=edit-user.js.map