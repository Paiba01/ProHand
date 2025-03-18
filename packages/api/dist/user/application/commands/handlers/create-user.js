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
exports.CreateUserHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const create_user_1 = require("../create-user");
const neverthrow_1 = require("neverthrow");
const id_1 = require("../../../domain/models/id");
const name_1 = require("../../../domain/models/name");
const email_1 = require("../../../domain/models/email");
const password_1 = require("../../../domain/models/password");
const user_1 = require("../../../domain/models/user");
const common_1 = require("@nestjs/common");
const users_1 = require("../../../domain/services/users");
let CreateUserHandler = exports.CreateUserHandler = class CreateUserHandler {
    constructor(users) {
        Object.defineProperty(this, "users", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: users
        });
    }
    async execute(command) {
        const userId = id_1.default.fromString(command.id);
        if (userId.isErr())
            return (0, neverthrow_1.err)(userId.error);
        const userName = name_1.default.fromString(command.name);
        if (userName.isErr())
            return (0, neverthrow_1.err)(userName.error);
        const userEmail = email_1.default.fromString(command.email);
        if (userEmail.isErr())
            return (0, neverthrow_1.err)(userEmail.error);
        const userPassword = password_1.default.fromString(command.password);
        if (userPassword.isErr())
            return (0, neverthrow_1.err)(userPassword.error);
        const user = user_1.default.create({
            id: userId.value,
            name: userName.value,
            email: userEmail.value,
            password: userPassword.value,
            isActive: false,
            isAdmin: false
        });
        return (0, neverthrow_1.ok)(await this.users.create(user));
    }
};
exports.CreateUserHandler = CreateUserHandler = __decorate([
    (0, cqrs_1.CommandHandler)(create_user_1.CreateUser),
    __param(0, (0, common_1.Inject)(users_1.default)),
    __metadata("design:paramtypes", [Object])
], CreateUserHandler);
//# sourceMappingURL=create-user.js.map