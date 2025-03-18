import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateUserDto } from '~/user/dto/request/create-user';
import { UserDto } from '~/user/dto/response/user';
import { EditUserDto } from '~/user/dto/request/edit-user';
export declare class UsersController {
    private readonly commandBus;
    private readonly queryBus;
    constructor(commandBus: CommandBus, queryBus: QueryBus);
    getUsers(): Promise<UserDto[]>;
    getUser(id: string): Promise<UserDto>;
    getUserByEmail(email: string): Promise<UserDto>;
    getUsersByIsActive(): Promise<UserDto[]>;
    createUser(dto: CreateUserDto): Promise<void>;
    editUser(dto: EditUserDto, id: string): Promise<void>;
}
