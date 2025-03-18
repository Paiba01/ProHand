import User from '~/user/domain/models/user';
export declare class UserSchema {
    readonly _id: string;
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly isActive: boolean;
    readonly isAdmin: boolean;
    constructor(_id: UserSchema['_id'], name: UserSchema['name'], email: UserSchema['email'], password: UserSchema['password'], isActive: UserSchema['isActive'], isAdmin: UserSchema['isAdmin']);
    static fromUser({ id, name, email, password, isActive, isAdmin }: User): UserSchema;
}
