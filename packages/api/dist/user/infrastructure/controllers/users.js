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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const swagger_1 = require("@nestjs/swagger");
const create_user_1 = require("../../application/commands/create-user");
const create_user_2 = require("../../dto/request/create-user");
const error_1 = require("../../../shared/http/error");
const user_1 = require("../../dto/response/user");
const get_user_1 = require("../../application/queries/get-user");
const get_users_1 = require("../../application/queries/get-users");
const edit_user_1 = require("../../dto/request/edit-user");
const edit_user_2 = require("../../application/commands/edit-user");
const get_user_by_email_1 = require("../../application/queries/get-user-by-email");
const getUsers_by_isActive_1 = require("../../application/queries/getUsers-by-isActive");
let UsersController = exports.UsersController = class UsersController {
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
    async getUsers() {
        return await this.queryBus.execute(get_users_1.GetUsers.all());
    }
    async getUser(id) {
        const response = await this.queryBus.execute(get_user_1.GetUser.with({
            id,
        }));
        if (response.isErr())
            throw new common_1.BadRequestException(error_1.default.fromException(response.error));
        return response.value;
    }
    async getUserByEmail(email) {
        const response = await this.queryBus.execute(get_user_by_email_1.GetUserByEmail.with({
            email,
        }));
        if (response.isErr())
            throw new common_1.BadRequestException(error_1.default.fromException(response.error));
        return response.value;
    }
    async getUsersByIsActive() {
        return await this.queryBus.execute(getUsers_by_isActive_1.GetUsersByIsActive.all());
    }
    async createUser(dto) {
        const response = await this.commandBus.execute(create_user_1.CreateUser.with({
            id: dto.id,
            name: dto.name,
            email: dto.email,
            password: dto.password,
        }));
        if (response.isErr())
            throw new common_1.BadRequestException(error_1.default.fromException(response.error));
    }
    async editUser(dto, id) {
        const response = await this.commandBus.execute(edit_user_2.EditUser.with({
            id,
            name: dto.name,
            email: dto.email,
            password: dto.password,
            isActive: dto.isActive,
            isAdmin: dto.isAdmin,
        }));
        if (response.isErr())
            throw new common_1.BadRequestException(error_1.default.fromException(response.error));
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Gets all Users' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Users',
        type: [user_1.UserDto],
    }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUsers", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get a User' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Users',
        type: user_1.UserDto,
    }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUser", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get a User by email' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Users/',
        type: user_1.UserDto,
    }),
    (0, common_1.Get)('searchEmail/:email'),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUserByEmail", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all active users' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Active Users',
        type: [user_1.UserDto],
    }),
    (0, common_1.Get)('search/active'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUsersByIsActive", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Creates an User' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'User created',
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_2.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createUser", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Edits an User' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'User edited',
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input' }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [edit_user_1.EditUserDto, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "editUser", null);
exports.UsersController = UsersController = __decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [cqrs_1.CommandBus,
        cqrs_1.QueryBus])
], UsersController);
//# sourceMappingURL=users.js.map