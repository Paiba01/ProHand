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
exports.MongooseCompetitionsFinder = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const neverthrow_1 = require("neverthrow");
const schema_1 = require("../models/mongoose/schema");
const not_found_1 = require("../../domain/exceptions/not-found");
let MongooseCompetitionsFinder = exports.MongooseCompetitionsFinder = class MongooseCompetitionsFinder {
    constructor(competitions) {
        Object.defineProperty(this, "competitions", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: competitions
        });
    }
    async find(id) {
        const competition = await this.competitions.findById(id.value).exec();
        if (!competition)
            return (0, neverthrow_1.err)(not_found_1.NotFoundCompetition.withId(id.value));
        const competitionDto = {
            ...competition.toObject(),
            dateFrom: competition.dateFrom instanceof Date ? competition.dateFrom.toISOString() : competition.dateFrom,
            dateTo: competition.dateTo instanceof Date ? competition.dateTo.toISOString() : competition.dateTo,
        };
        return (0, neverthrow_1.ok)(competitionDto);
    }
    async getAll() {
        const competitions = await this.competitions.find().exec();
        return competitions.map(competition => ({
            ...competition.toObject(),
            dateFrom: competition.dateFrom instanceof Date ? competition.dateFrom.toISOString() : competition.dateFrom,
            dateTo: competition.dateTo instanceof Date ? competition.dateTo.toISOString() : competition.dateTo,
        }));
    }
};
exports.MongooseCompetitionsFinder = MongooseCompetitionsFinder = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schema_1.CompetitionSchema.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MongooseCompetitionsFinder);
//# sourceMappingURL=mongoose-finder.js.map