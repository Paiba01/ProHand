import Scope from '~/scope/domain/models/scope';
declare class ScopeSchema {
    readonly _id: string;
    readonly description: string;
    readonly name: string;
    constructor(_id: ScopeSchema['_id'], description: ScopeSchema['description'], name: ScopeSchema['name']);
    static fromScope({ description, id, name }: Scope): ScopeSchema;
}
export default ScopeSchema;
