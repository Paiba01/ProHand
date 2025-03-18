import { ConfigService } from '@nestjs/config';
import { QueryBus } from '@nestjs/cqrs';
import { Strategy } from 'passport-jwt';
declare const JwtStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtStrategy extends JwtStrategy_base {
    private queryBus;
    constructor(configService: ConfigService, queryBus: QueryBus);
    validate(payload: {
        email: string;
    }): Promise<any>;
}
export {};
