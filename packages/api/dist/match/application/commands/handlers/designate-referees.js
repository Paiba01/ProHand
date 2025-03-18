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
exports.DesignateRefereesHandler = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const neverthrow_1 = require("neverthrow");
const matchs_1 = require("../../../domain/services/matchs");
const id_1 = require("../../../domain/models/id");
const designate_referees_1 = require("../designate-referees");
const id_2 = require("../../../../user/domain/models/id");
const users_1 = require("../../../../user/domain/services/users");
let DesignateRefereesHandler = exports.DesignateRefereesHandler = class DesignateRefereesHandler {
    constructor(matchs, users) {
        Object.defineProperty(this, "matchs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: matchs
        });
        Object.defineProperty(this, "users", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: users
        });
    }
    async execute(command) {
        const matchId = id_1.MatchId.fromString(command.id);
        if (matchId.isErr())
            return (0, neverthrow_1.err)(matchId.error);
        const refereeId1 = id_2.default.fromString(command.referee1);
        if (refereeId1.isErr())
            return (0, neverthrow_1.err)(refereeId1.error);
        const refereeId2 = id_2.default.fromString(command.referee2);
        if (refereeId2.isErr())
            return (0, neverthrow_1.err)(refereeId2.error);
        const match = await this.matchs.find(matchId.value);
        if (match.isErr())
            return (0, neverthrow_1.err)(match.error);
        const referee1 = await this.users.find(refereeId1.value);
        if (referee1.isErr())
            return (0, neverthrow_1.err)(referee1.error);
        const referee2 = await this.users.find(refereeId2.value);
        if (referee2.isErr())
            return (0, neverthrow_1.err)(referee2.error);
        return (0, neverthrow_1.ok)(await this.matchs.designateReferees(matchId.value, refereeId1.value, refereeId2.value));
    }
};
exports.DesignateRefereesHandler = DesignateRefereesHandler = __decorate([
    (0, cqrs_1.CommandHandler)(designate_referees_1.DesignateReferees),
    __param(0, (0, common_1.Inject)(matchs_1.default)),
    __param(1, (0, common_1.Inject)(users_1.default)),
    __metadata("design:paramtypes", [Object, Object])
], DesignateRefereesHandler);
//# sourceMappingURL=designate-referees.js.map