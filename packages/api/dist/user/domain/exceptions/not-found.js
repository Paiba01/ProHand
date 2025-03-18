"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundUser = void 0;
const domain_1 = require("../../../shared/domain");
class NotFoundUser extends domain_1.Exception {
    static withId(id) {
        return domain_1.Exception.with(`User with id ${id} cannot be found`);
    }
    static withEmail(email) {
        return domain_1.Exception.with(`User with email ${email} cannot be found`);
    }
    static withIsActive(isActive) {
        return domain_1.Exception.with(`Cannot found active users`);
    }
}
exports.NotFoundUser = NotFoundUser;
//# sourceMappingURL=not-found.js.map