"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
const neverthrow_1 = require("neverthrow");
const domain_1 = require("../../../../shared/domain");
const invalid_team_1 = require("../exceptions/invalid-team");
class Team extends domain_1.ValueObject {
    constructor(value) {
        super(value);
    }
    static fromString(value) {
        const isBlank = !value.trim();
        if (isBlank)
            return (0, neverthrow_1.err)(invalid_team_1.InvalidTeam.causeIsBlank());
        return (0, neverthrow_1.ok)(new this(value));
    }
}
exports.Team = Team;
//# sourceMappingURL=team.js.map