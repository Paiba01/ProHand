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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompetitionSchema = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let CompetitionSchema = exports.CompetitionSchema = class CompetitionSchema {
    constructor(_id, name, category, dateFrom, dateTo) {
        Object.defineProperty(this, "_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "category", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "dateFrom", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "dateTo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._id = _id;
        this.name = name;
        this.category = category;
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
    }
    static fromCompetition({ id, name, category, dateFrom, dateTo }) {
        return new this(id.value, name.value, category.value, dateFrom, dateTo);
    }
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CompetitionSchema.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CompetitionSchema.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CompetitionSchema.prototype, "category", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], CompetitionSchema.prototype, "dateFrom", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], CompetitionSchema.prototype, "dateTo", void 0);
exports.CompetitionSchema = CompetitionSchema = __decorate([
    (0, mongoose_1.Schema)({ versionKey: false }),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object])
], CompetitionSchema);
//# sourceMappingURL=schema.js.map