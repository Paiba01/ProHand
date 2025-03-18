import { ICommandHandler } from '@nestjs/cqrs';
import { Result } from 'neverthrow';
import { InvalidId } from '~/shared/domain';
import InvalidScopeName from '../../../domain/exceptions/invalid-name';
import Scopes from '../../../domain/services/scopes';
import CreateScope from '../create-scope';
declare class CreateScopeHandler implements ICommandHandler {
    private readonly scopes;
    constructor(scopes: Scopes);
    execute(command: CreateScope): Promise<Result<void, InvalidId | InvalidScopeName>>;
}
export default CreateScopeHandler;
