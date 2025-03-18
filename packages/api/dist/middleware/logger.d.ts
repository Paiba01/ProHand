import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
declare class LoggerMiddleware implements NestMiddleware {
    private logger;
    use(request: Request, response: Response, next: NextFunction): void;
}
export default LoggerMiddleware;
