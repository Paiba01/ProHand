import { IQueryHandler } from '@nestjs/cqrs';
import { Result } from 'neverthrow';
import NotFoundScope from '~/scope/domain/exceptions/not-found';
import ScopeDto from '~/scope/dto/response/scope';
import { InvalidId } from '~/shared/domain';
import ScopesFinder from '../../services/finder';
import GetScope from '../get-scope';
declare class GetScopeHandler implements IQueryHandler {
    private readonly scopesFinder;
    constructor(scopesFinder: ScopesFinder);
    execute(query: GetScope): Promise<Result<ScopeDto, InvalidId | NotFoundScope>>;
}
export default GetScopeHandler;
