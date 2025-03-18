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
exports.GetUsersHandler = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const finder_1 = require("../../services/finder");
const get_users_1 = require("../get-users");
let GetUsersHandler = exports.GetUsersHandler = class GetUsersHandler {
    constructor(usersFinder) {
        Object.defineProperty(this, "usersFinder", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: usersFinder
        });
    }
    async execute() {
        return await this.usersFinder.getAll();
    }
};
exports.GetUsersHandler = GetUsersHandler = __decorate([
    (0, cqrs_1.QueryHandler)(get_users_1.GetUsers),
    __param(0, (0, common_1.Inject)(finder_1.UsersFinder)),
    __metadata("design:paramtypes", [Object])
], GetUsersHandler);
//# sourceMappingURL=get-users.js.map