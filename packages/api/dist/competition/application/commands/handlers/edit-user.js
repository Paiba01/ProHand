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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditCompetitionHandler = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const neverthrow_1 = require("neverthrow");
const competitions_1 = require("../../../domain/services/competitions");
const finder_1 = require("../../services/finder");
const edit_competition_1 = require("../edit-competition");
const id_1 = require("../../../domain/models/id");
const name_1 = require("../../../domain/models/name");
const category_1 = require("../../../domain/models/category");
let EditCompetitionHandler = exports.EditCompetitionHandler = class EditCompetitionHandler {
    constructor(Competitions, CompetitionsFinder) {
        Object.defineProperty(this, "Competitions", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: Competitions
        });
        Object.defineProperty(this, "CompetitionsFinder", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: CompetitionsFinder
        });
    }
    async execute(command) {
        const competitionId = id_1.CompetitionId.fromString(command.id);
        if (competitionId.isErr())
            return (0, neverthrow_1.err)(competitionId.error);
        const competition = await this.CompetitionsFinder.find(competitionId.value);
        if (competition.isErr())
            return (0, neverthrow_1.err)(competition.error);
        const competitionName = name_1.Name.fromString(command.name);
        if (competitionName.isErr())
            return (0, neverthrow_1.err)(competitionName.error);
        const competitionEmail = category_1.Category.fromString(command.category);
        if (competitionEmail.isErr())
            return (0, neverthrow_1.err)(competitionEmail.error);
        return (0, neverthrow_1.ok)(await this.Competitions.edit(editedCompetition));
    }
};
exports.EditCompetitionHandler = EditCompetitionHandler = __decorate([
    (0, cqrs_1.CommandHandler)(edit_competition_1.EditCompetition),
    __param(0, (0, common_1.Inject)(competitions_1.default)),
    __param(1, (0, common_1.Inject)(finder_1.default)),
    __metadata("design:paramtypes", [Object, Object])
], EditCompetitionHandler);
//# sourceMappingURL=edit-user.js.map