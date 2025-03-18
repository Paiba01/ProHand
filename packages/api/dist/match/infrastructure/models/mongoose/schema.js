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
exports.MatchSchema = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let MatchSchema = exports.MatchSchema = class MatchSchema {
    constructor(_id, competitionId, local, visitor, referee1, referee2, day) {
        Object.defineProperty(this, "_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "competitionId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "local", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "visitor", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "referee1", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "referee2", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "day", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._id = _id;
        this.competitionId = competitionId;
        this.local = local;
        this.visitor = visitor;
        this.referee1 = referee1;
        this.referee2 = referee2;
        this.day = day;
    }
    static fromMatch({ id, competitionId, local, visitor, referee1, referee2, day }) {
        return new this(id.value, competitionId.value, local.value, visitor.value, referee1?.value, referee2?.value, day);
    }
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], MatchSchema.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], MatchSchema.prototype, "competitionId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], MatchSchema.prototype, "local", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], MatchSchema.prototype, "visitor", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], MatchSchema.prototype, "referee1", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], MatchSchema.prototype, "referee2", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], MatchSchema.prototype, "day", void 0);
exports.MatchSchema = MatchSchema = __decorate([
    (0, mongoose_1.Schema)({ versionKey: false }),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object, Object])
], MatchSchema);
//# sourceMappingURL=schema.js.map