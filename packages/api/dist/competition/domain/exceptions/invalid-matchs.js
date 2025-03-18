"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidMatchs = void 0;
class InvalidMatchs extends Error {
    constructor(message) {
        super(message);
    }
    static causeIsEmpty() {
        return new InvalidMatchs('The matchs list cannot be empty');
    }
}
exports.InvalidMatchs = InvalidMatchs;
//# sourceMappingURL=invalid-matchs.js.map