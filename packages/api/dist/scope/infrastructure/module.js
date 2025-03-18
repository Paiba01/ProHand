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
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const mongoose_1 = require("@nestjs/mongoose");
const create_scope_1 = require("../application/commands/handlers/create-scope");
const delete_scope_1 = require("../application/commands/handlers/delete-scope");
const edit_scope_1 = require("../application/commands/handlers/edit-scope");
const get_scope_1 = require("../application/queries/handlers/get-scope");
const get_scopes_1 = require("../application/queries/handlers/get-scopes");
const scopes_1 = require("./controllers/scopes");
const schema_1 = require("./models/mongoose/schema");
const providers_1 = require("./providers");
const controllers = [scopes_1.default];
const commandHandlers = [
    create_scope_1.default,
    delete_scope_1.default,
    edit_scope_1.default,
];
const queryHandlers = [get_scope_1.default, get_scopes_1.default];
let ScopeModule = class ScopeModule {
    constructor() { }
};
ScopeModule = __decorate([
    (0, common_1.Module)({
        controllers,
        imports: [
            cqrs_1.CqrsModule,
            mongoose_1.MongooseModule.forFeature([
                {
                    name: schema_1.default.name,
                    schema: mongoose_1.SchemaFactory.createForClass(schema_1.default),
                },
            ]),
        ],
        providers: [...commandHandlers, ...queryHandlers, ...providers_1.default],
    }),
    __metadata("design:paramtypes", [])
], ScopeModule);
exports.default = ScopeModule;
//# sourceMappingURL=module.js.map