"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMatchsByCompetition = void 0;
class GetMatchsByCompetition {
    constructor(competitionId) {
        Object.defineProperty(this, "competitionId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: competitionId
        });
    }
    static with({ competitionId }) {
        return new this(competitionId);
    }
}
exports.GetMatchsByCompetition = GetMatchsByCompetition;
//# sourceMappingURL=get-matchs-by-competition.js.map