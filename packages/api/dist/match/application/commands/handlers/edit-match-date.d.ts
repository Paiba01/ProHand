import { ICommandHandler } from '@nestjs/cqrs';
import { Result } from 'neverthrow';
import { InvalidId } from '~/shared/domain';
import Matchs from '~/match/domain/services/matchs';
import { NotFoundMatch } from '~/match/domain/exceptions/not-found';
import { EditMatchDate } from '../edit-match-date';
import { InvalidDate } from '~/match/domain/exceptions/invalid-date';
export declare class EditMatchDateHandler implements ICommandHandler {
    private readonly matchs;
    constructor(matchs: Matchs);
    execute(command: EditMatchDate): Promise<Result<void, InvalidId | InvalidDate | NotFoundMatch>>;
}
