type EditScopeType = Readonly<{
    description: string;
    id: string;
    name: string;
}>;
declare class EditScope implements EditScopeType {
    readonly id: EditScopeType['id'];
    readonly description: EditScopeType['description'];
    readonly name: EditScopeType['name'];
    private constructor();
    static with({ description, id, name }: EditScopeType): EditScope;
}
export default EditScope;
