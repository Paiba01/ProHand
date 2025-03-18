"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundCompetition = void 0;
const domain_1 = require("../../../shared/domain");
class NotFoundCompetition extends domain_1.Exception {
    static withId(id) {
        return domain_1.Exception.with(`Competition with id ${id} cannot be found`);
    }
}
exports.NotFoundCompetition = NotFoundCompetition;
//# sourceMappingURL=not-found.js.map