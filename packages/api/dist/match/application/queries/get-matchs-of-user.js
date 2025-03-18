"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMatchsOfUser = void 0;
class GetMatchsOfUser {
    constructor(userId) {
        Object.defineProperty(this, "userId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: userId
        });
    }
    static with({ userId }) {
        return new this(userId);
    }
}
exports.GetMatchsOfUser = GetMatchsOfUser;
//# sourceMappingURL=get-matchs-of-user.js.map