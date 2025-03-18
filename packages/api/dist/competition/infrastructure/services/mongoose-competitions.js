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
exports.MongooseCompetitions = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const schema_1 = require("../models/mongoose/schema");
let MongooseCompetitions = exports.MongooseCompetitions = class MongooseCompetitions {
    constructor(competitions) {
        Object.defineProperty(this, "competitions", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: competitions
        });
    }
    async create(competition) {
        await this.competitions.create(schema_1.CompetitionSchema.fromCompetition(competition));
    }
    async delete(id) {
        await this.competitions.deleteOne({ _id: id.value }).lean().exec();
    }
    async edit(competition) {
        await this.competitions
            .updateOne({ _id: competition.id.value }, { name: competition.name.value, email: competition.category.value, dateFrom: competition.dateFrom, dateTo: competition.dateTo })
            .lean()
            .exec();
    }
};
exports.MongooseCompetitions = MongooseCompetitions = __decorate([
    __param(0, (0, mongoose_1.InjectModel)(schema_1.CompetitionSchema.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MongooseCompetitions);
//# sourceMappingURL=mongoose-competitions.js.map