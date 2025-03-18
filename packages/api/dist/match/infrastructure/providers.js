"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchProviders = void 0;
const users_1 = require("../../user/domain/services/users");
const finder_1 = require("../application/services/finder");
const matchs_1 = require("../domain/services/matchs");
const mongoose_finder_1 = require("./services/mongoose-finder");
const mongoose_matchs_1 = require("./services/mongoose-matchs");
const mongoose_users_1 = require("../../user/infrastructure/services/mongoose-users");
exports.matchProviders = [
    {
        provide: matchs_1.default,
        useClass: mongoose_matchs_1.MongooseMatchs,
    },
    {
        provide: finder_1.default,
        useClass: mongoose_finder_1.MongooseMatchsFinder,
    },
    {
        provide: users_1.default,
        useClass: mongoose_users_1.MongooseUsers,
    },
];
//# sourceMappingURL=providers.js.map