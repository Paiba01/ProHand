"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cqrs_1 = require("@nestjs/cqrs");
class Scope extends cqrs_1.AggregateRoot {
    constructor(description, id, name) {
        super();
        Object.defineProperty(this, "_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_description", {
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
        this._description = description;
        this._id = id;
        this._name = name;
    }
    static create({ description, id, name, }) {
        return new this(description, id, name);
    }
    get description() {
        return this._description;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
}
exports.default = Scope;
//# sourceMappingURL=scope.js.map