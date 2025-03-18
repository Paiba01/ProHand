import { Model } from 'mongoose';
import User from '~/user/domain/models/user';
import Users from '~/user/domain/services/users';
import { UserSchema } from '../models/mongoose/schema';
import UserId from '~/user/domain/models/id';
import { Result } from 'neverthrow';
import { NotFoundUser } from '~/user/domain/exceptions/not-found';
export declare class MongooseUsers implements Users {
    private readonly users;
    constructor(users: Model<UserSchema>);
    find(id: UserId): Promise<Result<void, NotFoundUser>>;
    create(user: User): Promise<void>;
    edit(user: User): Promise<void>;
}
