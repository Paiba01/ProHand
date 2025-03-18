"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Match = void 0;
const neverthrow_1 = require("neverthrow");
const domain_1 = require("../../../../shared/domain");
const id_1 = require("./id");
const team_1 = require("./team");
const referee_1 = require("./referee");
class Match extends domain_1.ValueObject {
    constructor(value) {
        super(value);
    }
    static fromPrimitives(value) {
        const uuid = id_1.MatchId.fromString(value.id);
        if (uuid.isErr())
            return (0, neverthrow_1.err)(uuid.error);
        const local = team_1.Team.fromString(value.local);
        if (local.isErr())
            return (0, neverthrow_1.err)(local.error);
        const visitor = team_1.Team.fromString(value.visitor);
        if (visitor.isErr())
            return (0, neverthrow_1.err)(visitor.error);
        const referee1 = referee_1.default.fromString(value.referee1);
        if (referee1.isErr())
            return (0, neverthrow_1.err)(referee1.error);
        const referee2 = referee_1.default.fromString(value.referee2);
        if (referee2.isErr())
            return (0, neverthrow_1.err)(referee2.error);
        return (0, neverthrow_1.ok)(new this(value));
    }
}
exports.Match = Match;
//# sourceMappingURL=match.js.map