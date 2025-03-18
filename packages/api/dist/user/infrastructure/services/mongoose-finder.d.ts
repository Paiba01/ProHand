import { Model } from 'mongoose';
import { Result } from 'neverthrow';
import { UsersFinder } from '~/user/application/services/finder';
import { NotFoundUser } from '~/user/domain/exceptions/not-found';
import UserId from '~/user/domain/models/id';
import { UserDto } from '~/user/dto/response/user';
import { UserSchema } from '../models/mongoose/schema';
import UserEmail from '~/user/domain/models/email';
export declare class MongooseUsersFinder implements UsersFinder {
    private readonly users;
    constructor(users: Model<UserSchema>);
    find(id: UserId): Promise<Result<UserDto, NotFoundUser>>;
    getAll(): Promise<UserDto[]>;
    findByEmail(email: UserEmail): Promise<Result<UserDto, NotFoundUser>>;
    findByIsActive(): Promise<UserDto[]>;
}
