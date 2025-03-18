import { ICommandHandler } from '@nestjs/cqrs';
import { Result } from 'neverthrow';
import InvalidScopeName from '~/scope/domain/exceptions/invalid-name';
import NotFoundScope from '~/scope/domain/exceptions/not-found';
import { InvalidId } from '~/shared/domain';
import Scopes from '../../../domain/services/scopes';
import ScopesFinder from '../../services/finder';
import EditScope from '../edit-scope';
declare class EditScopeHandler implements ICommandHandler {
    private readonly scopes;
    private readonly scopesFinder;
    constructor(scopes: Scopes, scopesFinder: ScopesFinder);
    execute(command: EditScope): Promise<Result<void, InvalidId | InvalidScopeName | NotFoundScope>>;
}
export default EditScopeHandler;
