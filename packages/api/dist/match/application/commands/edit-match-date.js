"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditMatchDate = void 0;
class EditMatchDate {
    constructor(id, day) {
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: id
        });
        Object.defineProperty(this, "day", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: day
        });
    }
    static with({ id, day }) {
        return new this(id, day);
    }
}
exports.EditMatchDate = EditMatchDate;
//# sourceMappingURL=edit-match-date.js.map