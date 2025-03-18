import { Strategy } from 'passport-jwt';
export declare class JwtStrategy extends Strategy {
    queryBus: any;
    validate(payload: {
        email: string;
    }): Promise<any>;
}
