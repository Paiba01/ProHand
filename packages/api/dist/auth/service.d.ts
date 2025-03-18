import { JwtService } from '@nestjs/jwt';
import { QueryBus } from '@nestjs/cqrs';
export declare class AuthService {
    private queryBus;
    private jwtService;
    private readonly logger;
    constructor(queryBus: QueryBus, jwtService: JwtService);
    validateUser(email: string): Promise<boolean>;
    generateJwtToken(user: any): string;
}
