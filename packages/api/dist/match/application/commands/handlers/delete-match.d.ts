import { ICommandHandler } from '@nestjs/cqrs';
import { Result } from 'neverthrow';
import Matchs from '~/match/domain/services/matchs';
import { InvalidId } from '~/shared/domain';
import { DeleteMatch } from '../delete-match';
import MatchsFinder from '../../services/finder';
import { NotFoundMatch } from '~/match/domain/exceptions/not-found';
export declare class DeleteMatchHandler implements ICommandHandler {
    private readonly matchs;
    private readonly matchsFinder;
    constructor(matchs: Matchs, matchsFinder: MatchsFinder);
    execute(command: DeleteMatch): Promise<Result<void, InvalidId | NotFoundMatch>>;
}
