type DeleteMatchType = Readonly<{
    id: string;
}>;
export declare class DeleteMatch implements DeleteMatchType {
    readonly id: DeleteMatchType['id'];
    private constructor();
    static with({ id }: DeleteMatchType): DeleteMatch;
}
export {};
