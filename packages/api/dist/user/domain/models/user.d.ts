import { AggregateRoot } from '@nestjs/cqrs';
import UserId from './id';
import UserName from './name';
import UserEmail from './email';
import UserPassword from './password';
declare class User extends AggregateRoot {
    private _id;
    private _name;
    private _email;
    private _password;
    private _isActive;
    private _isAdmin;
    private constructor();
    static create({ id, name, email, password, isActive, isAdmin, }: {
        id: UserId;
        name: UserName;
        email: UserEmail;
        password: UserPassword;
        isActive: boolean;
        isAdmin: boolean;
    }): User;
    get id(): UserId;
    get name(): UserName;
    get email(): UserEmail;
    get password(): UserPassword;
    get isActive(): boolean;
    get isAdmin(): boolean;
}
export default User;
