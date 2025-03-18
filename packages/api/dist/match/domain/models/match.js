"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cqrs_1 = require("@nestjs/cqrs");
class Match extends cqrs_1.AggregateRoot {
    constructor(_id, _competitionId, _local, _visitor, _referee1, _referee2, _day) {
        super();
        Object.defineProperty(this, "_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _id
        });
        Object.defineProperty(this, "_competitionId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _competitionId
        });
        Object.defineProperty(this, "_local", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _local
        });
        Object.defineProperty(this, "_visitor", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _visitor
        });
        Object.defineProperty(this, "_referee1", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _referee1
        });
        Object.defineProperty(this, "_referee2", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _referee2
        });
        Object.defineProperty(this, "_day", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _day
        });
    }
    static create({ id, competitionId, local, visitor, day, referee1 = null, referee2 = null, }) {
        return new Match(id, competitionId, local, visitor, referee1, referee2, day);
    }
    get id() {
        return this._id;
    }
    get competitionId() {
        return this._competitionId;
    }
    get local() {
        return this._local;
    }
    get visitor() {
        return this._visitor;
    }
    get referee1() {
        return this._referee1;
    }
    get referee2() {
        return this._referee2;
    }
    get day() {
        return this._day;
    }
}
exports.default = Match;
//# sourceMappingURL=match.js.map