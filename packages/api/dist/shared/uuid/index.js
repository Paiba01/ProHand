"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const Uuid = {
    generate: () => (0, uuid_1.v4)(),
    validate: (value) => (0, uuid_1.validate)(value) && (0, uuid_1.version)(value) === 4,
};
exports.default = Uuid;
//# sourceMappingURL=index.js.map