import { IQueryHandler } from '@nestjs/cqrs';
import { Result } from 'neverthrow';
import { InvalidId } from '~/shared/domain';
import { GetCompetition } from '../get-competition';
import CompetitionsFinder from '../../services/finder';
import { CompetitionDto } from '~/competition/dto/response/competition';
import { NotFoundCompetition } from '~/competition/domain/exceptions/not-found';
export declare class GetCompetitionHandler implements IQueryHandler {
    private readonly competitionsFinder;
    constructor(competitionsFinder: CompetitionsFinder);
    execute(query: GetCompetition): Promise<Result<CompetitionDto, InvalidId | NotFoundCompetition>>;
}
