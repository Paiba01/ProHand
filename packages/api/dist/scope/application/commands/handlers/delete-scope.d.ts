import { ICommandHandler } from '@nestjs/cqrs';
import { Result } from 'neverthrow';
import NotFoundScope from '~/scope/domain/exceptions/not-found';
import { InvalidId } from '~/shared/domain';
import Scopes from '../../../domain/services/scopes';
import ScopesFinder from '../../services/finder';
import DeleteScope from '../delete-scope';
declare class DeleteScopeHandler implements ICommandHandler {
    private readonly scopes;
    private readonly scopesFinder;
    constructor(scopes: Scopes, scopesFinder: ScopesFinder);
    execute(command: DeleteScope): Promise<Result<void, InvalidId | NotFoundScope>>;
}
export default DeleteScopeHandler;
