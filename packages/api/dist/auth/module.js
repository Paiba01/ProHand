"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const cqrs_1 = require("@nestjs/cqrs");
const controller_1 = require("./controller");
const strategy_1 = require("./jwt/strategy");
const service_1 = require("./service");
let AuthModule = exports.AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        controllers: [controller_1.AuthController],
        exports: [service_1.AuthService],
        imports: [
            cqrs_1.CqrsModule,
            registerAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: () => ({
                    secret: 'secret',
                    signOptions: { expiresIn: '1d' },
                }),
            }),
        ],
        providers: [service_1.AuthService, strategy_1.JwtStrategy],
    })
], AuthModule);
function registerAsync(arg0) {
    throw new Error('Function not implemented.');
}
//# sourceMappingURL=module.js.map