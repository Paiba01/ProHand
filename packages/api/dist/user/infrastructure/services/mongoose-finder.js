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
exports.MongooseUsersFinder = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const neverthrow_1 = require("neverthrow");
const not_found_1 = require("../../domain/exceptions/not-found");
const schema_1 = require("../models/mongoose/schema");
let MongooseUsersFinder = exports.MongooseUsersFinder = class MongooseUsersFinder {
    constructor(users) {
        Object.defineProperty(this, "users", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: users
        });
    }
    async find(id) {
        const user = await this.users.findById(id.value).exec();
        if (!user)
            return (0, neverthrow_1.err)(not_found_1.NotFoundUser.withId(id.value));
        return (0, neverthrow_1.ok)(user);
    }
    async getAll() {
        return await this.users.find().exec();
    }
    async findByEmail(email) {
        const user = await this.users.findOne({ email: email.value }).exec();
        if (!user)
            return (0, neverthrow_1.err)(not_found_1.NotFoundUser.withEmail(email.value));
        return (0, neverthrow_1.ok)(user);
    }
    async findByIsActive() {
        return await this.users.find({ isActive: true }).exec();
    }
};
exports.MongooseUsersFinder = MongooseUsersFinder = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schema_1.UserSchema.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MongooseUsersFinder);
//# sourceMappingURL=mongoose-finder.js.map