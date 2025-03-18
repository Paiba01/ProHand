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
exports.GetUserByEmailHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const get_user_by_email_1 = require("../get-user-by-email");
const finder_1 = require("../../services/finder");
const common_1 = require("@nestjs/common");
const neverthrow_1 = require("neverthrow");
const email_1 = require("../../../domain/models/email");
let GetUserByEmailHandler = exports.GetUserByEmailHandler = class GetUserByEmailHandler {
    constructor(usersFinder) {
        Object.defineProperty(this, "usersFinder", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: usersFinder
        });
    }
    async execute(query) {
        const email = email_1.default.fromString(query.email);
        if (email.isErr())
            return (0, neverthrow_1.err)(email.error);
        return await this.usersFinder.findByEmail(email.value);
    }
};
exports.GetUserByEmailHandler = GetUserByEmailHandler = __decorate([
    (0, cqrs_1.QueryHandler)(get_user_by_email_1.GetUserByEmail),
    __param(0, (0, common_1.Inject)(finder_1.UsersFinder)),
    __metadata("design:paramtypes", [Object])
], GetUserByEmailHandler);
//# sourceMappingURL=get-user-by-email.js.map