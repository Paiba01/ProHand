type GetScopeType = Readonly<{
    id: string;
}>;
declare class GetScope implements GetScopeType {
    readonly id: GetScopeType['id'];
    private constructor();
    static with({ id }: GetScopeType): GetScope;
}
export default GetScope;
