import { AggregateRoot } from '@nestjs/cqrs';
import ScopeDescription from './description';
import ScopeId from './id';
import ScopeName from './name';
declare class Scope extends AggregateRoot {
    private _id;
    private _description;
    private _name;
    private constructor();
    static create({ description, id, name, }: {
        description: ScopeDescription;
        id: ScopeId;
        name: ScopeName;
    }): Scope;
    get description(): ScopeDescription;
    get id(): ScopeId;
    get name(): ScopeName;
}
export default Scope;
