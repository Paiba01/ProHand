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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCompetitionHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const common_1 = require("@nestjs/common");
const neverthrow_1 = require("neverthrow");
const create_competition_1 = require("../create-competition");
const competitions_1 = require("../../../domain/services/competitions");
const id_1 = require("../../../domain/models/id");
const name_1 = require("../../../domain/models/name");
const category_1 = require("../../../domain/models/category");
const competition_1 = require("../../../domain/models/competition");
let CreateCompetitionHandler = exports.CreateCompetitionHandler = class CreateCompetitionHandler {
    constructor(competitions, matchs) {
        Object.defineProperty(this, "competitions", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: competitions
        });
        Object.defineProperty(this, "matchs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: matchs
        });
    }
    async execute(command) {
        const competitionId = id_1.CompetitionId.fromString(command.id);
        if (competitionId.isErr())
            return (0, neverthrow_1.err)(competitionId.error);
        const name = name_1.Name.fromString(command.name);
        if (name.isErr())
            return (0, neverthrow_1.err)(name.error);
        const category = category_1.Category.fromString(command.category);
        if (category.isErr())
            return (0, neverthrow_1.err)(category.error);
        for (let i = 0; i < command.teams.length; i++) {
            for (let j = i + 1; j < command.teams.length; j++) {
            }
        }
        const competition = competition_1.Competition.create({
            id: competitionId.value,
            name: name.value,
            category: category.value,
            dateFrom: new Date(command.dateFrom),
            dateTo: new Date(command.dateTo),
        });
        return (0, neverthrow_1.ok)(await this.competitions.create(competition));
    }
    getRandomWeekendDate(start, end) {
        const startTime = start.getTime();
        const endTime = end.getTime();
        let randomDate;
        do {
            const randomTime = startTime + Math.random() * (endTime - startTime);
            randomDate = new Date(randomTime);
        } while (randomDate.getDay() !== 0 && randomDate.getDay() !== 6 && randomDate.getDay() !== 5);
        return randomDate;
    }
};
exports.CreateCompetitionHandler = CreateCompetitionHandler = __decorate([
    (0, cqrs_1.CommandHandler)(create_competition_1.CreateCompetition),
    __param(0, (0, common_1.Inject)(competitions_1.default)),
    __param(1, (0, common_1.Inject)(Matchs)),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof Matchs !== "undefined" && Matchs) === "function" ? _a : Object])
], CreateCompetitionHandler);
//# sourceMappingURL=create-competition.js.map