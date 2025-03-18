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
exports.GetCompetitionsHandler = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const get_competitions_1 = require("../get-competitions");
const finder_1 = require("../../services/finder");
let GetCompetitionsHandler = exports.GetCompetitionsHandler = class GetCompetitionsHandler {
    constructor(competitionsFinder) {
        Object.defineProperty(this, "competitionsFinder", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: competitionsFinder
        });
    }
    async execute() {
        return await this.competitionsFinder.getAll();
    }
};
exports.GetCompetitionsHandler = GetCompetitionsHandler = __decorate([
    (0, cqrs_1.QueryHandler)(get_competitions_1.GetCompetitions),
    __param(0, (0, common_1.Inject)(finder_1.default)),
    __metadata("design:paramtypes", [Object])
], GetCompetitionsHandler);
//# sourceMappingURL=get-competitions.js.map