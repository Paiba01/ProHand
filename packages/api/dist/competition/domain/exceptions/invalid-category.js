"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidCategory = void 0;
const domain_1 = require("../../../shared/domain");
class InvalidCategory extends domain_1.Exception {
    static causeIsBlank() {
        return domain_1.Exception.with('Category of competition cannot be blank');
    }
    static causeInvalidCategory() {
        return domain_1.Exception.with('This is not a valid category!');
    }
}
exports.InvalidCategory = InvalidCategory;
//# sourceMappingURL=invalid-category.js.map