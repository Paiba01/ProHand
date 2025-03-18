"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditCompetition = void 0;
class EditCompetition {
    constructor(id, name, category, dateFrom, dateTo) {
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
    static with({ id, name, category, dateFrom, dateTo }) {
        return new this(id, name, category, dateFrom, dateTo);
    }
}
exports.EditCompetition = EditCompetition;
//# sourceMappingURL=edit-competition.js.map