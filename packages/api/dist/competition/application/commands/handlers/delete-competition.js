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
exports.DeleteCompetitionHandler = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const neverthrow_1 = require("neverthrow");
const delete_competition_1 = require("../delete-competition");
const competitions_1 = require("../../../domain/services/competitions");
const finder_1 = require("../../services/finder");
const id_1 = require("../../../domain/models/id");
let DeleteCompetitionHandler = exports.DeleteCompetitionHandler = class DeleteCompetitionHandler {
    constructor(competitions, competitionsFinder) {
        Object.defineProperty(this, "competitions", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: competitions
        });
        Object.defineProperty(this, "competitionsFinder", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: competitionsFinder
        });
    }
    async execute(command) {
        const competitionId = id_1.CompetitionId.fromString(command.id);
        if (competitionId.isErr())
            return (0, neverthrow_1.err)(competitionId.error);
        const competition = await this.competitionsFinder.find(competitionId.value);
        if (competition.isErr())
            return (0, neverthrow_1.err)(competition.error);
        return (0, neverthrow_1.ok)(await this.competitions.delete(competitionId.value));
    }
};
exports.DeleteCompetitionHandler = DeleteCompetitionHandler = __decorate([
    (0, cqrs_1.CommandHandler)(delete_competition_1.DeleteCompetition),
    __param(0, (0, common_1.Inject)(competitions_1.default)),
    __param(1, (0, common_1.Inject)(finder_1.default)),
    __metadata("design:paramtypes", [Object, Object])
], DeleteCompetitionHandler);
//# sourceMappingURL=delete-competition.js.map