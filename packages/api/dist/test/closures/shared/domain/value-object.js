"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itIsAValueObject = void 0;
const itIsAValueObject = (value) => {
    it.concurrent('is a value object', () => {
        expect(value).toHaveProperty('value');
    });
};
exports.itIsAValueObject = itIsAValueObject;
//# sourceMappingURL=value-object.js.map