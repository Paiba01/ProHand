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
exports.MatchsController = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const swagger_1 = require("@nestjs/swagger");
const error_1 = require("../../../shared/http/error");
const delete_match_1 = require("../../application/commands/delete-match");
const match_1 = require("../../dto/response/match");
const get_matchs_1 = require("../../application/queries/get-matchs");
const get_match_1 = require("../../application/queries/get-match");
const edit_match_1 = require("../../dto/request/edit-match");
const edit_match_date_1 = require("../../application/commands/edit-match-date");
const designate_referees_1 = require("../../dto/request/designate-referees");
const designate_referees_2 = require("../../application/commands/designate-referees");
const get_matchs_by_competition_1 = require("../../application/queries/get-matchs-by-competition");
const get_matchs_of_user_1 = require("../../application/queries/get-matchs-of-user");
let MatchsController = exports.MatchsController = class MatchsController {
    constructor(commandBus, queryBus) {
        Object.defineProperty(this, "commandBus", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: commandBus
        });
        Object.defineProperty(this, "queryBus", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: queryBus
        });
    }
    async getMatchs() {
        return await this.queryBus.execute(get_matchs_1.GetMatchs.all());
    }
    async getMatchsByCompetitionId(competitionId) {
        const response = await this.queryBus.execute(get_matchs_by_competition_1.GetMatchsByCompetition.with({
            competitionId,
        }));
        if (response.isErr())
            throw new common_1.BadRequestException(error_1.default.fromException(response.error));
        return response.value;
    }
    async getMatch(id) {
        const response = await this.queryBus.execute(get_match_1.GetMatch.with({
            id,
        }));
        if (response.isErr())
            throw new common_1.BadRequestException(error_1.default.fromException(response.error));
        return response.value;
    }
    async getMatchsOfUser(userId) {
        const response = await this.queryBus.execute(get_matchs_of_user_1.GetMatchsOfUser.with({
            userId,
        }));
        if (response.isErr())
            throw new common_1.BadRequestException(error_1.default.fromException(response.error));
        return response.value;
    }
    async editMatchDate(dto, id) {
        const response = await this.commandBus.execute(edit_match_date_1.EditMatchDate.with({
            id,
            day: dto.day,
        }));
        if (response.isErr())
            throw new common_1.BadRequestException(error_1.default.fromException(response.error));
    }
    async designateReferees(dto, id) {
        const response = await this.commandBus.execute(designate_referees_2.DesignateReferees.with({
            id,
            referee1: dto.referee1,
            referee2: dto.referee2,
        }));
        if (response.isErr())
            throw new common_1.BadRequestException(error_1.default.fromException(response.error));
    }
    async deleteMatch(id) {
        const response = await this.commandBus.execute(delete_match_1.DeleteMatch.with({ id }));
        if (response.isErr())
            throw new common_1.BadRequestException(error_1.default.fromException(response.error));
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Gets all Matchs' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Matchs',
        type: [match_1.MatchDto],
    }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MatchsController.prototype, "getMatchs", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get Matches by Competition ID' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Matches for the specified competition',
        type: [match_1.MatchDto],
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input or not found' }),
    (0, common_1.Get)('competition/:competitionId'),
    __param(0, (0, common_1.Param)('competitionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MatchsController.prototype, "getMatchsByCompetitionId", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get a Match' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Match',
        type: match_1.MatchDto,
    }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MatchsController.prototype, "getMatch", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get Matches by user ID' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Matches for the specified user',
        type: [match_1.MatchDto],
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input or not found' }),
    (0, common_1.Get)('users/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MatchsController.prototype, "getMatchsOfUser", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Edits a match date' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Match date edited',
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input' }),
    (0, common_1.Put)(':id/date'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [edit_match_1.EditMatchDateDto, String]),
    __metadata("design:returntype", Promise)
], MatchsController.prototype, "editMatchDate", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Designate referees' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Referees designated',
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input' }),
    (0, common_1.Put)(':id/designate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [designate_referees_1.DesignateRefereesDto, String]),
    __metadata("design:returntype", Promise)
], MatchsController.prototype, "designateReferees", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Deletes a Match' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Match deleted',
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MatchsController.prototype, "deleteMatch", null);
exports.MatchsController = MatchsController = __decorate([
    (0, swagger_1.ApiTags)('Matchs'),
    (0, common_1.Controller)('matchs'),
    __metadata("design:paramtypes", [cqrs_1.CommandBus,
        cqrs_1.QueryBus])
], MatchsController);
//# sourceMappingURL=matchs.js.map