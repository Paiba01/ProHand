import { Model } from 'mongoose';
import { Result } from 'neverthrow';
import ScopesFinder from '~/scope/application/services/finder';
import NotFoundScope from '~/scope/domain/exceptions/not-found';
import ScopeId from '~/scope/domain/models/id';
import ScopeDto from '~/scope/dto/response/scope';
import ScopeSchema from '../models/mongoose/schema';
declare class MongooseScopesFinder implements ScopesFinder {
    private readonly scopes;
    constructor(scopes: Model<ScopeSchema>);
    find(id: ScopeId): Promise<Result<ScopeDto, NotFoundScope>>;
    getAll(): Promise<ScopeDto[]>;
}
export default MongooseScopesFinder;
