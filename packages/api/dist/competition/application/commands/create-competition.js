"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCompetition = void 0;
class CreateCompetition {
    constructor(id, name, category, teams, dateFrom, dateTo) {
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
        Object.defineProperty(this, "category", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: category
        });
        Object.defineProperty(this, "teams", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: teams
        });
        Object.defineProperty(this, "dateFrom", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: dateFrom
        });
        Object.defineProperty(this, "dateTo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: dateTo
        });
    }
    static with({ id, name, category, teams, dateFrom, dateTo }) {
        return new this(id, name, category, teams, dateFrom, dateTo);
    }
}
exports.CreateCompetition = CreateCompetition;
//# sourceMappingURL=create-competition.js.map