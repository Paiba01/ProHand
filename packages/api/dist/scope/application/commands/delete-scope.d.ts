type DeleteScopeType = Readonly<{
    id: string;
}>;
declare class DeleteScope implements DeleteScopeType {
    readonly id: DeleteScopeType['id'];
    private constructor();
    static with({ id }: DeleteScopeType): DeleteScope;
}
export default DeleteScope;
