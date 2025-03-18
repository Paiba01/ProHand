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
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const schema_1 = require("../models/mongoose/schema");
let MongooseScopes = class MongooseScopes {
    constructor(scopes) {
        Object.defineProperty(this, "scopes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: scopes
        });
    }
    async create(scope) {
        await this.scopes.create(schema_1.default.fromScope(scope));
    }
    async delete(id) {
        await this.scopes.deleteOne({ _id: id.value }).lean().exec();
    }
    async edit(scope) {
        await this.scopes
            .updateOne({ _id: scope.id.value }, { description: scope.description.value, name: scope.name.value })
            .lean()
            .exec();
    }
};
MongooseScopes = __decorate([
    __param(0, (0, mongoose_1.InjectModel)(schema_1.default.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MongooseScopes);
exports.default = MongooseScopes;
//# sourceMappingURL=mongoose-scopes.js.map