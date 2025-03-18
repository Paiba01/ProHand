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
exports.EditMatchDateHandler = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const neverthrow_1 = require("neverthrow");
const matchs_1 = require("../../../domain/services/matchs");
const id_1 = require("../../../domain/models/id");
const edit_match_date_1 = require("../edit-match-date");
const invalid_date_1 = require("../../../domain/exceptions/invalid-date");
let EditMatchDateHandler = exports.EditMatchDateHandler = class EditMatchDateHandler {
    constructor(matchs) {
        Object.defineProperty(this, "matchs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: matchs
        });
    }
    async execute(command) {
        const matchId = id_1.MatchId.fromString(command.id);
        if (matchId.isErr())
            return (0, neverthrow_1.err)(matchId.error);
        const matchDay = new Date(command.day);
        if (matchDay < new Date())
            return (0, neverthrow_1.err)(invalid_date_1.InvalidDate.causeIsPast());
        const match = await this.matchs.find(matchId.value);
        if (match.isErr())
            return (0, neverthrow_1.err)(match.error);
        return (0, neverthrow_1.ok)(await this.matchs.editDate(matchId.value, matchDay));
    }
};
exports.EditMatchDateHandler = EditMatchDateHandler = __decorate([
    (0, cqrs_1.CommandHandler)(edit_match_date_1.EditMatchDate),
    __param(0, (0, common_1.Inject)(matchs_1.default)),
    __metadata("design:paramtypes", [Object])
], EditMatchDateHandler);
//# sourceMappingURL=edit-match-date.js.map