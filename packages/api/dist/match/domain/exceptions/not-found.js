"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundMatch = void 0;
const domain_1 = require("../../../shared/domain");
class NotFoundMatch extends domain_1.Exception {
    static withId(id) {
        return domain_1.Exception.with(`Match with id ${id} cannot be found`);
    }
    static withCompetitionId(id) {
        return domain_1.Exception.with(`Match with competitionId ${id} cannot be found`);
    }
    static withUserId(id) {
        return domain_1.Exception.with(`Match with competitionId ${id} cannot be found`);
    }
}
exports.NotFoundMatch = NotFoundMatch;
//# sourceMappingURL=not-found.js.map