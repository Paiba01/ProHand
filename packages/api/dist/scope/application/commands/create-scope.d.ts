type CreateScopeType = Readonly<{
    description: string;
    id: string;
    name: string;
}>;
declare class CreateScope implements CreateScopeType {
    readonly id: CreateScopeType['id'];
    readonly description: CreateScopeType['description'];
    readonly name: CreateScopeType['name'];
    private constructor();
    static with({ description, id, name }: CreateScopeType): CreateScope;
}
export default CreateScope;
