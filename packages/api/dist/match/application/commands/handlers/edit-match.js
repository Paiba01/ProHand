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
exports.EditMatchHandler = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const neverthrow_1 = require("neverthrow");
const matchs_1 = require("../../../domain/services/matchs");
const finder_1 = require("../../services/finder");
const edit_match_date_1 = require("../edit-match-date");
const id_1 = require("../../../domain/models/id");
const match_1 = require("../../../domain/models/match");
const team_1 = require("../../../domain/models/team");
const referee_1 = require("../../../domain/models/referee");
const id_2 = require("../../../../competition/domain/models/id");
let EditMatchHandler = exports.EditMatchHandler = class EditMatchHandler {
    constructor(Matchs, MatchsFinder) {
        Object.defineProperty(this, "Matchs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: Matchs
        });
        Object.defineProperty(this, "MatchsFinder", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: MatchsFinder
        });
    }
    async execute(command) {
        const matchId = id_1.MatchId.fromString(command.id);
        if (matchId.isErr())
            return (0, neverthrow_1.err)(matchId.error);
        const competitionId = id_2.CompetitionId.fromString(command.competitionId);
        if (competitionId.isErr())
            return (0, neverthrow_1.err)(competitionId.error);
        const matchResult = await this.MatchsFinder.find(matchId.value);
        if (matchResult.isErr())
            return (0, neverthrow_1.err)(matchResult.error);
        const local = team_1.Team.fromString(command.local);
        if (local.isErr())
            return (0, neverthrow_1.err)(local.error);
        const visitor = team_1.Team.fromString(command.visitor);
        if (visitor.isErr())
            return (0, neverthrow_1.err)(visitor.error);
        const referee1Result = command.referee1
            ? referee_1.default.fromString(command.referee1)
            : (0, neverthrow_1.ok)(null);
        const referee2Result = command.referee2
            ? referee_1.default.fromString(command.referee2)
            : (0, neverthrow_1.ok)(null);
        if (referee1Result.isErr())
            return (0, neverthrow_1.err)(referee1Result.error);
        if (referee2Result.isErr())
            return (0, neverthrow_1.err)(referee2Result.error);
        const editedMatch = match_1.default.create({
            id: matchId.value,
            competitionId: competitionId.value,
            local: local.value,
            visitor: visitor.value,
            referee1: referee1Result.value,
            referee2: referee2Result.value,
            day: new Date(command.day),
        });
        return (0, neverthrow_1.ok)(await this.Matchs.edit(editedMatch));
    }
};
exports.EditMatchHandler = EditMatchHandler = __decorate([
    (0, cqrs_1.CommandHandler)(edit_match_date_1.EditMatch),
    __param(0, (0, common_1.Inject)(matchs_1.default)),
    __param(1, (0, common_1.Inject)(finder_1.default)),
    __metadata("design:paramtypes", [Object, Object])
], EditMatchHandler);
//# sourceMappingURL=edit-match.js.map