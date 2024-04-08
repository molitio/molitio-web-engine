"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _core = require("@nestjs/core");
const _appmodule = require("./app.module");
const _platformfastify = require("@nestjs/platform-fastify");
async function bootstrap() {
    const app = await _core.NestFactory.create(_appmodule.AppModule, new _platformfastify.FastifyAdapter({
        logger: true
    }));
    await app.listen(4000);
}
bootstrap();

//# sourceMappingURL=main.js.map