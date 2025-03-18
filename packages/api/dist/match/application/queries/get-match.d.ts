type GetMatchType = Readonly<{
    id: string;
}>;
export declare class GetMatch implements GetMatchType {
    readonly id: GetMatchType['id'];
    private constructor();
    static with({ id }: GetMatchType): GetMatch;
}
export {};
