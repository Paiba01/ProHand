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
exports.CompetitionsController = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const swagger_1 = require("@nestjs/swagger");
const error_1 = require("../../../shared/http/error");
const create_competition_1 = require("../../application/commands/create-competition");
const create_competition_2 = require("../../dto/request/create-competition");
const competition_1 = require("../../dto/response/competition");
const get_competitions_1 = require("../../application/queries/get-competitions");
const get_competition_1 = require("../../application/queries/get-competition");
const delete_competition_1 = require("../../application/commands/delete-competition");
const edit_competition_1 = require("../../application/commands/edit-competition");
const edit_competition_2 = require("../../dto/request/edit-competition");
let CompetitionsController = exports.CompetitionsController = class CompetitionsController {
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
    async getCompetitions() {
        return await this.queryBus.execute(get_competitions_1.GetCompetitions.all());
    }
    async getCompetition(id) {
        const response = await this.queryBus.execute(get_competition_1.GetCompetition.with({
            id,
        }));
        if (response.isErr())
            throw new common_1.BadRequestException(error_1.default.fromException(response.error));
        return response.value;
    }
    async createCompetition(dto) {
        const response = await this.commandBus.execute(create_competition_1.CreateCompetition.with({
            id: dto.id,
            name: dto.name,
            category: dto.category,
            teams: dto.teams,
            dateFrom: dto.dateFrom,
            dateTo: dto.dateTo
        }));
        if (response.isErr())
            throw new common_1.BadRequestException(error_1.default.fromException(response.error));
    }
    async deleteCompetition(id) {
        const response = await this.commandBus.execute(delete_competition_1.DeleteCompetition.with({ id }));
        if (response.isErr())
            throw new common_1.BadRequestException(error_1.default.fromException(response.error));
    }
    async editUser(dto, id) {
        const response = await this.commandBus.execute(edit_competition_1.EditCompetition.with({
            id,
            name: dto.name,
            category: dto.category,
            dateFrom: dto.dateFrom,
            dateTo: dto.dateTo
        }));
        if (response.isErr())
            throw new common_1.BadRequestException(error_1.default.fromException(response.error));
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Gets all Competitions' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Competitions',
        type: [competition_1.CompetitionDto],
    }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CompetitionsController.prototype, "getCompetitions", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get a Competition' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Competition',
        type: competition_1.CompetitionDto,
    }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CompetitionsController.prototype, "getCompetition", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Creates a Competition' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'Competition created',
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_competition_2.CreateCompetitionDto]),
    __metadata("design:returntype", Promise)
], CompetitionsController.prototype, "createCompetition", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Deletes a Competition' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Competition deleted',
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CompetitionsController.prototype, "deleteCompetition", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Edits a competition' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Competition edited',
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input' }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [edit_competition_2.EditCompetitionDto, String]),
    __metadata("design:returntype", Promise)
], CompetitionsController.prototype, "editUser", null);
exports.CompetitionsController = CompetitionsController = __decorate([
    (0, swagger_1.ApiTags)('Competitions'),
    (0, common_1.Controller)('competitions'),
    __metadata("design:paramtypes", [cqrs_1.CommandBus,
        cqrs_1.QueryBus])
], CompetitionsController);
//# sourceMappingURL=competitions.js.map