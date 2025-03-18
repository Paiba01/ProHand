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
exports.CreateMatchHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const create_match_1 = require("../create-match");
const common_1 = require("@nestjs/common");
const match_1 = require("../../../domain/models/match");
const neverthrow_1 = require("neverthrow");
const id_1 = require("../../../../user/domain/models/id");
const team_1 = require("../../../domain/models/team");
const matchs_1 = require("../../../domain/services/matchs");
let CreateMatchHandler = exports.CreateMatchHandler = class CreateMatchHandler {
    constructor(matchs) {
        Object.defineProperty(this, "matchs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: matchs
        });
    }
    async execute(command) {
        const userId = id_1.default.fromString(command.id);
        if (userId.isErr())
            return (0, neverthrow_1.err)(userId.error);
        const local = team_1.Team.fromString(command.local);
        if (local.isErr())
            return (0, neverthrow_1.err)(local.error);
        const visitor = team_1.Team.fromString(command.visitor);
        if (visitor.isErr())
            return (0, neverthrow_1.err)(visitor.error);
        const match = match_1.default.create({
            id: userId.value,
            local: local.value,
            visitor: visitor.value,
            day: new Date(command.day),
        });
        return (0, neverthrow_1.ok)(await this.matchs.create(match));
    }
};
exports.CreateMatchHandler = CreateMatchHandler = __decorate([
    (0, cqrs_1.CommandHandler)(create_match_1.CreateMatch),
    __param(0, (0, common_1.Inject)(matchs_1.default)),
    __metadata("design:paramtypes", [Object])
], CreateMatchHandler);
//# sourceMappingURL=create-match.js.map