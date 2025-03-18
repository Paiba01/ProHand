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
exports.DeleteMatchHandler = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const neverthrow_1 = require("neverthrow");
const id_1 = require("../../../domain/models/id");
const matchs_1 = require("../../../domain/services/matchs");
const delete_match_1 = require("../delete-match");
const finder_1 = require("../../services/finder");
let DeleteMatchHandler = exports.DeleteMatchHandler = class DeleteMatchHandler {
    constructor(matchs, matchsFinder) {
        Object.defineProperty(this, "matchs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: matchs
        });
        Object.defineProperty(this, "matchsFinder", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: matchsFinder
        });
    }
    async execute(command) {
        const matchId = id_1.MatchId.fromString(command.id);
        if (matchId.isErr())
            return (0, neverthrow_1.err)(matchId.error);
        const match = await this.matchsFinder.find(matchId.value);
        if (match.isErr())
            return (0, neverthrow_1.err)(match.error);
        return (0, neverthrow_1.ok)(await this.matchs.delete(matchId.value));
    }
};
exports.DeleteMatchHandler = DeleteMatchHandler = __decorate([
    (0, cqrs_1.CommandHandler)(delete_match_1.DeleteMatch),
    __param(0, (0, common_1.Inject)(matchs_1.default)),
    __param(1, (0, common_1.Inject)(finder_1.default)),
    __metadata("design:paramtypes", [Object, Object])
], DeleteMatchHandler);
//# sourceMappingURL=delete-match.js.map