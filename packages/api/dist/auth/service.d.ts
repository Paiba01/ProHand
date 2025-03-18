import { QueryBus } from '@nestjs/cqrs';
export declare class AuthService {
    private queryBus;
    private readonly logger;
    constructor(queryBus: QueryBus);
    validateUser(email: string): Promise<boolean>;
}
