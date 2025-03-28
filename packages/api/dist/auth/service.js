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
var AuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const cqrs_1 = require("@nestjs/cqrs");
const get_user_by_email_1 = require("../user/application/queries/get-user-by-email");
let AuthService = exports.AuthService = AuthService_1 = class AuthService {
    constructor(queryBus, jwtService) {
        Object.defineProperty(this, "queryBus", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: queryBus
        });
        Object.defineProperty(this, "jwtService", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: jwtService
        });
        Object.defineProperty(this, "logger", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new common_1.Logger(AuthService_1.name)
        });
    }
    async validateUser(email) {
        try {
            const user = await this.queryBus.execute(get_user_by_email_1.GetUserByEmail.with({ email }));
            return !!user;
        }
        catch (e) {
            const errorMessage = e instanceof Error ? e.message : 'Unknown error';
            this.logger.error(`Access error with email ${email}: ${errorMessage}`);
            return false;
        }
    }
    generateJwtToken(user) {
        const payload = {
            email: user.email,
            sub: user.id || user._id,
            name: user.name || user.displayName
        };
        return this.jwtService.sign(payload);
    }
};
exports.AuthService = AuthService = AuthService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cqrs_1.QueryBus,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=service.js.map