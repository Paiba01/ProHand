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
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const mongoose_1 = require("@nestjs/mongoose");
const create_user_1 = require("../application/commands/handlers/create-user");
const get_user_1 = require("../application/queries/handlers/get-user");
const users_1 = require("./controllers/users");
const schema_1 = require("./models/mongoose/schema");
const providers_1 = require("./providers");
const get_users_1 = require("../application/queries/handlers/get-users");
const edit_user_1 = require("../application/commands/handlers/edit-user");
const get_user_by_email_1 = require("../application/queries/handlers/get-user-by-email");
const getUsers_by_isActive_1 = require("../application/queries/handlers/getUsers-by-isActive");
const controllers = [users_1.UsersController];
const commandHandlers = [
    create_user_1.CreateUserHandler,
    edit_user_1.EditUserHandler,
];
const queryHandlers = [get_user_1.GetUserHandler, get_users_1.GetUsersHandler, get_user_by_email_1.GetUserByEmailHandler, getUsers_by_isActive_1.GetUsersByIsActiveHandler];
let UserModule = exports.UserModule = class UserModule {
    constructor() { }
};
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        controllers,
        imports: [
            cqrs_1.CqrsModule,
            mongoose_1.MongooseModule.forFeature([
                {
                    name: schema_1.UserSchema.name,
                    schema: mongoose_1.SchemaFactory.createForClass(schema_1.UserSchema),
                },
            ]),
        ],
        providers: [...commandHandlers, ...queryHandlers, ...providers_1.userProviders],
    }),
    __metadata("design:paramtypes", [])
], UserModule);
//# sourceMappingURL=module.js.map