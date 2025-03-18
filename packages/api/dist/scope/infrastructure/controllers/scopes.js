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
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const swagger_1 = require("@nestjs/swagger");
const create_scope_1 = require("../../application/commands/create-scope");
const delete_scope_1 = require("../../application/commands/delete-scope");
const edit_scope_1 = require("../../application/commands/edit-scope");
const get_scope_1 = require("../../application/queries/get-scope");
const get_scopes_1 = require("../../application/queries/get-scopes");
const create_scope_2 = require("../../dto/request/create-scope");
const edit_scope_2 = require("../../dto/request/edit-scope");
const scope_1 = require("../../dto/response/scope");
const error_1 = require("../../../shared/http/error");
let ScopesController = class ScopesController {
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
    async getScopes() {
        return await this.queryBus.execute(get_scopes_1.default.all());
    }
    async getScope(id) {
        const response = await this.queryBus.execute(get_scope_1.default.with({
            id,
        }));
        if (response.isErr())
            throw new common_1.BadRequestException(error_1.default.fromException(response.error));
        return response.value;
    }
    async createScope(dto) {
        const response = await this.commandBus.execute(create_scope_1.default.with({
            description: dto.description,
            id: dto.id,
            name: dto.name,
        }));
        if (response.isErr())
            throw new common_1.BadRequestException(error_1.default.fromException(response.error));
    }
    async editScope(dto, id) {
        const response = await this.commandBus.execute(edit_scope_1.default.with({
            description: dto.description,
            id,
            name: dto.name,
        }));
        if (response.isErr())
            throw new common_1.BadRequestException(error_1.default.fromException(response.error));
    }
    async deleteScope(id) {
        const response = await this.commandBus.execute(delete_scope_1.default.with({ id }));
        if (response.isErr())
            throw new common_1.BadRequestException(error_1.default.fromException(response.error));
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Gets all Scopes' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Scopes',
        type: [scope_1.default],
    }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ScopesController.prototype, "getScopes", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get a Scope' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Scopes',
        type: scope_1.default,
    }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ScopesController.prototype, "getScope", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Creates a Scope' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'Scope created',
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_scope_2.default]),
    __metadata("design:returntype", Promise)
], ScopesController.prototype, "createScope", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Edits a Scope' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Scope edited',
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input' }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [edit_scope_2.default, String]),
    __metadata("design:returntype", Promise)
], ScopesController.prototype, "editScope", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Deletes a Scope' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Scope deleted',
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ScopesController.prototype, "deleteScope", null);
ScopesController = __decorate([
    (0, swagger_1.ApiTags)('Scopes'),
    (0, common_1.Controller)('scopes'),
    __metadata("design:paramtypes", [cqrs_1.CommandBus,
        cqrs_1.QueryBus])
], ScopesController);
exports.default = ScopesController;
//# sourceMappingURL=scopes.js.map