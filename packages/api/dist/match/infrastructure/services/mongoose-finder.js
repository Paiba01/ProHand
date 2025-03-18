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
exports.MongooseMatchsFinder = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const neverthrow_1 = require("neverthrow");
const schema_1 = require("../models/mongoose/schema");
const not_found_1 = require("../../domain/exceptions/not-found");
let MongooseMatchsFinder = exports.MongooseMatchsFinder = class MongooseMatchsFinder {
    constructor(matchs) {
        Object.defineProperty(this, "matchs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: matchs
        });
    }
    async find(id) {
        const match = await this.matchs.findById(id.value).exec();
        if (!match)
            return (0, neverthrow_1.err)(not_found_1.NotFoundMatch.withId(id.value));
        const matchDto = {
            ...match.toObject(),
            day: match.day instanceof Date ? match.day.toISOString() : match.day,
        };
        return (0, neverthrow_1.ok)(matchDto);
    }
    async getAll() {
        const matches = await this.matchs.find().exec();
        return matches.map((match) => ({
            ...match.toObject(),
            day: match.day instanceof Date ? match.day.toISOString() : match.day,
        }));
    }
    async findByCompetitionId(competitionId) {
        const matches = await this.matchs
            .find({ competitionId: competitionId.value })
            .exec();
        if (matches.length === 0) {
            return (0, neverthrow_1.err)(not_found_1.NotFoundMatch.withCompetitionId(competitionId.value));
        }
        const matchDtos = matches.map((match) => ({
            ...match.toObject(),
            day: match.day instanceof Date ? match.day.toISOString() : match.day,
        }));
        return (0, neverthrow_1.ok)(matchDtos);
    }
    async findByUserId(userId) {
        const matches = await this.matchs
            .find({
            $or: [{ referee1: userId.value }, { referee2: userId.value }],
        })
            .exec();
        if (matches.length === 0) {
            return (0, neverthrow_1.err)(not_found_1.NotFoundMatch.withUserId(userId.value));
        }
        const matchDtos = matches.map((match) => ({
            ...match.toObject(),
            day: match.day instanceof Date ? match.day.toISOString() : match.day,
        }));
        return (0, neverthrow_1.ok)(matchDtos);
    }
};
exports.MongooseMatchsFinder = MongooseMatchsFinder = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schema_1.MatchSchema.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MongooseMatchsFinder);
//# sourceMappingURL=mongoose-finder.js.map