import { IQueryHandler } from '@nestjs/cqrs';
import ScopeDto from '~/scope/dto/response/scope';
import ScopesFinder from '../../services/finder';
declare class GetScopesHandler implements IQueryHandler {
    private readonly scopesFinder;
    constructor(scopesFinder: ScopesFinder);
    execute(): Promise<ScopeDto[]>;
}
export default GetScopesHandler;
