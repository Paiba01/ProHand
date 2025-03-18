type CreateUserType = {
    id: string;
    name: string;
    email: string;
    password: string;
};
export declare class CreateUser implements CreateUserType {
    readonly id: CreateUserType['id'];
    readonly name: CreateUserType['name'];
    readonly email: CreateUserType['email'];
    readonly password: CreateUserType['password'];
    constructor(id: CreateUserType['id'], name: CreateUserType['name'], email: CreateUserType['email'], password: CreateUserType['password']);
    static with({ id, name, email, password }: CreateUserType): CreateUser;
}
export {};
