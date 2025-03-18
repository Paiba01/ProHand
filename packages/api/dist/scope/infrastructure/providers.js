"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const finder_1 = require("../application/services/finder");
const scopes_1 = require("../domain/services/scopes");
const mongoose_finder_1 = require("./services/mongoose-finder");
const mongoose_scopes_1 = require("./services/mongoose-scopes");
const scopeProviders = [
    {
        provide: scopes_1.default,
        useClass: mongoose_scopes_1.default,
    },
    {
        provide: finder_1.default,
        useClass: mongoose_finder_1.default,
    },
];
exports.default = scopeProviders;
//# sourceMappingURL=providers.js.map