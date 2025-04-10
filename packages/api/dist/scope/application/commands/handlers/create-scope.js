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
const neverthrow_1 = require("neverthrow");
const description_1 = require("../../../domain/models/description");
const id_1 = require("../../../domain/models/id");
const name_1 = require("../../../domain/models/name");
const scope_1 = require("../../../domain/models/scope");
const scopes_1 = require("../../../domain/services/scopes");
const create_scope_1 = require("../create-scope");
let CreateScopeHandler = class CreateScopeHandler {
    constructor(scopes) {
        Object.defineProperty(this, "scopes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: scopes
        });
    }
    async execute(command) {
        const scopeId = id_1.default.fromString(command.id);
        if (scopeId.isErr())
            return (0, neverthrow_1.err)(scopeId.error);
        const scopeName = name_1.default.fromString(command.name);
        if (scopeName.isErr())
            return (0, neverthrow_1.err)(scopeName.error);
        const scopeDescription = description_1.default.fromString(command.description);
        const scope = scope_1.default.create({
            description: scopeDescription,
            id: scopeId.value,
            name: scopeName.value,
        });
        return (0, neverthrow_1.ok)(await this.scopes.create(scope));
    }
};
CreateScopeHandler = __decorate([
    (0, cqrs_1.CommandHandler)(create_scope_1.default),
    __param(0, (0, common_1.Inject)(scopes_1.default)),
    __metadata("design:paramtypes", [Object])
], CreateScopeHandler);
exports.default = CreateScopeHandler;
//# sourceMappingURL=create-scope.js.map