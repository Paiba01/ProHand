"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchModule = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const mongoose_1 = require("@nestjs/mongoose");
const matchs_1 = require("./controllers/matchs");
const schema_1 = require("./models/mongoose/schema");
const providers_1 = require("./providers");
const delete_match_1 = require("../application/commands/handlers/delete-match");
const get_match_1 = require("../application/queries/handlers/get-match");
const get_matchs_1 = require("../application/queries/handlers/get-matchs");
const edit_match_date_1 = require("../application/commands/handlers/edit-match-date");
const designate_referees_1 = require("../application/commands/handlers/designate-referees");
const schema_2 = require("../../user/infrastructure/models/mongoose/schema");
const get_matchs_by_competition_1 = require("../application/queries/handlers/get-matchs-by-competition");
const get_matchs_of_user_1 = require("../application/queries/handlers/get-matchs-of-user");
const controllers = [matchs_1.MatchsController];
const commandHandlers = [
    delete_match_1.DeleteMatchHandler,
    edit_match_date_1.EditMatchDateHandler,
    designate_referees_1.DesignateRefereesHandler,
];
const queryHandlers = [
    get_match_1.GetMatchHandler,
    get_matchs_1.GetMatchsHandler,
    get_matchs_by_competition_1.GetMatchsByCompetitionHandler,
    get_matchs_of_user_1.GetMatchsOfUserHandler,
];
let MatchModule = exports.MatchModule = class MatchModule {
    constructor() { }
};
exports.MatchModule = MatchModule = __decorate([
    (0, common_1.Module)({
        controllers,
        imports: [
            cqrs_1.CqrsModule,
            mongoose_1.MongooseModule.forFeature([
                {
                    name: schema_1.MatchSchema.name,
                    schema: mongoose_1.SchemaFactory.createForClass(schema_1.MatchSchema),
                },
                {
                    name: schema_2.UserSchema.name,
                    schema: mongoose_1.SchemaFactory.createForClass(schema_2.UserSchema),
                },
            ]),
        ],
        providers: [...commandHandlers, ...queryHandlers, ...providers_1.matchProviders],
    }),
    __metadata("design:paramtypes", [])
], MatchModule);
//# sourceMappingURL=module.js.map