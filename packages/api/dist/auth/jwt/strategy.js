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
exports.JwtStrategy = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const cqrs_1 = require("@nestjs/cqrs");
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
const get_user_by_email_1 = require("../../user/application/queries/get-user-by-email");
let JwtStrategy = exports.JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor(configService, queryBus) {
        super({
            ignoreExpiration: false,
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: configService.get('jwt.secret'),
        });
        Object.defineProperty(this, "queryBus", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: queryBus
        });
    }
    async validate(payload) {
        const user = await this.queryBus.execute(get_user_by_email_1.GetUserByEmail.with({ email: payload.email }));
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        return user;
    }
};
exports.JwtStrategy = JwtStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService, cqrs_1.QueryBus])
], JwtStrategy);
//# sourceMappingURL=strategy.js.map