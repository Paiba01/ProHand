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
exports.CompetitionModule = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const mongoose_1 = require("@nestjs/mongoose");
const providers_1 = require("./providers");
const competitions_1 = require("./controllers/competitions");
const create_competition_1 = require("../application/commands/handlers/create-competition");
const schema_1 = require("./models/mongoose/schema");
const get_competition_1 = require("../application/queries/handlers/get-competition");
const get_competitions_1 = require("../application/queries/handlers/get-competitions");
const delete_competition_1 = require("../application/commands/handlers/delete-competition");
const edit_competition_1 = require("../application/commands/handlers/edit-competition");
const controllers = [competitions_1.CompetitionsController];
const commandHandlers = [
    create_competition_1.CreateCompetitionHandler,
    delete_competition_1.DeleteCompetitionHandler,
    edit_competition_1.EditCompetitionHandler,
];
const queryHandlers = [get_competition_1.GetCompetitionHandler, get_competitions_1.GetCompetitionsHandler];
let CompetitionModule = exports.CompetitionModule = class CompetitionModule {
    constructor() { }
};
exports.CompetitionModule = CompetitionModule = __decorate([
    (0, common_1.Module)({
        controllers,
        imports: [
            cqrs_1.CqrsModule,
            mongoose_1.MongooseModule.forFeature([
                {
                    name: schema_1.CompetitionSchema.name,
                    schema: mongoose_1.SchemaFactory.createForClass(schema_1.CompetitionSchema),
                }
            ]),
        ],
        providers: [...commandHandlers, ...queryHandlers, ...providers_1.competitionProviders],
    }),
    __metadata("design:paramtypes", [])
], CompetitionModule);
//# sourceMappingURL=module.js.map