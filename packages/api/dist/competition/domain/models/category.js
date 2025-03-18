"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const neverthrow_1 = require("neverthrow");
const domain_1 = require("../../../shared/domain");
const invalid_category_1 = require("../exceptions/invalid-category");
class Category extends domain_1.ValueObject {
    constructor(value) {
        super(value);
    }
    static fromString(value) {
        const trimmedValue = value.trim().toUpperCase();
        const categories = ['ALEVIN', 'INFANTIL', 'CADETE', 'JUVENIL', 'SENIOR', 'VETERANO'];
        if (trimmedValue === '') {
            return (0, neverthrow_1.err)(invalid_category_1.InvalidCategory.causeIsBlank());
        }
        if (!categories.includes(trimmedValue)) {
            return (0, neverthrow_1.err)(invalid_category_1.InvalidCategory.causeInvalidCategory());
        }
        return (0, neverthrow_1.ok)(new this(trimmedValue));
    }
}
exports.Category = Category;
//# sourceMappingURL=category.js.map