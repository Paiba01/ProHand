"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignateReferees = void 0;
class DesignateReferees {
    constructor(id, referee1, referee2) {
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: id
        });
        Object.defineProperty(this, "referee1", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: referee1
        });
        Object.defineProperty(this, "referee2", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: referee2
        });
    }
    static with({ id, referee1, referee2 }) {
        return new this(id, referee1, referee2);
    }
}
exports.DesignateReferees = DesignateReferees;
//# sourceMappingURL=designate-referees.js.map