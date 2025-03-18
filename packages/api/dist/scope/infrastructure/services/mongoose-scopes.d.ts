import { Model } from 'mongoose';
import ScopeId from '~/scope/domain/models/id';
import Scope from '~/scope/domain/models/scope';
import Scopes from '~/scope/domain/services/scopes';
import ScopeSchema from '../models/mongoose/schema';
declare class MongooseScopes implements Scopes {
    private readonly scopes;
    constructor(scopes: Model<ScopeSchema>);
    create(scope: Scope): Promise<void>;
    delete(id: ScopeId): Promise<void>;
    edit(scope: Scope): Promise<void>;
}
export default MongooseScopes;
