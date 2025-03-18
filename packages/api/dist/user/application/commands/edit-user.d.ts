type EditUserType = Readonly<{
    id: string;
    name: string;
    email: string;
    password: string;
    isActive: boolean;
    isAdmin: boolean;
}>;
export declare class EditUser implements EditUserType {
    readonly id: EditUserType['id'];
    readonly name: EditUserType['name'];
    readonly email: EditUserType['email'];
    readonly password: EditUserType['password'];
    readonly isActive: EditUserType['isActive'];
    readonly isAdmin: EditUserType['isAdmin'];
    private constructor();
    static with({ id, name, email, password, isActive, isAdmin }: EditUserType): EditUser;
}
export {};
