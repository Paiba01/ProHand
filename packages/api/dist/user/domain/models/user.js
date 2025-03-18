"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cqrs_1 = require("@nestjs/cqrs");
class User extends cqrs_1.AggregateRoot {
    constructor(id, name, email, password, isActive, isAdmin) {
        super();
        Object.defineProperty(this, "_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_email", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_password", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_isActive", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_isAdmin", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._id = id;
        this._name = name;
        this._email = email;
        this._password = password;
        this._isActive = isActive;
        this._isAdmin = isAdmin;
    }
    static create({ id, name, email, password, isActive, isAdmin, }) {
        return new this(id, name, email, password, isActive, isAdmin);
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get email() {
        return this._email;
    }
    get password() {
        return this._password;
    }
    get isActive() {
        return this._isActive;
    }
    get isAdmin() {
        return this._isAdmin;
    }
}
exports.default = User;
//# sourceMappingURL=user.js.map