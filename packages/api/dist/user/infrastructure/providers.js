"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProviders = void 0;
const finder_1 = require("../application/services/finder");
const users_1 = require("../domain/services/users");
const mongoose_finder_1 = require("./services/mongoose-finder");
const mongoose_users_1 = require("./services/mongoose-users");
exports.userProviders = [
    {
        provide: users_1.default,
        useClass: mongoose_users_1.MongooseUsers,
    },
    {
        provide: finder_1.UsersFinder,
        useClass: mongoose_finder_1.MongooseUsersFinder,
    },
];
//# sourceMappingURL=providers.js.map