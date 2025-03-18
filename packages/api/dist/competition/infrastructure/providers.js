"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.competitionProviders = void 0;
const matchs_1 = require("../../match/domain/services/matchs");
const competitions_1 = require("../domain/services/competitions");
const mongoose_competitions_1 = require("./services/mongoose-competitions");
const mongoose_matchs_1 = require("../../match/infrastructure/services/mongoose-matchs");
const finder_1 = require("../application/services/finder");
const mongoose_finder_1 = require("./services/mongoose-finder");
exports.competitionProviders = [
    {
        provide: competitions_1.default,
        useClass: mongoose_competitions_1.MongooseCompetitions,
    },
    {
        provide: matchs_1.default,
        useClass: mongoose_matchs_1.MongooseMatchs,
    },
    {
        provide: finder_1.default,
        useClass: mongoose_finder_1.MongooseCompetitionsFinder,
    },
];
//# sourceMappingURL=providers.js.map