type GetMatchsOfUserType = Readonly<{
    userId: string;
}>;
export declare class GetMatchsOfUser implements GetMatchsOfUserType {
    readonly userId: GetMatchsOfUserType['userId'];
    private constructor();
    static with({ userId }: GetMatchsOfUserType): GetMatchsOfUser;
}
export {};
