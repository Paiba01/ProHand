"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const domain_1 = require("../../../shared/domain");
class NotFoundScope extends domain_1.Exception {
    static withId(id) {
        return domain_1.Exception.with(`Scope with id ${id} cannot be found`);
    }
}
exports.default = NotFoundScope;
//# sourceMappingURL=not-found.js.map