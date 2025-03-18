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
exports.MongooseUsers = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const schema_1 = require("../models/mongoose/schema");
const neverthrow_1 = require("neverthrow");
const not_found_1 = require("../../domain/exceptions/not-found");
let MongooseUsers = exports.MongooseUsers = class MongooseUsers {
    constructor(users) {
        Object.defineProperty(this, "users", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: users
        });
    }
    async find(id) {
        const match = await this.users.findById(id.value).exec();
        if (!match)
            return (0, neverthrow_1.err)(not_found_1.NotFoundUser.withId(id.value));
        return (0, neverthrow_1.ok)(undefined);
    }
    async create(user) {
        await this.users.create(schema_1.UserSchema.fromUser(user));
    }
    async edit(user) {
        await this.users
            .updateOne({ _id: user.id.value }, { name: user.name.value, email: user.email.value, password: user.password.value, isActive: user.isActive })
            .lean()
            .exec();
    }
};
exports.MongooseUsers = MongooseUsers = __decorate([
    __param(0, (0, mongoose_1.InjectModel)(schema_1.UserSchema.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MongooseUsers);
//# sourceMappingURL=mongoose-users.js.map