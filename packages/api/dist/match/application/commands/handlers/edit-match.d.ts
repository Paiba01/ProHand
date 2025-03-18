import { ICommandHandler } from '@nestjs/cqrs';
import { Result } from 'neverthrow';
import { InvalidId } from '~/shared/domain';
import Matchs from '~/match/domain/services/matchs';
import MatchsFinder from '../../services/finder';
import { EditMatch } from '../edit-match-date';
import { NotFoundMatch } from '~/match/domain/exceptions/not-found';
import { InvalidTeam } from '~/match/domain/exceptions/invalid-team';
export declare class EditMatchHandler implements ICommandHandler {
    private readonly Matchs;
    private readonly MatchsFinder;
    constructor(Matchs: Matchs, MatchsFinder: MatchsFinder);
    execute(command: EditMatch): Promise<Result<void, InvalidId | InvalidTeam | NotFoundMatch>>;
}
