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
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const neverthrow_1 = require("neverthrow");
const not_found_1 = require("../../domain/exceptions/not-found");
const schema_1 = require("../models/mongoose/schema");
let MongooseScopesFinder = class MongooseScopesFinder {
    constructor(scopes) {
        Object.defineProperty(this, "scopes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: scopes
        });
    }
    async find(id) {
        const scope = await this.scopes.findById(id.value).exec();
        if (!scope)
            return (0, neverthrow_1.err)(not_found_1.default.withId(id.value));
        return (0, neverthrow_1.ok)(scope);
    }
    async getAll() {
        return await this.scopes.find().exec();
    }
};
MongooseScopesFinder = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schema_1.default.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MongooseScopesFinder);
exports.default = MongooseScopesFinder;
//# sourceMappingURL=mongoose-finder.js.map