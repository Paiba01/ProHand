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
exports.GetCompetitionHandler = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const neverthrow_1 = require("neverthrow");
const get_competition_1 = require("../get-competition");
const finder_1 = require("../../services/finder");
const id_1 = require("../../../domain/models/id");
let GetCompetitionHandler = exports.GetCompetitionHandler = class GetCompetitionHandler {
    constructor(competitionsFinder) {
        Object.defineProperty(this, "competitionsFinder", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: competitionsFinder
        });
    }
    async execute(query) {
        const competitionId = id_1.CompetitionId.fromString(query.id);
        if (competitionId.isErr())
            return (0, neverthrow_1.err)(competitionId.error);
        return await this.competitionsFinder.find(competitionId.value);
    }
};
exports.GetCompetitionHandler = GetCompetitionHandler = __decorate([
    (0, cqrs_1.QueryHandler)(get_competition_1.GetCompetition),
    __param(0, (0, common_1.Inject)(finder_1.default)),
    __metadata("design:paramtypes", [Object])
], GetCompetitionHandler);
//# sourceMappingURL=get-competition.js.map