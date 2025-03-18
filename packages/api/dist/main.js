"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const GLOBAL_PREFIX = 'api';
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: process.env.NODE_ENV === 'development'
            ? ['debug', 'error', 'log', 'verbose', 'warn']
            : ['log', 'error', 'warn'],
    });
    app.setGlobalPrefix(GLOBAL_PREFIX);
    app.enableCors({
        credentials: true,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        origin: true,
    });
    const options = new swagger_1.DocumentBuilder()
        .addBearerAuth()
        .setTitle('API')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options, {});
    swagger_1.SwaggerModule.setup(GLOBAL_PREFIX, app, document);
    app.useGlobalPipes(new common_1.ValidationPipe());
    const port = process.env.PORT || 3333;
    await app.listen(port);
    common_1.Logger.log(`Listening at: http://localhost:${port}/${GLOBAL_PREFIX}`);
}
bootstrap();
//# sourceMappingURL=main.js.map