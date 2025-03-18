"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Competition = void 0;
const cqrs_1 = require("@nestjs/cqrs");
class Competition extends cqrs_1.AggregateRoot {
    constructor(id, name, category, dateFrom, dateTo) {
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
        Object.defineProperty(this, "_category", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_dateFrom", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_dateTo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._id = id;
        this._name = name;
        this._category = category;
        this._dateFrom = dateFrom;
        this._dateTo = dateTo;
    }
    static create({ id, name, category, dateFrom, dateTo, }) {
        return new this(id, name, category, dateFrom, dateTo);
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get category() {
        return this._category;
    }
    get dateFrom() {
        return this._dateFrom;
    }
    get dateTo() {
        return this._dateTo;
    }
}
exports.Competition = Competition;
//# sourceMappingURL=competition.js.map