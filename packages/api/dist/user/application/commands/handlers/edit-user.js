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
exports.EditUserHandler = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const neverthrow_1 = require("neverthrow");
const users_1 = require("../../../domain/services/users");
const finder_1 = require("../../services/finder");
const id_1 = require("../../../domain/models/id");
const name_1 = require("../../../domain/models/name");
const email_1 = require("../../../domain/models/email");
const password_1 = require("../../../domain/models/password");
const user_1 = require("../../../domain/models/user");
const edit_user_1 = require("../edit-user");
let EditUserHandler = exports.EditUserHandler = class EditUserHandler {
    constructor(users, usersFinder) {
        Object.defineProperty(this, "users", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: users
        });
        Object.defineProperty(this, "usersFinder", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: usersFinder
        });
    }
    async execute(command) {
        const userId = id_1.default.fromString(command.id);
        if (userId.isErr())
            return (0, neverthrow_1.err)(userId.error);
        const user = await this.usersFinder.find(userId.value);
        if (user.isErr())
            return (0, neverthrow_1.err)(user.error);
        const userName = name_1.default.fromString(command.name);
        if (userName.isErr())
            return (0, neverthrow_1.err)(userName.error);
        const userEmail = email_1.default.fromString(command.email);
        if (userEmail.isErr())
            return (0, neverthrow_1.err)(userEmail.error);
        const userPassword = password_1.default.fromString(command.password);
        if (userPassword.isErr())
            return (0, neverthrow_1.err)(userPassword.error);
        const editedUser = user_1.default.create({
            id: userId.value,
            name: userName.value,
            email: userEmail.value,
            password: userPassword.value,
            isActive: command.isActive,
            isAdmin: command.isAdmin,
        });
        return (0, neverthrow_1.ok)(await this.users.edit(editedUser));
    }
};
exports.EditUserHandler = EditUserHandler = __decorate([
    (0, cqrs_1.CommandHandler)(edit_user_1.EditUser),
    __param(0, (0, common_1.Inject)(users_1.default)),
    __param(1, (0, common_1.Inject)(finder_1.UsersFinder)),
    __metadata("design:paramtypes", [Object, Object])
], EditUserHandler);
//# sourceMappingURL=edit-user.js.map