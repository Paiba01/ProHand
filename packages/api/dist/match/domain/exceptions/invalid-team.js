"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidTeam = void 0;
const domain_1 = require("../../../shared/domain");
class InvalidTeam extends domain_1.Exception {
    static causeIsBlank() {
        return domain_1.Exception.with('Team name cannot be blank');
    }
}
exports.InvalidTeam = InvalidTeam;
//# sourceMappingURL=invalid-team.js.map