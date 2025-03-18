type GetUserByEmailType = Readonly<{
    email: string;
}>;
export declare class GetUserByEmail implements GetUserByEmailType {
    readonly email: GetUserByEmailType['email'];
    private constructor();
    static with({ email }: GetUserByEmailType): GetUserByEmail;
}
export {};
