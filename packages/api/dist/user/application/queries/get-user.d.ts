type GetUserType = Readonly<{
    id: string;
}>;
export declare class GetUser implements GetUserType {
    readonly id: GetUserType['id'];
    private constructor();
    static with({ id }: GetUserType): GetUser;
}
export {};
