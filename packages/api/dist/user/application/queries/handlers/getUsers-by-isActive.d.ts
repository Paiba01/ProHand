import { IQueryHandler } from '@nestjs/cqrs';
import { UsersFinder } from '../../services/finder';
import { UserDto } from '~/user/dto/response/user';
export declare class GetUsersByIsActiveHandler implements IQueryHandler {
    private readonly usersFinder;
    constructor(usersFinder: UsersFinder);
    execute(): Promise<UserDto[]>;
}
