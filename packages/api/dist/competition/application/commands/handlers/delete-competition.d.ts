import { ICommandHandler } from '@nestjs/cqrs';
import { Result } from 'neverthrow';
import { InvalidId } from '~/shared/domain';
import { DeleteCompetition } from '../delete-competition';
import { NotFoundCompetition } from '~/competition/domain/exceptions/not-found';
import Competitions from '~/competition/domain/services/competitions';
import CompetitionsFinder from '../../services/finder';
export declare class DeleteCompetitionHandler implements ICommandHandler {
    private readonly competitions;
    private readonly competitionsFinder;
    constructor(competitions: Competitions, competitionsFinder: CompetitionsFinder);
    execute(command: DeleteCompetition): Promise<Result<void, InvalidId | NotFoundCompetition>>;
}
